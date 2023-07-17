"use client"
import { Button } from "./ui/button"
import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuthModal";

const SignButton = () => {
  const {open,setIsOpen} = useAuthModal();
  return (
    <>
      <AuthModal open={open} setIsOpen={setIsOpen}/>
      <Button variant={'outline'} onClick={()=>setIsOpen(true)} className='tracking-wide'>sign in</Button>
    </>
  )
}

export default SignButton
