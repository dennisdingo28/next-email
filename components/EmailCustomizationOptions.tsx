"use client"
import { EmailTemplateSchemaProps } from "@/types";
import EmailCustomizationField from "./ui/EmailCustomization-Field";
import { Dispatch, SetStateAction, useState } from "react";

interface EmailCustomizationOptionsProps {
    template: EmailTemplateSchemaProps;
    properties: any;
    setProperties: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationOptions: React.FC<EmailCustomizationOptionsProps> = ({template,properties,setProperties}) => {
    console.log('fp',template);
    console.log(properties);
    
  return (
    <div>
        {Object.keys(properties).map(key=>(
            <EmailCustomizationField key={key} prop={key} value={properties[key]} properties={properties} setProperties={setProperties}/>
        ))}
    </div>
  )
}

export default EmailCustomizationOptions