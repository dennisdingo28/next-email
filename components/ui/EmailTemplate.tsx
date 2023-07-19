
interface EmailTemplateProps {
    clientHtml: string;
    _id: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({clientHtml,_id}) => {
  return(
    <div className="" dangerouslySetInnerHTML={{__html:clientHtml}}></div>
  )
}

export default EmailTemplate