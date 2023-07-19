import { HTMLAttributes } from "react";
import Paragraph from "./paragraph";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";



const infoCardVariants = cva(
  "rounded-sm",
  {
    variants:{
      variant:{
        info:"bg-purple-800"
      },
      size:{
        default:"p-4",
        large:"p-3",
        medium:"p-2",
        small:"p-1",
      }
    },
    defaultVariants:{
      variant:"info",
      size:"medium"
    }
  }
)

interface InfoCardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof infoCardVariants>{
  children?: React.ReactNode;
  label?: string;
}


const InfoCard: React.FC<InfoCardProps> = ({children, label,variant,className}) => {
  return(
    <div className={cn(infoCardVariants({variant}),className)}>
        <Paragraph text={label || ""} className="text-slate-800 font-medium text-[1.1em]"/>
        {children}
    </div>
  )
}

export default InfoCard