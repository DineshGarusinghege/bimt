'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MainHeader from '../ui/MainHeader/index';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/CourseContent.scss'
// import WhyBIMT from '../componets/WhyBIMT';
import ProgrammeAim from '../componets/ProgrammeAim';
import Modules from '../componets/Modules';
import CareerProgression from '../componets/CareerProgression';
import Requirements from '../componets/Requirements';
import Admission from '../componets/Admission';
import Payment from '../componets/Payment';
import Overview from '../componets/Overview';
import '../styles/Global.scss';

export const dynamic = "force-dynamic"; // ✅ Stops static pre-rendering errors


export default function CAIDAP() {

    const [activeSection, setActiveSection] = useState("overview");



    const sections = {
        // 'why-bimt': <WhyBIMT />,
        'programme-aim': <ProgrammeAim />,
        'modules': <Modules />,
        'career-progression': <CareerProgression />,
        'requirements': <Requirements />,
        'admission': <Admission />,
        'payment': <Payment />,
        'overview': <Overview />
    };


    // const testimonials = [
    //     {
    //         image: "/images/young-female-indian-collage-girl-going-college-smiling_437792-127.avif",
    //         text: "“The continuous support, help, advice, and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate...”",
    //         name: "Azeem",
    //         buttonLabel: "Read Azeem's Story",
    //     },
    //     {
    //         image: "/images/young-indian-college-girl-smiling_54391-7128.avif",
    //         text: "“The campus environment and the faculty's dedication made a huge difference in my career path. I am truly grateful to BIMT.”",
    //         name: "Michael",
    //         buttonLabel: "Read Michael's Story",
    //     },
    //     {
    //         image: "/images/smiling-woman-holding-orange-planners-notebooks-one-arm-her-other-arm-is-holding_878783-7373.avif",
    //         text: "“BIMT provided me with the opportunity to grow academically and professionally. The hands-on experiences and resources were phenomenal.”",
    //         name: "Sara",
    //         buttonLabel: "Read Sara's Story",
    //     },
    //     {
    //         image: "/images/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-91.avif",
    //         text: "“The campus environment and the faculty's dedication made a huge difference in my career path. I am truly grateful to BIMT.”",
    //         name: "Michael",
    //         buttonLabel: "Read Michael's Story",
    //     },

    // ];


    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    //     );
    // };

    // const { image, text, buttonLabel } = testimonials[currentIndex];

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



    return (

        <>

            <MainHeader />
            {/* <AnnounsmentBar /> */}

            <div className="max-w-screen-xl py-6 px-4 navMenu">
                <nav
                    className="bg-gray-200 bg-opacity-80 py-2 px-4 text-sm text-gray-700"
                    style={{
                        display: "inline-flex",
                        padding: "5px 25px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        background: "#FFFFFFDE",
                        borderRadius: '100px'
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
                            <Link href="/Search" className="breadcrumbFontBlack font-avenir">
                                Programme
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
                            <Link href="/Diploma" className="breadcrumbFontBlack font-avenir">
                                Diploma
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
                            <span className="breadcrumbFontBlack font-avenir">Certificate in AI Driven Accounting Practices</span>
                        </li>
                    </ol>
                </nav>
            </div>


            <section className="max-w-[1420px] mx-auto p-6 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center">
                    {/* Left Side: Video (30%) */}
                    <div className="flex justify-center items-center w-full h-full">
                        <video
                            autoPlay
                            loop
                            muted
                            controls
                            className="w-full h-auto"
                        >
                            <source src="/0124.webm" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Right Side: Image (70%) */}
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="/images/Screenshot-2024-12-20-104154-e1734671699662.png"
                            alt="Certificate Programme"
                            className="w-full object-cover rounded-lg p-[30px]"
                        />
                    </div>
                </div>
            </section>


            <div className="w-full overflow-hidden">
                {/* Navigation and Buttons */}
                <div className="w-full">
                    <div className="max-w-[1420px] mx-auto py-6 flex flex-col md:flex-row justify-between items-center">

                        {/* Links Section - Responsive Two Row Layout */}
                        <div className="w-full flex flex-wrap justify-center gap-4">
                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "overview"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("overview")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Overview
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "programme-aim"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("programme-aim")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Programme Aim
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "modules"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("modules")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Modules
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "career-progression"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("career-progression")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Career Progression
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "requirements"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("requirements")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Requirements
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "admission"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("admission")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Admission
                            </button>

                            <button
                                className={`px-[20px] py-2 transition font-medium font-avenir ${activeSection === "payment"
                                    ? "bg-[#23255D] text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveSection("payment")}
                                style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                                Payment
                            </button>
                        </div>

                        {/* Contact Us Button */}
                        <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0">
                            <button
                                className="bg-[#1D267D] text-white py-2 px-6 rounded-md hover:bg-[#151B54] transition font-avenir"
                                style={{
                                    width: "200px",
                                    height: "56px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    border: "2px solid #272A5D",
                                    background: "#272A5D",
                                    color: "#fff",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rendered Section Below */}
                <div className="max-w-[1300px] mx-auto py-6 px-5 md:px-20">
                    {sections[activeSection] || <div>Section not found</div>}
                </div>
            </div>




            {/* study card start section */}
            <div className="relative py-10 overflow-hidden">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-[#272A5D] pt-10" style={{ fontFamily: 'Work Sans' }}>
                        Study
                    </h3>
                    <h2 className="text-3xl font-bold text-[#272A5D] font-avenir" style={{ fontSize: '40px' }}>
                        WE OFFER TO YOU
                    </h2>
                </div>

                {/* Left Arrow Button */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-200 transition z-10"
                >
                    <svg className="w-6 h-6 text-[#1D267D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full p-3 hover:bg-gray-200 transition z-10"
                >
                    <svg className="w-6 h-6 text-[#1D267D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Marquee Section */}
                <div className="relative flex overflow-hidden">
                    <div
                        className="flex animate-marquee space-x-6"
                        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
                        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
                    >
                        {/* Duplicate items for smooth infinite loop */}
                        {[...studyPrograms, ...studyPrograms].map((program, index) => (
                            <div
                                key={index}
                                className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform"
                            >
                                {/* Card Image */}
                                <div className="relative w-full h-[200px]">
                                    <Image src={program.img} alt={program.title} layout="fill" objectFit="cover" />
                                </div>

                                {/* Card Text */}
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-[#1D267D]">{program.title}</h3>
                                    <button className="mt-4 bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition">
                                        View more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
