import Paragraph from "./paragraph";

interface IndicateArrowProps {
    label?: string;
}

const IndicateArrow: React.FC<IndicateArrowProps> = ({label}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-3">
            <Paragraph text={label || ""}/>
            <i className="bi bi-hdd-network text-[1.3em]"></i>
        </div>
        <i className="bi bi-arrow-left-right text-[60px]"></i>
    </div>
  )
}

export default IndicateArrow