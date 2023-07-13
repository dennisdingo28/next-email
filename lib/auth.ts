import { getServerSession, type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/schemas/User";
import connectDb from "./connectDb";

export const authOptions: NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENTID as string,
            clientSecret:process.env.GITHUB_CLIENTSECRET as string,
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENTID as string,
            clientSecret:process.env.GOOGLE_CLIENTSECRET as string,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{label:"Username", type:"text", placeholder:"your username"},
                email:{label:"Email", type:"email", placeholder:"your email"},
                password:{label:"Password",type:"password", placeholder:"your password"},
                image:{label:"Profile image",type:"file"}
            },
            async authorize(credentials, req) {
                console.log(credentials);
                
                const user = {id:"1",name:"Dennis",password:"dingo28",email:"dennismoldovan32@gmail.com",image:"fas",accessToken:"fsa"};
                if (credentials && credentials.username===user.name && credentials.email === user.email && credentials.password === user.password) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks:{
        async jwt({token,account}) {
            console.log("before",token);
            try{
                await connectDb(process.env.MONGO_URI!)
                const existingUser = await user.findOne({name:token.name,email:token.email});
                if(!existingUser)
                    await user.create({name:token.name,email:token.email,image:token.picture});  
            }catch(err){
                console.log(err);
                
            }
                   
            return token;
        },
        async session({session,token}){
            if(session && session.user){

                session.user.accessToken=String(token.accessToken);
            }
            console.log(session);
            
            return session;
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions);