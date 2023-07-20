"use client"
import { EmailTemplateSchemaProps } from "@/types"
import Paragraph from "./paragraph";
import EmailCustomizationOptions from "../EmailCustomizationOptions";
import { useState } from "react";
import EmailTemplate from "./EmailTemplate";
import axios from "axios";

interface EmailCustomizationFieldsProps {
    template: EmailTemplateSchemaProps;
}

const EmailCustomizationFields: React.FC<EmailCustomizationFieldsProps> = ({template}) => {
   const [colors,setColors] = useState(template.colors);
   console.log(colors);

   async function sendMail(){
    await axios.post('/api/sendEmail/99791bb12fcc95d5115c4141b3507b')
   }
   
  return <div>
      <Paragraph text="Change" className="text-[1.1em]"/>
      <div className="flex items-center">
        <EmailCustomizationOptions template={template} colors={colors} setColors={setColors}/>
        <EmailTemplate colors={colors} clientHtml={template.clientHtml} className="flex-1"/>
      </div>
      <button>Send Mail</button>
  </div>
}

export default EmailCustomizationFields;