import React from 'react'
import { Link, NavLink } from 'react-router-dom' ;
import yTechLogo from '../../assets/yTechLogo.jpeg';
const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            // src="https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg?t=st=1723667659~exp=1723671259~hmac=faef00afe3f84ab06ca4fb6121b077704c63702b952aa5ce73f1b54750dca5b6&w=996"
                            src={yTechLogo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Admin
                        </Link>
                        <Link
                            to="/register"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Register
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                   to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                   to= "/services"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contactUs"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
