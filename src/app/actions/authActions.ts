'use server';

import { signIn, signOut } from "../../../auth";

import { AuthError } from "next-auth";

export async function handleCrediantialsSignIn({...data}:any){
    try {
        await signIn("credentials",{...data,redirectTo:'/'})
    } 
catch (error) {
        if(error instanceof AuthError){
            switch (error.type) {
                case 'CredentialsSignin':
                    return{
                        message: 'Invalide Crediantials.'
                    }
                default:
                    return{
                        message: 'Something went wrong.'
                    }
            }
        }
        throw error;
    }
}
export async function handleSignOut(){
    await signOut();
} 