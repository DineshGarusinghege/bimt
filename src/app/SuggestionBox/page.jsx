// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
const SuggestionBox = () => {

    return (
        <>

            <head>
                <title>SuggestionBox | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus values your feedback! Our Suggestion Box provides students and stakeholders an opportunity to share ideas, concerns, and suggestions to help us continuously improve and create a better learning environment."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}
            <div className="relative inset-0 bg-black bg-opacity-40">

                {/* Breadcrumb Section */}
                <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full"
                    style={{
                        top: '50px',
                        left: '300px'
                    }}

                >
                    <nav className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
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


            <div className="relative w-full mt-[110px] py-12 bg-[#F8F9FA]">
                <div className="relative mx-auto max-w-[1450px] h-[684px] bg-white rounded-lg shadow-lg flex flex-col justify-center items-center overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                        style={{
                            backgroundImage: "url('/images/bgimgqa.jpg')",
                        }}
                    ></div>

                    {/* Form Content */}
                    <div className="relative z-10 w-full max-w-[900px] px-6">
                        <h2 className="text-[61px] font-semibold leading-[53px] text-[#272A5D] text-center font-avenir p-[10px]">
                            Suggestion Box
                        </h2>
                        <h2 className="text-[24px] leading-[28px] text-center text-[#272A5D] text-[work-sans] p-[10px]">
                            Your voice matters—together, we can do better
                        </h2>


                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* First Name */}
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
                            />

                            {/* Last Name */}
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
                            />

                            {/* Phone */}
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
                            />

                            {/* Comment */}
                            <textarea
                                placeholder="Comment here"
                                className="w-full md:col-span-2 px-4 py-3 border border-gray-300 rounded-md text-sm resize-none h-[100px]"
                            ></textarea>

                            {/* Submit Button */}
                            <div className="flex justify-center md:col-span-2">
                                <button className="px-6 py-3 bg-[#272A5D] text-white rounded-md text-sm font-semibold hover:bg-[#1F214A]">
                                    SUBMIT
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
