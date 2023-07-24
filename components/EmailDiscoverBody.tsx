import getTemplates from "@/actions/getTemplates"
import EmailTemplate from "./ui/EmailTemplate";
import CopyBtn from "./CopyBtn";

const EmailDiscoverBody = async () => {
    const templates = await getTemplates();
    
  return (
    <div>
        <div className="flex flex-wrap justify-center gap-5">
          
        {templates.map(template=> (
          <div key={template._id} className="relative">
            <EmailTemplate id={template._id} clientHtml={template.clientHtml} properties={template.properties}/>
            <CopyBtn value={template._id} className="absolute top-2 right-2 hover:border-slate-700 text-gray-400 dark:text-gray-300 hover:text-gray-400 duration-75 bg-slate-800"/>             
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default EmailDiscoverBody