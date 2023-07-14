"use client"
import {useForm} from "react-hook-form";
import { SignUpRequest, SignUpValidator } from "@/validators";
import {zodResolver} from "@hookform/resolvers/zod";
import { useEffect,useState } from "react";
import { useMutation } from "@tanstack/react-query";
import createAccount from "@/lib/createAccount";
import {toast} from "react-hot-toast"

const SignUpForm: React.FC= () => {
    const [showErrorMessage,setShowErrorMessage] = useState<boolean>(false);

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(SignUpValidator),
        defaultValues:{
            username:"",
            email:"",
            password:"",
        }
    });

    const {mutate:createUser, isLoading} = useMutation({
        mutationFn: async (data: SignUpRequest) => await createAccount(data),
        onError:(err)=>{
            console.log((err as Error).message);
            toast.error(`${(err as Error).message}`)
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

    

  return(
    <form onSubmit={handleSubmit((data)=>createUser(data))}>
        <div className="flex flex-col gap-3">
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="username" {...register("username")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.username?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="email" {...register("email")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.email?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="password" {...register("password")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.password?.message}</small></p>}
        </div>
        <div className="text-center mt-3">
            <input type="submit" value={"Create Account"} className="h-10 cursor-pointer px-4 py-2 border dark:border-purple-800 bg-purple-700 hover:bg-purple-800 duration-100 dark:bg-transparent dark:hover:border-purple-900 text-[.86em]"/>
        </div>
    </form>
  )
}

export default SignUpForm