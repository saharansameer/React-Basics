import React, { useEffect, useState } from 'react';
import {ThemeButton} from "../../components"
import LogoutButton from "./LogoutButton";
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate(); 
  const authStatus = useSelector((state) => state.auth.status);
  
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'Posts',
      slug: '/posts',
      active: authStatus,
    },
    {
      name: 'Create Post',
      slug: '/create',
      active: authStatus
    },
  ];

  return (
    <div className='w-full max-w-screen-sm mx-auto px-5 responsive'>
      <div></div>
      
      <div className='flex gap-x-5'>
        <ThemeButton />
      </div>
    </div>
  )
}

export default Header;