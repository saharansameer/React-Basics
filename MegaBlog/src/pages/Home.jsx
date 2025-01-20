import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import authService from "../appwrite/auth";
import { userLogin, userLogout } from "../features/auth/authSlice";
import {AllPosts} from './index';

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(userLogin(userData));
      } else {
        dispatch(userLogout());
      }
    })
    .then(() => setLoading(false));
  }, []);

  return loading ? (
    <div className='w-full py-10 dark:text-white text-center'>
        <h1 className='text-4xl font-bold py-5'>wow! such an empty</h1>
        <h3 className='font-semibold'>{authStatus ? "Posts are being loaded..." : "Signup or Login to read blog posts"}</h3>
    </div>
  ) : (
    <div className='w-full py-10'>
      <AllPosts />
    </div>
  )
}

export default Home;