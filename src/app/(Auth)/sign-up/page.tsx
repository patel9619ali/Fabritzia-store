'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import Logo from '@/app/components/DesktopHeader/Logo/Logo';
import { LoaderSubmit } from '../../components/LoaderSubmit/LoaderSubmit';
import Link from 'next/link';
type FormData = {
  "First name": string;
  "Last name": string;
  "Email": string;
  "Mobile number": number;
  "Password": string;
  "Confirm Password": string;
};
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #80808014;
    padding-top: 20px;
    .common_input_holder{
      display: block;
      margin-bottom: 12px;
      border: 1px solid #d4d5d9;
      font-size: 12px;
      padding: 11px 12px;
      height: auto;
      color: #282c3f;
      width: 100%;
    }
    .common_input_holder:focus-visible{
    outline: #6a7ec5!important;
    }

    .input_error{
      margin-bottom: 0px; 
      }
`;
const FormMainWrapper = styled.form`
  padding: 36px 36px 0;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  background: #fff;
  width: 50%;
  @media(max-width: 768px){
      width: 80%;
  }
`;
const ErrorMessage = styled.div`
    font-size: 12px;
    margin-bottom: 8px;
    margin-top: 6px;
    color: #ff0000;
    display: inline-block;
  ul{
    list-style: auto;
    padding-left: 12px;
  }
`;
const SignUpAccount = styled.p`
font-size: 14px;
text-align: center;
.sign_up{
text-decoration: none;
color: #6a7ec5;
  font-weight: 700;
}
.sign_up:hover{
text-decoration: none;
color: #6a7ec5;
  font-weight: 700;
}
`;
export default function SignUp() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting  } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data, "data");
    const password = watch("Password");

    return (
      <FormWrapper>
        <Logo className='mt-3'/>
        <FormMainWrapper onSubmit={handleSubmit(onSubmit)} className='mt-3'>
          <input className={`common_input_holder ${errors["First name"] ? 'input_error' : ''}`} type="text" placeholder="First name" {...register("First name", { required: true, minLength: 6, maxLength: 12 })} />
          {errors["First name"] && <ErrorMessage>First name should be between 6 to 12 length</ErrorMessage>}
          
          <input className={`common_input_holder ${errors["Last name"] ? 'input_error' : ''}`} type="text" placeholder="Last name" {...register("Last name", { required: true, minLength: 6, maxLength: 12 })} />
          {errors["Last name"] && <ErrorMessage>Last Name should be between 6 to 12 length</ErrorMessage>}
          
          <input className={`common_input_holder ${errors["Email"] ? 'input_error' : ''}`} type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors["Email"] && <ErrorMessage>Please write Valid Email ID</ErrorMessage>}
          
          <input className={`common_input_holder ${errors["Mobile number"] ? 'input_error' : ''}`} type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
          {errors["Mobile number"] && <ErrorMessage>Please write Valid Phone Number</ErrorMessage>}
          
          <input className={`common_input_holder ${errors["Password"] ? 'input_error' : ''}`} type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 15, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/ })} />
          {errors["Password"] && <ErrorMessage>Password should contain <ul><li>Number</li><li>Capital letter</li><li>Small letter</li><li>Special characters</li><li>Should be between 8 to 15 Characters long</li></ul></ErrorMessage>}
          
          <input className={`common_input_holder ${errors["Confirm Password"] ? 'input_error' : ''}`} type="password" placeholder="Confirm Password" {...register("Confirm Password", { required: true, maxLength: 15, minLength: 5, validate: value => value === password || "Passwords do not match" })} />
          {errors["Confirm Password"] && <ErrorMessage>{errors["Confirm Password"].message}</ErrorMessage>}
          <LoaderSubmit pending={isSubmitting}/>
          <SignUpAccount>Already have an account Please <Link className='sign_up' href="/sign-in">Sign in</Link></SignUpAccount>
        </FormMainWrapper>
      </FormWrapper>
    );
}
