"use client"
import { Button } from "./ui/button"
import AuthModal from "./AuthModal";
import useAuthModal from "@/hooks/useAuthModal";
import { useSearchParams,useRouter } from "next/navigation";

const SignButton = () => {
  const router = useRouter();

  const {open,setIsOpen} = useAuthModal();
  const params = useSearchParams();
  const authModal = params.get('authModal');
  console.log("am",authModal);
  
  if(authModal?.trim()!=='' && authModal){
    setIsOpen(true);
    router.push('/');
  }
  
  return (
    <>
      <AuthModal open={open} setIsOpen={setIsOpen}/>
      <Button variant={'outline'} onClick={()=>setIsOpen(true)} className='tracking-wide'>sign in</Button>
    </>
  )
}

export default SignButton
