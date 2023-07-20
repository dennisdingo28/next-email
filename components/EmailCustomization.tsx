import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";

const EmailCustomization: React.FC = async () => {
    const emailTemplate = await getTemplate("64b97317844b5171e0aa762d");
    
  return (
    <div>
      <div >
        <EmailCustomizationFields template={emailTemplate}/>
      </div>
    </div>
  )
}

export default EmailCustomization