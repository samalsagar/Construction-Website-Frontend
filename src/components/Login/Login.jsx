import { useState } from "react";
import Details from "../Details/Details";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleSignIn = (e) => {
        e.preventDefault();
        checkLoginApi();
    }

    const checkLoginApi = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const raw = JSON.stringify({ email, password });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/login", requestOptions);
            const result = await response.text();
            const resultJson = JSON.parse(result);

            if (resultJson.success) {
                setLoginStatus(true);
                setErrorMessage('');

            } else {
                setLoginStatus(false);
                setErrorMessage(resultJson.message);
            }

        } catch (error) {
            console.error(error);
            setLoginStatus(false);
            setErrorMessage(resultJson.message);
        }
    }

    return (
        <>
            {loginStatus ? (
                <Details />
            ) : (
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    {errorMessage && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                            <div className="bg-white p-6 rounded shadow-lg">
                                <p className="text-red-600">{errorMessage}</p>
                                <button
                                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
                                    onClick={() => setErrorMessage('')}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Your Company"
                            src="https://img.freepik.com/free-vector/y-letter-colorful-logo-gradient-vector-designs_343694-1188.jpg?t=st=1723667659~exp=1723671259~hmac=faef00afe3f84ab06ca4fb6121b077704c63702b952aa5ce73f1b54750dca5b6&amp;w=996"
                            className="mx-auto h-10 w-auto"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
                                    onClick={handleSignIn}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
