import React from 'react';
import { Rating } from "@material-tailwind/react";
import { useState } from 'react';
function Ratings() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(message);

    }
    return (
        <div className='flex flex-col items-center py-6 mt-10 mb-10'>
            <div className='flex justify-between gap-4 p-4 w-full max-w-screen-lg'>
                <div className='bg-white rounded-xl shadow-lg p-4 flex flex-col items-center max-w-xl w-3/4'>
                    <h2 className='text-gray-800 text-2xl font-semibold mb-4'>
                        Ratings!
                    </h2>
                </div>

                <div className='bg-white rounded-xl shadow-lg p-4 flex flex-col items-center max-w-sm'>
                    <h2 className='text-gray-800 text-2xl font-semibold mb-4'>
                        Share Your Thoughts with Us!
                    </h2>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            className='mt-3 p-3 text-gray-500 rounded border border-gray-300 mb-4 w-full'
                            placeholder='Enter your email'
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="3"
                            required
                            className='mt-3 p-3 text-gray-500 rounded border border-gray-300 mb-4 w-full'
                            placeholder="Leave a message, if you want"
                        ></textarea>
                        <button
                            type="submit"
                            className='mb-3 p-3 rounded-xl bg-blue-600 text-white w-full hover:bg-blue-700 transition-colors'
                        >
                            Rate now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Ratings;
