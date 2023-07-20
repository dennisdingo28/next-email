"use client"
import { EmailTemplateSchemaProps } from "@/types";
import EmailCustomizationField from "./ui/EmailCustomization-Field";
import { useState } from "react";

interface EmailCustomizationOptionsProps {
    template: EmailTemplateSchemaProps;
}

const EmailCustomizationOptions: React.FC<EmailCustomizationOptionsProps> = ({template}) => {
    console.log('fp',template);
    const [colors,setColors] = useState<any>(template.colors);

  return (
    <div>
        {Object.keys(colors).map(key=>(
            <EmailCustomizationField prop={key} value={colors[key]} colors={colors} setColors={setColors}/>
        ))}
    </div>
  )
}

export default EmailCustomizationOptions