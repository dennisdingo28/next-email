import user from "@/schemas/User";
import { NextRequest, NextResponse } from "next/server";
import jwt, {JsonWebTokenError, JwtPayload} from "jsonwebtoken";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import emailTemplate from "@/schemas/EmailTemplate";
import email from "@/schemas/Email";

export async function POST(req: NextRequest,{params}:{params:{api_key: string}}){
    try{
        const payload = await req.json();
        console.log(payload);
        
        const apiKey = params.api_key;

        if(!payload || Object.keys(payload).length===0)
            throw new Error('No payload was received. Please try again later.');
        if(!apiKey || apiKey.trim()==='')
            throw new Error('No api key was provided. Please try again later.');
        if(!payload.templateId || payload.templateId.trim()==='')
            throw new Error('No template id was provided. Please try again later.');
        
        const authorizedUser = await user.findOne({apiKey});
        
        if(!authorizedUser)
            throw new Error('Cannot find any user with the provided credentials. Please try again later.');

        console.log(authorizedUser);

        const email_template = await emailTemplate.findById({_id:payload.templateId}); 
        if(!email_template)
            throw new Error(`Cannot find any template with id: ${payload.templateId}`);
        console.log(email_template);
        
        //nodemailer
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.NODEMAILER_EMAIL,
                pass:process.env.NODEMAILER_PASSWORD,
            }
        })
    
        const template = handlebars.compile(email_template.clientHtml);
        const mailOptions = {
            from:authorizedUser.email,
            to:payload.email.to,
            subject:payload.email.subject,
            html:template({...payload.email})
        }
        await transporter.sendMail(mailOptions);
        
        const newEmail = await email.create({template_id:payload.templateId});

        await user.findOneAndUpdate({apiKey},{$push:{sentEmails:newEmail._id}},{new:true,runValidators:true});

        return NextResponse.json({msg:'Email was successfully sent.'});
    }catch(err){
        console.log('ERROR',err);
        
        if(err instanceof JsonWebTokenError)
        {
            if(err.message==='invalid signature')
                return new NextResponse(`Invalid decrypion token`,{status:401});
        }
        return new NextResponse(`${(err as Error).message}`,{status:400});
    }
}