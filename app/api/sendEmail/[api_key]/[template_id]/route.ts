import user from "@/schemas/User";
import { NextRequest, NextResponse } from "next/server";
import jwt, {JsonWebTokenError, JwtPayload} from "jsonwebtoken";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";

export async function POST(req: NextRequest,{params}:{params:{api_key: string, template_id: string}}){
    try{
        const payload = await req.json();
        const apiKey = params.api_key;
        const templateId = params.template_id;

        if(!payload || Object.keys(payload).length===0)
            throw new Error('No payload was received. Please try again later.');
        if(!apiKey || apiKey.trim()==='')
            throw new Error('No api key was provided. Please try again later.');
        if(!templateId || templateId.trim()==='')
            throw new Error('No template id was provided. Please try again later.');

        console.log(payload,apiKey,templateId);
        
        const decodedInfo = jwt.verify(payload.access_token,process.env.JWT_ENCRYPTION!);
        const authorizedUser = await user.findOne({name:(decodedInfo as JwtPayload).name ,email:(decodedInfo as JwtPayload).email,apiKey});
        
        if(!authorizedUser)
            throw new Error('Cannot find any user with the provided credentials. Please try again later.');

        console.log(authorizedUser);

        //nodemailer
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.NODEMAILER_EMAIL,
                pass:process.env.NODEMAILER_PASSWORD,
            }
        })
        const templatePath = path.join(__dirname,'/next-email/templates')
        const templateSource = fs.readFileSync(templatePath,'utf-8');
        const template = handlebars.compile(templateSource);
        const mailOptions = {
            from:authorizedUser.email,
            to:payload.to,
            subject:payload.title,
            html:template({name:payload.to})
        }
        await transporter.sendMail(mailOptions);

        return NextResponse.json({msg:'Email was successfully sent.'});
    }catch(err){
        if(err instanceof JsonWebTokenError)
        {
            if(err.message==='invalid signature')
                return new NextResponse(`Invalid decrypion token`,{status:401});
        }
        return new NextResponse(`${(err as Error).message}`,{status:400});
    }
}