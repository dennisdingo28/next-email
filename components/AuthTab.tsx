"use client"
import {Tab} from "@headlessui/react"
import { useState } from "react"


const AuthTab:React.FC = ({}) => {
    const [signInTab,setSignInTab] = useState<boolean>(true);
    console.log(signInTab);
    
  return (
    <Tab.Group>
        <Tab.List>
            <Tab onClick={() => setSignInTab(true)}>
                <p className={`${signInTab ? "opacity-0 -z-10 absolute":"opacity-100 z-10 relative" }`}>Sign in</p>
            </Tab>
            <Tab onClick={() => setSignInTab(false)}>
                <p className={`${!signInTab ? "opacity-0 -z-10 absolute":"opacity-100 z-10 relative"}`}>I do not have an account</p>
            </Tab>
        </Tab.List>
        <Tab.Panels>
            <Tab.Panel>
                <p className={`${signInTab ? "opacity-100 z-10 relative" : "opacity-0 -z-10 absolute"}`}>sign in content</p>
            </Tab.Panel>
            <Tab.Panel>
                <p className={`${!signInTab ? "opacity-100 z-10 relative" : "opacity-0 -z-10 absolute"}`}>create content</p>
            </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    );

}

export default AuthTab