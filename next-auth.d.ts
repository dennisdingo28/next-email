import {DefaultSession} from "next-auth";
import { ProjectProps } from "./types";

declare module "next-auth"{
    interface User {
        _id: string;
       token: string;
    }
    interface Session extends DefaultSession {
        user?: User;
    }
}