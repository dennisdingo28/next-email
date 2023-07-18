import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest,{params}:{params:{api_key: string, template_id: string}}){
    try{
        const payload = await req.json();
        console.log(payload,params.api_key,params.template_id);
        return NextResponse.json({msg:'Template was successfully created'});
    }catch(err){
        return new NextResponse(`${(err as Error).message}`,{status:400});
    }
}