"use client"
import { EmailTemplateSchemaProps } from "@/types"
import Paragraph from "./paragraph";
import EmailCustomizationOptions from "../EmailCustomizationOptions";
import { useState } from "react";
import EmailTemplate from "./EmailTemplate";
import axios from "axios";
import useSelectedTemplateId from "@/hooks/useSelectedTemplateId";
import EmailCustomizationHeader from "../EmailCustomizationHeader";

interface EmailCustomizationFieldsProps {
  template: EmailTemplateSchemaProps & { _id: string };
}

const EmailCustomizationFields: React.FC<EmailCustomizationFieldsProps> = ({template}) => {
   const [properties,setProperties] = useState(template.properties);
   const selectedTemplate = useSelectedTemplateId();
   console.log(properties);

   async function sendMail(){
    await axios.post('/api/sendEmail/99791bb12fcc95d5115c4141b3507b',{
      email:{
        to:"dennismoldovan32@gmail.com",
        subject:"this is from next email",
        description:"lorem ipsum dolorem itum",
        ...properties,
      },
      templateId:selectedTemplate.id,
      access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVubmlzIE1vbGRvdmFuIiwiZW1haWwiOiJkZW5uaXNtb2xkb3ZhbjMyQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZUZHTTZrbEpRaC1aOEtFd0lfbzRHdWk2T2VzNnM0aTYxTENYcGhzMzF5PXM5Ni1jIiwiaWF0IjoxNjg5ODczMDU2LCJleHAiOjE2OTI0NjUwNTZ9.1pWQpaooEVP0O4mtxa-i_ZVBHkx51bxM59eGLqbBIQ8"
    })
   }
   
  return <div>
      <EmailCustomizationHeader/>
      <div className="flex items-center">
        <EmailCustomizationOptions template={template} properties={properties} setProperties={setProperties}/>
        <EmailTemplate properties={properties} clientHtml={template.clientHtml} className="flex-1"/>
      </div>
      <button onClick={sendMail}>Send Mail</button>
  </div>
}

export default EmailCustomizationFields;