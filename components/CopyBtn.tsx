"use client"
import { Copy } from 'lucide-react';
import ButtonIcon from './ui/button-icon';
import { toast } from 'react-hot-toast';
import copyToClipboard from '@/lib/utils/copyToClipboard';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CopyBtnProps extends HTMLAttributes<HTMLButtonElement>{
    value: string;
}

const CopyBtn:React.FC<CopyBtnProps> = ({value,className}) => {
    async function copyValue(){
        try{
          await copyToClipboard(value);
          toast.success("Copied to clipboard !");
        }catch(err){
          toast.error("Cannot copy to clipboard. Please try again later !")
        }
      }
  return (
    <ButtonIcon onClick={copyValue} className={cn(className)} icon={<Copy size={16}/>}/>
  )
}

export default CopyBtn