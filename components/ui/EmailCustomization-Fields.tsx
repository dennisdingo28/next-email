import { EmailTemplateSchemaProps } from "@/types"
import Paragraph from "./paragraph";
import EmailCustomizationOptions from "../EmailCustomizationOptions";

interface EmailCustomizationFieldsProps {
    template: EmailTemplateSchemaProps;
}

const EmailCustomizationFields: React.FC<EmailCustomizationFieldsProps> = ({template}) => {
   
  return <div>
        <Paragraph text="Change" className="text-[1.1em]"/>
        <EmailCustomizationOptions template={template}/>
  </div>
}

export default EmailCustomizationFields;