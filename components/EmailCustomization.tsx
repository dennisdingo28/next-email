import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";
import EmailTemplate from "./ui/EmailTemplate";

const EmailCustomization: React.FC = async () => {
    const emailTemplate = await getTemplate("64b95ba93db32fa932c85a16");
    
  return (
    <div>
      <div >
        <EmailCustomizationFields template={emailTemplate}/>
      </div>
    </div>
  )
}

export default EmailCustomization