"use client"
import {Tab} from "@headlessui/react"
import { useState } from "react"

const AuthTab:React.FC = ({}) => {

  return (
    <Tab.Group>
        <Tab.List className={"flex items-center justify-center gap-5"}>
            <Tab>
                {({selected})=>(
                    <p className={`${selected ? "text-purple-500":"text-gray-300"} outline-none`}>Create an account</p>
                )}
            </Tab>
            <Tab>
                {({selected})=>(
                    <p className={`${selected ? "text-purple-500":"text-gray-300"} outline-none`}>Sign In</p>
                )}
            </Tab>
        </Tab.List>
        <Tab.Panels>
            <Tab.Panel className="">create content</Tab.Panel>
            <Tab.Panel className="">sign in content</Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
  )
}

export default AuthTab