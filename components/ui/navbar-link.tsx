"use client"
import { FC } from 'react'
import { NavbarLinkProps } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarLink: FC<NavbarLinkProps> = ({label,to}) => {
    const pathname = usePathname();
    const selected = pathname===`/${label}`;
    
  return (
    <Link href={to || "/"} className={`hover:-translate-y-[3px] duration-100 hover:text-purple-800 font-medium dark:font-thin text-[1.1em] dark:hover:text-purple-500 ${selected && "font-semibold dark:font-semibold"}`}>{label}</Link>
  )
}

export default NavbarLink