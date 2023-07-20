import isValidColor from "@/lib/utils/isValidColor";
import { Dispatch, SetStateAction } from "react";

interface EmailCustomizationFieldProps {
  prop: string;
  value: string;
  colors: any;
  setColors: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationField: React.FC<EmailCustomizationFieldProps> = ({prop,value,colors,setColors}) => {
    const isColor = isValidColor(value);
    
        return <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                <p className="text-gray-400">{prop}: </p>
                <input type="text" value={colors[prop]} onChange={(e)=>setColors((prev: any)=>({
                    ...prev,
                    [prop]:e.target.value,
                }))} autoFocus className="bg-transparent outline-none max-w-min text-gray-400"/>
            </div>
            <div className={`bg-[${value}] rounded-full w-[20px] h-[20px]`}></div>
        </div>
    
}

export default EmailCustomizationField;