import { getServerSession, type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/schemas/User";
import connectDb from "./connectDb";
import generateJWT from "./generateJWT";

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
            
                const targetUser = await user.findOne({name:credentials?.username,email:credentials?.email});
                if(targetUser)
                    return targetUser;
                    
                return null;
            },
        }),
    ],
    callbacks:{
        async jwt({token,account}) {
            
            await connectDb(process.env.MONGO_URI!)
            const existingUser = await user.findOne({name:token.name,email:token.email});
            
            if(!existingUser)
                await user.create({name:token.name,email:token.email,image:token.picture});  
            
            const userJwt = generateJWT({name:token.name!,email:token.email!,image:token.picture!});
            
            token.access_token = userJwt;

            return token;
        },
        async session({session,token}){
            if(session && session.user && token){
                session.user.token = String(token.access_token);
            }
            const currentUser = await user.findOne({name:session.user?.name,email:session.user?.email});
                
            if (session.user && currentUser) {
                session.user._id = String(currentUser._id);
            }           
            return session;
        }
    }
}

export const getAuthSession = () => getServerSession(authOptions);