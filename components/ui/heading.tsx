import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    text: string;
}
const Heading:React.FC<HeadingProps> = ({text,className}) => {
  return (
    <h1 className={cn(`text-[1.2em] sm:text-[1.4em] md:text-[1.6em] font-light text-[#1e1e1e] dark:text-[#d9d9d9]`,className)}>{text}</h1>
  )
}

export default Heading;
