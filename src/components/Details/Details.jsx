import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Details() {
    const [contactDetails, setContactDetails] = useState([]);
    const [registerDetails, setRegisterDetails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [deleteType, setDeleteType] = useState(''); // 'contact' or 'register'

    useEffect(() => {
        getContactDetailsApi();
        getRegisterDetailsApi();
    }, []);

    const getContactDetailsApi = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/contact/allDetails", requestOptions);
            const result = await response.text();
            const parsedResult = JSON.parse(result);
            setContactDetails(parsedResult);
        } catch (error) {
            console.error(error);
        }
    }

    const getRegisterDetailsApi = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/register/allDetails", requestOptions);
            const result = await response.text();
            const parsedResult = JSON.parse(result);
            setRegisterDetails(parsedResult);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = useCallback((param, type) => {
        setItemToDelete(param);
        setDeleteType(type);
        setIsModalOpen(true);
    }, []);

    const deleteApi = async (key, val) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const raw = JSON.stringify({
            [key]: val
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        await fetch("http://localhost:8080/delete", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    const confirmDelete = async () => {
        if (!itemToDelete || !deleteType) return;

        const entries = Object.entries(itemToDelete);

        if (entries.length > 0) {
            const [firstKey, firstValue] = entries[0];
            await deleteApi(firstKey, firstValue);

            if (deleteType === 'contact') {
                await getContactDetailsApi();
            } else if (deleteType === 'register') {
                await getRegisterDetailsApi();
            }
        }

        setIsModalOpen(false);
        setItemToDelete(null);
        setDeleteType('');
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setItemToDelete(null);
        setDeleteType('');
    }

    return (
        <>
            <div className='flex gap-4 place-content-between'>
                <div
                    className="relative flex w-full md:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-10 max-h-[450px] overflow-auto"
                >
                    <div className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Latest Inquiries
                            </h5>
                            <div className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Contact
                            </div>
                            <div className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Action
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {contactDetails.map((contact, index) => (
                                <div key={index} className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                    <div className="flex items-center gap-x-3">
                                        <img
                                            src="https://static.vecteezy.com/system/resources/thumbnails/028/794/706/small_2x/cartoon-cute-school-boy-photo.jpg"
                                            alt="Tania Andrew"
                                            className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                        />
                                        <div>
                                            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                {contact.personName}
                                            </h6>
                                            <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                                                {contact.personEmail}
                                            </p>
                                            <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                                                {contact.personSubject}
                                            </p>
                                        </div>
                                    </div>
                                    <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                        0987654321
                                    </h6>
                                    <button onClick={() => handleDelete(contact, 'contact')} className='bg-red-600 p-1 px-2 text-white rounded-md font-serif'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="relative flex w-full md:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-10 max-h-[500px] overflow-auto"
                >
                    <div className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Latest Registers
                            </h5>
                            <div className='text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased'>
                                Contact
                            </div>
                            <div className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Action
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {registerDetails.map((register, index) => (
                                <div key={index} className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                    <div className="flex items-center gap-x-3">
                                        <img
                                            src="https://static.vecteezy.com/system/resources/thumbnails/028/794/706/small_2x/cartoon-cute-school-boy-photo.jpg"
                                            alt="Tania Andrew"
                                            className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                        />
                                        <div>
                                            <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                {register.name}
                                            </h6>
                                            <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                                                {register.email}
                                            </p>
                                        </div>
                                    </div>
                                    <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                        {register.number}
                                    </h6>
                                    <button onClick={() => handleDelete(register, 'register')} className='bg-red-600 p-1 px-2 text-white rounded-md font-serif'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div id="deleteModal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
                    <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-800">
                        <button type="button" className="absolute top-2.5 right-2.5" onClick={closeModal}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                        <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                        <div className="flex justify-center items-center space-x-4">
                            <button onClick={closeModal} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                No, cancel
                            </button>
                            <button onClick={confirmDelete} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                Yes, I'm sure
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Details;
