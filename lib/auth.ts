import { getServerSession, type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import user from "@/schemas/User";
import connectDb from "./connectDb";
import generateJWT from "./generateJWT";
import compareValues from "./compareBcrypt";

export const authOptions: NextAuthOptions = {
  pages:{
    error:"/errPage",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID as string,
      clientSecret: process.env.GITHUB_CLIENTSECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENTSECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Username/Email",
          type: "text",
          placeholder: "username or email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials, req) {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        await connectDb(process.env.MONGO_URI!);

        if (emailRegex.test(String(credentials?.identifier))) {
          const userAttempt = await user.findOne({
            email: credentials?.identifier,
          });

          if (!userAttempt)
            throw new Error(
              `Cannot find any users with the email of ${credentials?.identifier}`
            );

            const passwordMatch = await compareValues(String(credentials?.password),userAttempt.password);
            
          if (passwordMatch) {
            
            return userAttempt;
          }
          throw new Error(`Password doesn't match !`);
        } else {
          const userAttempt = await user.findOne({
            name: credentials?.identifier,
          });
          const passwordMatch = await compareValues(
            String(credentials?.password),
            userAttempt.password
          );

          if (passwordMatch) {
            return userAttempt;
          }
          throw new Error(`Password doesn't match !`);

        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      await connectDb(process.env.MONGO_URI!);
      const existingUser = await user.findOne({ email: token.email });
      
      if(existingUser){
        if(existingUser.name!==token.name){
          throw new Error('Email is already taken !');
        }
      }else{
        await user.create({
          name: token.name,
          email: token.email,
          image: token.picture,
        });
      }
      const userJwt = generateJWT({
        name: token.name!,
        email: token.email!,
        image: token.picture!,
      });
    
      token.access_token = userJwt;

      return token;
    },
    
    async session({ session, token }) {
      if (session && session.user && token) {
        session.user.token = String(token.access_token);
      }
      const currentUser = await user.findOne({
        name: session.user?.name,
        email: session.user?.email,
      });

      if (session.user && currentUser) {
        session.user._id = String(currentUser._id);
      }
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);