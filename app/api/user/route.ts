import connectDb from "@/lib/connectDb";
import user from "@/schemas/User";
import { SignUpValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { MongoAPIError, MongoServerError } from 'mongodb';
import * as z from "zod";


export async function POST(req: NextRequest){
    try{
        const data = await req.json();
        console.log(data);
        
        if(!data || Object.keys(data).length===0)
            return new NextResponse("The payload was empty. Please try again later.",{status:400});
        
        SignUpValidator.parse(data);        
        
        //create the account
        await connectDb(process.env.MONGO_URI!);
        
        const newUser = await user.create(data);
        console.log(newUser);

        return NextResponse.json({msg:"Account was successfully created !"},{status:200});

        
    }catch(err: unknown){
        console.log(err);
        
        if(err instanceof z.ZodError)
            return new NextResponse("Invalid payload format. Please try again later.",{status:400});
            
            
            if((err as MongoServerError).code===11000)
            {
                if((err as MongoServerError).keyValue.email){
                    return new NextResponse(`Email "${(err as MongoServerError).keyValue.email}" already exists.`,{status:400});
                }else if((err as MongoServerError).keyValue.name){

                    
                    return new NextResponse(`Name "${(err as MongoServerError).keyValue.name}" already exists.`,{status:400});
                }
            }
            return new NextResponse("Something went wrong please try again later.",{status:400});

    }
}