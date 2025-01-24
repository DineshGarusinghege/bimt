// pages/index.js
"use client";

import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import React, { useState } from "react";
const ConnectwithUs = () => {
    const [selectedBox, setSelectedBox] = useState("");

    return (
        <>
            <head>
                <title>Connect with Us | BIMT Campus</title>
                <meta
                    name="description"
                    content="Stay connected with BIMT Campus to explore our programs, events, and updates. Whether you're a prospective student, alumni, or partner, we are here to assist you. Reach out to us and be part of our vibrant community dedicated to excellence in education."
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
                                >Career at BIMT</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>



            <div className="flex flex-col items-center justify-content mt-[110px] mx-auto max-w-[1300px]">
                {/* Image Section */}
                <div
                    className="w-[1038px] h-[403px] flex-shrink-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/7ce1312fe28583fa496bb8e4065124f6.jpeg')",
                    }}
                ></div>

                {/* Below Layout Section */}
                <div className="flex justify-center items-center gap-[125px] bg-white shadow-md p-[30px_25px] mb-[0px]">
                    {/* Vacancies Title */}
                    <h2 className="text-[#272A5D] text-center font-bold text-[40px] leading-none font-['Avenir LT Std']">
                        Vacancies
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-[125px]">
                        {/* Button 1 - Student Counsellor */}
                        <button className="flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] border-[#272A5D] bg-[#272A5D] text-white font-semibold text-[20px] font-['Work Sans']">
                            Student Counsellor
                        </button>

                        {/* Button 2 - Marketing Executive */}
                        <button className="flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] border-[#272A5D] text-[#272A5D] font-semibold text-[20px] font-['Work Sans']">
                            Marketing Executive
                        </button>

                        {/* Button 3 - Senior Lecturer */}
                        <button className="flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] border-[#272A5D] text-[#272A5D] font-semibold text-[20px] font-['Work Sans']">
                            Senior Lecturer
                        </button>
                    </div>
                </div>
            </div>




            {/* About Us */}

            <div className="relative w-full py-16 px-6 md:px-12 lg:px-24 mt-[100px]" style={{
                backgroundImage: "url('/images/bgimgqa.jpg')"
            }}>
                <div className="max-w-screen-xl mx-auto relative">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2 relative">
                        {/* First Image */}
                        <div
                            className="col-span-1"
                            style={{
                                width: '250px',
                                zIndex: '20',
                                position: 'absolute',
                                left: '120px',
                                top: '35px'
                            }}
                        >
                            <Image
                                src="/images/medium-shot-graduate-student_23-2148950577 1.png"
                                alt="Graduate student"
                                width={240}
                                height={159}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Second Image */}
                        <div
                            className="col-span-1 row-span-2 relative"
                            style={{
                                marginLeft: '10px',
                                left: '370px',
                                height: '600px',
                                top: '-40px'
                            }}
                        >
                            <Image
                                src="/images/college-student-holding-books-walking-campus-going-class-smiling-young-smiling-multiracial-asian-wom 1.png"
                                alt="Student walking on campus"
                                width={368}
                                height={553}
                                className="w-full h-auto rounded-lg shadow-lg"
                                style={{
                                    height: '545px'
                                }}
                            />
                        </div>

                        {/* Third Image */}
                        <div
                            className="col-span-1 absolute"
                            style={{
                                top: '215px',
                                left: '80px',

                            }}
                        >
                            <Image
                                src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-smiling-blue-wall_140725-4264 1.png"
                                alt="Student with files"
                                width={335}
                                height={223}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div
                        className="absolute bg-white lg:p-12 rounded-lg shadow-md lg:w-1/2 w-[763px] h-[456px]"
                        style={{
                            right: '0',
                            top: '25px',
                            paddingTop: '25px',
                            paddingLeft: '50px',
                            paddingBottom: '25px',
                            paddingRight: '50px',
                            color: '#5A5A5A',
                            textAlign: 'justify',
                            fontFamily: 'Work Sans',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '25px'
                        }}
                    >
                        <h2 className="text-lg font-semibold text-[#272A5D] mb-2">About us</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#272A5D] mb-4">
                            DISCOVER WHO WE ARE?
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            At BIMT Campus, we are dedicated to providing high-quality, accessible education in management and technology.
                            In collaboration with a leading international organization, we offer a unique learning environment where students
                            gain both theoretical knowledge and practical skills to excel in their careers. With an ISO 9001:2015 certification,
                            a highly qualified faculty, and internationally recognized programs, BIMT Campus empowers students to achieve
                            their goals and make a lasting impact in their chosen fields.
                        </p>
                        <div className="flex space-x-4">
                            <button className="px-6 py-3 border-2 border-[#272A5D] text-[#272A5D] rounded-lg font-semibold hover:bg-[#272A5D] hover:text-white transition">
                                View more
                            </button>
                            <button className="px-6 py-3 border-2 border-[#272A5D] text-[#272A5D] rounded-lg font-semibold hover:bg-[#272A5D] hover:text-white transition">
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="flex flex-col items-center max-w-[1300px]       space-y-16 px-6 md:px-24 py-12 mt-0 w-full md:w-4/5 mx-auto">


                {/* Second Section */}
                <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 space-y-8 md:space-y-0">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image src="/images/course2.jpg"

                            style={{
                                width: '712px',
                                height: "422px"
                            }}
                            width={500}
                            height={500}
                            alt="Higher Diploma Program"
                            className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-4">
                        <h2 className="text-gray-700 font-semibold text-xl"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: 'normal'
                            }}
                        >Vacancies</h2>
                        <h1 className="text-4xl font-bold text-[#272A5D]">STUDENT COUNSELLOR</h1>
                        <p className="text-gray-600 text-lg"
                            style={{
                                color: '#5A5A5A',
                                textAlign: 'justify',
                                fontFamily: "Work Sans",
                                fontSize: '16px',
                                fontStyle: "normal",
                                fontWeight: '400',
                                lineHeight: '25px'
                            }}
                        >
                            At BIMT Campus, we are committed to supporting our students&#39; academic and personal growth. As a Student Counsellor, you will play a pivotal role in guiding and mentoring students, helping them navigate challenges, and empowering them to achieve their goals.
                        </p>



                        {/* Buttons */}
                        <div className="flex space-x-4 mt-4">
                            <button className="button" style={{
                                display: "flex",
                                width: '200px',
                                height: '56px',
                                padding: '0px 10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                border: '2px solid #272A5D'
                            }}>
                                <span
                                    style={{
                                        color: '#272A5D',
                                        fontSize: "20px",
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >View roles</span>
                            </button>
                            <button className="button" style={{
                                display: "flex",
                                width: '200px',
                                height: '56px',
                                padding: '0px 10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                border: '2px solid #272A5D'
                            }}>
                                <span
                                    style={{
                                        color: '#272A5D',
                                        fontSize: "20px",
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >Apply now</span>
                            </button>
                        </div>
                    </div>
                </div>


                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <Image src="/images/course1.jpg"

                            style={{
                                width: '712px',
                                height: "422px"
                            }}
                            width={712}
                            height={422}
                            alt="Diploma Program"
                            className="w-full h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-4">
                        <h2 className="text-gray-700 font-semibold text-xl"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: 'normal'
                            }}
                        >Vacancies</h2>
                        <h1 className="text-4xl font-bold text-[#272A5D]">Marketing Executive</h1>
                        <p className="text-gray-600 text-lg"
                            style={{
                                color: '#5A5A5A',
                                textAlign: 'justify',
                                fontFamily: "Work Sans",
                                fontSize: '16px',
                                fontStyle: "normal",
                                fontWeight: '400',
                                lineHeight: '25px'
                            }}
                        >
                            Become a part of the vibrant team at BIMT Campus as a Marketing Executive, where you’ll play an essential role in showcasing our world-class educational programs. This is your opportunity to drive impactful marketing initiatives and strengthen our brand’s presence, connecting future leaders with transformative learning experiences.
                        </p>


                        {/* Buttons */}
                        <div className="flex space-x-4 mt-4 gap-10">



                            <button className="button" style={{
                                display: "flex",
                                width: '200px',
                                height: '56px',
                                padding: '0px 10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                border: '2px solid #272A5D'
                            }}>
                                <span
                                    style={{
                                        color: '#272A5D',
                                        fontSize: "20px",
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >View roles</span>
                            </button>

                            <button className="button"
                                style={{
                                    display: "flex",
                                    width: '200px',
                                    height: '56px',
                                    padding: '0px 10px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    border: '2px solid #272A5D'
                                }}
                            >
                                <span
                                    style={{
                                        color: '#272A5D',
                                        fontSize: "20px",
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >Apply now</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div >





            <div className="w-full px-6 py-10 bg-white mt-[100px] mb-[0px]">
                <h2 className="text-center text-xl font-semibold text-[#272A5D] mb-4">
                    Our Values
                </h2>
                <h1 className="text-center text-2xl md:text-4xl font-bold text-[#272A5D] mb-8">
                    BUILDING SUCCESS THROUGH CORE PRINCIPLES
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 h-[351px] lg:grid-cols-6 gap-4">
                    {/* Learning */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Learning" ? "bg-white text-black" : "bg-[#9F3181]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Learning")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Learning")}
                    >
                        {selectedBox === "Learning" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Learning is the cornerstone of progress. We value the quest for
                                    knowledge and wisdom.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <path d="M76.5625 89.8436V113.281C76.5625 114.317 76.9742 115.311 77.7066 116.043L85.5191 123.856C86.2519 124.588 87.2453 125 88.2812 125H111.719C112.755 125 113.748 124.588 114.481 123.856L122.293 116.043C123.026 115.311 123.438 114.317 123.438 113.281V89.8436C123.438 83.8639 123.836 82.578 134.19 68.9971C139.933 61.4643 142.969 52.4636 142.969 42.9687C142.969 19.2757 123.693 0 100 0C76.307 0 57.0312 19.2757 57.0312 42.9687C57.0312 52.4636 60.0668 61.4643 65.8102 68.9971C76.1641 82.5772 76.5625 83.8635 76.5625 89.8436ZM115.625 93.7498V101.562H84.375V93.7498H115.625ZM110.1 117.187H89.8992L84.3746 111.663V109.375H115.625V111.663L110.1 117.187ZM100 7.81249C119.385 7.81249 135.156 23.5835 135.156 42.9687C135.156 50.7374 132.674 58.1003 127.977 64.2604C119.215 75.753 116.471 79.8366 115.806 85.9373H103.906V52.3995L110.575 45.7312C112.1 44.2058 112.1 41.7323 110.575 40.2066C109.049 38.6812 106.576 38.6812 105.05 40.2066L99.9996 45.2569L94.9492 40.2066C93.4234 38.6812 90.9508 38.6812 89.4246 40.2066C87.8992 41.732 87.8992 44.2054 89.4246 45.7312L96.093 52.3995V85.9373H84.193C83.5277 79.8358 80.7844 75.7526 72.0219 64.2604C67.3258 58.1003 64.843 50.7374 64.843 42.9687C64.8437 23.5835 80.6148 7.81249 100 7.81249Z" fill="white" />
                                    <path d="M35.5469 46.875H43.3594C45.5165 46.875 47.2657 45.1262 47.2657 42.9688C47.2657 40.8113 45.5165 39.0625 43.3594 39.0625H35.5469C33.3899 39.0625 31.6406 40.8113 31.6406 42.9688C31.6406 45.1262 33.3899 46.875 35.5469 46.875Z" fill="white" />
                                    <path d="M42.2285 14.1256L48.9942 18.0319C49.609 18.387 50.2809 18.5561 50.9434 18.5561C52.2934 18.5561 53.6063 17.8553 54.3302 16.6026C55.4091 14.7342 54.7688 12.3451 52.9005 11.2662L46.1348 7.35998C44.2668 6.28107 41.8778 6.92169 40.7989 8.78967C39.7203 10.6576 40.3602 13.0467 42.2285 14.1256Z" fill="white" />
                                    <path d="M48.9944 67.9068L42.2287 71.813C40.3604 72.8919 39.7201 75.2806 40.799 77.149C41.5229 78.4021 42.8354 79.1025 44.1858 79.1025C44.8483 79.1025 45.5201 78.9338 46.135 78.5787L52.9006 74.6724C54.769 73.5935 55.4092 71.2048 54.3303 69.3361C53.2514 67.4681 50.8627 66.8283 48.9944 67.9068Z" fill="white" />
                                    <path d="M152.734 42.9688C152.734 45.1262 154.484 46.875 156.641 46.875H164.454C166.611 46.875 168.36 45.1262 168.36 42.9688C168.36 40.8113 166.611 39.0625 164.454 39.0625H156.641C154.484 39.0625 152.734 40.8113 152.734 42.9688Z" fill="white" />
                                    <path d="M149.057 18.5559C149.719 18.5559 150.391 18.3868 151.006 18.0317L157.772 14.1254C159.64 13.0465 160.28 10.6579 159.201 8.78949C158.123 6.92152 155.734 6.28128 153.865 7.3598L147.1 11.2661C145.231 12.345 144.591 14.7336 145.67 16.6024C146.394 17.8551 147.706 18.5559 149.057 18.5559Z" fill="white" />
                                    <path d="M147.1 74.6725L153.865 78.5787C154.48 78.9338 155.152 79.1026 155.815 79.1026C157.165 79.1026 158.478 78.4022 159.201 77.1491C160.28 75.2807 159.64 72.892 157.772 71.8131L151.006 67.9068C149.138 66.8279 146.749 67.4686 145.67 69.3365C144.591 71.2049 145.231 73.5936 147.1 74.6725Z" fill="white" />
                                    <path d="M196.094 164.844V152.832C196.094 150.674 194.345 148.925 192.188 148.925C176.47 148.925 166.655 144.412 157.996 140.43C155.466 139.267 153.077 138.168 150.685 137.254C139.196 132.86 128.745 132.428 119.62 135.972C112.18 138.861 105.6 144.414 100 152.517C94.4 144.414 87.8195 138.861 80.3797 135.972C71.2559 132.429 60.8035 132.86 49.3152 137.254C46.9234 138.169 44.5344 139.267 42.0047 140.43C33.3453 144.412 23.5305 148.925 7.81211 148.925C5.65508 148.925 3.90586 150.674 3.90586 152.832V164.844C1.74883 164.844 0 166.592 0 168.75V186.328C0 188.485 1.74922 190.234 3.90625 190.234H84.2547C87.1863 196.104 93.2949 200 100 200C106.705 200 112.814 196.104 115.745 190.234H196.094C198.251 190.234 200 188.485 200 186.328V168.75C200 166.593 198.251 164.844 196.094 164.844ZM147.894 144.551C150.046 145.374 152.322 146.421 154.732 147.529C162.969 151.317 173.067 155.959 188.282 156.651V164.844H113.337C109.749 164.844 106.6 165.533 103.906 166.902V160.929C114.575 142.671 128.973 137.315 147.894 144.551ZM45.2688 147.528C47.6785 146.421 49.9543 145.374 52.1063 144.551C71.027 137.315 85.425 142.672 96.0938 160.928V166.901C93.4 165.533 90.2512 164.844 86.6633 164.844H11.7184V156.65C26.9332 155.959 37.0316 151.316 45.2688 147.528ZM192.188 182.422H113.105C111.377 182.422 109.854 183.558 109.361 185.213C108.138 189.32 104.289 192.188 100 192.188C95.7106 192.188 91.8617 189.32 90.6391 185.213C90.1461 183.557 88.6234 182.422 86.8953 182.422H7.8125V172.656H86.6633C91.3867 172.656 94.5492 174.324 96.6168 177.906C97.3145 179.114 98.6043 179.859 99.9996 179.859C101.395 179.859 102.685 179.114 103.382 177.906C105.45 174.325 108.613 172.656 113.336 172.656H192.187V182.422H192.188Z" fill="white" />
                                </svg></div>
                                <p className="text-white text-lg font-bold">Learning</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Learning" ? "bg-[#9F3181]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Learning" ? "bg-[#9F3181] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Learning
                            </button>
                        </div>
                    </div>

                    {/* Community */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Community" ? "bg-white text-black" : "bg-[#5DB7E0]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Community")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Community")}
                    >
                        {selectedBox === "Community" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Community builds bridges of connection and collaboration among individuals.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <path d="M107.247 101.249C110.343 99.6281 112.807 97.016 114.243 93.8301C115.68 90.6442 116.008 87.0686 115.173 83.6749C114.338 80.2811 112.39 77.2651 109.639 75.109C106.889 72.9529 103.495 71.7813 100 71.7812C96.5051 71.7812 93.1111 72.9529 90.3606 75.109C87.61 77.2651 85.6617 80.2811 84.8271 83.6749C83.9925 87.0686 84.3197 90.6442 85.7566 93.8301C87.1934 97.016 89.6569 99.6281 92.7531 101.249C88.4814 102.752 84.7809 105.543 82.1611 109.237C79.5414 112.93 78.1313 117.346 78.125 121.874C78.125 122.703 78.4542 123.498 79.0403 124.084C79.6263 124.67 80.4212 124.999 81.25 124.999H118.75C119.579 124.999 120.374 124.67 120.96 124.084C121.546 123.498 121.875 122.703 121.875 121.874C121.869 117.346 120.459 112.93 117.839 109.237C115.219 105.543 111.519 102.752 107.247 101.249ZM100 78.1241C101.854 78.1241 103.667 78.6739 105.208 79.704C106.75 80.7342 107.952 82.1983 108.661 83.9114C109.371 85.6245 109.557 87.5095 109.195 89.328C108.833 91.1466 107.94 92.8171 106.629 94.1282C105.318 95.4393 103.648 96.3322 101.829 96.6939C100.01 97.0557 98.1254 96.87 96.4123 96.1604C94.6993 95.4509 93.2351 94.2492 92.205 92.7075C91.1748 91.1658 90.625 89.3533 90.625 87.4991C90.625 85.0127 91.6127 82.6281 93.3709 80.8699C95.129 79.1118 97.5136 78.1241 100 78.1241ZM84.6875 118.749C85.4047 115.217 87.321 112.041 90.1117 109.76C92.9024 107.479 96.3958 106.233 100 106.233C103.604 106.233 107.098 107.479 109.888 109.76C112.679 112.041 114.595 115.217 115.313 118.749H84.6875Z" fill="white" />
                                    <path d="M165.625 134.372C158.418 134.366 151.433 136.864 145.863 141.438L130.819 126.394C136.764 119.471 140.192 110.74 140.544 101.622L172.456 100.441C173.346 103.325 175.257 105.787 177.831 107.365C180.405 108.942 183.466 109.528 186.44 109.011C189.414 108.495 192.099 106.912 193.991 104.56C195.882 102.207 196.852 99.2458 196.718 96.2298C196.583 93.2139 195.355 90.3503 193.261 88.175C191.168 85.9997 188.354 84.6618 185.345 84.4118C182.337 84.1618 179.34 85.0168 176.917 86.8167C174.493 88.6167 172.809 91.2383 172.178 94.1907L140.341 95.3688C139.659 89.4513 137.684 83.7561 134.556 78.6868C131.428 73.6174 127.224 69.298 122.241 66.0344L128.213 55.1782C132.658 56.7297 137.524 56.5545 141.846 54.6875C146.168 52.8204 149.63 49.3977 151.548 45.0977C153.465 40.7977 153.697 35.9343 152.197 31.4715C150.697 27.0087 147.576 23.2722 143.451 21.0026C139.326 18.7329 134.499 18.0959 129.926 19.2176C125.354 20.3394 121.37 23.1381 118.764 27.0591C116.158 30.98 115.12 35.737 115.856 40.3872C116.592 45.0373 119.048 49.2412 122.738 52.1656L116.763 63.0281C109.736 59.8104 101.933 58.6788 94.2817 59.768C86.6304 60.8572 79.453 64.1212 73.6033 69.1719L58.5596 54.1282C63.6428 47.9113 66.142 39.9784 65.5404 31.9705C64.9387 23.9626 61.2821 16.4923 55.327 11.1048C49.372 5.71725 41.5739 2.82469 33.546 3.02541C25.518 3.22614 17.8743 6.50479 12.1959 12.1832C6.51748 17.8616 3.23883 25.5053 3.03811 33.5333C2.83739 41.5612 5.72994 49.3593 11.1175 55.3144C16.505 61.2694 23.9753 64.926 31.9832 65.5277C39.9911 66.1293 47.924 63.6301 54.1408 58.5469L69.1846 73.5906C65.2037 78.1866 62.3177 83.6261 60.7441 89.4993C59.1705 95.3725 58.9504 101.526 60.1002 107.497L32.6533 114.884C30.9135 111.508 27.995 108.888 24.4514 107.522C20.9079 106.155 16.9859 106.137 13.4297 107.47C9.87343 108.803 6.93039 111.396 5.15896 114.755C3.38753 118.115 2.91097 122.008 3.81969 125.696C4.72841 129.383 6.9592 132.609 10.0888 134.761C13.2183 136.913 17.0289 137.841 20.7975 137.369C24.5661 136.898 28.0305 135.059 30.5333 132.202C33.0361 129.346 34.4032 125.67 34.3752 121.872C34.3752 121.559 34.3002 121.247 34.2783 120.934L61.744 113.541C64.9059 122.418 71.0442 129.927 79.1158 134.791L72.5002 147.997C67.2445 146.237 61.5171 146.533 56.4709 148.825C51.4246 151.118 47.4341 155.237 45.3026 160.353C43.171 165.47 43.0566 171.204 44.9825 176.401C46.9083 181.598 50.7314 185.873 55.6822 188.365C60.633 190.857 66.3441 191.381 71.6658 189.832C76.9875 188.283 81.5249 184.775 84.3646 180.016C87.2043 175.256 88.1356 169.597 86.971 164.178C85.8064 158.759 82.6323 153.982 78.0877 150.809L84.6877 137.603C91.5892 140.433 99.1393 141.296 106.501 140.097C113.863 138.899 120.75 135.685 126.397 130.813L141.441 145.856C136.957 151.35 134.476 158.207 134.406 165.298C134.336 172.389 136.681 179.293 141.056 184.875C145.431 190.456 151.575 194.383 158.477 196.009C165.38 197.635 172.631 196.863 179.037 193.821C185.443 190.779 190.623 185.648 193.725 179.27C196.828 172.893 197.668 165.65 196.107 158.733C194.546 151.815 190.678 145.634 185.138 141.207C179.598 136.779 172.717 134.369 165.625 134.372ZM184.375 90.6219C185.611 90.6219 186.82 90.9885 187.848 91.6752C188.875 92.362 189.676 93.3381 190.149 94.4801C190.623 95.6222 190.746 96.8788 190.505 98.0912C190.264 99.3036 189.669 100.417 188.795 101.291C187.921 102.165 186.807 102.761 185.595 103.002C184.382 103.243 183.126 103.119 181.983 102.646C180.841 102.173 179.865 101.372 179.179 100.344C178.492 99.3164 178.125 98.108 178.125 96.8719C178.125 95.2143 178.784 93.6246 179.956 92.4525C181.128 91.2804 182.718 90.6219 184.375 90.6219ZM134.375 24.9969C136.847 24.9969 139.264 25.73 141.32 27.1035C143.375 28.477 144.978 30.4293 145.924 32.7134C146.87 34.9974 147.117 37.5108 146.635 39.9355C146.153 42.3603 144.962 44.5876 143.214 46.3357C141.466 48.0839 139.239 49.2744 136.814 49.7567C134.389 50.239 131.876 49.9915 129.592 49.0454C127.308 48.0993 125.355 46.4971 123.982 44.4415C122.608 42.3859 121.875 39.9692 121.875 37.4969C121.875 34.1817 123.192 31.0023 125.536 28.6581C127.881 26.3139 131.06 24.9969 134.375 24.9969ZM18.7502 131.247C16.896 131.247 15.0835 130.697 13.5417 129.667C12 128.637 10.7984 127.173 10.0889 125.46C9.37928 123.746 9.19362 121.862 9.55536 120.043C9.9171 118.224 10.81 116.554 12.1211 115.243C13.4322 113.932 15.1027 113.039 16.9212 112.677C18.7398 112.315 20.6248 112.501 22.3379 113.211C24.0509 113.92 25.5151 115.122 26.5452 116.663C27.5754 118.205 28.1252 120.018 28.1252 121.872C28.1252 124.358 27.1375 126.743 25.3793 128.501C23.6212 130.259 21.2366 131.247 18.7502 131.247ZM81.2502 168.747C81.2502 171.837 80.3338 174.858 78.6169 177.428C76.9 179.997 74.4597 182 71.6047 183.183C68.7496 184.365 65.6079 184.675 62.5769 184.072C59.546 183.469 56.7619 181.981 54.5767 179.795C52.3915 177.61 50.9033 174.826 50.3004 171.795C49.6976 168.764 50.007 165.623 51.1896 162.767C52.3722 159.912 54.3749 157.472 56.9444 155.755C59.514 154.038 62.5349 153.122 65.6252 153.122C69.7677 153.127 73.7391 154.775 76.6683 157.704C79.5975 160.633 81.2453 164.604 81.2502 168.747ZM9.37522 34.3719C9.36551 30.3099 10.3457 26.3067 12.2311 22.7087C14.1164 19.1107 16.8501 16.0263 20.1955 13.7224C23.5409 11.4185 27.3974 9.96446 31.4311 9.48611C35.4649 9.00776 39.5544 9.51951 43.3459 10.9771C47.1374 12.4347 50.5166 14.7942 53.1912 17.8514C55.8657 20.9086 57.7551 24.5715 58.6957 28.5232C59.6363 32.4748 59.5998 36.5961 58.5895 40.5304C57.5791 44.4648 55.6253 48.0937 52.8971 51.1031C53.0413 50.7518 53.1186 50.3766 53.1252 49.9969C53.1331 47.5337 52.6522 45.0933 51.7102 42.8173C50.7683 40.5413 49.384 38.4748 47.6377 36.7375C46.3924 35.4923 44.9786 34.4278 43.4377 33.575C45.1267 31.8042 46.2588 29.5767 46.6935 27.1685C47.1283 24.7603 46.8467 22.2775 45.8836 20.0279C44.9204 17.7783 43.3182 15.8609 41.2755 14.5134C39.2328 13.1659 36.8395 12.4476 34.3924 12.4476C31.9453 12.4476 29.552 13.1659 27.5093 14.5134C25.4666 15.8609 23.8644 17.7783 22.9013 20.0279C21.9381 22.2775 21.6565 24.7603 22.0913 27.1685C22.5261 29.5767 23.6581 31.8042 25.3471 33.575C22.405 35.1914 19.9507 37.5679 18.2406 40.4566C16.5305 43.3452 15.6273 46.64 15.6252 49.9969C15.6316 50.3727 15.7057 50.7443 15.844 51.0938C11.6843 46.5176 9.37816 40.5561 9.37522 34.3719ZM34.3752 31.2469C33.1391 31.2469 31.9307 30.8803 30.9029 30.1936C29.8751 29.5068 29.074 28.5307 28.601 27.3887C28.1279 26.2466 28.0042 24.99 28.2453 23.7776C28.4865 22.5652 29.0817 21.4516 29.9558 20.5775C30.8299 19.7034 31.9435 19.1081 33.1559 18.867C34.3683 18.6258 35.625 18.7496 36.767 19.2227C37.909 19.6957 38.8851 20.4968 39.5719 21.5246C40.2587 22.5524 40.6252 23.7608 40.6252 24.9969C40.6252 26.6545 39.9667 28.2442 38.7946 29.4163C37.6225 30.5884 36.0328 31.2469 34.3752 31.2469ZM34.3752 37.4969C37.1464 37.4969 39.8391 38.4178 42.0299 40.1148C44.2207 41.8118 45.7855 44.1887 46.4783 46.8719H22.269C22.9653 44.19 24.5315 41.8149 26.7222 40.1184C28.9129 38.4219 31.6044 37.4999 34.3752 37.4969ZM17.6565 52.9032C18.0048 53.0419 18.3754 53.116 18.7502 53.1219H50.0002C50.3808 53.1166 50.757 53.0403 51.1096 52.8969C46.5357 57.0582 40.5744 59.3642 34.3908 59.3642C28.2073 59.3642 22.246 57.0582 17.6721 52.8969L17.6565 52.9032ZM65.6252 99.9969C65.6252 93.1982 67.6413 86.5521 71.4184 80.8992C75.1956 75.2462 80.5643 70.8403 86.8455 68.2385C93.1267 65.6368 100.038 64.956 106.706 66.2824C113.375 67.6088 119.5 70.8827 124.307 75.6901C129.114 80.4975 132.388 86.6226 133.715 93.2907C135.041 99.9588 134.36 106.87 131.759 113.152C129.157 119.433 124.751 124.801 119.098 128.579C113.445 132.356 106.799 134.372 100 134.372C90.8867 134.361 82.1495 130.736 75.7053 124.292C69.2611 117.848 65.636 109.11 65.6252 99.9969ZM148.906 184.153C149.255 184.292 149.625 184.366 150 184.372H181.25C181.631 184.367 182.007 184.29 182.36 184.147C177.786 188.308 171.824 190.614 165.641 190.614C159.457 190.614 153.496 188.308 148.922 184.147L148.906 184.153ZM165.625 162.497C164.389 162.497 163.181 162.13 162.153 161.444C161.125 160.757 160.324 159.781 159.851 158.639C159.378 157.497 159.254 156.24 159.495 155.028C159.736 153.815 160.332 152.702 161.206 151.827C162.08 150.953 163.194 150.358 164.406 150.117C165.618 149.876 166.875 150 168.017 150.473C169.159 150.946 170.135 151.747 170.822 152.775C171.509 153.802 171.875 155.011 171.875 156.247C171.875 157.905 171.217 159.494 170.045 160.666C168.873 161.838 167.283 162.497 165.625 162.497ZM165.625 168.747C168.396 168.747 171.089 169.668 173.28 171.365C175.471 173.062 177.036 175.439 177.728 178.122H153.519C154.215 175.44 155.781 173.065 157.972 171.368C160.163 169.672 162.854 168.75 165.625 168.747ZM184.144 182.353C184.289 182.002 184.368 181.627 184.375 181.247C184.383 178.784 183.902 176.343 182.96 174.067C182.018 171.791 180.634 169.725 178.888 167.988C177.642 166.742 176.229 165.678 174.688 164.825C176.377 163.054 177.509 160.827 177.944 158.418C178.378 156.01 178.097 153.527 177.134 151.278C176.17 149.028 174.568 147.111 172.525 145.763C170.483 144.416 168.09 143.698 165.642 143.698C163.195 143.698 160.802 144.416 158.759 145.763C156.717 147.111 155.114 149.028 154.151 151.278C153.188 153.527 152.907 156.01 153.341 158.418C153.776 160.827 154.908 163.054 156.597 164.825C153.655 166.441 151.201 168.818 149.491 171.707C147.781 174.595 146.877 177.89 146.875 181.247C146.882 181.623 146.956 181.994 147.094 182.344C143.844 178.757 141.706 174.305 140.938 169.526C140.169 164.748 140.805 159.849 142.766 155.425C144.728 151.001 147.931 147.241 151.988 144.602C156.045 141.963 160.781 140.558 165.621 140.558C170.46 140.558 175.196 141.963 179.253 144.602C183.31 147.241 186.513 151.001 188.475 155.425C190.437 159.849 191.072 164.748 190.304 169.526C189.535 174.305 187.397 178.757 184.147 182.344L184.144 182.353Z" fill="white" />
                                </svg></div>
                                <p className="text-white text-lg font-bold">Community</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Community" ? "bg-[#5DB7E0]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Community" ? "bg-[#5DB7E0] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Community
                            </button>
                        </div>
                    </div>


                    {/* Integrity */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Integrity" ? "bg-white text-black" : "bg-[#D86027]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Integrity")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Integrity")}
                    >
                        {selectedBox === "Integrity" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Trust and honesty are the cornerstones of our college. We act consistently and fairly.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 50 50" fill="none">
                                    <g clip-path="url(#clip0_579_2530)">
                                        <path d="M11.8653 19.8997H18.5604C19.2665 19.8997 19.841 19.3253 19.841 18.6192V13.8431C19.841 13.0115 19.0289 12.3911 18.2266 12.6076C16.4746 13.0795 14.7493 11.6283 14.8688 9.82979C14.9784 8.18174 16.6172 6.99297 18.2221 7.42227C19.0237 7.63652 19.841 7.02637 19.841 6.19141V1.28047C19.841 0.574414 19.2666 0 18.5604 0H2.8583C1.28223 0 0 1.28525 0 2.86504V5.86191C0 6.2665 0.32793 6.59434 0.732422 6.59434C1.13691 6.59434 1.46484 6.2665 1.46484 5.86191V2.86504C1.46484 2.09297 2.08994 1.46484 2.8583 1.46484H18.3762V5.95371C15.9602 5.45127 13.571 7.26836 13.4072 9.73262C13.2294 12.4062 15.7437 14.6244 18.3762 14.0771V18.4349H10.6964C10.1604 18.4349 9.73975 19.0812 10.0978 19.5893C11.3779 21.4053 9.93408 23.9623 7.72734 23.8134C5.68994 23.6745 4.54834 21.27 5.7332 19.5893C6.09121 19.0812 5.67041 18.4349 5.13457 18.4349H1.46484V8.78643C1.46484 8.38184 1.13691 8.054 0.732422 8.054C0.32793 8.054 0 8.38184 0 8.78643V18.6192C0 19.3253 0.574414 19.8997 1.28047 19.8997H3.96426C3.18486 22.3977 5.01113 25.0966 7.62773 25.2748C10.4768 25.4692 12.7161 22.6292 11.8653 19.8997Z" fill="white" />
                                        <path d="M47.1417 11.6641H31.4395C30.7334 11.6641 30.159 12.2385 30.159 12.9445V17.6183C27.743 17.1154 25.354 18.9321 25.1901 21.3966C25.0124 24.0698 27.5266 26.2893 30.159 25.7403V30.0989H23.3885C22.9686 30.0989 22.5759 30.3049 22.3381 30.65C22.0972 30.9995 22.0441 31.4465 22.1959 31.8456C22.8217 33.4897 21.6515 35.3571 19.8864 35.4773C17.9708 35.6089 16.5129 33.6469 17.2018 31.8427C17.3536 31.4454 17.3007 31 17.0606 30.6512C16.8225 30.3054 16.4292 30.0989 16.0087 30.0989H13.0634C12.3574 30.0989 11.783 30.6733 11.783 31.3794V47.1336C11.783 48.7134 13.0652 49.9986 14.6413 49.9986H47.1418C48.7178 49.9988 50 48.7136 50 47.1338V43.0237C50 42.6191 49.6722 42.2913 49.2676 42.2913C48.863 42.2913 48.5352 42.6191 48.5352 43.0237V47.1338C48.5352 47.9059 47.9102 48.534 47.1417 48.534H31.6239V45.637C31.6239 45.033 30.9575 44.7286 30.5002 45.0178C29.194 45.843 27.3881 44.8434 27.3987 43.2822C27.409 41.7326 29.1733 40.7337 30.5002 41.5721C30.9822 41.8767 31.6239 41.5341 31.6239 40.9528V31.5639H36.5151C37.0937 31.5639 37.4464 30.8949 37.1194 30.4176C36.709 29.8185 36.4896 29.1017 36.4896 28.3746C36.4953 23.6417 43.6639 23.6471 43.6696 28.3746C43.6696 29.1018 43.4501 29.8186 43.0398 30.4176C42.6919 30.9256 43.1114 31.5639 43.6441 31.5639H48.5352V40.1007C48.5352 40.5053 48.863 40.8331 49.2676 40.8331C49.6722 40.8331 50 40.5053 50 40.1007V14.5292C50 12.9493 48.7178 11.6641 47.1417 11.6641ZM30.159 46.7157V48.534H14.6412C13.8728 48.534 13.2477 47.9059 13.2477 47.1338V31.564H15.7489C14.9 34.2838 17.1344 37.1347 19.986 36.939C22.6023 36.7607 24.4293 34.0626 23.6479 31.564H30.159V39.873C28.1859 39.4483 26.175 40.8915 25.9552 42.9029C25.7016 45.2255 27.8508 47.2144 30.159 46.7157ZM44.8357 30.0991C45.0329 29.5519 45.1345 28.9718 45.1345 28.3791C45.1345 21.682 34.9355 21.7483 35.0261 28.4478C35.0336 29.0165 35.1339 29.5731 35.3234 30.0991H31.6239V24.7082C31.5102 24.0889 31.1528 23.8727 30.5515 24.0595C28.7266 25.0156 26.5157 23.5393 26.6517 21.4939C26.7773 19.6064 28.8664 18.417 30.5515 19.2997C31.1528 19.4864 31.5103 19.2702 31.6239 18.6509V13.1289H47.1417C47.9101 13.1289 48.5352 13.7571 48.5352 14.5292V30.0991H44.8357Z" fill="white" />
                                        <path d="M26.709 14.4193C26.709 14.8239 27.0368 15.1518 27.4414 15.1518C27.846 15.1518 28.1738 14.8239 28.1738 14.4193V11.3437L32.4303 7.08721H42.0038C42.3209 8.16348 43.3173 8.95166 44.4949 8.95166C45.9269 8.95166 47.0918 7.78672 47.0918 6.35478C47.0918 4.92285 45.9269 3.75781 44.4949 3.75781C43.3173 3.75781 42.3209 4.546 42.0038 5.62236H32.1269C31.9326 5.62236 31.7464 5.69951 31.6089 5.83682L26.9234 10.5223C26.7861 10.6597 26.709 10.8459 26.709 11.0402V14.4193ZM44.4949 5.22266C45.1191 5.22266 45.627 5.73047 45.627 6.35478C45.627 6.979 45.1191 7.48682 44.4949 7.48682C43.8706 7.48682 43.3628 6.979 43.3628 6.35478C43.3628 5.73047 43.8706 5.22266 44.4949 5.22266Z" fill="white" />
                                        <path d="M23.3797 5.08799V15.5925C23.3797 15.9971 23.7076 16.3249 24.1121 16.3249C24.5166 16.3249 24.8445 15.9971 24.8445 15.5925V5.08799C25.9208 4.771 26.709 3.77461 26.709 2.59697C26.709 1.16504 25.5439 0 24.1121 0C22.6802 0 21.5151 1.16504 21.5151 2.59697C21.5151 3.77461 22.3033 4.7709 23.3797 5.08799ZM24.1121 1.46484C24.7363 1.46484 25.2441 1.97266 25.2441 2.59697C25.2441 3.21543 24.7454 3.71895 24.1291 3.72812C24.1234 3.72803 24.1179 3.72725 24.1121 3.72725C24.1063 3.72725 24.1008 3.72793 24.0951 3.72812C23.4788 3.71895 22.98 3.21543 22.98 2.59697C22.98 1.97266 23.4879 1.46484 24.1121 1.46484Z" fill="white" />
                                        <path d="M18.466 24.3626C18.466 22.9307 17.301 21.7656 15.8691 21.7656C14.4372 21.7656 13.2722 22.9307 13.2722 24.3626C13.2722 25.7945 14.4372 26.9596 15.8691 26.9596C16.3193 26.9596 16.743 26.8442 17.1125 26.6419L18.8964 28.4258V32.0286C18.8964 32.4332 19.2244 32.761 19.6289 32.761C20.0333 32.761 20.3613 32.4332 20.3613 32.0286V28.1224C20.3613 27.9281 20.2841 27.7419 20.1467 27.6044L18.1483 25.606C18.3507 25.2364 18.466 24.8128 18.466 24.3626ZM14.7371 24.3626C14.7371 23.7383 15.2449 23.2305 15.8691 23.2305C16.4933 23.2305 17.0011 23.7383 17.0011 24.3626C17.0011 24.9869 16.4933 25.4947 15.8691 25.4947C15.2449 25.4947 14.7371 24.9869 14.7371 24.3626Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_579_2530">
                                            <rect width="200" height="200" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg></div>
                                <p className="text-white text-lg font-bold">Integrity</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Integrity" ? "bg-[#D86027]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Integrity" ? "bg-[#D86027] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Integrity
                            </button>
                        </div>
                    </div>


                    {/* Accountability */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Accountability" ? "bg-white text-black" : "bg-[#272A5D]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Accountability")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Accountability")}
                    >
                        {selectedBox === "Accountability" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Accountability ensures we take responsibility for our actions and decisions.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <path d="M45.4549 134.847H16.364C13.3337 134.847 10.6064 132.12 10.6064 129.089V120.302C10.6064 118.483 11.8186 117.271 13.6367 117.271C15.4549 117.271 16.6671 118.483 16.6671 120.302V128.786H45.1519V97.5743L39.0913 91.5137H16.6671V108.786C16.6671 110.605 15.4549 111.817 13.6367 111.817C11.8186 111.817 10.6064 110.605 10.6064 108.786V91.2107C10.6064 88.1804 13.3337 85.4531 16.364 85.4531H40.3034C41.2125 85.4531 41.8186 85.7562 42.4246 86.3622L50.3034 94.241C50.9095 94.8471 51.2125 95.4531 51.2125 96.3622V129.089C51.2125 132.12 48.4852 134.847 45.4549 134.847Z" fill="white" />
                                    <path d="M15.7577 123.326H12.1214C7.27289 123.326 3.3335 119.386 3.3335 114.538C3.3335 109.689 7.27289 105.75 12.1214 105.75H15.4547C20.3032 105.75 24.2426 109.689 24.2426 114.538C24.2426 119.386 20.3032 123.326 15.7577 123.326ZM12.1214 111.811C10.3032 111.811 9.3941 113.326 9.3941 114.538C9.3941 116.356 10.9093 117.265 12.1214 117.265H15.7577C16.9699 117.265 18.182 116.053 18.182 114.538C18.182 112.72 16.6668 111.811 15.4547 111.811H12.1214Z" fill="white" />
                                    <path d="M58.485 57.8738C48.182 57.8738 40.3032 46.9647 40.3032 37.2678C40.3032 27.2678 48.485 19.0859 58.485 19.0859C68.485 19.0859 76.6669 27.2678 76.6669 37.2678C76.6669 46.9647 68.7881 57.8738 58.485 57.8738ZM58.485 25.1465C51.8184 25.1465 46.3638 30.6011 46.3638 37.2678C46.3638 43.9344 51.8184 51.8132 58.485 51.8132C65.1517 51.8132 70.6063 43.9344 70.6063 37.2678C70.6063 30.6011 65.1517 25.1465 58.485 25.1465Z" fill="white" />
                                    <path d="M67.576 196.962C60.9093 196.962 55.7578 191.508 55.7578 185.144V127.871C55.7578 126.053 56.9699 124.841 58.7881 124.841C60.6063 124.841 61.8184 126.053 61.8184 127.871V185.144C61.8184 188.174 64.5457 190.902 67.576 190.902C70.6063 190.902 73.3336 188.174 73.3336 185.144V94.5381C73.3336 92.7199 74.5457 91.5078 76.3639 91.5078C78.1821 91.5078 79.3942 92.7199 79.3942 94.5381V185.144C79.3942 191.508 74.2427 196.962 67.576 196.962Z" fill="white" />
                                    <path d="M49.6971 196.662C43.0304 196.662 37.8789 191.207 37.8789 184.844V131.813C37.8789 129.995 39.091 128.783 40.9092 128.783C42.7274 128.783 43.9395 129.995 43.9395 131.813V184.844C43.9395 187.874 46.6668 190.601 49.6971 190.601C52.7274 190.601 55.4547 187.874 55.4547 184.844V127.874C55.4547 126.056 56.6668 124.844 58.485 124.844C60.3031 124.844 61.5153 126.056 61.5153 127.874V184.844C61.5153 191.51 56.3638 196.662 49.6971 196.662Z" fill="white" />
                                    <path d="M76.3637 132.725C74.5455 132.725 73.3333 131.513 73.3333 129.695C73.3333 127.877 74.5455 126.665 76.3637 126.665C81.5152 126.665 86.0606 122.119 86.0606 116.968V92.1191C86.0606 81.8161 78.1818 73.9373 67.8788 73.9373H47.5758C39.394 73.9373 32.1212 79.3918 29.697 87.5736C29.0909 89.0888 27.5758 89.9979 26.0606 89.6948C24.5455 89.0888 23.6364 87.5736 23.9394 86.0585C27.2727 75.4524 36.6667 68.1797 47.8788 68.1797H68.1818C81.8182 68.1797 92.4243 78.7857 92.4243 92.4221V117.271C92.1212 125.755 85.1515 132.725 76.3637 132.725Z" fill="white" />
                                    <path d="M150.303 94.8447C138.788 94.8447 127.879 90.6023 119.394 82.7235L98.1818 84.8447C96.9697 84.8447 96.0606 84.5417 95.4545 83.3296C94.8485 82.4205 94.8485 81.2084 95.4545 79.9962L106.667 61.2084C106.061 58.7841 105.455 56.3599 105.152 53.6326C102.121 28.4811 120.606 6.05684 145.758 3.32957C170.606 0.602298 193.333 19.0871 196.364 43.9356C199.091 69.3902 180.606 92.1175 155.455 94.5417C153.636 94.8447 152.121 94.8447 150.303 94.8447ZM120.303 76.3599C121.212 76.3599 121.818 76.6629 122.424 77.269C130.909 85.7538 142.727 89.9962 154.848 88.4811C176.667 86.3599 192.727 66.6629 190.303 44.5417C187.879 23.0265 168.182 7.26896 146.364 9.39018C124.545 11.5114 108.485 31.2084 110.909 53.3296C111.212 55.7538 111.818 58.4811 112.727 60.9053C113.03 61.8144 113.03 62.7235 112.424 63.3296L103.636 78.1781L120 76.3599H120.303Z" fill="white" />
                                    <path d="M140.606 73.9375C139.697 73.9375 139.091 73.6345 138.485 73.0284L119.394 53.9375C118.788 53.3314 118.485 52.7254 118.485 51.8163C118.485 50.9072 118.788 50.3011 119.394 49.6951L128.182 40.9072C129.394 39.6951 131.212 39.6951 132.424 40.9072L140.606 49.089L164.545 24.8466C165.152 24.2405 165.758 23.9375 166.667 23.9375C167.576 23.9375 168.182 24.2405 168.788 24.8466L177.576 33.6345C178.788 34.8466 178.788 36.6648 177.576 37.8769L142.727 73.0284C142.121 73.6345 141.515 73.9375 140.606 73.9375ZM125.758 51.8163L140.606 66.6648L171.212 35.7557L166.667 31.2102L142.727 55.4527C142.121 56.0587 141.515 56.3617 140.606 56.3617C139.697 56.3617 139.091 56.0587 138.485 55.4527L130.303 47.2708L125.758 51.8163Z" fill="white" />
                                    <path d="M130.303 124.544H111.515C109.697 124.544 108.485 123.332 108.485 121.513V102.726C108.485 100.907 109.697 99.6953 111.515 99.6953H130.303C132.121 99.6953 133.333 100.907 133.333 102.726V121.513C133.333 123.332 132.121 124.544 130.303 124.544ZM114.545 118.483H127.273V105.756H114.545V118.483Z" fill="white" />
                                    <path d="M130.303 157.575H111.515C109.697 157.575 108.485 156.363 108.485 154.545V135.757C108.485 133.939 109.697 132.727 111.515 132.727H130.303C132.121 132.727 133.333 133.939 133.333 135.757V154.545C133.333 156.363 132.121 157.575 130.303 157.575ZM114.545 151.514H127.273V138.787H114.545V151.514Z" fill="white" />
                                    <path d="M130.303 190.598H111.515C109.697 190.598 108.485 189.386 108.485 187.568V168.78C108.485 166.962 109.697 165.75 111.515 165.75H130.303C132.121 165.75 133.333 166.962 133.333 168.78V187.568C133.333 189.386 132.121 190.598 130.303 190.598ZM114.545 184.538H127.273V171.811H114.545V184.538Z" fill="white" />
                                    <path d="M155.758 123.632C154.849 123.632 154.242 123.329 153.636 122.723L146.364 115.45C145.152 114.238 145.152 112.42 146.364 111.208C147.576 109.996 149.394 109.996 150.606 111.208L155.758 116.359L170.606 101.511C171.818 100.299 173.636 100.299 174.849 101.511C176.061 102.723 176.061 104.541 174.849 105.753L157.879 122.723C157.273 123.329 156.667 123.632 155.758 123.632Z" fill="white" />
                                    <path d="M155.758 156.663C154.849 156.663 154.242 156.36 153.636 155.754L146.364 148.481C145.152 147.269 145.152 145.451 146.364 144.239C147.576 143.027 149.394 143.027 150.606 144.239L155.758 149.39L170.606 134.542C171.818 133.33 173.636 133.33 174.849 134.542C176.061 135.754 176.061 137.572 174.849 138.784L157.879 155.754C157.273 156.36 156.667 156.663 155.758 156.663Z" fill="white" />
                                    <path d="M169.697 189.994C168.788 189.994 168.182 189.691 167.576 189.085L149.394 171.206C148.182 169.994 148.182 168.176 149.394 166.964C150.606 165.752 152.424 165.752 153.636 166.964L171.818 184.843C173.03 186.055 173.03 187.873 171.818 189.085C171.212 189.691 170.606 189.994 169.697 189.994Z" fill="white" />
                                    <path d="M151.515 189.994C150.606 189.994 150 189.691 149.394 189.085C148.182 187.873 148.182 186.055 149.394 184.843L167.576 166.964C168.788 165.752 170.606 165.752 171.818 166.964C173.03 168.176 173.03 169.994 171.818 171.206L153.636 189.085C153.03 189.691 152.424 189.994 151.515 189.994Z" fill="white" />
                                </svg></div>
                                <p className="text-white text-lg font-bold">Accountability</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Accountability" ? "bg-[#272A5D]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Accountability" ? "bg-[#272A5D] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Accountability
                            </button>
                        </div>
                    </div>


                    {/* Innovation */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Innovation" ? "bg-white text-black" : "bg-[#818541]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Innovation")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Innovation")}
                    >
                        {selectedBox === "Innovation" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Innovation is key to progress, empowering us to solve problems creatively.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <g clip-path="url(#clip0_593_4155)">
                                        <path d="M99.9968 78.1172C89.5277 78.1172 81.0103 86.624 81.0103 97.0808C81.0103 107.538 89.5277 116.044 99.9968 116.044C110.466 116.044 118.983 107.538 118.983 97.0808C118.983 86.624 110.466 78.1172 99.9968 78.1172ZM99.9968 110.191C92.758 110.191 86.8696 104.309 86.8696 97.0808C86.8696 89.8512 92.758 83.9689 99.9968 83.9689C107.236 83.9689 113.124 89.8512 113.124 97.0808C113.124 104.309 107.236 110.191 99.9968 110.191Z" fill="white" />
                                        <path d="M134.556 71.0379L126.071 62.5632C125.039 61.5332 123.405 61.4172 122.24 62.2931L115.848 67.0905C113.984 66.1063 112.034 65.3006 110.02 64.6796L108.897 56.774C108.693 55.3305 107.455 54.2578 105.997 54.2578H93.997C92.5367 54.2578 91.3008 55.3305 91.0948 56.774L89.9717 64.6796C87.9576 65.3006 86.009 66.1063 84.1459 67.0905L77.754 62.2931C76.5867 61.4172 74.954 61.5332 73.921 62.5632L65.4371 71.0379C64.4056 72.0694 64.2897 73.7006 65.1655 74.8648L69.969 81.2506C68.9848 83.1107 68.1761 85.0577 67.5551 87.0688L59.6388 88.1918C58.1938 88.3963 57.1211 89.6323 57.1211 91.0895V103.074C57.1211 104.531 58.1938 105.767 59.6388 105.971L67.5551 107.094C68.1761 109.106 68.9833 111.053 69.969 112.913L65.1655 119.298C64.2897 120.463 64.4056 122.094 65.4371 123.125L73.921 131.6C74.954 132.63 76.5867 132.744 77.754 131.87L84.1459 127.073C86.009 128.055 87.9576 128.863 89.9717 129.484L91.0948 137.389C91.3008 138.833 92.5367 139.904 93.997 139.904H105.997C107.455 139.904 108.691 138.833 108.897 137.389L110.02 129.484C112.034 128.863 113.984 128.055 115.848 127.073L122.24 131.87C123.405 132.746 125.039 132.63 126.071 131.6L134.556 123.125C135.588 122.094 135.702 120.463 134.826 119.298L130.023 112.913C131.009 111.053 131.816 109.106 132.437 107.094L140.353 105.971C141.798 105.767 142.872 104.531 142.872 103.074V91.0895C142.872 89.6323 141.798 88.3963 140.353 88.1918L132.437 87.0688C131.816 85.0577 131.009 83.1107 130.023 81.2506L134.826 74.8648C135.702 73.7006 135.588 72.0694 134.556 71.0379ZM137.013 93.6285V100.533L129.715 101.569C128.529 101.737 127.565 102.608 127.279 103.771C126.602 106.542 125.506 109.183 124.025 111.62C123.402 112.643 123.466 113.94 124.187 114.896L128.615 120.783L123.726 125.664L117.833 121.242C116.875 120.524 115.576 120.458 114.552 121.081C112.112 122.559 109.468 123.653 106.692 124.332C105.53 124.616 104.657 125.579 104.487 126.763L103.453 134.052H96.5391L95.5031 126.763C95.3352 125.579 94.4609 124.616 93.2982 124.332C90.5226 123.653 87.8798 122.559 85.4399 121.081C84.416 120.458 83.1175 120.524 82.1592 121.242L76.2663 125.664L71.3774 120.782L75.8055 114.896C76.5242 113.94 76.5883 112.643 75.9672 111.62C74.4856 109.183 73.39 106.542 72.711 103.77C72.4272 102.608 71.4628 101.736 70.2772 101.568L62.9789 100.533V93.6285L70.2772 92.594C71.4628 92.4261 72.4272 91.5533 72.711 90.3922C73.39 87.6196 74.4856 84.9799 75.9672 82.543C76.5883 81.5192 76.5242 80.2222 75.8055 79.267L71.3774 73.3801L76.2663 68.4973L82.1592 72.9208C83.1175 73.638 84.416 73.7036 85.4399 73.0826C87.8798 71.6025 90.5226 70.5084 93.2982 69.8309C94.4609 69.5456 95.3337 68.5843 95.5031 67.3987L96.5391 60.1096H103.453L104.487 67.3987C104.657 68.5828 105.53 69.5456 106.692 69.8309C109.468 70.5084 112.112 71.6025 114.552 73.0826C115.576 73.7036 116.875 73.638 117.833 72.9208L123.726 68.4973L128.615 73.3801L124.187 79.267C123.466 80.2222 123.402 81.5207 124.025 82.543C125.506 84.9799 126.6 87.6196 127.279 90.3906C127.563 91.5533 128.528 92.4261 129.713 92.594L137.013 93.6285Z" fill="white" />
                                        <path d="M99.9956 23.0133C101.615 23.0133 102.925 21.7041 102.925 20.0882V2.92664C102.925 1.3092 101.615 0 99.9956 0C98.3782 0 97.0659 1.3092 97.0659 2.92664V20.0882C97.0659 21.7041 98.3782 23.0133 99.9956 23.0133Z" fill="white" />
                                        <path d="M187.686 87.5859H170.503C168.884 87.5859 167.574 88.8951 167.574 90.511C167.574 92.1285 168.884 93.4377 170.503 93.4377H187.686C189.304 93.4377 190.616 92.1285 190.616 90.511C190.616 88.8951 189.304 87.5859 187.686 87.5859Z" fill="white" />
                                        <path d="M29.4876 87.5859H12.3047C10.6873 87.5859 9.375 88.8951 9.375 90.511C9.375 92.1285 10.6873 93.4377 12.3047 93.4377H29.4876C31.105 93.4377 32.4173 92.1285 32.4173 90.511C32.4173 88.8951 31.1066 87.5859 29.4876 87.5859Z" fill="white" />
                                        <path d="M48.0668 42.7858C49.196 43.9134 51.082 43.9134 52.2096 42.7858C53.354 41.6429 53.354 39.7905 52.2096 38.6476L40.0605 26.5123C38.9161 25.3709 37.0607 25.3709 35.9162 26.5123C34.7734 27.6552 34.7734 29.5076 35.9162 30.652L48.0668 42.7858Z" fill="white" />
                                        <path d="M35.4139 62.0964L29.4767 59.7725C27.9691 59.1835 26.2708 59.9251 25.6803 61.4296C25.0898 62.9341 25.8329 64.6324 27.339 65.2214L33.2777 67.5453C34.7654 68.1267 36.4912 67.3729 37.0741 65.8882C37.6646 64.3822 36.9215 62.6854 35.4139 62.0964Z" fill="white" />
                                        <path d="M71.5471 26.0053C72.13 27.4899 73.8557 28.2437 75.3435 27.6624C76.8495 27.0734 77.5926 25.3751 77.0036 23.8706L74.608 17.767C74.019 16.261 72.3192 15.5194 70.8116 16.1084C69.3056 16.6989 68.5625 18.3957 69.153 19.9002L71.5471 26.0053Z" fill="white" />
                                        <path d="M124.646 27.6696C126.134 28.2509 127.86 27.4971 128.442 26.0125L130.838 19.9089C131.427 18.4029 130.686 16.7061 129.178 16.1156C127.672 15.5282 125.972 16.2682 125.382 17.7727L122.987 23.8778C122.397 25.3823 123.14 27.0791 124.646 27.6696Z" fill="white" />
                                        <path d="M149.852 43.6433C150.601 43.6433 151.352 43.358 151.924 42.7858L164.073 30.652C165.217 29.5076 165.217 27.6552 164.073 26.5123C162.929 25.3709 161.075 25.3709 159.93 26.5123L147.78 38.6476C146.635 39.7905 146.635 41.6429 147.78 42.7858C148.352 43.358 149.103 43.6433 149.852 43.6433Z" fill="white" />
                                        <path d="M174.31 61.4298C173.72 59.9237 172.02 59.1837 170.514 59.7727L164.575 62.0966C163.069 62.6856 162.326 64.3824 162.917 65.8884C163.5 67.3731 165.225 68.1269 166.713 67.5455L172.652 65.2216C174.158 64.6326 174.901 62.9343 174.31 61.4298Z" fill="white" />
                                        <path d="M100.531 30.1351C88.3256 30.0313 76.4146 33.5073 66.1088 40.183C64.7507 41.0634 64.3647 42.8746 65.2451 44.2311C66.124 45.5861 67.9398 45.9722 69.2963 45.0933C78.505 39.1301 89.1129 35.9853 100.011 35.9853C100.168 35.9853 100.327 35.9853 100.484 35.9868C115.569 36.1135 129.73 42.0751 140.361 52.7776C150.998 63.4847 156.856 77.6891 156.856 92.7739C156.856 111.222 147.827 128.588 132.703 139.229C127.713 142.739 124.451 148.116 123.631 153.995H113.609C111.99 153.995 110.68 155.306 110.68 156.922C110.68 158.538 111.99 159.848 113.609 159.848H123.428V174.854C123.428 178.562 120.407 181.579 116.695 181.579H83.2993C79.5869 181.579 76.5656 178.562 76.5656 174.854V159.848H101.891C103.51 159.848 104.82 158.538 104.82 156.922C104.82 155.306 103.51 153.995 101.891 153.995H76.3581C75.5494 148.108 72.3344 142.76 67.4042 139.309C52.2095 128.673 43.1382 111.278 43.1382 92.7754C43.1382 77.3656 49.321 62.9018 60.55 52.0482C61.7127 50.9236 61.7432 49.0712 60.6171 47.91C59.4926 46.7488 57.6386 46.7183 56.4744 47.8429C44.0964 59.8088 37.2788 75.7665 37.2788 92.7754C37.2788 113.184 47.284 132.372 64.0412 144.101C68.2145 147.022 70.7062 151.815 70.7062 156.922V174.854C70.7062 180.936 75.0519 186.023 80.8045 187.182C83.9875 194.921 91.4734 199.997 99.997 199.997C108.521 199.997 116.007 194.921 119.188 187.182C124.941 186.023 129.286 180.936 129.286 174.854V156.929C129.286 156.926 129.288 156.925 129.288 156.922C129.288 151.83 131.825 147.005 136.078 144.013C152.756 132.277 162.714 113.123 162.714 92.7754C162.714 76.1357 156.253 60.468 144.521 48.6562C132.794 36.852 117.172 30.2739 100.531 30.1351ZM99.997 194.146C94.8441 194.146 90.2192 191.562 87.5229 187.43H112.471C109.775 191.562 105.15 194.146 99.997 194.146Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_593_4155">
                                            <rect width="200" height="200" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg></div>
                                <p className="text-white text-lg font-bold">Innovation</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Innovation" ? "bg-[#818541]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Innovation" ? "bg-[#818541] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Innovation
                            </button>
                        </div>
                    </div>


                    {/* Respect */}
                    <div
                        className={`relative flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer transition-all duration-300 ${selectedBox === "Respect" ? "bg-white text-black" : "bg-[#A02629]"
                            }`}
                        onMouseEnter={() => setSelectedBox("Respect")}
                        onMouseLeave={() => setSelectedBox(null)}
                        onClick={() => setSelectedBox("Respect")}
                    >
                        {selectedBox === "Respect" ? (
                            <div className="text-center">
                                <p className="text-sm text-black">
                                    Respect is the foundation of meaningful interactions and mutual understanding.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="text-white text-4xl"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <g clip-path="url(#clip0_593_4174)">
                                        <path d="M193.75 181.252H186.57L189.441 146.858C189.314 146.861 189.19 146.877 189.062 146.877H183.168L180.298 181.252H170.477L167.757 146.877H161.488L164.208 181.252H44.9071L50.5844 109.489L64.5366 82.0444L99.8909 96.4624C101.368 97.0736 102.987 97.2578 104.564 96.994C106.138 97.2567 107.753 97.0722 109.227 96.4617L144.578 82.0447L148.77 90.2916C149.935 88.4172 151.572 86.8822 153.518 85.8409L135.521 50.4396C134.737 48.9142 134.27 47.2463 134.147 45.5358C134.023 43.8253 134.247 42.1075 134.804 40.4855C135.395 38.7715 136.327 37.1945 137.543 35.8493C138.758 34.504 140.234 33.4182 141.879 32.657C143.64 31.8272 145.548 31.3566 147.493 31.2728C149.437 31.189 151.379 31.4935 153.204 32.1687C156.468 33.3588 159.163 35.7342 160.754 38.8221L169.504 54.1078C170.037 55.0402 170.322 56.0945 170.329 57.1688L170.571 92.0374C170.564 92.9004 170.22 93.7265 169.611 94.3388C169.003 94.9512 168.179 95.3013 167.316 95.3142C166.454 95.3133 165.627 94.9702 165.017 94.3601C164.407 93.7501 164.063 92.923 164.062 92.0603V61.7204C164.063 61.1298 163.895 60.5512 163.58 60.0519L154.205 45.2082C153.762 44.5082 153.059 44.0128 152.251 43.8307C151.443 43.6486 150.596 43.7947 149.895 44.237C149.195 44.6793 148.699 45.3815 148.516 46.1893C148.333 46.9972 148.479 47.8445 148.92 48.5452L157.812 62.6245V90.8486C156.474 91.1931 155.288 91.9717 154.44 93.0626C153.592 94.1534 153.129 95.4949 153.125 96.8767V103.127H145.312C143.655 103.129 142.067 103.788 140.895 104.959C139.723 106.131 139.064 107.72 139.062 109.377V134.377C139.064 136.034 139.723 137.622 140.895 138.794C142.067 139.966 143.655 140.625 145.312 140.627H189.062C190.72 140.625 192.308 139.966 193.48 138.794C194.652 137.622 195.311 136.034 195.312 134.377V109.377C195.311 107.72 194.652 106.131 193.48 104.959C192.308 103.788 190.72 103.129 189.062 103.127H181.25V96.8767C181.245 95.5406 180.812 94.2413 180.013 93.1702C179.214 92.0991 178.093 91.3127 176.814 90.9268L176.703 75.0003L181.704 86.3443C183.478 87.4707 184.939 89.0264 185.953 90.8674C186.966 92.7085 187.498 94.7753 187.5 96.8767H189.062C190.21 96.8796 191.352 97.0413 192.456 97.3573C192.02 94.9745 191.309 92.6506 190.337 90.4321L176.594 59.2589L176.579 57.1268C176.564 54.9776 175.995 52.8685 174.928 51.0027L165.876 35.1871C163.545 31.0745 159.825 27.9274 155.383 26.3109C152.965 25.4214 150.402 24.9887 147.826 25.0348C149.504 21.7647 150.089 18.0427 149.495 14.4157C148.901 10.7887 147.159 7.44786 144.525 4.88416C141.891 2.32046 138.505 0.669043 134.863 0.172559C131.222 -0.323926 127.517 0.360702 124.293 2.12585C121.069 3.89099 118.496 6.64358 116.953 9.97916C115.409 13.3147 114.977 17.0574 115.718 20.6573C116.459 24.2572 118.335 27.5244 121.071 29.9789C123.806 32.4335 127.257 33.9458 130.916 34.2939C130.076 35.6 129.395 37.002 128.888 38.4699C128.173 40.5792 127.835 42.7977 127.887 45.0242C127.868 45.1944 127.863 45.366 127.873 45.537L129.292 65.4147L104.558 79.0094L79.8225 65.4146L81.2424 45.537C81.2516 45.3653 81.2466 45.1931 81.2273 45.0223C81.28 42.7964 80.9414 40.5786 80.2269 38.4699C79.7198 37.0019 79.0388 35.6 78.1985 34.2939C81.8703 33.9512 85.3351 32.4391 88.0833 29.98C90.8314 27.5209 92.7176 24.2447 93.4645 20.6334C94.2114 17.0221 93.7794 13.2665 92.2322 9.919C90.685 6.57155 88.1042 3.80909 84.8696 2.03807C81.635 0.26705 77.9174 -0.419006 74.2637 0.0808457C70.61 0.580697 67.2132 2.24006 64.5731 4.81479C61.933 7.38951 60.189 10.7436 59.5978 14.3836C59.0065 18.0236 59.5992 21.7573 61.2885 25.0353C58.7129 24.9892 56.151 25.4215 53.7331 26.3102C51.2219 27.2207 48.9207 28.6295 46.968 30.4521C45.0152 32.2747 43.4512 34.4733 42.3698 36.9158L18.7782 90.4321C18.4445 91.1892 18.1529 91.9623 17.8811 92.7421C17.8667 92.7842 17.8517 92.8256 17.8393 92.8679C16.4255 96.9674 15.8781 101.316 16.2315 105.638L22.5453 181.252H6.25C4.59298 181.254 3.00437 181.913 1.83267 183.084C0.660983 184.256 0.00189404 185.845 0 187.502V193.752C0.00189404 195.409 0.660983 196.997 1.83267 198.169C3.00437 199.341 4.59298 200 6.25 200.002H193.75C195.407 200 196.996 199.341 198.167 198.169C199.339 196.997 199.998 195.409 200 193.752V187.502C199.998 185.845 199.339 184.256 198.167 183.084C196.996 181.913 195.407 181.254 193.75 181.252ZM189.062 109.377L189.066 134.377H145.312V109.377H189.062ZM175 97.6391V103.127H159.375V97.2672C160.15 98.4512 161.179 99.4472 162.388 100.182C163.597 100.917 164.955 101.373 166.362 101.516C167.77 101.659 169.192 101.485 170.524 101.008C171.856 100.53 173.064 99.7616 174.061 98.7573C174.402 98.4089 174.716 98.0351 175 97.6391ZM121.615 17.1892C121.615 15.026 122.256 12.9113 123.458 11.1126C124.66 9.31399 126.368 7.9121 128.367 7.08427C130.365 6.25643 132.564 6.03983 134.686 6.46186C136.808 6.88388 138.757 7.92558 140.286 9.45522C141.816 10.9849 142.858 12.9337 143.28 15.0554C143.702 17.1771 143.485 19.3762 142.657 21.3748C141.829 23.3734 140.428 25.0816 138.629 26.2834C136.83 27.4852 134.716 28.1267 132.552 28.1267C129.653 28.1234 126.872 26.9701 124.822 24.9196C122.771 22.8691 121.618 20.089 121.615 17.1892ZM134.058 69.9281C134.581 69.6402 135.012 69.2082 135.297 68.6833C135.583 68.1584 135.712 67.5625 135.67 66.9664L135.467 64.123L141.735 76.4538L111.988 88.5851C112.051 86.5857 111.428 84.625 110.224 83.0275L134.058 69.9281ZM76.5625 6.2517C78.7257 6.2517 80.8404 6.89317 82.6391 8.095C84.4377 9.29683 85.8396 11.005 86.6674 13.0036C87.4953 15.0022 87.7119 17.2013 87.2898 19.323C86.8678 21.4447 85.8261 23.3935 84.2965 24.9232C82.7668 26.4528 80.818 27.4945 78.6963 27.9165C76.5746 28.3386 74.3755 28.122 72.3769 27.2941C70.3783 26.4663 68.6701 25.0644 67.4683 23.2657C66.2665 21.4671 65.625 19.3524 65.625 17.1892C65.6283 14.2894 66.7816 11.5093 68.8321 9.45881C70.8826 7.40833 73.6627 6.25495 76.5625 6.2517ZM48.0888 39.4365C48.8355 37.7603 49.9133 36.2525 51.2576 35.0035C52.6019 33.7546 54.1848 32.7903 55.9113 32.1687C57.7364 31.4932 59.6779 31.1884 61.6222 31.2722C63.5666 31.3561 65.4746 31.8269 67.2348 32.657C68.8808 33.4181 70.3561 34.504 71.5721 35.8494C72.7881 37.1948 73.7197 38.772 74.3111 40.4863C74.9357 42.3213 75.1326 44.2747 74.8866 46.1974L74.9294 46.1856L73.4451 66.9664C73.4025 67.5625 73.5318 68.1584 73.8175 68.6833C74.1032 69.2082 74.5334 69.6402 75.0572 69.9281L104.443 86.0781C105.012 86.3921 105.44 86.9118 105.639 87.531C105.838 88.1502 105.793 88.822 105.514 89.4091C105.234 89.9962 104.74 90.4542 104.134 90.6895C103.527 90.9248 102.854 90.9195 102.251 90.6748L62.6259 74.5149L64.0571 50.1856C64.1059 49.3582 63.824 48.5453 63.2734 47.9258C62.7229 47.3063 61.9487 46.9308 61.1213 46.882C60.294 46.8333 59.4811 47.1152 58.8616 47.6658C58.242 48.2163 57.8666 48.9905 57.8178 49.8178L56.2553 76.3803C56.217 77.0316 56.3834 77.6785 56.7312 78.2304C57.0789 78.7823 57.5907 79.2116 58.1947 79.458L58.7298 79.6762L46.204 104.315L24.7578 92.362L48.0888 39.4365ZM22.4602 105.117C22.2779 102.884 22.3967 100.636 22.8134 98.4337L44.2449 110.379L38.6375 181.252H28.817L22.4602 105.117ZM6.25 193.752V187.502H193.75L193.754 193.752H6.25Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_593_4174">
                                            <rect width="200" height="200" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg></div>
                                <p className="text-white text-lg font-bold">Respect</p>
                            </>
                        )}

                        {/* Add bottom button (100% width on hover or click) */}
                        <div
                            className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${selectedBox === "Respect" ? "bg-[#A02629]" : "bg-transparent"
                                }`}
                        >
                            <button
                                className={`w-full py-2 ${selectedBox === "Respect" ? "bg-[#A02629] text-white" : "text-transparent"
                                    } font-bold`}
                            >
                                Respect
                            </button>
                        </div>
                    </div>

                </div>
            </div>




            <div className="bg-[#005F73] py-12 mt-[90px] mb-[110px]">
                <div className="mx-auto max-w-[1300px] flex flex-col lg:flex-row items-center gap-10 px-4">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                        <img
                            src="/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated1 1 (1).png"
                            alt="Team Member"
                            height={438}
                            className=" w-full h-auto"
                            style={{ height: '438px' }}
                        />

                        <div className="flex gap-2" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '40px'
                        }}>
                            {/* Pagination Dots */}
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${i === 0 ? "bg-white" : "bg-gray-500"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>


                    {/* Text Section */}
                    <div className="text-center lg:text-left lg:w-1/2 text-white">
                        <h4 className="text-sm font-semibold mb-2">Testimonials</h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            HEAR WHAT OUR TEAM SAY ABOUT BIMT
                        </h2>
                        <p className="text-lg italic mb-4">
                            “I enjoy working for an Organization that challenges me and inspires me
                            to be my best.”
                        </p>
                        <p className="text-sm">Name, Senior Lecturer</p>

                        <div className="flex justify-end items-center mt-12 gap-4">
                            {/* Arrows */}
                            <div className="flex items-center gap-4">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#005F73]">
                                    &#x276E;
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#005F73]">
                                    &#x276F;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ConnectwithUs;
