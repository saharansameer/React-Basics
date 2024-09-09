import React from "react";
import logo from "../../assets/your-logo.png"
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="shadow p-2 sticky top-0 bg-white">
        <nav className="w-full flex flex-row justify-evenly items-center">
            <div>
                <Link to='/'>
                    <img src={logo}
                    alt="logo"
                    className="h-12" />
                </Link>
            </div>
            <div className="max-md:hidden"> 
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                        to='/'
                        className={({isActive}) => `font-bold text-lg ${isActive ? "text-blue-700" : "text-gray-600"} hover:text-blue-700`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/about'
                        className={({isActive}) => `font-bold text-lg ${isActive ? "text-blue-700" : "text-gray-600"} hover:text-blue-700`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/contact'
                        className={({isActive}) => `font-bold text-lg ${isActive ? "text-blue-700" : "text-gray-600"} hover:text-blue-700`}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/github'
                        className={({isActive}) => `font-bold text-lg ${isActive ? "text-blue-700" : "text-gray-600"} hover:text-blue-700`}>
                            Github
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <Link
                className="text-gray-600">Log in</Link>
                <Link
                className="bg-blue-700 text-white rounded-xl px-3 py-2">Get started</Link>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
