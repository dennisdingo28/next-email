import { DefaultSession } from "next-auth";

declare module "next-auth"{
    interface User{
        accessToken:string;
    }
    interface Session extends DefaultSession{
        user?: User;
    }
}