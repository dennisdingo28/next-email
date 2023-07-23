import emailTemplate from "@/schemas/EmailTemplate";
import { NextRequest, NextResponse} from "next/server";
export async function GET(req: NextRequest,{params}:{params:{template_id: string}}){
    try{
        
        if(!params || !params.template_id)
            throw new Error('You must provide a template id.');

        const template = await emailTemplate.findById({_id:params.template_id});

        return NextResponse.json({msg:"Ok",template});
    }catch(err){
        return new NextResponse((err as Error).message,{status:400});
    }
}