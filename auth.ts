import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            async authorize(credentials) {

                console.log(credentials, "credentials");
                console.log(handlers, "handlers");
                console.log(auth, "auth");

                let users = null;
                users = {
                    id: "1",
                    email: "patel9619ali@gmail.com",
                    phoneNumber: "8655286927",
                    password: "Ali9619@",
                };

                if (!users) {
                    console.log('Invalid Credentials');
                    return null;
                }

                return users;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.user = user;
          }
          return token;
        },
        async session({ session, token }:any) {
          session.user = token.user;
          return session;
        },
      },
    pages: {
        signIn: "/sign-in",
    },
});
