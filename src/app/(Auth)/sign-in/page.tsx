'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data,"data");
    console.log(errors,"error");
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <input type="password" placeholder="Password" {...register("Password", {required: true, max: 15, min: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        })}
      />
  
        <input type="submit" />
      </form>
    );
  }