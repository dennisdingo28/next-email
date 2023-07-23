import CodeExample from "./CodeExample"
import MailPreview from "./MailPreview"
import Heading from "./ui/heading"
import IndicateArrow from "./ui/indicate-arrow"
import Paragraph from "./ui/paragraph"

const Description = () => {
  
  return (
    <div className="mt-8 font-roboto">
        <Heading text="What is NextEmail ?" className="mt-16 text-center whitespace-wrap"/>
        <Paragraph text="Our email sending tool aims to simplify the process of working with emails and streamline the sending process. With just few clicks, you can securely send emails using custom templates, allowing you to stay productive and focus on the crucial aspects of your development workflow." className="ml-2 font-roboto text-start"/>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 xl:flex-row">
          <CodeExample className="flex-1 max-w-[100%]"/>
          <IndicateArrow label="the server process the request"/>
          <MailPreview className="flex-1 min-w-[230px] w-[100%] max-w-[690px] mx-auto" to="testemail@gmail.com" title="Email was sent from NextEmail" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit odit architecto fuga blanditiis ratione omnis, esse ipsam sint, natus eveniet modi voluptas! Itaque ad provident nesciunt magni maiores voluptatem soluta, quasi voluptatibus veritatis!"/>
        </div>
    </div>
  )
}

export default Description
