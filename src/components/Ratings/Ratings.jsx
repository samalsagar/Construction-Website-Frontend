import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Ratings() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [ratings, setRatings] = useState([]);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // 'success' or 'error'
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveRating();
        allRatings();
    };

    const saveRating = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const raw = JSON.stringify({
            "emailId": email,
            "message": message
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/ratings/add", requestOptions);
            const result = await response.json();
            if (result.success) {
                setPopupMessage(result.message);
                setPopupType('success');
                setEmail('');
                setMessage('');
                allRatings();
            } else {
                setPopupMessage(result.message);
                setPopupType('error');
            }
        } catch (error) {
            console.error("Error saving rating:", error);
            setPopupMessage('An error occurred.');
            setPopupType('error');
        } finally {
            setShowPopup(true);
        }
    };

    const allRatings = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/ratings/allRatings", requestOptions);
            const result = await response.json();
            console.log(result);
            
            setRatings(result);
        } catch (error) {
            console.error("Error fetching ratings:", error);
        }
    };

    useEffect(() => {
        allRatings();
    }, []);

    return (
        <div className='relative flex flex-col items-center py-6 mt-10 mb-10'>
            {showPopup && (
                <div className='fixed inset-0 bg-black opacity-50'></div>
            )}

            <div className='flex justify-between gap-4 p-4 w-full max-w-screen-lg'>
                <div className='rounded-xl shadow-lg p-4 flex flex-col items-center max-w-xl w-3/4 bg-slate-100'>
                    <h2 className='text-gray-800 text-2xl font-semibold mb-4'>Ratings!</h2>
                    <div className='w-full max-h-80 overflow-auto'>
                        {ratings.length > 0 ? (
                            ratings.map((rating) => (
                                <div key={rating.ratingId} className='border-b border-gray-200 py-2'>
                                    <p className='text-gray-700 font-medium truncate'>{rating.emailId}</p>
                                    <p className='text-gray-500 truncate'>{rating.message}</p>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500'>No ratings available.</p>
                        )}
                    </div>
                </div>

                <div className=' bg-slate-100 rounded-xl shadow-lg p-4 flex flex-col items-center max-w-sm'>
                    <h2 className='text-gray-800 text-2xl font-semibold mb-4'>
                        Share Your Thoughts with Us!
                    </h2>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col mt-5'>
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
                            className='mt-8 p-3 rounded-xl bg-blue-600 text-white w-full hover:bg-blue-700 transition-colors'
                        >
                            Rate now
                        </button>
                    </form>
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <div
                    className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg max-w-lg ${
                        popupType === 'success' ? 'bg-green-200 border border-green-400' : 'bg-red-200 border border-red-400'
                    }`}
                    style={{ maxHeight: '80vh', overflow: 'hidden', zIndex: 1000 }}
                >
                    <p className={`text-lg font-semibold ${
                        popupType === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}>
                        {popupMessage}
                    </p>
                    <button
                        onClick={() => setShowPopup(false)}
                        className='mt-4 p-3 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400 transition-colors'
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default Ratings;
