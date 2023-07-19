import user from "@/schemas/User";
import { NextRequest, NextResponse } from "next/server";
import jwt, {JsonWebTokenError, JwtPayload} from "jsonwebtoken";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import emailTemplate from "@/schemas/EmailTemplate";

export async function POST(req: NextRequest,{params}:{params:{api_key: string}}){
    try{
        const payload = await req.json();
        const apiKey = params.api_key;

        if(!payload || Object.keys(payload).length===0)
            throw new Error('No payload was received. Please try again later.');
        if(!apiKey || apiKey.trim()==='')
            throw new Error('No api key was provided. Please try again later.');
        if(!payload.templateId ||   payload.templateId.trim()==='')
            throw new Error('No template id was provided. Please try again later.');
        
        const decodedInfo = jwt.verify(payload.access_token,process.env.JWT_ENCRYPTION!);
        const authorizedUser = await user.findOne({name:(decodedInfo as JwtPayload).name ,email:(decodedInfo as JwtPayload).email,apiKey});
        
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
    
        const template = handlebars.compile(email_template.html);
        const mailOptions = {
            from:authorizedUser.email,
            to:payload.email.to,
            subject:payload.email.title,
            html:template({...payload.email})
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