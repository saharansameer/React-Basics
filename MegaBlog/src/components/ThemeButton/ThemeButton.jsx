import React, {useState, useEffect} from 'react'
import { toggleThemeMode } from '../../features/theme/themeSlice';
import { useDispatch } from 'react-redux';

function ThemeButton() {
    const [currTheme, setCurrTheme] = useState("dark");
    const dispatch = useDispatch();

    // Theme Switcher e.g Light or Dark
    const toggleThemeHandler = () => {
        setCurrTheme((prevTheme) => prevTheme == "dark" ? "light" : "dark");

        dispatch(toggleThemeMode(currTheme));
    };

    // Fires whenever currTheme get changed and Update theme in <html class="">
    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(currTheme);
    }, [currTheme]);

  return (
    <button 
    onClick={toggleThemeHandler}
    className='rounded-full p-5 transition-all ease-in-out'
    style={{backgroundImage: `url(${currTheme == 'light' ? '/dark-theme.svg' : '/light-theme.svg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
    </button>
  )
}

export default ThemeButton;