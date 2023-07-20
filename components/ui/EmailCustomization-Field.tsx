import isValidColor from "@/lib/utils/isValidColor";
import { Dispatch, SetStateAction } from "react";

interface EmailCustomizationFieldProps {
  prop: string;
  value: string;
  properties: any;
  setProperties: Dispatch<SetStateAction<any>>;
}

const EmailCustomizationField: React.FC<EmailCustomizationFieldProps> = ({prop,value,properties,setProperties}) => {
    console.log(value);
    
        return <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                <p className="text-gray-400">{prop}: </p>
                <input type="text" value={properties[prop]} onChange={(e)=>setProperties((prev: any)=>({
                    ...prev,
                    [prop]:e.target.value,
                }))} autoFocus className="bg-transparent outline-none max-w-min text-gray-400"/>
            </div>
        </div>
    
}

export default EmailCustomizationField;