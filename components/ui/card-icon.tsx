import { ReactElement } from "react"

interface CardIconProps {
    icon: ReactElement;
    label?: string;
}

const CardIcon:React.FC<CardIconProps> = ({icon,label}) => {
  return (
    <div className="py-4 px-6 rounded-md cursor-pointer hover:bg-gray-700 duration-100 bg-gray-600 font-roboto font-semibold">
      <div className="">{icon}</div>
      <p>{label}</p>
    </div>
  )
}

export default CardIcon
