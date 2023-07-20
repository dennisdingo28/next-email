import emailTemplate from "@/schemas/EmailTemplate";

export default async function getTemplate(id: string){
    
    const template = await emailTemplate.findById({_id:id});
  
    return template;
}