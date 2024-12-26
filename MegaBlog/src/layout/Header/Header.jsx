import React, { useEffect, useState } from 'react';
import { ThemeButton } from "../../components"
import LogoutButton from "./LogoutButton";
import { useSelector } from 'react-redux';
import { useNavigate, Link} from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const currTheme = useSelector((state) => state.theme.themeMode);

  const navigate = useNavigate(); 
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
    <div className='w-full max-w-screen-sm mx-auto px-5 responsive flex gap-x-20'>
      <div>
        <Link to="/">
          <img src={currTheme == "dark" ? "/blog-logo-white.svg" : "/blog-logo.svg"} className='w-14'/>
        </Link>
      </div>
      
      <div>
        <ul className='flex gap-x-5 list-none'>
          {navItems.map((item, index) => 
            item.active ? (
              <li key={`nav-li-${index}`}>

              </li>
            ) : null

          )}
        </ul>
      </div>

      <div className='flex items-center gap-x-5'>
        <div>
          <LogoutButton />   
        </div>
        
        <span className='w-[1px] h-10 bg-[#646464] dark:bg-[#f1f1f1]'></span>

        <div>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}

export default Header;