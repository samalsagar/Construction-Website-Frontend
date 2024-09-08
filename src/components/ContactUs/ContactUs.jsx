import React, { useState } from 'react';
import Resp from './Resp';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        if (name && email && subject && message) {
            postData();
        } else {
            setModalVisible(true);
        }
    }

    const postData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "private_content_version=e36b41f68c87bf1df8e6f394cb1341b1");

        const raw = JSON.stringify({
            "personName": name,
            "personEmail": email,
            "personSubject": subject,
            "personMessage": message
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:8080/contact/save", requestOptions);
            const result = await response.text();
            console.log(result);
            setSubmit(true);
        } catch (error) {
            console.error(error);
        }
    }

    if (submit) {
        return <Resp />;
    }

    return (
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] mt-10">
            <div>
                <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center ms-24">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>

                            <Link className="text-[#007bff] text-sm ml-4">
                                <small className="block">Mail</small>
                                <b>architectyatharth@gmail.com</b>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                    <ul className="flex mt-4 space-x-4">
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0 ms-28">
                            <Link to="https://www.facebook.com/profile.php?id=100064310250814&mibextid=ZbWKwL">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                        data-original="#000000" />
                                </svg>
                            </Link>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 511 512">
                                    <path
                                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.5 0 0 28.5 0 63.703v384.58C0 483.5 28.5 512 63.703 512h383.668c35.201 0 63.703-28.5 63.703-63.703V63.703C511.074 28.5 482.574 0 447.374 0H63.703zM453.898 497H64.5V89.664h389.398V497zm-9.879-274.597c-16.637-16.55-39.146-25.745-63.348-25.745-16.658 0-33.176 5.464-46.665 15.484-4.568 3.322-11.297 2.334-14.973-2.179-3.235-4.298-2.648-10.674 1.657-14.441 18.308-13.178 39.482-20.693 62.556-20.693 46.59 0 84.602 38.01 84.602 84.601V497c0 8.285-6.719 15-15 15h-96.406c-8.281 0-15-6.719-15-15v-96.406c0-8.285 6.719-15 15-15h96.406c8.281 0 15 6.719 15 15v13.799zm-77.155-28.176h-57.858v59.492h57.858v-59.492zm-28.891-79.225c-16.446 0-29.8 13.354-29.8 29.8s13.354 29.8 29.8 29.8 29.8-13.354 29.8-29.8-13.354-29.8-29.8-29.8zm0 0"
                                        data-original="#000000" />
                                </svg>
                            </Link>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link to="https://www.instagram.com/yathartharchitect/profilecard/?igsh=Y3VkMzQ2eXV5MGww">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                    </path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <form className="ml-auto space-y-4 mb-10">
                <input
                    required
                    type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    required
                    type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
                    type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    required
                    placeholder='Message' rows="6"
                    className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button
                    type='button'
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                    onClick={handleSend}
                >
                    Send
                </button>
            </form>

            <Modal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                message="Please fill in all required fields."
            />
        </div>
    );
}

export default ContactUs;
