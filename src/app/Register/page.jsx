'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/Global.scss';
import '../styles/AboutUs.scss';
import MainHeader from '../ui/MainHeader';

export default function ApplicationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('message', message);
        if (file) {
            formData.append('file', file);
        }

        try {
            const res = await fetch('/api/contacts', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            setLoading(false);

            if (res.ok) {
                setSuccess('Message sent successfully!');
                setFirstName('');
                setLastName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setFile(null);
            } else {
                setSuccess(`Error: ${data.message}`);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            setSuccess('Failed to send message.');
        }
    };

    const downloadApplication = () => {
        const link = document.createElement('a');
        link.href = '/Application-Form-BIMT-4.pdf';
        link.download = 'ApplicationForm.pdf';
        link.click();
    };

    return (
        <>
            <head>
                <title>Register - BIMT Campus</title>
                <meta
                    name="description"
                    content=""
                />
            </head>
            <MainHeader />
            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-center heroSectionHeight"
                style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="py-2 px-4 text-sm"
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#FFFFFF30",
                                borderRadius: '100px'
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="text-black breadcrumbFontWhite font-avenir">
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
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                <li>
                                    <span className="breadcrumbFontWhite font-avenir">Student Register</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


            <div style={{ backgroundImage: 'url("/images/background-pattern-scaled (1).jpeg")' }}>
                <div className="px-4 bg-white bg-white bg-opacity-70" >
                    <div className="max-w-[1420px] mx-auto pt-[100px] pb-[100px]">
                        {/* Heading */}
                        <h2 className="text-left text-xl font-semibold text-[#272A5D] mb-8" style={{ fontSize: '40px', fontWeight: '600', lineHeight: '53px' }}>
                            Step 1: Download Your Application
                        </h2>
                        <div className="text-left mb-10">
                            <p style={{ color: "#5A5A5A" }}>Click the button below to download the official application form.</p>
                            <button onClick={downloadApplication} className="mt-8 px-4 py-2 bg-[#ffffff] hover:bg-[#272A5D] text-[#272A5D] hover:text-white rounded-md" style={{ border: "2px solid #272A5D" }}>
                                Download Application
                            </button>
                        </div>

                        <h2 className="text-left text-xl font-semibold text-[#272A5D]" style={{ fontSize: '40px', fontWeight: '600', lineHeight: '53px' }}>
                            Step 2: Upload Your Completed Application
                        </h2>
                        <p className=' mb-8 mt-5' style={{ color: "#5A5A5A" }}>Click the button below to download the official application form.</p>
                        {/* Form */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* Name */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 text-sm"
                                    required
                                />
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 text-sm"
                                    required
                                />
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 text-sm"
                                    required
                                />
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 text-sm"
                                    required
                                />
                            </div>
                            {/* Message */}
                            <div className="relative w-full md:col-span-2">
                                <textarea
                                    placeholder="Any Comments"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 text-sm resize-none h-[100px]"
                                    required
                                ></textarea>
                            </div>

                            {/* File Upload */}
                            <div className="md:col-span-2">
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="w-full py-3 rounded-md text-sm cursor-pointer"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex md:col-span-2 gap-4 mt-4">
                                <button type="submit" style={{ width: '100%', border: '1px #272A5D solid', borderRadius: '12px' }} className="px-6 py-3 text-[#272A5D]  hover:text-white text-sm font-semibold hover:bg-[#1F214A]">
                                    {loading ? 'Sending...' : 'SEND'}
                                </button>
                                {success && <p className="text-center text-green-600">{success}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
