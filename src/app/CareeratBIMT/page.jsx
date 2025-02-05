// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import React, {useEffect } from "react";
import '../styles/Global.scss'
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectwithUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };


    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    
    return (
        <>

            <head>
                <title>Academic Coordinator - BIMT Campus</title>
                <meta
                    name="description"
                    content="A career at BIMT Campus means being part of a dynamic and innovative educational institution committed to excellence. We offer a supportive environment, professional growth opportunities, and the chance to shape the future of education while working with a team of dedicated professionals."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}
            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-top heroSectionHeight"
                style={{ backgroundImage: "url('/images/GettyImages-1199434187.avif')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#FFFFFFDE",
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="hover:underline hover:text-blue-500 breadcrumbFontBlack font-avenir">
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
                                    <Link href="/Career" className="hover:underline hover:text-blue-500 breadcrumbFontBlack font-avenir">
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
                                    <Link href="/Career" className="hover:underline hover:text-blue-500 breadcrumbFontBlack font-avenir">
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
                                    <span className="hover:underline hover:text-blue-500 breadcrumbFontBlack font-avenir">Academic Coordinator</span>
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
                            >Overview</h4>
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
                                <li className="mb-1">Bachelor’s degree in Science, Business Management, or a related field.</li>
                                <li className="mb-1">Minimum of 1 year of experience in an academic or related field.</li>
                                <li className="mb-1">Comprehensive understanding of academic policies, curriculum development, and educational systems.</li>
                                <li className="mb-1">Strong organizational and multitasking skills, with keen attention to detail.</li>
                                <li>Exceptional interpersonal and communication abilities.</li>
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
                                <li className="mb-1">Assist teaching staff with diverse instructional strategies and effective classroom management techniques to cater to various learning styles.</li>
                                <li className="mb-1">Provide academic guidance and support to students.</li>
                                <li className="mb-1">Maintain accurate academic records and deliver timely reports on educational programs.</li>
                                <li className="mb-1">Develop and implement intervention strategies in collaboration with teaching and learning teams.</li>
                                <li className="mb-1">Train and mentor new teachers in line with institutional policies and procedures.</li>
                                <li className="mb-1">Collaborate with faculty to uphold high academic standards and ensure adherence to academic policies.</li>
                                <li className="mb-1">Oversee student document collection, registration, and record maintenance.</li>
                                <li className="mb-1">Support academic staff with their daily operational tasks.</li>
                                <li>Participate in the performance reviews of lecturers in partnership with curriculum coordinators.</li>
                            </ul>

                        </div>

                        {/* Right Side */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            {/* Large Image */}
                            <img
                                src="/images/affaires-2-1-2048x1366.jpg"
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
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg
                                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A10.965 10.965 0 0112 15c2.658 0 5.077.93 6.879 2.482M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>

                        {/* Email */}
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg
                                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email">
                                <path fill="#222" d="M53.42 52.82H10.58a8 8 0 0 1-8-8V19.18a8 8 0 0 1 8-8h42.84a8 8 0 0 1 8 8v25.64a8 8 0 0 1-8 8ZM10.58 13.18a6 6 0 0 0-6 6v25.64a6 6 0 0 0 6 6h42.84a6 6 0 0 0 6-6V19.18a6 6 0 0 0-6-6Z"></path>
                                <path fill="#222" d="M32 37.58A8 8 0 0 1 27.18 36L3.82 18.31A1 1 0 1 1 5 16.72l23.38 17.65a6 6 0 0 0 7.24 0L59 16.72a1 1 0 1 1 1.21 1.59L36.82 36A8 8 0 0 1 32 37.58Z"></path>
                                <path fill="#222" d="M4.17 48.64a1 1 0 0 1-.66-1.74L21.9 30.49A1 1 0 0 1 23.23 32L4.84 48.39a1 1 0 0 1-.67.25zm55.66 0a1 1 0 0 1-.67-.25L40.77 32a1 1 0 1 1 1.33-1.49L60.49 46.9a1 1 0 0 1 .08 1.41 1 1 0 0 1-.74.33z"></path>
                            </svg>
                        </div>

                        {/* Few Words */}
                        <div className="relative w-full md:col-span-2">
                            <textarea
                                placeholder="message"
                                className="w-full px-5 py-3 border border-gray-300 rounded-md text-sm resize-none h-[100px]"
                            ></textarea>
                        </div>

                        {/* Upload Your CV */}
                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Upload Your CV
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm cursor-pointer"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex md:col-span-2 gap-4 mt-4">
                            <button
                                type="submit"
                                className="CourseDetailsBtn px-6 py-3 bg-[#272A5D] text-white rounded-md text-sm font-semibold hover:bg-[#1F214A]"
                            >
                                <span>SUBMIT</span>
                            </button>
                        </div>
                    </form>
                </div>
              
            </div>
        </>
    );
};

export default ConnectwithUs;
