import NextAuth from "next-auth"

interface UserProfile {
  name: string;
  email: string;
  image: string;
}

declare module "next-auth" {
  interface Session {
    user: UserProfile;
  }
}

