import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import SignOutButton from "../SignOutButton";

interface UserProfileProps extends HTMLAttributes<HTMLDivElement>{
    imageUrl: string;
    label: string;
    imageClass?: HTMLAttributes<HTMLImageElement>;
    labelClass?: HTMLAttributes<HTMLParagraphElement>
}

const UserProfile: React.FC<UserProfileProps> = async({imageUrl,label,className,imageClass,labelClass,...props}) => {
  return (
    <div className="flex items-center gap-2">
        <div className={cn(`${className}`,"flex flex-col justify-center items-center gap-2 cursor-pointer sm:flex-row")} {...props}>
            <Image src={imageUrl} width={30} height={30} alt="profile image" className={cn(`${imageClass}`,"rounded-full")}/>
            <p className={`${labelClass} text-center`}>{label}</p>
        </div>
        <SignOutButton/>
    </div>
  )
}

export default UserProfile