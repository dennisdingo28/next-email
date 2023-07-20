import { HTMLAttributes } from "react"

interface EmailTemplateProps extends HTMLAttributes<HTMLDivElement>{
    clientHtml: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({clientHtml, className}) => {
  return(
    <div className={className} dangerouslySetInnerHTML={{__html:clientHtml}}></div>
  )
}

export default EmailTemplate