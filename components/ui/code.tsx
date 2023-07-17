"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import "../../styles/syntax-highlighter.css"
import Paragraph from './paragraph';
import ButtonIcon from './button-icon';
import { Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';
import copyToClipboard from '@/lib/utils/copyToClipboard';


interface CodeProps {
    label?: string;
    code:string;
}


const Code: React.FC<CodeProps> = ({code, label}) => {
  async function copyValue(){
    try{
      await copyToClipboard(code);
      toast.success("Copied to clipboard !");
    }catch(err){
      toast.error("Cannot copy to clipboard. Please try again later !")
    }
  }
  return(
    <div className="font-roboto">
        <Paragraph text={label || ""} className='font-bold text-slate-400 text-[1.1em]'/>
        <div className="relative">
          <SyntaxHighlighter className="max-h-[450px] min-w-[230px] w-[100%] h-[100%] max-w-[550px] syntax-highlighter-scrollbar" wrapLines={true} language='javascript' showLineNumbers={true} style={dracula}>
              {code}
          </SyntaxHighlighter>
          <ButtonIcon onClick={copyValue} className='rounded-full absolute top-2 right-3 hover:border-slate-700 text-gray-300 hover:text-gray-400 duration-75' icon={<Copy size={16}/>}/>
        </div>
       
    </div>
  )
}

export default Code