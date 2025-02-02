'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useState } from "react";

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
        "/images/335f50a14164115a615eff36fab39a55.jpg",
        "/images/0d7a8687bef5ae67abd5a4da3cd691bc.jpg",
        "/images/97a21b5d16f4349c1c2b2dfd7c9b3834.jpg",
        "/images/0d7a8687bef5ae67abd5a4da3cd691bc (1).jpg",
        "/images/0d7a8687bef5ae67abd5a4da3cd691bc.jpg",
        "/images/c9b51d5481c92846019e0b8d61ee777b.jpg",
        "/images/d1d97bf7f92545d7b7c772e92788fcff.jpg",
        "/images/1a2918c214f5400cbbe037ddb5282735.jpg",
        "/images/c9b51d5481c92846019e0b8d61ee777b.jpg",
        "/images/fb95912304647c1643d140056a4b84cc.jpg",
        "/images/1a2918c214f5400cbbe037ddb5282735 (1).jpg",
        "/images/d1d97bf7f92545d7b7c772e92788fcff (1).jpg",
        "/images/1a2918c214f5400cbbe037ddb5282735 (1).jpg",
        "/images/e7412e2c3115fca9257b37efc0379a97.jpg",
        "/images/c9b51d5481c92846019e0b8d61ee777b.jpg",
        "/images/fb95912304647c1643d140056a4b84cc.jpg",
        "/images/1a2918c214f5400cbbe037ddb5282735 (1).jpg",
        "/images/f4e3aeb690b3e3b280b4bd4812461176.jpg",
        "/images/244b96edfe7e4a05fbf6e68e7342f45b.jpg",
        "/images/715669089374fbf48d14fe67d24a9be4.jpg",
        "/images/a5a13fc619c57873f5cc0416910b5e27.jpg",
        "/images/af6acbfc09bee4e3bdf7263f21452a6f.jpg",
        "/images/15a96873157bdf7f05b85b7b1577b71c.jpg",
        "/images/1b158a974332ab52f5eb3d115a65c203.jpg",
    ];

    return (
        <>
            <head>
                <title>Event - BIMT Campus</title>
                <meta
                    name="description"
                    content="Join BIMT Campus events for learning, collaboration, and growth. Explore workshops, seminars, and cultural celebrations!"
                />
            </head>
            <MainHeader />
            {/* <AnnounsmentBar /> */}

            {/* Here section */}
            <div className="relative bg-cover bg-center h-[480px] z-0" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
                {/* Overlay for better text visibility */}
                {/* <div className="absolute inset-0 bg-[#272A5DB2] opacity-[70%] z-10"></div> */}

                <div className='relative max-w-[1430px] mx-auto top-[55px]'>
                    {/* Breadcrumb Section */}
                    <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20">
                        <nav
                            className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
                            style={{
                                display: 'inline-flex',
                                padding: '5px 25px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                background: '#ffffff45',
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="hover:underline hover:text-blue-500"
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Avenir LT Std',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <span className="text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
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
                                    <Link
                                        href="/Event"
                                        className="hover:underline hover:text-blue-500"
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Avenir LT Std',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        }}
                                    >
                                        Events
                                    </Link>
                                </li>

                                <span className="text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
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
                                    <span
                                        className="text-gray-600"
                                        style={{
                                            color: '#fff',
                                            fontFamily: 'Avenir LT Std',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        }}
                                    >
                                        Events
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

            </div>



            <div className="mb-[110px] mt-[110px] px-4 max-w-[1450px] w-full mx-auto">
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto max-w-[1450px] w-full h-auto bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 px-4 md:px-6 lg:px-5 py-6 md:py-5"
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
                                fontSize:'16px'
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

                    {/* Modal for Full-Screen Image */}
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                            <div className="relative">
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg w-full max-w-[90vw] h-auto"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
