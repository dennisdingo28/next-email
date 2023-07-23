import connectDb from "@/lib/connectDb";
import user from "@/schemas/User";
import { SignUpValidator } from "@/validators";
import { NextRequest, NextResponse } from "next/server";
import { MongoServerError } from 'mongodb';
import * as z from "zod";
import generateApiKey from "@/lib/generateApiKey";


export async function POST(req: NextRequest){
    try{
        const data = await req.json();
        //validation
        if(!data || Object.keys(data).length===0)
            return new NextResponse("The payload was empty. Please try again later.",{status:400});
        
        SignUpValidator.parse(data);        
        //create the account
        await connectDb(process.env.MONGO_URI!);
        
        const usernameExists = await user.findOne({name:data.name});
        if(usernameExists)
            throw new Error(`An account with username ${usernameExists.name} already exists !`);

        const existingUser = await user.findOne({email:data.email});
        if(existingUser)
            throw new Error(`An account with email ${existingUser.email} already exists !`);
        
        const apiKey = generateApiKey();
        const newUser = await user.create({...data,apiKey:String(apiKey)});

        return NextResponse.json({msg:"Account was successfully created !"},{status:200});

        
    }catch(err: unknown){
        
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
            return new NextResponse((err as Error).message,{status:400});

    }
}
