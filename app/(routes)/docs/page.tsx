"use client"

import LargeHeading from '@/components/ui/LargeHeading'
import Code from '@/components/ui/code'
import Heading from '@/components/ui/heading'
import Paragraph from '@/components/ui/paragraph'
import { useOrigin } from '@/hooks/useOrigin'

const DocsPage = () => {

  const origin = useOrigin();
  const currentRoute = `${origin}/api/:your_api_key`;

  const nextjsExample = `import axios from "axios";
  import { NextRequest, NextResponse } from "next/server";
  
  export async function POST(req: NextRequest,{params}:{params:{api_key: string}}){
      try{
          const payload = await req.json();
          console.log(payload,params);
          
            // payload should be
            
            // {
            //     email:{
            //         to:"dennismoldovan32@gmail.com",
            //         subject:"sent from another app",
            //         description:"your email body",
            //         headingColor:"#Fe1",
            //         paragraphColor:"#f11",
            //         buttonColor:"#000",
            //         buttonText:"Visit my app",
            //         buttonLink:"your link",
            //         buttonTextColor:"#ffffff",
            //     },
            //     templateId:"64bab733f19d3279914077e5"
            // }

            // it depends on every template as it have their own properties that you can change
        
  
          const res = await axios.post(http://localhost:3000/api/sendEmail/:your_api_key,payload);
          return NextResponse.json({msg:"Email was successfully sent"},{status:200});
      
      }catch(err){
          console.log(err);
          return NextResponse.json({msg:"Something went wrong while trying to send the email."},{status:500});
      }
    }`

  const expressExample=`app.post('/sendEmail', async (req, res) => {
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
          buttonLink: 'http://localhost:3001/',
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
    <div>
      <div className="flex items-center mt-6 justify-center xs:justify-start gap-2">
        <Heading text='Documentation'/>
        <i className="bi bi-code-square text-[1.2em]"></i>
      </div>
      <div className="mt-4 mb-10">
        <Paragraph text='Here is a brief example of our api implementation as our target is efficiency and customizability.'/>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-between">
        <Code code={expressExample} label='Express' className='mx-auto'/>
        <Code code={nextjsExample} label='Next.js' className='mx-auto'/>
      </div>
      <LargeHeading className='text-center mt-5 mb-10' text="More comming soon, but this doesn't mean that you cannot implement it in your app :) ..."/>
    </div>
  )
}

export default DocsPage
