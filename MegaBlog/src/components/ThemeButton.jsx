import React, {useEffect} from 'react'
import { toggleThemeMode } from '../features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

function ThemeButton() {
    const currTheme = useSelector((state) => state.theme.themeMode);
    const dispatch = useDispatch();

    // Theme Switcher e.g Light or Dark
    const toggleThemeHandler = () => {
      const nextTheme = currTheme == "dark" ? "light" : "dark";
      dispatch(toggleThemeMode(nextTheme));
    };

    // Read theme from local storage when component mounts
    useEffect(() => {
      const localTheme = localStorage.getItem("themeMode");
      if (localTheme) {
        dispatch(toggleThemeMode(localTheme));
      }
    }, [dispatch]);

    // Fires whenever currTheme get changed and Update theme in <html class="">
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(currTheme);
        localStorage.setItem("themeMode", currTheme);
    }, [currTheme]);

  return (
    <button 
    onClick={toggleThemeHandler}
    className='rounded-full p-4 transition-all ease-in-out hover:bg-[#d5d2d2] dark:hover:bg-[#3f3e3e]'
    style={{backgroundImage: `url(${currTheme == 'light' ? '/dark-mode.svg' : '/light-mode.svg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
    </button>
  )
}

export default ThemeButton;