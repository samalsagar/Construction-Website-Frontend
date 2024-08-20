import React from 'react';
// import './Home.css'; // Import the CSS file for animations and styles
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function AutoScrollingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: 'Innovative Solutions',
            description: 'We provide innovative solutions for modern construction challenges.',
        },
        {
            title: 'Sustainable Practices',
            description: 'Committed to sustainability with eco-friendly building practices.',
        },
        {
            title: 'Expert Team',
            description: 'Our team of experts ensures high-quality craftsmanship and precision.',
        },
        {
            title: 'Customer Satisfaction',
            description: 'We prioritize customer satisfaction with tailored services and support.',
        },
        {
            title: 'Future-Ready Designs',
            description: 'Designs that are not only functional but also future-ready.',
        },
    ];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="relative overflow-hidden mt-10 mb-10 rounded-lg">
            <section className="relative w-full h-screen flex items-center justify-center bg-blue-500 text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Hero Background"
                        className="object-cover w-full h-full opacity-50"
                    />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        Building the Future, One Project at a Time
                    </h1>
                    <p className="text-lg sm:text-2xl mb-8">
                        Exceptional construction services tailored to your needs.
                    </p>
                    <Link
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-orange-700 transition"
                        to="/contactUs"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            <section className="py-20 bg-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex-none w-full p-8 bg-white rounded-lg shadow-lg"
                                    >
                                        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-x-0 -bottom-1/4 flex justify-center space-x-2">
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="contact" className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg mb-8">
                        Ready to start your project? Contact us today for a free consultation.
                    </p>
                    <a
                        href="mailto:admin@yathartharchitech.com"
                        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-orange-700 transition"
                    >
                        Email Us
                    </a>
                </div>
            </section> */}
        </div>
    );
}
