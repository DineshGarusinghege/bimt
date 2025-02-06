'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useState } from "react";
import '../styles/Global.scss'

export default function Event() {

    const [isExpanded1, setIsExpanded1] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const toggleSection1 = () => {
        setIsExpanded1(!isExpanded1);
    };


    const [isExpanded2, setIsExpanded2] = useState(false);
    // const [selectedImage2, setSelectedImage2] = useState<string | null>(null);

    const toggleSection2 = () => {
        setIsExpanded2(!isExpanded2);
    };


    const [isExpanded3, setIsExpanded3] = useState(false);
    // const [selectedImage3, setSelectedImage3] = useState<string | null>(null);

    const toggleSection3 = () => {
        setIsExpanded3(!isExpanded3);
    };

    const [isExpanded4, setIsExpanded4] = useState(false);
    // const [selectedImage4, setSelectedImage4] = useState<string | null>(null);

    const toggleSection4 = () => {
        setIsExpanded4(!isExpanded4);
    };

    const [isExpanded5, setIsExpanded5] = useState(false);
    // const [selectedImage5, setSelectedImage5] = useState<string | null>(null);

    const toggleSection5 = () => {
        setIsExpanded5(!isExpanded5);
    };

    const [isExpanded6, setIsExpanded6] = useState(false);
    // const [selectedImage6, setSelectedImage6] = useState<string | null>(null);

    const toggleSection6 = () => {
        setIsExpanded6(!isExpanded6);
    };

    const [isExpanded7, setIsExpanded7] = useState(false);
    // const [selectedImage7, setSelectedImage7] = useState<string | null>(null);

    const toggleSection7 = () => {
        setIsExpanded7(!isExpanded7);
    };

    const [isExpanded8, setIsExpanded8] = useState(false);
    // const [selectedImage8, setSelectedImage8] = useState<string | null>(null);

    const toggleSection8 = () => {
        setIsExpanded8(!isExpanded8);
    };

    const [isExpanded9, setIsExpanded9] = useState(false);
    const toggleSection9 = () => {
        setIsExpanded9(!isExpanded9);
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

    const images2 = [
        "/images/02-scaled.jpg",
        "/images/07-scaled.jpg",
        "/images/10-4-scaled.jpg",
        "/images/17-2.jpg",
        "/images/19-1.jpg",
        "/images/06-scaled.jpg",
        "/images/09-scaled.jpg",
        "/images/03-scaled.jpg",
        "/images/11-4-scaled.jpg",
        "/images/08-scaled.jpg",
        "/images/05-scaled.jpg",
        "/images/21.jpg",
        "/images/04-scaled.jpg",
        "/images/16-2.jpg",
        "/images/01-scaled.jpg",
        "/images/23.jpg",
        "/images/12-3-scaled.jpg",
        "/images/14-2.jpg",
        "/images/15-2.jpg",
        "/images/20-1.jpg",
    ];

    const images3 = [
        "/images/03-CEO-Workshop.jpg",
        "/images/10-CEO-Workshop-scaled.jpg",
        "/images/14-CEO-Workshop-scaled.jpg",
        "/images/04-CEO-Workshop.jpg",
        "/images/02-CEO-Workshop.jpg",
        "/images/07-CEO-Workshop.jpg",
        "/images/09-CEO-Workshop.jpg",
        "/images/21-CEO-Workshop-scaled.jpg",
        "/images/17-CEO-Workshop-scaled.jpg",
        "/images/01-CEO-Workshop.jpg",
        "/images/22-CEO-Workshop-scaled.jpg",
        "/images/13-CEO-Workshop-scaled.jpg",
        "/images/20-CEO-Workshop-scaled.jpg",
        "/images/05-CEO-Workshop.jpg",
        "/images/19-CEO-Workshop-scaled.jpg",
        "/images/23-CEO-Workshop-scaled.jpg",
        "/images/08-CEO-Workshop.jpg",
        "/images/18-CEO-Workshop-scaled.jpg",
        "/images/12-CEO-Workshop-scaled.jpg",
        "/images/24-CEO-Workshop-scaled.jpg",
        "/images/06-CEO-Workshop.jpg",
        "/images/11-CEO-Workshop-scaled.jpg",
        "/images/15-CEO-Workshop-scaled.jpg",
        "/images/16-CEO-Workshop-scaled.jpg",

    ];


    const images4 = [
        "/images/09-1-scaled.jpg",
        "/images/01-1.jpg",
        "/images/15-3.jpg",
        "/images/14-3.jpg",
        "/images/07-1-scaled.jpg",
        "/images/13-4.jpg",
        "/images/04-1-scaled.jpg",
        "/images/02-1.jpg",
        "/images/10-5-scaled.jpg",
        "/images/05-1-scaled.jpg",
        "/images/11-5-scaled.jpg",
        "/images/06-1-scaled.jpg",
        "/images/12-4-scaled.jpg",
        "/images/03-1.jpg",
        "/images/affaires.jpg",

    ];

    const images5 = [
        "/images/IMG_7-1.jpg",
        "/images/IMG_8-1.jpg",
        "/images/IMG_3-1.jpg",
        "/images/IMG_11-1.jpg",
        "/images/IMG_4-1.jpg",
        "/images/IMG_9-1.jpg",
        "/images/IMG_1-1.jpg",
        "/images/IMG_5-1.jpg",
        "/images/IMG_14-1.jpg",
        "/images/IMG_10-1.jpg",
        "/images/IMG_2-1.jpg",
        "/images/IMG_12-1.jpg",
        "/images/IMG_15-1.jpg",
        "/images/IMG_6-1.jpg",
    ];


    const images6 = [
        "/images/457504024_841220034782573_1163826557915965687_n.jpg",
        "/images/WhatsApp-Image-2024-10-20-at-17.04.37_f71b1322.jpg",
        "/images/1547748265193.jpg",
        "/images/sdfsf.jpg",
        "/images/Mr.-Moiz-H-Rehmanjee.jpg",
    ];


    const images7 = [
        "/images/453250864_820609903510253_4106152729645181036_n.jpg",
        "/images/453409721_820610096843567_5295323304344973433_n.jpg",
        "/images/453412630_820610033510240_5593860127426601547_n.jpg",
        "/images/453250373_820609720176938_2283189892734568462_n.jpg",
        "/images/453241768_820609970176913_3640553280771778313_n.jpg",
        "/images/453200951_820609710176939_25711760934518767_n.jpg",
        "/images/453237485_820609816843595_4136531567438397407_n.jpg",
        "/images/453328663_820609916843585_8902224000574200954_n.jpg",
    ]

    const images8 = [
        "/images/2024_12_19_16_48_IMG_7790-scaled (1).WEBP",
        "/images/2024_12_19_16_26_IMG_7862-scaled (1).WEBP",
        "/images/2024_12_19_15_37_IMG_5323-scaled (1).WEBP",
        "/images/2024_12_19_16_45_IMG_7803-scaled (1).WEBP",
        "/images/2024_12_19_16_43_IMG_7811-scaled (1).WEBP",
        "/images/2024_12_19_14_46_IMG_5276-scaled (1).WEBP",
        "/images/2024_12_19_16_44_IMG_7866-scaled (1).WEBP",
        "/images/2024_12_19_16_40_IMG_7830-scaled (1).WEBP",
        "/images/2024_12_19_15_38_IMG_5329-scaled (1).WEBP",
        "/images/2024_12_19_16_47_IMG_7800-scaled.WEBP",
        "/images/2024_12_19_16_39_IMG_7838-scaled.WEBP",
        "/images/2024_12_19_16_27_IMG_7854-1-scaled.WEBP",
        "/images/2024_12_19_15_04_IMG_5299-scaled.WEBP",
        "/images/2024_12_19_16_46_IMG_7794-scaled.WEBP",
        "/images/2024_12_19_15_54_IMG_5351-scaled.WEBP",
        "/images/2024_12_19_16_27_IMG_7846-scaled.WEBP",
        "/images/2024_12_19_15_43_IMG_5335-scaled.WEBP",
        "/images/2024_12_19_16_19_IMG_7723-scaled.WEBP",
        "/images/2024_12_19_16_48_IMG_7783-scaled.WEBP",
        "/images/2024_12_19_16_42_IMG_7818-scaled.WEBP",
        "/images/2024_12_19_16_39_IMG_7838-scaled (1).WEBP",
        "/images/2024_12_19_16_46_IMG_7794-scaled (1).WEBP",
        "/images/2024_12_19_15_54_IMG_5351-scaled (1).WEBP",
        "/images/2024_12_19_16_27_IMG_7846-scaled (1).WEBP",
        "/images/2024_12_19_15_43_IMG_5335-scaled (1).WEBP",
        "/images/2024_12_19_16_19_IMG_7723-scaled (1).WEBP",
        "/images/2024_12_19_16_48_IMG_7783-scaled (1).WEBP",
        "/images/2024_12_19_16_42_IMG_7818-scaled (1).WEBP",
        "/images/2024_12_19_16_48_IMG_7790-scaled.WEBP",
        "/images/2024_12_19_16_44_IMG_7865-scaled.WEBP",
        "/images/2024_12_19_15_04_IMG_5296-scaled.WEBP",
        "/images/2024_12_19_16_26_IMG_7858-scaled.WEBP",
        "/images/2024_12_19_16_26_IMG_7862-scaled.WEBP",
        "/images/2024_12_19_15_37_IMG_5323-scaled.WEBP",
        "/images/2024_12_19_16_45_IMG_7803-scaled.WEBP",
        "/images/2024_12_19_16_43_IMG_7811-scaled.WEBP",
        "/images/2024_12_19_14_46_IMG_5276-scaled.WEBP",
        "/images/2024_12_19_16_44_IMG_7866-scaled.WEBP",
        "/images/2024_12_19_16_40_IMG_7830-scaled.WEBP",
        "/images/2024_12_19_15_38_IMG_5329-scaled.WEBP",
    ]

    const images9 = [
        "/images/2024_12_22_11_25_IMG_5608-scaled.WEBP",
        "/images/2024_12_22_09_45_IMG_5522-scaled.WEBP",
        "/images/2024_12_22_10_34_IMG_5555-scaled.WEBP",
        "/images/2024_12_22_10_41_IMG_5561-scaled.WEBP",
        "/images/2024_12_22_12_02_IMG_5625-scaled.WEBP",
        "/images/2024_12_22_11_08_IMG_5605-scaled.WEBP",
        "/images/2024_12_22_11_58_IMG_5616-scaled.WEBP",
        "/images/2024_12_22_09_25_IMG_5508-scaled.WEBP",
        "/images/2024_12_22_10_49_IMG_5587-scaled.WEBP",
        "/images/2024_12_22_11_02_IMG_5599-scaled.WEBP",
        "/images/2024_12_22_10_42_IMG_5570-scaled.WEBP",
        "/images/2024_12_22_11_59_IMG_5618-scaled.WEBP",
        "/images/2024_12_22_15_07_IMG_5645-scaled.WEBP",
        "/images/2024_12_22_10_48_IMG_5582-scaled.WEBP",
        "/images/2024_12_22_11_59_IMG_5620-scaled.WEBP",
        "/images/2024_12_22_15_07_IMG_5647-scaled.WEBP",
        "/images/2024_12_22_10_46_IMG_5575-scaled.WEBP",
        "/images/2024_12_22_11_28_IMG_5613-scaled.WEBP",
        "/images/2024_12_22_12_38_IMG_5629-scaled.WEBP",
        "/images/2024_12_22_10_49_IMG_5586-scaled.WEBP",
        "/images/2024_12_22_09_24_IMG_5506-scaled.WEBP",
        "/images/2024_12_22_11_08_IMG_5607-scaled.WEBP",
        "/images/2024_12_22_11_03_IMG_5601-scaled.WEBP",
        "/images/2024_12_22_10_48_IMG_5578-scaled.WEBP",
    ]

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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}


                    {/* Banner Two */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/12-3-scaled.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Early Literacy Development Workshop
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Highlights of the "Ealry Literacy Development Worshop Series - 02" Held on 27<sup>th</sup> Octomber 2024
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection2}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded2
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded2 && (
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
                                {images2.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}


                    {/* Banner 03 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#97B09C] to-[rgba(239,250,233,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/19-CEO-Workshop-scaled.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Service Innovation for Accounting Students
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Successful workshop exclusively for BIMT students on “Service Innovation for Accounting Students”, empowering future accountants to harness service industry tactics for a competitive advantage in their careers by Dr. Sumith De Silva, Head of Marketing and Corporate Communication at the Airport and Aviation Service.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection3}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded3
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded3 && (
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
                                {images3.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}



                    {/* Banner 04 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto  bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/03-1.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                'Train The Trainer' Program!
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Exciting times at BIMT as we wrap up our ‘Train the Trainer’ program! Our dedicated lecturers are now equipped with the latest strategies to inspire and empower our students.
                            </p>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                This program was conducted by two prominent professionals:
                            </p>

                            <div className="flex items-start gap-12">
                                {/* Left Side */}
                                <div className="text-left">
                                    <p className="font-bold">Dr. Deepal Perera</p>
                                    <p className="font-bold">Head of Sales,</p>
                                    <p className="font-bold">Ex-Pack Corrugated Cartons PLC</p>
                                </div>

                                {/* Right Side */}
                                <div className="text-left">
                                    <p className="font-bold">Mr. Tirizvi Marikar</p>
                                    <p className="font-bold">The Principal</p>
                                    <p className="font-bold">Colombo Zahira College</p>
                                </div>
                            </div>

                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection4}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded4
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded4 && (
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
                                {images4.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}


                    {/* Banner 05 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/IMG_6-123.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Branding Matters
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Branding Matters, another successful workshop was exclusively conducted for BIMT Students on Brand Strategy by Mr. Sameera Dilshan Liyanage, Chief Marketing Officer (CMO) of the Bank of Ceylon! This workshop focused on the Strategic Significance of Corporate and Personal Branding, helping our students to cultivate an innovative mindset through out of the box thinking.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection5}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded5
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded5 && (
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
                                {images5.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}

                    {/* Banner 06 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#97B09C] to-[rgba(239,250,233,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/sdfsf.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                The Finance Career Playbook
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                The Finance Career Playbook: A Practical Guide for Professional Growth,” which helps our students on the path to becoming successful financial professionals, conducted by Mr. Moiz Rehmanjee, Group CFO of Hemas Holdings PLC.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection6}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded6
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded6 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 expandedEventGallary"
                            style={{
                                backgroundImage: 'url("/images/17-1.jpg")',
                                // backgroundSize: "cover",
                                // backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images6.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-[300px] object-cover h-auto overflow-hidden cursor-pointer"
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}

                    {/* Banner 07 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/453250864_820609903510253_4106152729645181036_n.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Workshop On Cybersecurity
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Reflecting on a successful workshop on Cybersecurity in the Banking and Financial Services Sector held on July 27, 2024! This workshop was conducted by Ms. Mahesha Amarasuriya, Director of Mastercard Sri Lanka, Member of the CIMA Global Council, Past Chairperson – CIMA Sri Lanka Country Network Panel. We honor her with our sincere gratitude for her invaluable support and dedication to the students of BIMT Campus.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection7}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded7
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded7 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 expandedEventGallary"
                            style={{
                                backgroundImage: 'url("/images/17-1.jpg")',
                                // backgroundSize: "cover",
                                // backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images7.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}


                    {/* Banner 08 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/jjjjjjjjjjjjjj.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Christmas Party 2025
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Bringing the festive spirit to the workplace! Grateful for the unity that drives us, the goals that inspire us, and the joy we share this Christmas.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection8}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded8
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded8 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 expandedEventGallary"
                            style={{
                                backgroundImage: 'url("/images/2024_12_19_14_46_IMG_5276-scaled (1).WEBP")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images8.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M7 7 L23 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23 7 L7 23" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    )}


                    {/* Banner 09 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)]  flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5 mb-[80px] mt-[80px]"
                    >
                        {/* Left Side Image */}
                        <div className="w-full md:w-[300px] h-auto">
                            <Image
                                src="/images/2024_12_22_11_58_IMG_5616-scaled.WEBP"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
                            <h2 className="text-black font-bold leading-tight text-black font-avenir EventNewsHeader">
                                Blood Donation Programme
                            </h2>
                            <p className="text-black leading-relaxed text-justify font-work-sans eventNewsPara">
                                Highlights from the BIMT Blood Donation Programme 2024.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-10 h-10 flex items-center justify-center cursor-pointer"
                            onClick={toggleSection9}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path
                                    d={
                                        isExpanded9
                                            ? "M25.879 5.42976L15 16.3087L4.12102 5.42976L0 9.55076L15 24.5508L30 9.55076L25.879 5.42976Z"
                                            : "M25.879 24.5508L15 13.6718L4.12102 24.5508L0 20.4298L15 5.42976L30 20.4298L25.879 24.5508Z"
                                    }
                                    fill="#5A5A5A"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Expanded Section */}
                    {isExpanded9 && (
                        <div
                            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 expandedEventGallary"
                            style={{
                                backgroundImage: 'url("/images/2024_12_22_12_38_IMG_5629-scaled.WEBP")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10" style={{

                            }}>
                                {images9.map((src, index) => (
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
                        <div className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50 p-4">
                            <div className="relative flex items-center w-full max-w-[1000px] mx-auto ">
                                {/* Left Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 mr-2 sm:mr-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M20 5 L10 15 L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Preview Image */}
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="w-full max-w-[90vw] h-auto max-h-[80vh] object-contain"
                                />

                                {/* Right Arrow */}
                                <button
                                    className="text-white bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-500 ml-2 sm:ml-4"
                                    onClick={() => {
                                        const currentIndex = images.indexOf(selectedImage);
                                        setSelectedImage(images[(currentIndex + 1) % images.length]);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                                        <path d="M10 5 L20 15 L10 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Close Button */}
                                <button
                                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white p-1 sm:p-2 bg-gray-700 rounded-full hover:bg-gray-500"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
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
