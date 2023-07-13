"use client"
import { FC, useState } from 'react'
import ButtonIcon from './ui/button-icon'
import {MoonStarIcon,Sun} from "lucide-react"
import { useRouter } from "next/navigation";


const ThemeToggler: FC = () => {
    const router = useRouter();
    const [theme,setTheme] = useState<string>("dark");
    function toggleTheme(){
        const root = document.getElementsByTagName('html')[0];
        if(root.classList.contains('dark')){
            document.cookie=`theme=light`;
            setTheme("light");
        }else{
            document.cookie=`theme=dark`;
            setTheme("dark");
        }
        router.refresh();
    }
    
  return(
    <ButtonIcon className='rounded-full p-3' onClick={toggleTheme} icon={theme==="dark" ? <Sun size={16}/>:<MoonStarIcon size={16}/>}/>
  )
}

export default ThemeToggler