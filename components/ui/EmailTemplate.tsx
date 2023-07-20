"use client"
import { HTMLAttributes } from "react"

interface EmailTemplateProps extends HTMLAttributes<HTMLDivElement>{
    clientHtml: string;
    properties: any;
    id?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({clientHtml,properties, className, id}) => {
  console.log("et",properties);
  
  const replacePlaceholders = (templateHtml:any, templateProperties:any) => {
    // Use regex to find all occurrences of {{placeholder}} and replace them with the respective color
    return templateHtml.replace(/{{(\w+)}}/g, (match:any, placeholder:any) => {
      if (typeof templateProperties === 'object' && templateProperties !== null) {
        return templateProperties[placeholder] || match; // If the placeholder exists in the templateproperties, use the custom color, otherwise, keep the placeholder unchanged.
      }
      return match; // If the placeholder exists in the templateproperties, use the custom color, otherwise, keep the placeholder unchanged.
    });
  };

  const customizedHtml = replacePlaceholders(clientHtml, properties);

  return(
    <div className={className} dangerouslySetInnerHTML={{__html:customizedHtml}}></div>
  )
}

export default EmailTemplate