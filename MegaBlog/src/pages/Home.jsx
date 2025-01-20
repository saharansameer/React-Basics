import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { userLogin, userLogout } from "../features/auth/authSlice";
import {AllPosts} from './index';

function Home() {
  const [loading, setLoading] = useState(false);
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
    .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div>
      {/* While Loading.. */}
    </div>
  ) : (
    <div className='w-full py-10'>
      <AllPosts />
    </div>
  )
}

export default Home;