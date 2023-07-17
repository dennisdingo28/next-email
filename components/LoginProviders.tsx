"use client"
import { signIn } from "next-auth/react"
import CardIcon from "./ui/card-icon"

const LoginProviders: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-8">
        <CardIcon handleClick={async ()=>{
          const signInResponse = await signIn("google")
          console.log("google response",signInResponse);
          
          }} icon={<i className="bi bi-google text-white"></i>}/>
        <CardIcon handleClick={async ()=>{
          const signInResponse = await signIn("github",{redirect:false})
          console.log("github response",signInResponse);
          
          }} icon={<i className="bi bi-github text-white"></i>}/>
    </div>
  )
}

export default LoginProviders