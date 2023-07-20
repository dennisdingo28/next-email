import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";

const EmailCustomization: React.FC = async () => {
    const emailTemplate = await getTemplate("64b9704b844b5171e0aa7518");
    
  return (
    <div>
      <div >
        <EmailCustomizationFields template={emailTemplate}/>
      </div>
    </div>
  )
}

export default EmailCustomization