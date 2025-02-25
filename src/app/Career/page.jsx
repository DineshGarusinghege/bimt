'use client';

import Link from 'next/link';
// import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
import React from 'react';
import '../styles/Global.scss'

import '../styles/AboutUs.scss'
export const dynamic = "force-dynamic"; // ✅ Stops static pre-rendering errors


export default function HigherDiploma() {

    const images = [
        "/images/british counsil.jpg",
        "/images/b-logo1.png",
        "/images/b-logo2.png",
        "/images/cminew.jpg",
        "/images/b-logo4.png",
        "/images/b-logo3.png",
        "/images/ACCA.jpg",
        "/images/athe.jpg",
        "/images/edupro.jpg",
        "/images/british counsil.jpg",
        "/images/b-logo1.png",
        "/images/b-logo2.png",
        "/images/cminew.jpg",
        "/images/b-logo4.png",
        "/images/b-logo3.png",
        "/images/ACCA.jpg",
        "/images/athe.jpg",
        "/images/edupro.jpg",
    ];


    // Manually Added Course Data with View More Links
    const courses = [
        {
            id: 1,
            courseTitle: 'Academic Coordinator',
            courseName: 'Type: Full-Time',
            courseImg: '/images/affaires-2-1.jpg',
            courseID: 'accounting-finance',
            courseLink: '/AcademicCoordinator',
            deadline: 'Deadline: January 30, 2025'
        },
        {
            id: 2,
            courseTitle: 'Assistant Marketing Manager',
            courseName: 'Type: Full-Time',
            courseImg: '/images/affaires.jpg',
            courseID: 'business-management',
            courseLink: '/AssistantMarketingManager',
            deadline: 'Deadline: January 30, 2025'

        },
        {
            id: 3,
            courseTitle: 'Student Counselor',
            courseName: 'Type: Full-Time',
            courseImg: '/images/GettyImages-668440484.webp',
            courseID: 'computing',
            courseLink: '/StudentCounselor',
            deadline: 'Deadline: January 30, 2025'

        },
        {
            id: 4,
            courseTitle: 'Accounts Executive (Female)',
            courseName: 'Type: Full-Time',
            courseImg: '/images/The-job-of-chief-office-or-administrative-manager.jpg',
            courseID: 'computing',
            courseLink: '/AccountsExecutive',
            deadline: 'Deadline: January 30, 2025'

        },
    ];


    return (
        <>
            <head>
                <title>Higher Diploma - BIMT Campus</title>
                <meta
                    name="description"
                    content="Explore our Higher Diploma programs at BIMT Campus, designed to provide advanced knowledge and practical expertise in specialized fields."
                />
            </head>
            <MainHeader />

            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-center heroSectionHeight"
                style={{ backgroundImage: "url('/images/careers-1600x800_1.jpg')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="bg-gray-200 bg-opacity-80 py-2 px-4 text-sm text-gray-700"
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#FFFFFFDE",
                                borderRadius:'100px'
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="text-black breadcrumbFontBlack font-avenir">
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
                                    <span className="hover:underline hover:text-blue-500 breadcrumbFontBlack font-avenir">Career at BIMT</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>




            {/* Higher Diploma Courses Section */}
            <div className="px-4 lg:px-16 pt-[50px] pb-[50px] hidden lg:block">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-lg font-medium text-gray-500 font-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: "40px",
                            fontWeight: "600",
                            lineHeight: '53px'
                        }}
                    >VACANCIES</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1450px] mx-auto"
                    style={{
                        columnGap: '40px',
                        rowGap: '30px'
                    }}
                >
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="relative flex bg-cover bg-center shadow-lg overflow-hidden"
                            style={{
                                borderLeft: '4px solid #A02629',
                                padding: '20px',
                                backgroundImage: `url('/images/Untitled design (8).png')`
                            }}
                        >
                            {/* Overlay for opacity effect */}

                            {/* Left: Text Section */}
                            <div className="relative z-10 flex flex-col justify-between p-4 w-2/3">
                                <div>
                                    <h2 className="text-avenir" style={{
                                        color: '#000000',
                                        fontSize: '40px',
                                        fontWeight: '600px',
                                        lineHeight: '53px'
                                    }}>{course.courseTitle}</h2>
                                    <h2 className="text-avenir" style={{
                                        color: '#272A5D',
                                        fontSize: '16px',
                                        fontWeight: '600px',
                                        lineHeight: '25px',

                                    }}>{course.courseName}</h2>
                                    <h2 className="text-avenir" style={{
                                        color: '#A02629',
                                        fontSize: '16px',
                                        lineHeight: '13px'
                                    }}>{course.deadline}</h2>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <Link href={course.courseLink}>
                                        <button className="bg-white text-[#000000] border border-[#000000] py-2 px-4 rounded-md hover:bg-[#272A5D] hover:text-white transition">
                                            <span>  Apply Now </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="relative z-10 w-1/3">
                                <img
                                    src={course.courseImg}
                                    alt={course.courseName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    ))}

                </div>
            </div>

            {/* Mobile */}
            <div className="px-4 lg:px-16 block sm:block md:hidden lg:hidden" style={{paddingTop:'50px'}}>

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-lg font-medium text-gray-500 font-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: "40px",
                            fontWeight: "600",
                            lineHeight: '53px'
                        }}
                    >VACANCIES</h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1450px] mx-auto"
                    style={{
                        columnGap: '40px',
                        rowGap: '30px'
                    }}
                >

                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="relative flex flex-col lg:flex-row bg-cover bg-center shadow-lg overflow-hidden 
        p-6 border-l-4 border-[#A02629] 
        md:items-center md:text-center md:justify-center"
                            style={{ backgroundImage: `url('/images/Untitled design (8).png')` }}
                        >

                            {/* Mobile & Tablet: Image on Top */}
                            <div className="w-full md:w-2/3 lg:w-1/3 mb-4 md:mb-0">
                                <img
                                    src={course.courseImg}
                                    alt={course.courseName}
                                    className="w-full h-auto md:h-full object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="relative z-10 flex flex-col justify-between 
        w-full text-left md:text-center md:items-center 
        md:w-2/3 lg:w-2/3 p-4">
                                <div>
                                    <h2 className="text-[#000000] text-2xl md:text-3xl font-semibold leading-tight">
                                        {course.courseTitle}
                                    </h2>
                                    <h3 className="text-[#272A5D] text-lg font-semibold mt-2">
                                        {course.courseName}
                                    </h3>
                                    <h4 className="text-[#A02629] text-sm mt-2">
                                        {course.deadline}
                                    </h4>
                                </div>

                                {/* Apply Button */}
                                <div className="flex justify-center md:justify-center mt-4">
                                    <Link href={course.courseLink}>
                                        <button className="bg-white text-[#000000] border border-[#000000] py-2 px-4 rounded-md hover:bg-[#272A5D] hover:text-white transition-all duration-300">
                                            <span> Apply Now </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* tabet */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1450px] mx-auto hidden md:block lg:hidden"
                style={{
                    columnGap: '40px',
                    rowGap: '30px',
                    marginLeft: '20px',
                    marginRight: '20px'
                }}
            >
                  {/* Header Section */}
                  <div className="text-center mb-8" style={{paddingTop:'50px'}}>
                    <h2 className="text-lg font-medium text-gray-500 font-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: "40px",
                            fontWeight: "600",
                            lineHeight: '53px'
                        }}
                    >VACANCIES</h2>
                </div>

                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="relative flex bg-cover bg-center shadow-lg overflow-hidden"
                        style={{
                            borderLeft: '4px solid #A02629',
                            padding: '20px',
                            backgroundImage: `url('/images/Untitled design (8).png')`,
                            marginBottom:'20px'
                        }}
                    >
                        {/* Overlay for opacity effect */}

                        {/* Left: Text Section */}
                        <div className="relative z-10 flex flex-col justify-between p-4 w-2/3">
                            <div>
                                <h2 className="text-avenir" style={{
                                    color: '#000000',
                                    fontSize: '40px',
                                    fontWeight: '600px',
                                    lineHeight: '53px'
                                }}>{course.courseTitle}</h2>
                                <h2 className="text-avenir" style={{
                                    color: '#272A5D',
                                    fontSize: '16px',
                                    fontWeight: '600px',
                                    lineHeight: '25px',

                                }}>{course.courseName}</h2>
                                <h2 className="text-avenir" style={{
                                    color: '#A02629',
                                    fontSize: '16px',
                                    lineHeight: '13px'
                                }}>{course.deadline}</h2>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <Link href={course.courseLink}>
                                    <button className="bg-white text-[#000000] border border-[#000000] py-2 px-4 rounded-md hover:bg-[#272A5D] hover:text-white transition">
                                        <span>  Apply Now </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative z-10 w-1/3">
                            <img
                                src={course.courseImg}
                                alt={course.courseName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                ))}

            </div>



            {/* Banner Section */}
            <div className="carousel-container overflow-hidden relative" style={{
                marginBottom: '50px', marginTop: '50px'
            }}>
                <div className="carousel-track flex items-center">
                    {/* Duplicate images for smooth infinite scrolling */}
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="carousel-item">
                            <img src={src} alt={`Logo ${index}`} layout="intrinsic" className="object-contain w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
