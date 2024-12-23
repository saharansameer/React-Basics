import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleThemeMode } from '../../features/theme/themeSlice';

function Header() {
  const [currTheme, setCurrTheme] = useState("dark");
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    if (currTheme == "dark") {
      setCurrTheme("light");
    } else {
      setCurrTheme("dark");
    }

    dispatch(toggleThemeMode(currTheme));
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(currTheme);
  }, [currTheme]);

  return (
    <div className='w-full max-w-screen-sm mx-auto px-5 responsive'>
      <div></div>
      
      <div className='flex gap-x-5'>
        <button className='dark:text-white'>
          Login
        </button>
        
        <button 
        onClick={toggleThemeHandler}
        className='rounded-full p-5 transition-all ease-in-out'
        style={{backgroundImage: `url(${currTheme == 'light' ? '/dark-theme.svg' : '/light-theme.svg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
        </button>
      </div>
    </div>
  )
}

export default Header;