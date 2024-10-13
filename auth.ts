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
                console.log(users);
                if (!users) {
                    console.log('Invalid Credentials');
                    return null;
                }

                return users;
            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
          if (user) {
            token.id = user.id as string;
          }
          return token;
        },
        session({ session, token }) {
          session.user.id = token.id;
          return session;
        },
      },
    pages: {
        signIn: "/sign-in",
    },
});