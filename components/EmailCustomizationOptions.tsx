"use client"
import { EmailTemplateSchemaProps } from "@/types";
import EmailCustomizationField from "./ui/EmailCustomization-Field";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface EmailCustomizationOptionsProps {
    template: EmailTemplateSchemaProps;
    colors: any;
    setColors: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationOptions: React.FC<EmailCustomizationOptionsProps> = ({template,colors,setColors}) => {

  return (
    <div>
        {Object.keys(colors).map(key=>(
            <EmailCustomizationField prop={key} value={colors[key]} colors={colors} setColors={setColors}/>
        ))}
    </div>
  )
}

export default EmailCustomizationOptions