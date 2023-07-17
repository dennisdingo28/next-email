import { HTMLAttributes } from "react";
import MediumHeading from "./ui/MediumHeading";
import { cn } from "@/lib/utils";
import Paragraph from "./ui/paragraph";
import Heading from "./ui/heading";
import { Button } from "./ui/button";

interface MailPreviewProps extends HTMLAttributes<HTMLDivElement>{
    to: string;
    title: string;
    description: string;
    templateName?: string;
}
const MailPreview: React.FC<MailPreviewProps> = ({to,title,description,templateName,className}) => {
  return (
    <div className={cn("h-[100%] bg-[#2a2929] rounded-t-md",className)}>
        <div className="templateHeader bg-[#1f1e1e] px-4 py-2 rounded-t-md">
            <MediumHeading text={`To: ${to}`}/>
        </div>
        <div className="templateBody px-4 py-2 space-y-4">
            <Heading className="text-center font-medium font-roboto text-[#d9d9d9]" text={title}/>
            <Paragraph text={description} className="text-gray-400"/>
            <Button>Visit our website</Button>
        </div>
    </div>
  )
}

export default MailPreview