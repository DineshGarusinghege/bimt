// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SuggestionBox.scss"


const SuggestionBox = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comment: "",
    });

    // const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to validate email format
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.comment) {
            toast.error("All fields are required!", { position: "top-right", autoClose: 3000 });
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Invalid email format!", { position: "top-right", autoClose: 3000 });
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Your message has been sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                });

                // Reset the form after successful submission
                setFormData({ firstName: "", lastName: "", phone: "", email: "", comment: "" });
            } else {
                toast.error(data.message || "Something went wrong. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Network error. Please try again later.", {
                position: "top-right",
                autoClose: 3000,
            });
            console.log(error)
        }
    };

    return (
        <>

            <head>
                <title>SuggestionBox - BIMT Campus</title>
                <meta
                    name="description"
                    content="Share your feedback at BIMT Campus! Help improve our learning environment with your ideas and suggestions."
                />
            </head>
            <ToastContainer />
            <MainHeader />

            <div className="flex flex-col w-[1450px] gap-5 mt-10 mb-10 mx-auto">
                <div className="self-start text-black text-[16px] leading-[25px] pr-[30px] pb-[5px] pl-[30px] pt-[5px]">
                    <nav className="bg-gray-200 bg-opacity-80 py-2 px-4 text-sm text-gray-700"
                        style={{ display: 'inline-flex', padding: '5px 25px', justifyContent: 'center', alignItems: 'center', gap: '10px', background: "#ffffff45" }}
                    >
                        <ol className="flex space-x-2">
                            <li>
                                <Link href="/" className="hover:underline hover:text-blue-500"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <span className="text-gray-400 pt-[4px]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="black" />
                            </svg></span>
                            <li>
                                <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    Connect with us
                                </Link>
                            </li>
                            <span className="text-gray-400 pt-[4px]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="black" />
                            </svg></span>
                            <li>
                                <span className="text-gray-600"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >Suggestion Box</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>





            <div className="relative w-full mb-[110px]">
                <div className="relative mx-auto max-w-[1450px] bg-white shadow-lg flex flex-col justify-center items-center overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                        style={{
                            backgroundImage: "url('/images/background-pattern-scaled.jpeg')",
                        }}
                    ></div>

                    {/* Form Content */}
                    <div className="relative z-10 w-full max-w-[900px] px-[10px] py-[80px]">
                        <h2 className="text-[61px] font-semibold leading-[70px] text-[#272A5D] text-center font-avenir p-[10px]">
                            Suggestion Box
                        </h2>
                        <h2 className="text-[24px] leading-[28px] text-center text-[#272A5D] text-[work-sans] py-[20px]">
                            Your voice matters—together, we can do better 
                        </h2>


                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-[20px]">
                            {/* First Name */}
                            <input
                                name="firstName"
                                value={formData.firstName} onChange={handleChange}
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 border border-gray-300 text-sm font-bold"
                            />

                            {/* Last Name */}
                            <input
                                name="lastName"
                                value={formData.lastName} onChange={handleChange}
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 border border-gray-300 text-sm font-bold"
                            />

                            {/* Phone */}
                            <input
                                name="phone"
                                value={formData.phone} onChange={handleChange}
                                type="text"
                                placeholder="Phone"
                                className="w-full px-4 py-3 border border-gray-300 text-sm font-bold"
                            />

                            {/* Email */}
                            <input value={formData.email} onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 text-sm font-bold"
                            />

                            {/* Comment */}
                            <textarea
                                name="comment"
                                value={formData.comment} onChange={handleChange}
                                placeholder="Comment here"
                                className="w-full md:col-span-2 px-4 py-3 border border-gray-300 text-sm resize-none h-[100px] font-bold"
                            ></textarea>

                            {/* Submit Button */}
                            <div className="flex justify-center md:col-span-2">
                                <button  className="btnBlue bg-[#272A5D] text-white px-4 py-2 rounded-lg font-semibold transition duration-150 text-sm md:text-lg">
                                    <span>SUBMIT</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuggestionBox;
