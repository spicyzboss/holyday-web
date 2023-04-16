import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    // 1 day
    maxAge: 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
  }
}

export default NextAuth(authOptions);

