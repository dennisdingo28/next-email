import connectDb from "@/lib/connectDb";
import user from "@/schemas/User";
import { SignUpValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { MongoServerError } from 'mongodb';
import * as z from "zod";


export async function POST(req: NextRequest){
    try{
        const data = await req.json();
        console.log(data);
        
        if(!data || Object.keys(data).length===0)
            return NextResponse.json("The payload was empty. Please try again later.",{status:400});
        
        SignUpValidator.parse(data);        
        
        //create the account
        await connectDb(process.env.MONGO_URI!);
        
        const newUser = await user.create(data);
        console.log(newUser);

        return NextResponse.json({msg:"Account was successfully created !",ok:true},{status:200});

        
    }catch(err){
        console.log(err);
        
        if(err instanceof z.ZodError)
            return NextResponse.json({msg:"Invalid payload format. Please try again later.",ok:false},{status:400});
        
        if(err instanceof MongoServerError){
            if(err.code===11000)
            {
                if(err.keyValue.email){
                    return NextResponse.json({msg:`Email "${err.keyValue.email}" already exists.`,ok:false},{status:400});
                }else if(err.keyValue.name){
                    return NextResponse.json({msg:`Name "${err.keyValue.name}" already exists.`,ok:false},{status:400});
                }
            }
            return NextResponse.json({msg:"Something went wrong please try again later.",ok:false},{status:400});

        }
    }
}