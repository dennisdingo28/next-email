"use client"
import { Button } from "./ui/button"
import {signIn} from "next-auth/react";
import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuthModal";

const SignButton = () => {
  const {open,setIsOpen} = useAuthModal();
  return (
    <>
      <AuthModal open={open} setIsOpen={setIsOpen}/>
      <Button variant={'outline'} onClick={()=>setIsOpen(true)} className='text-white tracking-wide'>sign in</Button>
    </>
  )
}

export default SignButton
