"use client"
import { EmailTemplateSchemaProps } from "@/types";
import EmailCustomizationField from "./ui/EmailCustomization-Field";
import { Dispatch, SetStateAction, useState } from "react";

interface EmailCustomizationOptionsProps {
    template: EmailTemplateSchemaProps;
    colors: any;
    setColors: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationOptions: React.FC<EmailCustomizationOptionsProps> = ({template,colors,setColors}) => {
    console.log('fp',template);
    console.log(colors);
    
  return (
    <div>
        {Object.keys(colors).map(key=>(
            <EmailCustomizationField key={key} prop={key} value={colors[key]} colors={colors} setColors={setColors}/>
        ))}
    </div>
  )
}

export default EmailCustomizationOptions