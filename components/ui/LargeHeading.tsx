import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    text: string;
}

const LargeHeading: React.FC<LargeHeadingProps> = ({text,className}) => {
  return <h2 className={cn("text-[1.5em] font-roboto text-gray-300",className)}>{text}</h2>
}

export default LargeHeading