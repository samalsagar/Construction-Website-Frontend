import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import yTechLogo from '../../assets/yTechLogo.jpeg';
export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y rounded-md">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                // src="https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg?t=st=1723667659~exp=1723671259~hmac=faef00afe3f84ab06ca4fb6121b077704c63702b952aa5ce73f1b54750dca5b6&w=996"
                                className="mr-3 h-16 rounded-lg"
                                alt="Logo"
                                src={yTechLogo}
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-7 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-serif">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink
                                        to="about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className='mb-4'>
                                    <NavLink
                                        to="/services"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive ? "text-orange-500" : "text-gray-700"} 
                                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                <li className='mb-4'>
                                    <NavLink
                                        to="/contactUs"
                                        className={({ isActive }) =>
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
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-serif">WE OFFERS</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/services" className="hover:underline">
                                        Construction Planning
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="/services" className="hover:underline">
                                        Construction
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="hover:underline">
                                        Renovation and Construction
                                    </Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-serif">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='mb-4'>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/rateus" className="hover:underline">
                                        Rating & Review
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="overflow-x-auto">
                            <h2 className="mb-6 text-sm font-semibold font-serif text-gray-900 uppercase">Contact</h2>
                            <ul className="text-gray-500 font-medium space-y-4">
                                <li className="mb-4 break-words">
                                    Address: Surya-Nagar Colony,<br />
                                    Gilat Bazar,<br />
                                    Uco Bank, Varanasi, 221003
                                </li>
                                <li className='mb-4 break-words'>
                                    <div>Email: architectyatharth@gmail.com</div>
                                </li>
                                <li className="break-words">
                                   <div> Contact: +91-6306206941</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-2" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="#" className="hover:underline text-blue-700">
                            YATHARTH ARCHITECT
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
