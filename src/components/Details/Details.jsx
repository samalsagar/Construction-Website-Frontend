import React, { useState, useEffect } from 'react';

function Details() {
    const [contactDetails, setContactDetails] = useState([]);
    const [registerDetails, setRegisterDetails] = useState([]);

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
            console.log(parsedResult);
            
            setRegisterDetails(parsedResult);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='flex gap-4 place-content-between'>
                <div
                    className="relative flex w-full md:w-1/2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-10 max-h-[450px] overflow-auto"
                >
                    <div className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h5
                                className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased"
                            >
                                Latest Inquiries
                            </h5>
                            <div className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Contact
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
                            <h5
                                className="text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased"
                            >
                                Latest Registers
                            </h5>
                            <div className='text-emerald-400 font-serif block font-bold text-xl leading-snug tracking-normal text-blue-gray-900 antialiased'>
                                Contact
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;
