"use client"
import { useOrigin } from "@/hooks/useOrigin";
import Code from "./ui/code"
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CodeExampleProps extends HTMLAttributes<HTMLDivElement>{};

const CodeExample: React.FC<CodeExampleProps> = ({className}) => {
    const origin = useOrigin();
    console.log(origin);
    
const apiExample=`import axios from 'axios'

async function sendEmail(email){
    try{
        const emailResponse = await axios.post("${origin}/api/[api_key]/[template_id]/sendEmail",{
            to:"testemail@gmail.com",
            title:"Hello there",
            description:"this is a test email"
        });
    }catch(err){
        console.log(err);
        //handle err appropiatley
    }
}`;    
    
   
  return (
    <div className={cn(className)}>
        <Code label="Overview" code={apiExample}/>
    </div>
  )
}

export default CodeExample