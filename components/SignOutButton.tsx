"use client"
import {signOut} from "next-auth/react";

const SignOutButton = () => {
  return (
    <div className="cursor-pointer" onClick={()=>signOut()}>
      <i className="bi bi-box-arrow-right text-slate-400 duration-75 hover:text-red-700 w-[15px] h-[15px]"></i>
    </div>
  )
}

export default SignOutButton
