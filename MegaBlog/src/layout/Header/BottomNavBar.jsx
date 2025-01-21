import React from 'react';
import { ThemeButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BottomNavBar() {
const authStatus = useSelector((state) => state.auth.status);
const currTheme = useSelector((state) => state.theme.themeMode);
const navigate = useNavigate(); 
  const navItems = [
    {
      path: 'home-icon-black.svg',
      dark: 'home-icon-white.svg',
      slug: '/',
      active: authStatus,
    },
    {
      path: 'user-icon-black.svg',
      dark: 'user-icon-white.svg',
      slug: '/posts',
      active: authStatus
    },
    {
      path: 'create-icon-black.svg',
      dark: 'create-icon-white.svg',
      slug: '/add',
      active: authStatus
    },
  ];

  return (
    <div className={`${authStatus ? "" : "hidden"} sm:hidden fixed bottom-0 w-full bg-white dark:bg-[#141414] dark:text-white border-t border-gray-300 dark:border-gray-700`}>
      <div className="flex justify-center py-2">
        <ul className="flex gap-x-10 list-none">
          {navItems.map((item, index) =>
            item.active ? (
              <li key={`nav-li-${index}`} className="dark:text-white">
                <button
                  style={{backgroundImage: `url(${currTheme == 'light' ? `/${item.path}` : `/${item.dark}`})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  className="p-3 transition-all ease-in-out hover:bg-[#d5d2d2] dark:hover:bg-[#3f3e3e] hover:rounded-sm"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavBar;

