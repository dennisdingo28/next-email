import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";
import EmailTemplate from "./ui/EmailTemplate";

const EmailCustomization: React.FC = async () => {
    const emailTemplate = await getTemplate("64b95ba93db32fa932c85a16");
    console.log(emailTemplate);
    
  return (
    <div>
      <div className="flex items-center">
        <EmailCustomizationFields template={emailTemplate}/>
        <EmailTemplate clientHtml={emailTemplate.clientHtml} className="flex-1"/>
      </div>
    </div>
  )
}

export default EmailCustomization