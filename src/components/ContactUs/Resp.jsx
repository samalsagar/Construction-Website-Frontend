import React from 'react';

function Resp() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-green-100 rounded-md p-6 flex items-center space-x-4">
                <svg
                    className="stroke-2 stroke-current text-green-600 h-8 w-8 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2 4-4" />
                </svg>

                <div className="text-green-700">
                    <div className="font-bold text-xl">Your details have been saved!</div>
                    <div>Thanks for visiting us!!! We will get back to you soon </div>
                </div>
            </div>
        </div>
    );
}

export default Resp;
