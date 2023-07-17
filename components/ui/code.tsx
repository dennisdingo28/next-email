"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import "../../styles/syntax-highlighter.css"
import Paragraph from './paragraph';
import { Button } from './button';


interface CodeProps {
    label?: string;
    code:string;
}

const Code: React.FC<CodeProps> = ({code, label}) => {
  return(
    <div className="font-roboto">
        <Paragraph text={label || ""} className='font-bold text-slate-400 text-[1.1em]'/>
        <div className="relative">
          <SyntaxHighlighter className="max-h-[450px] w-[100%] h-[100%] max-w-[550px] syntax-highlighter-scrollbar" wrapLines={true} language='javascript' showLineNumbers={true} style={dracula}>
              {code}
          </SyntaxHighlighter>
          <Button className='absolute top-0 right-0'>Copy</Button>
        </div>
       
    </div>
  )
}

export default Code