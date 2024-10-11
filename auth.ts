import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers,signIn,auth} = NextAuth({
    providers: [
        Credentials({
            credentials:{
                email:{
                    label:'Email',
                    type: 'Email',
                    placeholder:'Write your Email',
                },
                password:{
                    label:'Password',
                    type: 'Password',
                    placeholder:'Write your Password',
                },
            },
        //     async authorize(credentials){
        //     console.log(handlers);
        //     let users = null;
        //     users = {
        //         id: 1,
        //         name: "Ali",
        //         email: "patel9619ali@gmail.com",
        //     }
        //     if(!users){ 
        //         console.log('Invalid Crediantials');
        //         return null;
        //     }
        //     return users;
        // }
    })
],
});


