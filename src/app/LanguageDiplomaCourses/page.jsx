'use client';

import Link from 'next/link';
import Image from 'next/image';
export default function LanguageDiplomaCourses() {

    const studyPrograms = [
        {
            id: 1,
            title: 'Higher Diploma',
            img: '/images/Rectangle 49 (4).png',
        },
        {
            id: 2,
            title: "Bachelor's Degree",
            img: '/images/Rectangle 49 (3).png',
        },
        {
            id: 3,
            title: 'Masters Degree',
            img: '/images/Rectangle 49 (2).png',
        },
        {
            id: 4,
            title: 'Doctorate Degree',
            img: '/images/Rectangle 49 (1).png',
        },
        {
            id: 5,
            title: 'CMI',
            img: '/images/Rectangle 49.png',
        },
    ];

    const courses = [
        {
            id: 1,
            category: 'Diploma',
            title: 'Advanced Diploma in English',
            description: 'Part Time',
            img: '/images/3 (1) 1 (7).png',
        },
        {
            id: 2,
            category: 'Diploma',
            title: 'Diploma in English',
            description: 'Full Time',
            img: '/images/3 (1) 1 (8).png',
        },

    ];

    return (


        <>
            <head>
                <title>Language Diploma Courses | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus provides Language Diploma Courses designed to enhance communication skills and cultural understanding. Our programs empower students to excel in global settings by mastering new languages with confidence."
                />
            </head>
            <header className="bg-white shadow relative">

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 20px",
                        maxWidth: "1920px",
                        margin: "0 auto",
                    }}
                >
                    {/* Left Section */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "40px",
                        }}
                    >
                        {/* Logo */}
                        <img
                            src="/images/logo 1.png"
                            alt="BIMT Campus Logo"
                            style={{
                                width: "223px",
                                height: "96.49px",
                            }}
                        />

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800 relative"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '25px'
                            }}
                        >
                            <a href="#" className="hover:text-gray-600"
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                Home
                            </a>
                            <div className="relative group">
                                <a
                                    href="#"
                                    className="hover:text-gray-600 relative"
                                    style={{
                                        color: '#000',
                                        fontFamily: "Work Sans",
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    About Us
                                </a>
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 top-full mt-2 w-[700px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex z-20">
                                    {/* Left Section */}
                                    <div className="p-6 w-1/2">
                                        <ul className="space-y-2 text-gray-800">
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Academic Model
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Alumni
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Equality, Diversity and Inclusion
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Governance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    History and Heritage
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Job Vacancies
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Our Advisory Boards
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Our International Partners
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Media Centre
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="hover:text-gray-600 block">
                                                    Prospectus
                                                </a>
                                            </li>
                                        </ul>
                                        <a
                                            href="#"
                                            className="text-purple-600 mt-4 flex items-center hover:text-purple-800"
                                        >
                                            Go to About <span className="ml-2">→</span>
                                        </a>
                                    </div>

                                    {/* Right Section */}
                                    <div className="border-l border-gray-300 p-6 w-1/2 flex flex-col items-start">
                                        <Image
                                            src="/images/slpate_sqe_tile_cont-sp.webp"
                                            alt="Right side illustration"
                                            width={200}
                                            height={200}
                                            className="mb-4"
                                        />
                                        <p className="text-gray-800 text-sm mb-4">
                                            Understanding the SQE and what it means for me.
                                        </p>
                                        <a
                                            href="#"
                                            className="text-purple-600 flex items-center hover:text-purple-800"
                                        >
                                            Discover more <span className="ml-2">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="hover:text-gray-600"
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                Programs
                            </a>
                            <a href="#" className="hover:text-gray-600"
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                Life at BIMT
                            </a>
                            <a href="#" className="hover:text-gray-600"
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                Connect with Us
                            </a>

                        </nav>

                        {/* Phone Section */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <div
                                style={{
                                    borderLeft: '2px solid black',
                                    paddingLeft: '20px',
                                    height: '35px',
                                    alignContent: 'center'
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                >
                                    <g clip-path="url(#clip0_327_4044)">
                                        <path d="M4.75198 14.7194C6.83223 17.206 9.33639 19.1639 12.1945 20.5493C13.2827 21.065 14.738 21.6768 16.3594 21.7817C16.4599 21.7861 16.5561 21.7905 16.6566 21.7905C17.7448 21.7905 18.6188 21.4146 19.3312 20.6411C19.3356 20.6367 19.3443 20.628 19.3487 20.6192C19.6021 20.3133 19.8906 20.038 20.1921 19.7452C20.3975 19.5485 20.6073 19.3431 20.8083 19.1333C21.7392 18.1631 21.7392 16.9307 20.7996 15.9911L18.1731 13.3646C17.7273 12.9013 17.1941 12.6566 16.6347 12.6566C16.0753 12.6566 15.5378 12.9013 15.0789 13.3602L13.5144 14.9248C13.3701 14.8417 13.2216 14.7674 13.0817 14.6975C12.9069 14.6101 12.7452 14.5271 12.601 14.4353C11.1763 13.5307 9.88267 12.3507 8.64589 10.8342C8.02094 10.0432 7.60139 9.3789 7.30858 8.70151C7.71939 8.33003 8.10397 7.94108 8.47545 7.56087C8.60655 7.42539 8.74203 7.28991 8.87751 7.15443C9.3495 6.68244 9.60297 6.13616 9.60297 5.58114C9.60297 5.02611 9.35387 4.47983 8.87751 4.00784L7.57517 2.7055C7.42221 2.55254 7.27799 2.40395 7.1294 2.25099C6.84097 1.95381 6.53942 1.64789 6.24224 1.37257C5.7921 0.931171 5.2633 0.699547 4.70391 0.699547C4.14888 0.699547 3.61571 0.931171 3.14809 1.37694L1.51361 3.01142C0.919254 3.60577 0.582743 4.32687 0.512819 5.16159C0.429784 6.20608 0.622075 7.31613 1.12029 8.6578C1.88508 10.7337 3.03883 12.661 4.75198 14.7194ZM1.57916 5.25337C1.63161 4.67212 1.85449 4.18702 2.27404 3.76747L3.89978 2.14174C4.15325 1.897 4.43295 1.77026 4.70391 1.77026C4.97049 1.77026 5.24145 1.897 5.49055 2.15048C5.78336 2.42143 6.05869 2.7055 6.35587 3.00705C6.50446 3.16001 6.65741 3.31297 6.81037 3.4703L8.11271 4.77264C8.38367 5.04359 8.52352 5.31892 8.52352 5.58988C8.52352 5.86083 8.38367 6.13616 8.11271 6.40712C7.97724 6.54259 7.84176 6.68244 7.70628 6.81792C7.29984 7.22873 6.91963 7.61768 6.50009 7.98915C6.49134 7.99789 6.48697 8.00226 6.47823 8.011C6.1155 8.37374 6.17232 8.71899 6.25972 8.9812C6.26409 8.99431 6.26846 9.00305 6.27283 9.01617C6.60934 9.82467 7.07696 10.5938 7.8068 11.5116C9.11788 13.1286 10.4989 14.3829 12.0197 15.3487C12.2077 15.4711 12.4087 15.5672 12.5966 15.6633C12.7714 15.7507 12.9331 15.8338 13.0773 15.9256C13.0948 15.9343 13.1079 15.943 13.1254 15.9518C13.2696 16.0261 13.4095 16.061 13.5493 16.061C13.8989 16.061 14.1262 15.8382 14.2005 15.7639L15.835 14.1294C16.0885 13.8759 16.3638 13.7404 16.6347 13.7404C16.9669 13.7404 17.2378 13.9458 17.4083 14.1294L20.0435 16.7603C20.568 17.2847 20.5636 17.8528 20.0304 18.4079C19.8469 18.6045 19.6546 18.7925 19.4492 18.9891C19.1433 19.2863 18.8242 19.5922 18.5358 19.9375C18.0332 20.4794 17.4345 20.7329 16.661 20.7329C16.5867 20.7329 16.508 20.7285 16.4337 20.7241C15.0003 20.6323 13.6673 20.0729 12.6665 19.5966C9.94823 18.2811 7.56206 16.415 5.58233 14.0463C3.95222 12.0841 2.85528 10.2573 2.12982 8.29944C1.67968 7.09762 1.50924 6.13179 1.57916 5.25337Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_327_4044">
                                            <rect width="21.0909" height="21.0909" fill="white" transform="translate(0.454346 0.699547)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>


                            <span
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >+94 115 33 22 22</span>
                            <span
                                style={{
                                    color: '#000',
                                    fontFamily: "Work Sans",
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >+94 777 92 59 92</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                        }}
                    >
                        {/* Contact Us Button */}
                        <button
                            style={{
                                display: "flex",
                                width: "200px",
                                height: "56px",
                                padding: "0px 10px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#272A5D",
                                color: "#fff",
                                fontFamily: "Work Sans",
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            CONTACT US
                        </button>

                        {/* Student Portal Button */}
                        <button
                            style={{
                                display: "flex",
                                width: "200px",
                                height: "56px",
                                padding: "0px 10px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#272A5D",
                                color: "#fff",
                                fontFamily: "Work Sans",
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            STUDENT PORTAL
                        </button>
                    </div>
                </div>


                {/* Add a background layer for clarity if needed */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 z-0"></div>
            </header>

            {/* Announsment bar */}
            <div className="bg-[#A02629] w-full text-center py-2">
                <p className="text-white text-sm md:text-base font-medium">
                    A workshop on Capital Market was organized for our BIMT Campus Students on 23rd of November 2022 at Kingsbury Hotel Colombo in association with the Institute of Financial Accountants, UK.{' '}
                    <a
                        href="#"
                        className="underline text-white font-semibold hover:text-gray-200"
                    >
                        Find Out More.
                    </a>
                </p>
            </div>

            {/* Here section */}
            <div
                className="relative bg-cover bg-center h-[500px]"
                style={{
                    backgroundImage: "url('/images/Rectangle 1.png')", // Replace with your image path
                }}
            >
                {/* Overlay for better text visibility */}
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
                                            color: '#fff',
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
                                <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="white" />
                                </svg></span>
                                <li>
                                    <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500"
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Avenir LT Std',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal'
                                        }}
                                    >
                                        Campus Life
                                    </Link>
                                </li>
                                <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="white" />
                                </svg></span>
                                <li>
                                    <span className="text-gray-600"
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Avenir LT Std',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal'
                                        }}
                                    >Language Diploma Courses</span>
                                </li>
                            </ol>
                        </nav>

                    </div>


                </div>
                {/* Search Bar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 flex justify-center px-4 md:px-0">
                    <div
                        className="inline-flex items-center gap-20 p-8 rounded-lg bg-white shadow-lg"
                        style={{
                            width: "1000px", // Added fixed width
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        {/* Search Icon */}
                        <img
                            src='/images/Group.svg'
                            alt='icon'
                            width={50}
                            height={50}

                        />

                        {/* Program Select Dropdown */}
                        <div className="relative flex items-center w-[1000px] pr-[100px]">
                            {/* Custom Dropdown */}
                            <div className="flex items-center gap-2 w-full bg-transparent outline-none text-gray-600 text-lg px-4">
                                <select
                                    className="flex-1 appearance-none bg-transparent outline-none"
                                    style={{
                                        color: "rgba(0,0,0,0.60)",
                                        fontFamily: "Playfair",
                                        fontSize: "24px",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        lineHeight: "normal",
                                    }}
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select Your Program here
                                    </option>
                                    <option value="program1">Program 1</option>
                                    <option value="program2">Program 2</option>
                                </select>

                                {/* Custom Dropdown Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path d="M0 5L10 15L20 5H0Z" fill="black" />
                                </svg>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div>
                            <button className="bg-[#272A5D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-150 text-lg"

                                style={{
                                    display: 'flex',
                                    width: '200px',
                                    height: '56px',
                                    padding: '0px 10px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#fff',
                                    fontFamily: 'Work Sans',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 'normal'

                                }}

                            >
                                SEARCH
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            {/* Management Deploma Courses */}

            <div className="bg-[#F6F8FB] py-10 px-4 lg:px-16 pt-[150px]">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-gray-500"
                        style={{
                            color: '#272A5D',
                            fontFamily: "Work Sans",
                            fontSize: "24px",
                            fontStyle: 'normal',
                            fontWeight: "400",
                            lineHeight: 'normal'
                        }}
                    >Courses</h3>
                    <h2 className="text-3xl font-bold text-[#1D267D]"
                        style={{
                            color: '#272A5D',
                            fontFamily: "Avenir LT Std",
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >Language Diploma Courses</h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1590px] mx-auto">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="flex bg-white shadow-lg overflow-hidden"
                            style={{
                                borderLeft: '4px solid #A02629'
                            }}
                        >
                            {/* Left: Text Section */}
                            <div className="flex flex-col justify-between p-4 w-2/3"
                                style={{
                                    display: 'flex',
                                    padding: '15px 20px',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '35px'
                                }}
                            >
                                <div>
                                    <p className="text-sm text-gray-500">{course.category}</p>
                                    <div style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '40px'
                                    }}>
                                        <h3 className="text-lg font-semibold text-[#1D267D]"
                                            style={{
                                                color: '#000',
                                                fontFamily: 'Avenir LT Std',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: '40px'
                                            }}
                                        >{course.title}</h3>
                                        <h3 className="text-lg font-semibold text-[#1D267D]"
                                            style={{
                                                color: '#000',
                                                fontFamily: 'Avenir LT Std',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: '40px'
                                            }}
                                        >{course.description}</h3>
                                    </div>

                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <button className="bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition"
                                        style={{
                                            display: 'flex',
                                            width: '125px',
                                            height: '40px',
                                            padding: '11px 0px',
                                            justifyContent: "center",
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#000',
                                            fontFamily: 'Work Sans',
                                            fontSize: "16px",
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal'
                                        }}
                                    >
                                        View more
                                    </button>
                                    <button className="bg-white border border-[#1D267D] text-white py-2 px-4 rounded-md hover:bg-[#151B54] transition"
                                        style={{
                                            display: 'flex',
                                            width: '125px',
                                            height: '40px',
                                            padding: '11px 0px',
                                            justifyContent: "center",
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#000',
                                            fontFamily: 'Work Sans',
                                            fontSize: "16px",
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal'
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="w-1/3">
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                    style={{
                                        padding: "20px"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="max-w-[1300px] mx-auto px-6 py-10 pt-[150]">
                <div className="flex flex-col lg:flex-row items-start gap-5 relative">
                    {/* Left Side Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42637 1 (1).png"
                            alt="Student"
                            className="w-full h-auto rounded-lg shadow-lg"
                            style={{
                                width: '800px',
                                height: '532.907px',
                                flexShrink: '0'
                            }}
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className="bg-white shadow-lg rounded-lg p-8 absolute left-[650] w-[781px] h-[457px] top-[38]">
                        <h4 className="text-blue-600 text-lg font-bold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: "Work Sans",
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >Why BIMT</h4>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: "53px"
                            }}
                        >
                            WHY WE’RE THE RIGHT CHOICE FOR YOU
                        </h2>
                        <p className="text-gray-600 leading-relaxed"
                            style={{
                                color: '#5A5A5A',
                                textAlign: "justify",
                                fontFamily: 'Work Sans',
                                fontSize: "16px",
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >
                            BIMT Campus was established in order to electrify the employability of
                            the Nation. We are equipped with the best panel of lecturers who are not
                            only qualified professionally and academically but also enriched with
                            global and local corporate competence. We have created a unique learning
                            environment that will empower our students with the necessary skills to
                            achieve their corporate ambitions. Their success depends upon the
                            applications of theoretical skills and practical experience. It is the
                            combination, where we are true experts, ensuring that students get the
                            right balance of solid theory coupled with necessary real-life case
                            studies and teaching.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4"
                            style={{
                                color: '#5A5A5A',
                                textAlign: "justify",
                                fontFamily: 'Work Sans',
                                fontSize: "16px",
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >
                            BIMT CAMPUS is the fastest growing Private Sector Higher Educational
                            Institute in Sri Lanka. We offer a range of internationally Recognized
                            Educational programs in partnership with globally reputed Universities
                            and Awarding bodies. We have picked the best courses, which offer the
                            qualifications suitable for Sri Lankan students to gain complete
                            knowledge on subject matters.
                        </p>
                    </div>
                </div>
            </div>


            {/* study card start section */}
            <div className="bg-[#F6F8FB] py-10 px-4 lg:px-16">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-gray-500"
                        style={{
                            paddingTop: '70px',
                            color: '#272A5D',
                            fontFamily: 'Work Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}
                    >Study</h3>
                    <h2 className="text-3xl font-bold text-[#1D267D]"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Avenir LT Std',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >WE OFFER TO YOU</h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1850px] mx-auto"
                    style={{
                        paddingBottom: '100px'
                    }}
                >
                    {studyPrograms.map((studyPrograms) => (
                        <div
                            key={studyPrograms.id}
                            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"

                            style={{
                                display: 'flex',
                                width: '350px',
                                paddingBottom: '20px',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >
                            {/* Card Image */}
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={studyPrograms.img}
                                    alt={studyPrograms.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                            {/* Card Text */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-[#1D267D]">{studyPrograms.title}</h3>
                                <button className="mt-4 bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition">
                                    View more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Study cards end section */}

            {/* Testimonials */}

            < div className='bg-[#006987] flex flex-col items-center py-16 px-6'

                style={{ marginTop: '90px', marginBottom: '100px' }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Image Section */}
                    <div className="relative lg:mr-16 mb-8 lg:mb-0">
                        <Image
                            src="/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated1 1.png"
                            alt="Alumni"
                            width={500}
                            height={500}
                            className="w-96 h-auto rounded-lg"

                            style={{
                                width: '438px',
                                height: '498px'
                            }}
                        />
                        <div className="flex justify-center mt-4">
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <button style={{ width: '50px', height: '50px', color: 'white', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <g clip-path="url(#clip0_327_4530)">
                                            <path d="M25 0C38.8068 0 50 11.1932 50 25C50 38.8068 38.8068 50 25 50C11.1932 50 0 38.8068 0 25C0 11.1932 11.1932 0 25 0ZM25 45.8333C36.5057 45.8333 45.8333 36.5057 45.8333 25C45.8333 13.4943 36.5057 4.1667 25 4.1667C13.4943 4.1667 4.1667 13.4943 4.1667 25C4.1667 36.5057 13.4943 45.8333 25 45.8333Z" fill="white" />
                                            <path d="M27.6936 13.1102C28.5071 12.2966 29.8263 12.2966 30.6398 13.1102C31.4534 13.9238 31.4534 15.2429 30.6398 16.0565L21.6963 25L30.6398 33.9436C31.4534 34.7572 31.4534 36.0763 30.6398 36.8899C29.8263 37.7034 28.5071 37.7034 27.6936 36.8899L17.2769 26.4732C16.4633 25.6596 16.4633 24.3405 17.2769 23.5269L27.6936 13.1102Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_327_4530">
                                                <rect width="50" height="50" fill="white" transform="matrix(-1 0 0 1 50 0)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button style={{ width: '50px', height: '50px', color: 'white', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                        <g clip-path="url(#clip0_327_4536)">
                                            <path d="M25 0C11.1932 0 0 11.1932 0 25C0 38.8068 11.1932 50 25 50C38.8068 50 50 38.8068 50 25C50 11.1932 38.8068 0 25 0ZM25 45.8333C13.4943 45.8333 4.1667 36.5057 4.1667 25C4.1667 13.4943 13.4943 4.1667 25 4.1667C36.5057 4.1667 45.8333 13.4943 45.8333 25C45.8333 36.5057 36.5057 45.8333 25 45.8333Z" fill="white" />
                                            <path d="M22.3064 13.1102C21.4929 12.2966 20.1737 12.2966 19.3602 13.1102C18.5466 13.9238 18.5466 15.2429 19.3602 16.0565L28.3037 25L19.3602 33.9436C18.5466 34.7572 18.5466 36.0763 19.3602 36.8899C20.1737 37.7034 21.4929 37.7034 22.3064 36.8899L32.7231 26.4732C33.5367 25.6596 33.5367 24.3405 32.7231 23.5269L22.3064 13.1102Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_327_4536">
                                                <rect width="50" height="50" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-2xl font-light"
                            style={{
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >Testimonials</h4>
                        <h2 className="text-white text-4xl font-semibold mb-6"
                            style={{
                                color: '#fff',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px',
                                maxWidth: '550px',

                            }}
                        >
                            HEAR WHAT OUR ALUMNI SAY ABOUT BIMT
                        </h2>

                        <p
                            className="text-white text-xl leading-relaxed mb-8"
                            style={{
                                overflow: 'hidden',
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '36px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '35px',
                                maxWidth: '600px',
                                whiteSpace: 'normal',
                                wordBreak: 'keep-all',
                            }}
                        >
                            “The continuous support, help, advices and guidance given by the
                            management of the campus can never go unnoticed as they fully
                            committed themselves to deliver their promises to accomplish the
                            objective of becoming a recognized graduate...”
                        </p>

                        <button className="border-2 border-white text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300" style={{
                            width: '234px',
                            display: 'inline-flex',
                            height: '56px',
                            padding: '0px 20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: '0'

                        }}>
                            Read Azeem&#39;s Story
                        </button>
                    </div>

                </div>


                <div className="flex justify-center pt-4 px-6" style={{ marginLeft: '1000px' }}>
                    {/* Button Container */}
                    <button className="flex items-end border-2 border-[#fff] rounded-lg px-4 py-2 font-semibold text-[#fff] text-lg relative"
                        style={{ fontFamily: 'Playfair', fontSize: '20px', fontWeight: '700', lineHeight: '24px', textAlign: 'left', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
                    >
                        {/* Icon with Rotation */}
                        <div className="absolute -top-3 -left-6 transform -rotate-10">
                            <Image src="/images/graduate 1 (2).png"
                                width={61.25}
                                height={43.04}
                                alt='storeis'
                                style={{ transform: 'translate(-20%, -45%) rotate(-10.795deg)' }} />
                        </div>
                        {/* Button Text */}
                        View all stories

                    </button>
                </div>

            </div >

        </>
    );
}
