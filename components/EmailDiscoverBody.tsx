import getTemplates from "@/actions/getTemplates"
import EmailTemplate from "./ui/EmailTemplate";

const EmailDiscoverBody = async () => {
    const templates = await getTemplates();
    console.log(templates);
    
  return (
    <div>
        <div className="grid grid-cols-3 gap-5">
        {templates.map(template=> (
           <EmailTemplate key={template._id} clientHtml={template.clientHtml} _id={template._id}/>
        ))}
        </div>
        
    </div>
  )
}

export default EmailDiscoverBody