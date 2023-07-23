import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import "../../styles/syntax-highlighter.css"
import Paragraph from './paragraph';
import CopyBtn from '../CopyBtn';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CodeProps extends HTMLAttributes<HTMLDivElement>{
  label?: string;
  code:string;
}

const Code: React.FC<CodeProps> = ({code, label,className}) => {
  
  return(
    <div className={cn("font-roboto",className)}>
        <Paragraph text={label || ""} className='font-bold text-slate-400 text-[1.1em]'/>
        <div className="relative">
          <SyntaxHighlighter className="max-h-[450px] min-w-[230px] w-[100%] h-[100%] max-w-[550px] syntax-highlighter-scrollbar" wrapLines={true} language='javascript' showLineNumbers={true} style={dracula}>
              {code}
          </SyntaxHighlighter>
          <CopyBtn value={code} className='rounded-full absolute top-2 right-3 hover:border-slate-700 text-gray-300 hover:text-gray-400 duration-75'/>
        </div>
    </div>
  )
}

export default Code