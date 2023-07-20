import { EmailTemplateSchemaProps } from "@/types"
import Paragraph from "./paragraph";
import EmailCustomizationOptions from "../EmailCustomizationOptions";
import { Dispatch, SetStateAction } from "react";

interface EmailCustomizationFieldsProps {
    template: EmailTemplateSchemaProps;
    colors: any;
    setColors: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationFields: React.FC<EmailCustomizationFieldsProps> = ({template,colors,setColors}) => {
   
  return <div>
        <Paragraph text="Change" className="text-[1.1em]"/>
        <EmailCustomizationOptions template={template} colors={colors} setColors={setColors}/>
  </div>
}

export default EmailCustomizationFields;