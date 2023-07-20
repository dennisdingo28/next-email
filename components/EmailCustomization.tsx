import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";

const EmailCustomization = async () => {
    const emailTemplate = await getTemplate("64b8e57cf3a825a20144d32b");
    console.log(emailTemplate);;
    
  return (
    <div>
        <EmailCustomizationFields template={emailTemplate}/>
    </div>
  )
}

export default EmailCustomization