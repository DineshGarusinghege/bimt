'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from 'react';
import '../styles/Global.scss'
import '../styles/AboutUs.scss'

export default function HigherNationalDiploma() {


    // const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);
    const animationRef = useRef(null);

    const startScrolling = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 4; // Increase for faster scrolling
            animationRef.current = requestAnimationFrame(startScrolling);
        }
    };

    // const stopScrolling = () => {
    //     cancelAnimationFrame(animationRef.current);
    // };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(startScrolling);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses'); // Replace with your API endpoint
                const data = await response.json();
                if (data.success) {
                    // Filter courses where program is "Diploma"
                    const diplomaCourses = data.data.filter(course => course.program === `Higher National Diploma`);
                    setCourses(diplomaCourses);
                    console.log(diplomaCourses)
                }
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        fetchCourses();
    }, []);

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



    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);


    const router = useRouter();

    const handleInputChange = (e) => {
        const userInput = e.target.value;
        setQuery(userInput);

        if (userInput.trim() !== "") {
            const filteredSuggestions = courses.filter((course) =>
                course.toLowerCase().includes(userInput.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
        // Navigate to /Diploma with the selected course
        router.push(`/Diploma?course=${encodeURIComponent(suggestion)}`);
    };

    const handleSearch = () => {
        if (query.trim()) {
            if (courses.includes(query)) {
                // Navigate to /Diploma with the searched course
                router.push(`/Diploma?course=${encodeURIComponent(query)}`);
            } else {
                alert("Sorry, not available at this time. For more information, please contact us.");
            }
        } else {
            alert("Please enter a course to search.");
        }
    };


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

    const backgroundImages = [
        '/images/coloured-pattern_page-0002.jpg',
        '/images/coloured-pattern_page-0004.jpg',
        '/images/coloured-pattern_page-0001.jpg',
        '/images/coloured-pattern_page-0003.jpg',
        '/images/coloured-pattern_page-0005.jpg',
        '/images/coloured-pattern_page-0006.jpg',
    ];


    const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    return (


        <>
            <head>
                <title>Diploma - BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus offers comprehensive Master’s degree programs designed to deepen your expertise and advance your career. With a focus on innovation and research, our programs empower students to become leaders in their chosen fields."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}

            {/* Here section */}
            <div>
                {/* Contact Us hero section */}
                <div
                    className="relative w-full bg-cover bg-center heroSectionHeight"
                    style={{
                        backgroundImage: "url('/images/Programme-banner_page-0001-1-scaled.jpg')",
                        objectPosition: 'center center'
                    }}
                >

                    <div className='relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain'>
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
                                        <Link
                                            href="/"
                                            className="hover:underline hover:text-blue-500 breadcrumbFont font-avenir"
                                        >
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
                                        <Link
                                            href="/Search"
                                            className="hover:underline hover:text-blue-500 breadcrumbFont font-avenir"
                                        >
                                            Programmes
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
                                        <span
                                            className="text-gray-600 breadcrumbFont font-avenir"
                                        >
                                            Diploma
                                        </span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full w-[1450px] mx-auto flex flex-col items-center justify-center">
                {/* Search Section */}
                <div className="absolute top-[-37px] z-30 w-full flex justify-center">
                    <div
                        className="w-[67%] mx-auto flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg searchBarBox"
                    >
                        {/* Search Input and Suggestions */}
                        <div className="relative flex items-center w-full pr-4 border-2 p-3 ">
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                placeholder="Type to Start searching..."
                                className="flex-1 bg-transparent outline-none text-base md:text-lg px-2 md:px-4 text-gray-600"
                            />
                            {/* Suggestions Dropdown */}
                            {suggestions.length > 0 ? (
                                <ul className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 max-h-40 overflow-y-auto z-50">
                                    {suggestions.map((suggestion) => (
                                        <li
                                            key={suggestion._id}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion.courseName}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                query.trim() && (
                                    <div className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 p-4 text-gray-600">
                                        waiting....
                                    </div>
                                )
                            )}
                        </div>

                        {/* Clear Button */}
                        <button
                            onClick={() => setQuery('')}
                            className="hover:bg-gray-300 transition duration-150 clearBtn"
                            aria-label="Clear input"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="bg-[#272A5D] text-white px-10 py-4 font-semibold transition duration-150 text-sm md:text-lg SearchButtton"
                        >
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>



            {/* Management Deploma Courses */}

            <div className="py-10 px-4 lg:px-16 pt-[150px]">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-gray-500 text-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: "24px",
                            fontStyle: 'normal',
                            fontWeight: "400",
                            lineHeight: 'normal'
                        }}
                    >Programmes</h3>
                    <h2 className="text-3xl font-bold text-[#1D267D] text-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >Diploma Courses</h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[1450px] mx-auto">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="flex bg-white shadow-lg overflow-hidden"
                            style={{
                                borderLeft: '4px solid #A02629',
                                backgroundImage: `url(${randomBg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {/* Left: Text Section */}
                            <div
                                className="flex flex-col py-10 px-5 w-2/3 relative"
                                style={{
                                    gap: '35px',
                                }}
                            >
                                <div>
                                    {/* <p className="text-sm text-gray-500">{course.courseTitle}</p> */}
                                    <p className="font-avenir font-bold" style={{
                                        fontSize: '16px', lineHeight: '25px', fontWeight: '600px', color: '#000000'
                                    }}>{course.courseTitle}</p>

                                    <div>
                                        {/* <h3 className="text-lg font-semibold text-[#1D267D]">{course.courseName}</h3> */}
                                        <h3 className="text-avenir" style={{
                                            fontSize: '24px', fontWeight: '400px', lineHeight: '36px', color: '#000000'
                                        }}>{course.courseName}</h3>
                                    </div>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <Link href={`/CourseContent/${course.courseID}`} >
                                        <button
                                            className="bg-white text-[#000000] border border-[#000000] py-3 px-5 rounded-md hover:bg-[#272A5D] hover:text-white transition"
                                            aria-label={`View details of ${course.courseName}`}
                                            style={{ border: '2px solid black', fontWeight: '600', fontSize: '14px' }}
                                        >
                                            View more
                                        </button>
                                    </Link>
                                    <Link href={"/ContactUs"} >
                                        <button
                                            className="bg-white border border-[#000000] text-[#000000] py-3 px-5 rounded-md hover:bg-[#272A5D] hover:text-white transition"
                                            style={{ border: '2px solid black', fontWeight: '600', fontSize: '14px' }}
                                        >
                                            Contact Us
                                        </button>
                                    </Link>

                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="w-1/3 relative z-10">
                                <Image
                                    src={course.courseImg}
                                    alt={course.courseName}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover p-5"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* study card start section */}
            <div className="relative py-10 overflow-hidden bg-gray-50">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-[#272A5D] pt-10" style={{ fontFamily: 'Work Sans' }}>
                        Study
                    </h3>
                    <h2 className="text-3xl font-bold text-[#272A5D]" style={{ fontFamily: 'Avenir LT Std', fontSize: '40px' }}>
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


            {/* Banner Section */}
            <div className="carousel-container overflow-hidden relative bg-white">
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
