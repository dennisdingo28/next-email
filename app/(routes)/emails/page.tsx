import EmailDiscover from "@/components/EmailDiscover"
import EmailHero from "@/components/EmailHero"
import EmailTool from "@/components/EmailTool"

const EmailsPage = () => {

  return (
    <div className="mt-16">
      <EmailHero/>
      <div className="my-20">
        <EmailTool/>
      </div>
      <EmailDiscover/>
    </div>
  )
}

export default EmailsPage
