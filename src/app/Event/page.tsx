'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useState } from "react";
import '../styles/Global.scss'

export default function Event() {

    const [isExpanded1, setIsExpanded1] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const toggleSection1 = () => {
        setIsExpanded1(!isExpanded1);
    };


    const [isExpanded2, setIsExpanded2] = useState(false);
    const [selectedImage2, setSelectedImage2] = useState<string | null>(null);

    const toggleSection2 = () => {
        setIsExpanded2(!isExpanded2);
    };


    const [isExpanded3, setIsExpanded3] = useState(false);
    const [selectedImage3, setSelectedImage3] = useState<string | null>(null);

    const toggleSection3 = () => {
        setIsExpanded3(!isExpanded3);
    };

    const [isExpanded4, setIsExpanded4] = useState(false);
    const [selectedImage4, setSelectedImage4] = useState<string | null>(null);

    const toggleSection4 = () => {
        setIsExpanded4(!isExpanded4);
    };

    const [isExpanded5, setIsExpanded5] = useState(false);
    const [selectedImage5, setSelectedImage5] = useState<string | null>(null);

    const toggleSection5 = () => {
        setIsExpanded5(!isExpanded5);
    };

    const [isExpanded6, setIsExpanded6] = useState(false);
    const [selectedImage6, setSelectedImage6] = useState<string | null>(null);

    const toggleSection6 = () => {
        setIsExpanded6(!isExpanded6);
    };

    const [isExpanded7, setIsExpanded7] = useState(false);
    const [selectedImage7, setSelectedImage7] = useState<string | null>(null);

    const toggleSection7 = () => {
        setIsExpanded7(!isExpanded7);
    };

    const [isExpanded8, setIsExpanded8] = useState(false);
    const [selectedImage8, setSelectedImage8] = useState<string | null>(null);

    const toggleSection8 = () => {
        setIsExpanded8(!isExpanded8);
    };

    const images = [
        "/images/201.jpg",
        "/images/202.jpg",
        "/images/203.jpg",
        "/images/204.jpg",
        "/images/205.jpg",
        "/images/206.jpg",
        "/images/207.jpg",
        "/images/208.jpg",
        "/images/209.jpg",
        "/images/210.jpg",
        "/images/211.jpg",
        "/images/212.jpg",
        "/images/213.jpg",
        "/images/214.jpg",
        "/images/215.jpg",
        "/images/216.jpg",
        "/images/217.jpg",
        "/images/218.jpg",
        "/images/219.jpg",
        "/images/220.jpg",
        "/images/221.jpg",

    ];

    return (
        <>
            <head>
                <title>News & Event - BIMT Campus</title>
                <meta
                    name="description"
                    content="Join BIMT Campus events for learning, collaboration, and growth. Explore workshops, seminars, and cultural celebrations!"
                />
            </head>
            <MainHeader />
            {/* <AnnounsmentBar /> */}


            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-center heroSectionHeight before:absolute before:inset-0 before:bg-white before:bg-opacity-50"
                style={{ backgroundImage: "url('/images/SEK_5536-scaled.webp')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#ffffff45",
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">
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
                                    <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">
                                        Life at BIMT
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
                                    <span className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">Campus Life</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="mb-[80px] mt-[80px] px-4 max-w-[1450px] w-full mx-auto">
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/DSC_0615.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                The Management Skills Development Programme
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                The Management Skills Development Programme” launched by BIMT Campus in collaboration with the Chartered Management Institute, UK. In today’s fast-paced world, effective management is more critical than ever. We know that the business world is looking for talented corporate leaders to address the challenges. As we embark on a journey that is designed to empower our managers and leaders to be a talented corporate leader where we believe that we can contribute for nation’s human capital development.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded1
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded1 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 expandedEventGallary"
                            style={{
                                backgroundImage: 'url("/images/17-1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-[300px] h-auto overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-auto object-cover eventImages"
                                        
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery Navigation */}
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>

                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg w-full max-w-[90vw] h-auto"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4  text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    )}


                    {/* Banner Section 02*/}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/b47412ad8a0ffbb9bf87411b6fa1df83.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir" style={{
                                fontSize: "40px"
                            }}>
                                The Management Skills Development Programme
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans" style={{
                                fontSize: '16px'
                            }}>
                                The Management Skills Development Programme” launched by BIMT Campus in collaboration with the Chartered Management Institute, UK. In today’s fast-paced world, effective management is more critical than ever. We know that the business world is looking for talented corporate leaders to address the challenges. As we embark on a journey that is designed to empower our managers and leaders to be a talented corporate leader where we believe that we can contribute for nation’s human capital development.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded1
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded1 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4"
                            style={{
                                backgroundImage: 'url("/images/17-1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-[300px] h-auto bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(src)}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery Navigation */}
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>

                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg w-full max-w-[90vw] h-auto"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4  text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
