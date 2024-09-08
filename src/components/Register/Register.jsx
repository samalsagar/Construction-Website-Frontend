import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('success'); // 'success' or 'error'

    const handleCreateAccount = (e) => {
        e.preventDefault();
        // Validate form fields
        if (!name || !email || !password || !number) {
            setPopupType('error');
            setPopupMessage('Please fill in all required fields.');
            setPopupVisible(true);
            return;
        }
        // Proceed with API call
        postApi();
    }

    const postApi = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
            name,
            email,
            number,
            password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/register/add", requestOptions);
            const result = await response.text();
            const parsedResult = JSON.parse(result);

            if (response.ok) {
                if (parsedResult.success) {
                    setPopupType('success');
                    setPopupMessage(parsedResult.message);
                    sendEmail();
                    // Clear form fields
                    setName("");
                    setEmail('');
                    setPassword('');
                    setNumber('');
                } else {
                    setPopupType('error');
                    setPopupMessage(parsedResult.message);
                }
            } else {
                setPopupType('error');
                setPopupMessage('Failed to create account. Please try again.');
            }
        } catch (error) {
            setPopupType('error');
            setPopupMessage('An error occurred. Please try again.');
        } finally {
            setPopupVisible(true);
        }
    }

    const sendEmail = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
            email,
            subject: "Welcome to Yatharth Architect!",
            message: `Thank you for registering with us. We are thrilled to have you join our community and look forward to partnering with you on your architectural journey. At Yatharth Architect, we are dedicated to turning your vision into reality with innovative design solutions and exceptional service. 

Our team of experts is here to guide you every step of the way, ensuring that your project is not only functional but also beautifully crafted to reflect your unique style and needs.

If you have any questions or need assistance, please don't hesitate to reach out. Welcome aboard, and let’s build something extraordinary together!

Warm regards,
The Yatharth Architect Team`
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        await fetch("http://localhost:8080/mail/send", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    const handleClosePopup = () => {
        setPopupVisible(false);
    }

    return (
        <>
            <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
                <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                    <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
                        <div>
                            <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
                        </div>
                    </div>

                    <form className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                        <div className="mb-6">
                            <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="name" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Phone Number</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="number" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter number"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password" type="password" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="!mt-12">
                            <button onClick={handleCreateAccount} type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p className="text-gray-800 text-sm mt-6 text-center">Already have an account?
                            <Link className='text-blue-600 font-semibold hover:underline ml-1' to="/login">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Popup Component */}
            {popupVisible && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${popupType === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <div className={`p-4 rounded-md shadow-md ${popupType === 'success' ? 'bg-green-200' : 'bg-red-200'}`}>
                        <p className={`text-${popupType === 'success' ? 'green' : 'red'}-800`}>{popupMessage}</p>
                        <button onClick={handleClosePopup} className="mt-2 text-blue-600 hover:underline">Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Register;
