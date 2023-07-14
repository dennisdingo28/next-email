"use client"
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import { SignInRequest, SignInValidator } from "@/validators";
import {useMutation} from "@tanstack/react-query"
import { HTMLAttributes } from "react";

interface LoginFormProps extends HTMLAttributes<HTMLFormElement>{};

const LoginForm: React.FC<LoginFormProps> = ({className}) => {
    const [showErrorMessage,setShowErrorMessage] = useState<boolean>(false);

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(SignInValidator),
        defaultValues:{
            identifier:"",
            password:"",
        }
    });

    useEffect(()=>{
        if(Object.keys(errors).length>0){
          setShowErrorMessage(true)
          const timer = setTimeout(() => {
            setShowErrorMessage(false);
          }, 2100);
    
          return () => clearTimeout(timer);
        }
      },[errors]);
    
    const {mutate:authenticateUser,isLoading} = useMutation({
        mutationFn: async (data: SignInRequest) =>{
            console.log("signin",data);
        }
    }) 

  return(
    <form className={className} onSubmit={handleSubmit((data)=>authenticateUser(data))}>
        <div className="flex flex-col gap-3">
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="username or email" {...register("identifier")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.identifier?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="password" {...register("password")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.password?.message}</small></p>}
        </div>
        <div className="text-center mt-3">
            <input type="submit" value={"Sign In"} className="h-10 cursor-pointer px-4 py-2 border dark:border-purple-800 bg-purple-700 hover:bg-purple-800 duration-100 dark:bg-transparent dark:hover:border-purple-900 text-[.86em]"/>
        </div>
    </form>
  )
}

export default LoginForm