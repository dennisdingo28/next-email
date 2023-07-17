import React from 'react'
import { Button } from './ui/button'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='font-robot mt-16'>
      <h1 className={`text-[2em] sm:text-[2.5em] md:text-[3.2em] font-bold text-center heroTextLight dark:drop-shadow-[0px_0px_100px_#9e19cf]`}>NextEmail - The future of sending emails</h1>
      <div className="flex items-center justify-center gap-3 mt-6">
        <Link href={"/docs"}><Button className='flex items-center gap-2'>Docs <i className="bi bi-code-slash text-[1.1em]"></i></Button></Link>
        <Link href={"/dashboard"}><Button variant={"outline"}>Get Started</Button></Link>
      </div>
    </div>
  )
}

export default Hero
