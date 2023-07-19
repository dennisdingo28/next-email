import { HTMLAttributes } from "react";
import Paragraph from "./paragraph";

interface InfoCardProps extends HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode;
    label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({children, label}) => {
  return(
    <div>
        <Paragraph text={label}/>
        {children}
    </div>
  )
}

export default InfoCard