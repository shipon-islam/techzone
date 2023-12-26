import prisma from "@/prisma/db";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOption: NextAuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) return null;
        const athenticUser = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!athenticUser) return null;
        return {
          id: user.id,
          name: user.firstname + " " + user.lastname,
          email: user.email,
          image: user.avatar,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user.email) throw new Error("email not here");
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      const firstname = user.name?.split(" ")[0].toLowerCase() as string;
      const lastname = user.name?.split(" ")[1].toLowerCase() as string;
      if (!existingUser) {
        const hashPassword = await bcrypt.hash(user.id, 10);
        await prisma.user.create({
          data: {
            firstname: firstname,
            lastname: lastname,
            email: user.email,
            password: hashPassword,
            avatar: user.image as string,
          },
        });
      }

      return true;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: { ...session.user, id: token.id, role: token.role },
      };
    },
    async jwt({ token, user, account, profile }) {
      if (user && user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        return {
          ...token,
          id: existingUser?.id,
          role: existingUser?.role,
        };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
