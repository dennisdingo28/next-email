"use client"
import { EmailTemplateSchemaProps } from "@/types"
import EmailCustomizationOptions from "../EmailCustomizationOptions";
import { useState } from "react";
import EmailTemplate from "./EmailTemplate";
import axios from "axios";
import useSelectedTemplateId from "@/hooks/useSelectedTemplateId";
import EmailCustomizationHeader from "../EmailCustomizationHeader";
import { toast } from "react-hot-toast";

interface EmailCustomizationFieldsProps {
  template: EmailTemplateSchemaProps & { _id: string };
}

const EmailCustomizationFields: React.FC<EmailCustomizationFieldsProps> = ({template}) => {
   const [properties,setProperties] = useState({...template.properties,to:""});
   const selectedTemplate = useSelectedTemplateId();
   const [loading,setLoading] = useState<boolean>(false);

   async function sendMail(){
    try{
      setLoading(true);
      await axios.post('/api/sendEmail/99791bb12fcc95d5115c4141b3507b',{
        email:{
          subject:"this is from next email",
          description:"lorem ipsum dolorem itum",
          ...properties,
        },
        templateId:selectedTemplate.id,
      });
      toast.success('Email was successfully sent !');
      setLoading(false);
    }catch(err){
      setLoading(false);
      toast.error('Something went wrong while trying to send your email. Please try again later.');
    }
    
   }
   
  return <div>
      <EmailCustomizationHeader/>
      <div className="flex flex-col-reverse gap-10 mt-5 items-center lg:flex-row">
        <EmailCustomizationOptions template={template} properties={properties} setProperties={setProperties}/>
        <EmailTemplate properties={properties} clientHtml={template.clientHtml} className="flex-1"/>
      </div>
      <div className="flex items-center justify-center sm:justify-start">
        <button onClick={sendMail} disabled={loading} className={`bg-purple-800 p-4 rounded-sm hover:bg-purple-900 hover:text-slate-300 text-slate-200 duration-100 font-bold text-[.95em] font-roboto cursor-pointer mb-3 mt-5 ${loading && "bg-purple-950 pointer-events-none"}`}>Send Mail</button>
      </div>
  </div>
}

export default EmailCustomizationFields;