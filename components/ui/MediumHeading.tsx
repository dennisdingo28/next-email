import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MediumHeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    text: string;
}

const MediumHeading: React.FC<MediumHeadingProps> = ({text,className}) => {
  return <h3 className={cn("text-[1.05em] font-roboto text-gray-300",className)}>{text}</h3>
}

export default MediumHeading