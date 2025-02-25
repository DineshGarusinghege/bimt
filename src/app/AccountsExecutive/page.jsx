"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import '../styles/Global.scss'
import "react-toastify/dist/ReactToastify.css";



const AcademicCoordinator = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);



    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("message", message);
        if (file) {
            formData.append("file", file);
        }

        try {
            const res = await fetch("/api/accountsexecutive", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            setLoading(false);

            if (res.ok) {
                setSuccess("Message sent successfully!");
                setFirstName("");
                setLastName("");
                setPhone("");
                setEmail("");
                setMessage("");
                setFile(null);
            } else {
                setSuccess(`Error: ${data.message}`);
            }
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
            setSuccess("Failed to send message.");
        }
    };

    return (
        <>

            <head>
                <title>Accounts Ececutive (Female) - BIMT Campus</title>
                <meta
                    name="description"
                    content="A career at BIMT Campus means being part of a dynamic and innovative educational institution committed to excellence. We offer a supportive environment, professional growth opportunities, and the chance to shape the future of education while working with a team of dedicated professionals."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}
            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-top heroSectionHeight"
                style={{ backgroundImage: "url('/images/resources-subindex.jpg')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="bg-opacity-80 py-2 px-4 text-sm text-gray-700 flex flex-wrap justify-center md:justify-start" // flex-wrap added
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#FFFFFFDE",
                                borderRadius: "100px",
                            }}
                        >
                            <ol className="flex flex-wrap space-x-2 justify-center md:justify-start text-center md:text-left">
                                <li>
                                    <Link href="/" className="breadcrumbFontBlack font-avenir">
                                        Home
                                    </Link>
                                </li>
                                <span className="text-gray-400 arroSvgCrumPadding">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[12px] h-[12px] svgRightArrowBreadCrumb"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>

                                <li>
                                    <Link href="/Career" className="breadcrumbFontBlack font-avenir">
                                        Connect With Us
                                    </Link>
                                </li>
                                <span className="text-gray-400 arroSvgCrumPadding">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[12px] h-[12px] svgRightArrowBreadCrumb"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>

                                <li>
                                    <Link href="/Career" className="breadcrumbFontBlack font-avenir">
                                        Connect at BIMT
                                    </Link>
                                </li>
                                <span className="text-gray-400 arroSvgCrumPadding">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[12px] h-[12px] svgRightArrowBreadCrumb"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>

                                <li>
                                    <span className="breadcrumbFontBlack font-avenir">Accounts Executive (Female)</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="bg-white py-10 px-6 lg:px-16">
                <div className="max-w-[1450px] mx-auto py-10">
                    {/* First Section */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side */}
                        <div className="w-full lg:w-1/2">
                            {/* Overview 1 */}
                            <h4 className="text-lg font-bold text-gray-600 text-avenir"
                                style={{
                                    color: '#272A5D',

                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Accounts Executive (Female) </h4>
                            <h2 className="text-2xl font-bold mt-2 text-avenir"
                                style={{
                                    color: '#272A5D',

                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >Requirements</h2>
                            <ul className="list-disc list-outside pl-5 mt-4 text-gray-700 leading-loose text-avenir"
                                style={{
                                    color: '#5A5A5A',

                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                }}
                            >
                                <li className="mb-1">Following a degree in Accounting, Finance, Management, or Commerce from a recognized university or Following AAT / CA Professional Qualifications.</li>
                                <li className="mb-1">Strong numerical and analytical skills.</li>
                                <li className="mb-1">Basic understanding of accounting principles and software (e.g., QuickBooks, Excel).</li>
                                <li className="mb-1">Excellent attention to detail and organizational skills.</li>
                                <li className="mb-1">Good communication and teamwork abilities.</li>
                                <li className="mb-1">Must have excellent knowledge of Accounting Double Entries.</li>
                                <li className="mb-1">Excellent attention to detail and organizational skills.</li>
                                <li>Age below 30</li>
                            </ul>

                            {/* Overview 2 */}
                            <h2 className="text-2xl font-bold mt-2 text-avenir"
                                style={{
                                    color: '#272A5D',

                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >Responsibilities</h2>
                            <ul className="list-disc list-outside pl-5 mt-4 text-gray-700 leading-loose text-avenir"
                                style={{
                                    color: '#5A5A5A',

                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                }}
                            >
                                <li className="mb-1">Assist in preparing and maintaining financial records, including ledgers and journals.</li>
                                <li className="mb-1">Support the accounts team with accounts payable and receivable functions.</li>
                                <li className="mb-1">Perform reconciliations of bank statements and accounts.</li>
                                <li className="mb-1">Assist in preparing financial reports and summaries.</li>
                                <li className="mb-1">Support tax filing and compliance processes under supervision.</li>
                                <li className="mb-1">Ensure accurate data entry and maintain organized financial records.</li>
                                <li>Collaborate with the team to improve accounting procedures and systems.</li>
                            </ul>

                        </div>

                        {/* Right Side */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            {/* Large Image */}
                            <img
                                src="/images/small-business-accountant-2-1024x683-1.jpg"
                                alt="Large"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>




            <div className="bg-[#F5F9FC] py-12 px-4">
                <div className="max-w-[900px] mx-auto">
                    {/* Heading */}
                    <h2 className="text-center text-xl font-semibold text-[#272A5D] mb-8" style={{
                        fontSize: '40px', fontWeight: '600px', lineHeight: '53px'
                    }}>
                        VACANCIES
                    </h2>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* Name */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-5 py-3 border border-gray-300 rounded-md text-sm"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-3 border border-gray-300 rounded-md text-sm"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="relative w-full md:col-span-2">
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-5 py-3 border border-gray-300 rounded-md text-sm resize-none h-[100px]"
                                required
                            ></textarea>
                        </div>

                        {/* File Upload */}
                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Upload Your CV
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm cursor-pointer"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex md:col-span-2 gap-4 mt-4">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#272A5D] text-white rounded-md text-sm font-semibold hover:bg-[#1F214A]"
                            >
                                {loading}

                                {loading ? "Sending..." : "Submit"}
                            </button>
                            {success && <p className="text-center text-green-600">{success}</p>}
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
};

export default AcademicCoordinator;
