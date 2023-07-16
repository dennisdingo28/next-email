"use client"
import {useForm} from "react-hook-form";
import { SignUpRequest, SignUpValidator } from "@/validators";
import {zodResolver} from "@hookform/resolvers/zod";
import { HTMLAttributes,useEffect,useState } from "react";
import { useMutation } from "@tanstack/react-query";
import createAccount from "@/lib/createAccount";
import {toast} from "react-hot-toast"

interface SignUpFormProps extends HTMLAttributes<HTMLFormElement>{
    cRef?:React.RefObject<HTMLParagraphElement>;
};

const SignUpForm: React.FC<SignUpFormProps> = ({className,cRef}) => {

    const [showErrorMessage,setShowErrorMessage] = useState<boolean>(false);

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(SignUpValidator),
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });

    const {mutate:createUser, isLoading} = useMutation({
        mutationFn: async (data: SignUpRequest) => await createAccount(data),
        onSuccess:(data: any)=>{
            
            toast.success(`${data.msg}`);
            if(cRef)
                cRef.current?.click();
        },
        onError:(err: any)=>{
            console.log((err as Error).message);
            if(!err.response.ok)
                toast.error(`${err.response.data}`);
            else toast.error(`${(err as Error).message}`)
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
    <form className={className} onSubmit={handleSubmit((data)=>createUser(data))}>
        <div className="flex flex-col gap-3">
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="username" {...register("name")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.name?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="email" {...register("email")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.email?.message}</small></p>}
            <input className="text-slate-300 text-[.90em] bg-transparent border-b border-b-slate-600 outline-none max-w-[100%] w-[100%] px-1" placeholder="password" {...register("password")}/>
            {showErrorMessage && <p className="text-red-600"><small>{errors.password?.message}</small></p>}
        </div>
        <div className="text-center mt-3">
           <input type="submit" disabled={isLoading} value={"Create Account"} className={`h-10 cursor-pointer px-4 py-2 border border-purple-800 text-white ${!isLoading ? "bg-purple-600":"bg-purple-900 cursor-not-allowed pointer-events-auto"} duration-100 dark:hover:border-purple-900 text-[.86em] `}/>
        </div>
    </form>
  )
}

export default SignUpForm