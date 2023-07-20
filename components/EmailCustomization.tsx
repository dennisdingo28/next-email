"use client"
import getTemplate from "@/actions/getTemplate"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";
import EmailTemplate from "./ui/EmailTemplate";
import { useState } from "react";

const EmailCustomization: React.FC = async () => {
    
    const emailTemplate = await getTemplate("64b8e57cf3a825a20144d32b");
    console.log("colors",colors);
    
  return (
    <div className="flex items-center">
        <EmailCustomizationFields colors={colors} setColors={setColors} template={emailTemplate}/>
        <EmailTemplate clientHtml={emailTemplate.clientHtml} _id={`${emailTemplate._id}`} className="flex-1"/>
    </div>
  )
}

export default EmailCustomization