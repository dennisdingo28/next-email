import { getAuthSession } from "@/lib/auth";
import InfoCard from "./ui/InfoCard"
import getUser from "@/actions/getUser";
import LargeHeading from "./ui/LargeHeading";
import CopyBtn from "./CopyBtn";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ApiKeyProps extends HTMLAttributes<HTMLDivElement>{}

const ApiKey: React.FC<ApiKeyProps> = async ({className}) => {
  const session = await getAuthSession();
  const user = await getUser({_id:session?.user?._id});
    
  return (
    <div className={cn(className)}>
        <div className="flex items-center gap-2 mb-2">
            <LargeHeading text="your api key" className="text-[1.1em] text-slate-200"/>
            <CopyBtn value={user.apiKey} className="rounded-full hover:border-slate-700 text-gray-600 dark:text-gray-300 hover:text-gray-400 duration-75 "/>
        </div>
        <InfoCard variant={"info"} className="text-slate-400">{user.apiKey}</InfoCard>
    </div>
  )
}

export default ApiKey