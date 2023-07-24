"use client"
import EmailCustomizationFields from "./ui/EmailCustomization-Fields";
import { useEffect, useState } from "react";
import { EmailTemplateSchemaProps } from "@/types";
import useSelectedTemplateId from "@/hooks/useSelectedTemplateId";
import axios from "axios";
import EmailCustomizationHeader from "./EmailCustomizationHeader";
import LargeHeading from "./ui/LargeHeading";
import { User } from "next-auth";

interface EmailCustomizationProps {
  user: any;
}

const EmailCustomization: React.FC<EmailCustomizationProps> = ({user}) => {
  const [emailTemplate,setEmailTemplate] = useState<EmailTemplateSchemaProps & {_id: string} | null>();
  const [loading,setLoading] = useState<boolean>(true);

  const selectedTemplate = useSelectedTemplateId();

  useEffect(()=>{
    async function retrieveTemplate(){
      try{
        setLoading(true);
        const req = await axios.get(`/api/template/${selectedTemplate.id}`);
        console.log("Req",req);
        
        setEmailTemplate(req.data.template);
        setLoading(false);
      }catch(err){
        setLoading(false)
        setEmailTemplate(null);
        console.log(err);        
      }
    }
    setTimeout(()=>{
      retrieveTemplate();
    },500)
  },[selectedTemplate.id]);


   if(loading){
    return(
      <div className="py-8">
        <LargeHeading className="text-center text-slate-300" text="Loading..."/>
      </div>
    )
   }else{
    if(emailTemplate){
      return (
        <div>
          <div>
            <EmailCustomizationFields user={user} template={emailTemplate}/>
          </div>
        </div>
      )
    }
    return (
      <div className="">
        <EmailCustomizationHeader/>
        <div className="py-8">
          <LargeHeading className="text-center text-slate-300" text="Cannot find any template :/"/>
        </div>
      </div>
    )
   }
  
}

export default EmailCustomization