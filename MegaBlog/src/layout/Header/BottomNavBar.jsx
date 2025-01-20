import React from 'react';
import { ThemeButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BottomNavBar() {
const authStatus = useSelector((state) => state.auth.status);
const navigate = useNavigate(); 
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: authStatus,
    },
    {
      name: 'Posts',
      slug: '/posts',
      active: authStatus
    },
    {
      name: 'Create Post',
      slug: '/add',
      active: authStatus
    },
  ];

  return (
    <div className={`${authStatus ? "" : "hidden"} sm:hidden fixed bottom-0 w-full bg-white dark:bg-[#141414] dark:text-white border-t border-gray-300 dark:border-gray-700`}>
      <div className="flex justify-evenly py-2">
        <ul className="flex gap-x-10 list-none">
          {navItems.map((item, index) =>
            item.active ? (
              <li key={`nav-li-${index}`} className="dark:text-white">
                <button
                  className="font-bold text-sm hover:text-orange-400 dark:hover:text-yellow-300 transition-all ease-in-out"
                  onClick={() => navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
        </ul>
        <ThemeButton />
      </div>
    </div>
  );
}

export default BottomNavBar;

