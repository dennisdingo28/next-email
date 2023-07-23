import emailTemplate from "@/schemas/EmailTemplate";

export default async function getTemplates(limit?: number){
    let templates = [];
    
    if(limit){
        const limitedTemplates = await emailTemplate.find({}).limit(limit);
        templates = limitedTemplates;
    }else{
        const allTemplates = await emailTemplate.find({});
        templates = allTemplates;
    }
    return templates;
}