"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import "../../styles/syntax-highlighter.css"
import Paragraph from './paragraph';


interface CodeProps {
    label?: string;
    code:string;
}

const Code: React.FC<CodeProps> = ({code, label}) => {
  return(
    <div className="font-roboto">
        <Paragraph text={label || ""} className='font-bold text-slate-400 text-[1.1em]'/>
        <SyntaxHighlighter className="max-h-[450px] w-[100%] h-[100%] max-w-[450px] syntax-highlighter-scrollbar" wrapLines={true} language='javascript' showLineNumbers={true} style={dracula}>
            {code}
        </SyntaxHighlighter>
    </div>
  )
}

export default Code