import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Description from './Description'

const Hero = () => {
  return (
    <div className='font-robot mt-16'>
      <h1 className={`text-[2em] sm:text-[2.5em] md:text-[3.2em] font-bold text-center heroTextLight dark:drop-shadow-[0px_0px_100px_#9e19cf]`}>NextEmail - The future of sending emails</h1>
      <div className="flex flex-col xs:flex-row items-center justify-center gap-3 mt-6">
        <Link href={"/docs"} className='w-[100%] sm:w-fit'><Button className='flex items-center gap-2 w-[100%] sm:w-fit'>Docs</Button></Link>
        <Link href={"/dashboard"} className='w-[100%] sm:w-fit'><Button variant={"outline"} size={"default"} className='w-[100%] sm:w-fit'>Get Started For Free</Button></Link>
      </div>
      <Description/>
    </div>
  )
}

export default Hero
