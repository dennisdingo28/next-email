import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
  text:string;
}

const Paragraph: React.FC<ParagraphProps> = ({text,className}) => {
  return (
    <p className={cn("text-slate-500 font-light font-roboto",className)}>{text}</p>
  )
}

export default Paragraph;