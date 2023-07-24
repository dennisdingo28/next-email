"use client"
import { EmailTemplateSchemaProps } from "@/types";
import EmailCustomizationField from "./ui/EmailCustomization-Field";
import { Dispatch, SetStateAction, useState } from "react";

interface EmailCustomizationOptionsProps {
  template: EmailTemplateSchemaProps & { _id: string };
  properties: any;
  setProperties: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationOptions: React.FC<EmailCustomizationOptionsProps> = ({template,properties,setProperties}) => {
    console.log('fp',template);
    console.log(properties);
    
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {Object.keys(properties).map(key=>(
            <EmailCustomizationField key={key} prop={key} value={properties[key]} properties={properties} setProperties={setProperties}/>
        ))}
    </div>
  )
}

export default EmailCustomizationOptions