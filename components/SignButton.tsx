"use client"
import { Button } from "./ui/button"
import {signIn} from "next-auth/react";

const SignButton = () => {
  return (
    <Button variant={'outline'} onClick={()=>signIn("github")} className='text-white tracking-wide'>sign in</Button>
  )
}

export default SignButton
