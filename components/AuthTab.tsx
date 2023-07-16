"use client"
import {Tab} from "@headlessui/react"
import { useRef, useState } from "react"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthTab:React.FC = ({}) => {
    const [signInTab,setSignInTab] = useState<boolean>(true);
    const switchTab = useRef<HTMLParagraphElement>(null);
  return (
    <Tab.Group>
        <Tab.Panels>
            <Tab.Panel>
                <LoginForm/>
            </Tab.Panel>
            <Tab.Panel>
                 <SignUpForm cRef={switchTab}/>
            </Tab.Panel>
        </Tab.Panels>
        <Tab.List>
            <Tab onClick={() => setSignInTab(true)}>
                <p ref={switchTab} className={`${signInTab ? "opacity-0 -z-10 absolute":"opacity-100 z-10 relative" } text-[.8em] underline mt-3 text-white`}>I already have an account</p>
            </Tab>
            <Tab onClick={() => setSignInTab(false)}>
                <p className={`${!signInTab ? "opacity-0 -z-10 absolute":"opacity-100 z-10 relative"} text-[.8em] underline mt-3 text-white`}>I do not have an account</p>
            </Tab>
        </Tab.List>

    </Tab.Group>
    );

}

export default AuthTab