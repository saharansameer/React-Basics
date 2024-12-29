import React, { useState, useEffect } from 'react';
import authService from '../appwrite/auth';
import { userLogin } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom";
import {Button, Input} from "../components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit, setFocus} = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(userLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const currTheme = useSelector((state) => state.theme.themeMode);
  useEffect(() => {
    setFocus("email");
  }, [currTheme]);

  return (
    <div className='w-full flex justify-center py-20 dark:text-white'>
      <div className='flex flex-col items-center py-5 px-10 sm:px-48 shadow-xl dark:shadow-[#000] rounded-xl'>
        <h1 className='text-4xl font-bold py-5'>Sign In</h1>
        <div className='w-full'>
          {error && <p className='text-sm font-semibold text-red-500'>
            {error}  
          </p>}
        </div>
        <form 
        className='flex flex-col items-center gap-y-5'
        onSubmit={handleSubmit(login)}>
          <Input
          type={"email"}
          label={"Email"}
          placeholder={"xyz@example.in"}
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(value) || "Email is invalid"
            }
          })
          }
          />
          <Input 
          type={"password"}
          label={"Password"}
          placeholder={".............."}
          {...register("password", {
            required: true
          })
          }
          />
          <div className='pt-5'>
            <Button 
            text={"Sign In"}
            type={"submit"}
            className={'px-10 sm:px-20 py-1 rounded-md'}
            />
          </div>
          
        </form>
        <div className='flex flex-col md:flex-row gap-x-2 py-5 font-bold text-sm'>
          <button 
          onClick={() => navigate("/signup")}
          className='cursor-pointer hover:underline'>
            Dont have an account ?
          </button>
          <button 
          onClick={() => navigate("/signup")}
          className='cursor-pointer hover:underline'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login