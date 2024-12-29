import React, {useState, useEffect } from 'react';
import authService from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../features/auth/authSlice';
import { Button, Input } from '../components';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit, setFocus} = useForm();
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currUserData = await authService.getCurrentUser();
        if (currUserData) {
          dispatch(userLogin(currUserData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const currTheme = useSelector((state) => state.theme.themeMode);
  useEffect(() => {
    setFocus("name");
  }, [currTheme]);

  return (
    <div className='w-full flex justify-center py-20 dark:text-white'>
      <div className='flex flex-col items-center py-5 px-10 sm:px-20 lg:px-40 shadow-xl dark:shadow-[#000] rounded-xl'>
        <h1 className='text-3xl md:text-4xl font-bold py-5 text-center'>Create a new account</h1>
        <div className='w-full text-center'>
          {error && <p className='text-sm font-semibold text-red-500'>
            {error}  
          </p>}
        </div>
        <form 
        onSubmit={handleSubmit(signup)}
        className='flex flex-col items-center gap-y-5'
        >
          <Input 
          label={"Full Name"}
          placeholder={"name"}
          {...register("name", {
            required: true
          })
          }
          />
          <Input
          type={"email"}
          label={"Email"}
          placeholder={"name@email.com"}
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/.test(value) || "Please enter a valid Email"
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
            text={"Sign Up"}
            type={"submit"}
            className={'px-10 sm:px-20 py-1 rounded-md'}
            />
          </div>
          
        </form>
        <div className='flex flex-col md:flex-row gap-x-2 py-5 font-bold text-sm'>
          <button 
          onClick={() => navigate("/login")}
          className='cursor-pointer hover:underline'>
            Already have an account ?
          </button>
          <button 
          onClick={() => navigate("/login")}
          className='cursor-pointer hover:underline'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup