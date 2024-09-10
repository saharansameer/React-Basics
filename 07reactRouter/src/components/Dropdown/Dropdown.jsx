import {useState} from "react"
import {Link, NavLink} from "react-router-dom"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="sm:hidden">
                <NavLink>
                    <button
                    onClick={toggleDropdown}
                    className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none">
                        {/* Hamburger icon */}
                        <span className={`block w-6 h-0.5 mb-1 ${isOpen ? "bg-blue-600" : "bg-black"}`}></span>
                        <span className={`block w-6 h-0.5 mb-1 ${isOpen ? "bg-blue-600" : "bg-black"}`}></span>
                        <span className={`block w-6 h-0.5 mb-1 ${isOpen ? "bg-blue-600" : "bg-black"}`}></span>
                    </button>
                </NavLink>
                
                {/* Dropdown Menu */}
                {isOpen && (
                    <ul className="absolute top-full bg-white border border-gray-300 rounded-md shadow-lg px-5 py-4 right-3">
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
                        <hr className="my-1"/>
                        <li>
                            <div className="flex flex-col">
                                <p>
                                    <Link
                                    className="text-gray-600">
                                        Log in
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                    className="text-blue-700 font-semibold">
                                        Get started
                                    </Link>
                                </p>
                            </div>
                        </li>
                    </ul>
                    

                )}
            </div>
        </>
    )
}

export default Dropdown;