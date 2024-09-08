import React from 'react';

function Modal({ isVisible, onClose, message }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
                <p className="text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
