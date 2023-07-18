import emailTemplate from "@/schemas/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import user from "@/schemas/User";

export async function POST(req: NextRequest){
    try{
        const data = await req.json();
                
        if(!data || !data.htmlContent || !data.htmlContent.html || Object.keys(data.htmlContent.html).length===0)
            return new NextResponse('Invalid payload format.',{status:400});
        if(!data.access_token || data.access_token.trim()==='')
            return new NextResponse('No access token was provided',{status:401});
        
        const decodedInfo = jwt.verify(data.access_token,process.env.JWT_ENCRYPTION!);
        
        const authorizedUser = await user.findOne({name:(decodedInfo as JwtPayload).name ,email:(decodedInfo as JwtPayload).email});
        
        if(authorizedUser.role!=='ADMIN')
            throw new Error('You are not an admin.')
            
        await emailTemplate.create({html:String(data.htmlContent.html)});
        
        return NextResponse.json({msg:"Template was successfully created!"});
    }catch(err){
        
        if(err instanceof JsonWebTokenError)
        {
            if(err.message==='invalid signature')
                return new NextResponse(`Invalid decrypion token`,{status:401});
        }
        return new NextResponse(`${(err as Error).message}`,{status:400});
    }
}