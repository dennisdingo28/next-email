"use client"
import { signIn } from "next-auth/react"
import CardIcon from "./ui/card-icon"

const LoginProviders: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-8">
        <CardIcon handleClick={()=>signIn("google")} icon={<i className="bi bi-google text-white"></i>}/>
        <CardIcon handleClick={()=>signIn("github")} icon={<i className="bi bi-github text-white"></i>}/>
    </div>
  )
}

export default LoginProviders