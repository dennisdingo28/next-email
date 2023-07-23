"use client"
import { useOrigin } from "@/hooks/useOrigin";
import Code from "./ui/code"
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CodeExampleProps extends HTMLAttributes<HTMLDivElement>{};

const CodeExample: React.FC<CodeExampleProps> = ({className}) => {
    const origin = useOrigin();
    console.log(origin);
    const currentRoute = `${origin}/api/:your_api_key`;
const apiExample=`app.post('/sendEmail', async (req, res) => {
    try {
      const token = req.params.token;
      const data = {
        email: {
          to: 'dennismoldovan32@gmail.com',
          subject: 'Hello from NextEmail',
          description: 'send emails, while your focus is only the design, we got everything ready for you',
          headingColor: '#ffffff',
          paragraphColor: '#ffffff',
          buttonColor: '#000',
          buttonText: 'Visit our website',
          buttonLink: 'your link',
          buttonTextColor: '#ffffff',
        },
        templateId: '64bab644f19d3279914077b1',
      };
  
      const response = await axios.post('${currentRoute}', data);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
})`;    
    
   
  return (
    <div className={cn(className)}>
        <Code label="Overview" code={apiExample}/>
    </div>
  )
}

export default CodeExample