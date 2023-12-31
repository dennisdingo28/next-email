"use client"
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import { SignInRequest, SignInValidator } from "@/validators";
import { HTMLAttributes } from "react";
import signInAccount from "@/lib/signInAccount";

interface LoginFormProps extends HTMLAttributes<HTMLFormElement>{};

const LoginForm: React.FC<LoginFormProps> = ({className}) => {
    const [showErrorMessage,setShowErrorMessage] = useState<boolean>(false);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(SignInValidator),
        defaultValues:{
            identifier:"",
            password:"",
        }
    });

    function signInUser(data: SignInRequest){
      try{
        setIsLoading(true);
        signInAccount(data);
        setIsLoading(false);
      }catch(err){
        console.log(err);
        setIsLoading(false)
      }
    }

    useEffect(()=>{
        if(Object.keys(errors).length>0){
          setShowErrorMessage(true)
          const timer = setTimeout(() => {
            setShowErrorMessage(false);
          }, 2100);
    
          return () => clearTimeout(timer);
        }
      },[errors]);
    

  return(
    <form className={className} onSubmit={handleSubmit((data)=>signInUser(data))}>
        <div className="flex flex-col gap-3">
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="username or email" {...register("identifier")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.identifier?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="password" {...register("password")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.password?.message}</small></p>}
        </div>
        <div className="text-center mt-3">
          <input type="submit" disabled={isLoading} value={"Sign In"} className={`h-10 cursor-pointer px-4 py-2 border border-purple-800 text-white ${!isLoading ? "bg-purple-600":"bg-purple-900 cursor-not-allowed pointer-events-auto"} duration-100 dark:hover:border-purple-900 text-[.86em] `}/>
        </div>
    </form>
  )
}

export default LoginForm