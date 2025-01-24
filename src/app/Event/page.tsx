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
                <title>Event | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus hosts a variety of events aimed at fostering learning, collaboration, and community engagement. From workshops and seminars to cultural celebrations, our events provide enriching experiences that inspire growth and connection."
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

            <div className='mb-[110px]'>
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/b47412ad8a0ffbb9bf87411b6fa1df83.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                The Management Skills Development Programme
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                The Management Skills Development Programme&#34; launched by BIMT Campus in collaboration with the Chartered Management Institute, UK.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
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

                {/* Banner Section 03 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/509b6de294511114cf78b1f2cf115c20.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Early Literacy Development Workshop - 2024
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                Highlights of the &#34;Early Literacy Development Workshop Series - 02&#34; Held on 27th October 2024.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage2(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage2 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage2}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage2(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>


                {/* eVENT 3 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#97B09C] to-[rgba(239,250,233,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/03551e478ba62ade43902fee4331cb0c.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Empowering Future Accountants: Service Innovation Workshop by Dr. Sumith De Silva
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                Successful workshop exclusively for BIMT students on “Service Innovation for Accounting Students”, empowering future accountants to harness service industry tactics for a competitive advantage in their careers by Dr. Sumith De Silva, Head of Marketing and Corporate Communication at the Airport and Aviation Service.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage3(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage3 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage3}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage3(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>


                {/* eVENT O4 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/7b879a14984d84aa11330422fc7bd3da.png"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Train the Trainer&#34; Program at BIMT
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                BIMT Campus proudly concluded its transformative &#34;Train the Trainer&#34; program, designed to equip our lecturers with cutting-edge teaching strategies. Led by industry experts Dr. Deepal Perera, Head of Sales at Ex-Pack Corrugated Cartons PLC, and Mr. Tirizvi Marikkar, Principal of Colombo Zahira College, this initiative underscores our commitment to fostering innovation and excellence in education. Our educators are now better prepared to inspire and empower the next generation of leaders.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage4(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage4 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage4}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage4(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>


                {/* Event 05 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/c170bf322fcd7e026871d6c953b6f5c3.png"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Exclusive Workshop on Brand Strategy by Mr. Sameera Dilshan Liyanage
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                Branding Matters, another successful workshop was exclusively conducted for BIMT Students on Brand Strategy by Mr. Sameera Dilshan Liyanage, Chief Marketing Officer (CMO) of the Bank of Ceylon! This workshop focused on the Strategic Significance of Corporate and Personal Branding, helping our students to cultivate an innovative mindset through out of the box thinking
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage5(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage5 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage5}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage5(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Event 6 */}

                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#97B09C] to-[rgba(239,250,233,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/7fae7983bd1e69e97c507daa7539620c.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Professional Growth Insights by Mr. Moiz Rehmanjee
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                The Finance Career Playbook: A Practical Guide for Professional Growth, &#34;which helps our students on the path to becoming successful financial professionals, conducted by Mr. Moiz Rehmanjee, Group CFO of Hemas Holdings PLC.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage6(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage7 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage7}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage6(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>


                {/* Event 07 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[240px] bg-gradient-to-r from-[#D39243] to-[rgba(211,194,154,0.80)] flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[200px]">
                            <Image
                                src="/images/85498b22db30b351cd68f30f8e5e9547.jpg"
                                alt="Workshop"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Insights for Banking & Finance by Ms. Mahesha Amarasuriya
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                Reflecting on a successful workshop on Cybersecurity in the Banking and Financial Services Sector held on July 27, 2024! This workshop was conducted by Ms. Mahesha Amarasuriya, Director of Mastercard Sri Lanka, Member of the CIMA Global Council, Past Chairperson - CIMA Sri Lanka Country Network Panel. We honor her with our sincere gratitude for her invaluable support and dedication to the students of BIMT Campus.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage7(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage8 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage8}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage7(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                </div>



                {/* Event 08 */}
                <div>
                    {/* Banner Section 01 */}
                    <div
                        className="mx-auto w-[1300px] h-[402px] bg-gradient-to-r from-[#E6E6E6] to-[rgba(200,200,200,0.80)]  flex items-center gap-[40px] px-[30px] py-[20px]"
                        style={{ marginTop: "50px" }}
                    >
                        {/* Left Side Image */}
                        <div className="w-[300px] h-[362px]">
                            <Image
                                src="/images/15e52e517f7536f4709679ab81d5d23a.jpg"
                                alt="Workshop"
                                width={300}
                                height={362}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Side Text */}
                        <div className="flex flex-col gap-[20px] flex-grow" style={{ width: "800px" }}>
                            <h2
                                className="text-white font-bold text-[40px] leading-[53px]"
                                style={{
                                    color: "#000",
                                    fontFamily: "Avenir LT Std",
                                    fontWeight: "600",
                                }}
                            >
                                Mr. Farshath Jamal Honored with 45 Under 45 Leadership Award
                            </h2>
                            <p
                                className="text-black text-[16px] leading-[18.77px] text-justify"
                                style={{
                                    fontFamily: "Work Sans",
                                    textUnderlinePosition: "from-font",
                                    textDecorationSkipInk: "none",
                                }}
                            >
                                Mr. Farshath Jamal, CEO of BIMT Campus, has received the 45 Under 45 Leadership Excellence Platinum Award from the Global CEO Forum. The award was presented at an event held at the Galadari Hotel, Colombo.
                            </p>
                        </div>

                        {/* Toggle Arrow */}
                        <div
                            className="w-[40px] h-[240px] flex items-center justify-center cursor-pointer"
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
                            className="relative w-[1300px] mx-auto py-8"
                            style={{
                                backgroundImage: 'url("/images/Rectangle 54.png")',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* White Overlay with Opacity */}
                            <div className="absolute inset-0 bg-white opacity-50"></div>

                            <div
                                className="relative grid grid-cols-4 gap-5"
                                style={{
                                    zIndex: 1,
                                }}
                            >
                                {images.map((src, index) => (
                                    <div
                                        key={index}
                                        className="w-[300px] h-[250px] bg-white shadow-lg overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage8(src)} // Open modal with selected image
                                    >
                                        <Image
                                            src={src}
                                            alt={`Gallery Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal for Full-Screen Image */}
                    {selectedImage6 && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    src={selectedImage6}
                                    alt="Selected Image"
                                    width={1000}
                                    height={700}
                                    className="rounded-lg"
                                />
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 text-black p-2 rounded-full"
                                    onClick={() => setSelectedImage8(null)}
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
