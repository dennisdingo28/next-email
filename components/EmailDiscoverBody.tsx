import getTemplates from "@/actions/getTemplates"
import EmailTemplate from "./ui/EmailTemplate";
import CopyBtn from "./CopyBtn";

const EmailDiscoverBody = async () => {
    const templates = await getTemplates();
    
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
        {templates.map(template=> (
          <div className="relative">
           <EmailTemplate key={template._id} id={template._id} clientHtml={template.clientHtml} properties={template.properties}/>
            <CopyBtn value={template._id} className="absolute top-2 right-2 hover:border-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-400 duration-75 bg-slate-800"/>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default EmailDiscoverBody