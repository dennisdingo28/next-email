import { HTMLAttributes } from "react";

interface EmailTemplateProps extends HTMLAttributes<HTMLDivElement>{
    clientHtml: string;
    _id: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({clientHtml,_id,className}) => {
  return(
    <div className={className} dangerouslySetInnerHTML={{__html:clientHtml}}></div>
  )
}

export default EmailTemplate