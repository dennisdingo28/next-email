import CodeExample from "./CodeExample"
import Heading from "./ui/heading"
import IndicateArrow from "./ui/indicate-arrow"
import Paragraph from "./ui/paragraph"

const Description = () => {
  
  return (
    <div className="mt-8 font-roboto">
        <Heading text="What is NextEmail ?"/>
        <Paragraph text="Our email sending tool aims to simplify the process of working with emails and streamline the sending process. With just two clicks and a single line of code, you can securely send emails using custom templates, allowing you to stay productive and focus on the crucial aspects of your development workflow." className="ml-2 font-roboto"/>
        <div className="mt-7 flex items-center gap-5">
         <CodeExample/>
         <IndicateArrow label="our server process the request"/>
        </div>
    </div>
  )
}

export default Description
