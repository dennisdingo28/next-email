"use client"
import { HTMLAttributes } from "react"

interface EmailTemplateProps extends HTMLAttributes<HTMLDivElement>{
    clientHtml: string;
    colors: any;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({clientHtml,colors, className}) => {
  console.log("et",colors);
  
  const replacePlaceholders = (templateHtml:any, templateColors:any) => {
    // Use regex to find all occurrences of {{placeholder}} and replace them with the respective color
    return templateHtml.replace(/{{(\w+)}}/g, (match:any, placeholder:any) => {
      if (typeof templateColors === 'object' && templateColors !== null) {
        return templateColors[placeholder] || match; // If the placeholder exists in the templateColors, use the custom color, otherwise, keep the placeholder unchanged.
      }
      return match; // If the placeholder exists in the templateColors, use the custom color, otherwise, keep the placeholder unchanged.
    });
  };

  const customizedHtml = replacePlaceholders(clientHtml, colors);

  return(
    <div className={className} dangerouslySetInnerHTML={{__html:customizedHtml}}></div>
  )
}

export default EmailTemplate