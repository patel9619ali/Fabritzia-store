'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '@/app/components/DesktopHeader/Logo/Logo';
import { LoaderSubmit } from '@/app/components/LoaderSubmit/LoaderSubmit';
import {handleCrediantialsSignIn} from '../../actions/authActions';
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #80808014;
    height: 100vh;

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
export default function LoginPassword() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = async (data:any) => {
      try {
        const result = await handleCrediantialsSignIn(data);
        console.log(data,"data")
      } catch (error) {
        
      }
    }
    return (
      <FormWrapper>
         <Logo className=''/>
        <FormMainWrapper onSubmit={handleSubmit(onSubmit)} className='mt-3'>
          <input className={`common_input_holder ${errors["Email"] ? 'input_error' : ''}`} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          {errors["Email"] && <ErrorMessage>Please Provide the Valid Email</ErrorMessage>}
          <input className={`common_input_holder ${errors["mobileNumber"] ? 'input_error' : ''}`} type="tel" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
          {errors["mobileNumber"] && <ErrorMessage>Please write Valid Phone Number</ErrorMessage>}
          <input className={`common_input_holder ${errors["Password"] ? 'input_error' : ''}`} type="password" placeholder="Password" {...register("Password", {required: true, max: 15, min: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          })}
        />
        {errors["Password"] && <ErrorMessage>Password should contain <ul><li>Number</li><li>Capital letter</li><li>Small letter</li><li>Special characters</li><li>Should be between 8 to 15 Characters long</li></ul></ErrorMessage>}
        <LoaderSubmit pending={isSubmitting}/>
        <SignUpAccount>Doesn't have an account Please <Link className='sign_up' href="/sign-up">Sign up</Link></SignUpAccount>
        </FormMainWrapper>
      </FormWrapper>
    );
  }