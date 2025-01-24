'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';


export default function RoutestoCharteredStatus() {

    const [courses] = useState([]);

   


    const testimonials = [
        {
            image: "/images/young-female-indian-collage-girl-going-college-smiling_437792-127.avif",
            text: "“The continuous support, help, advice, and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate...”",
            name: "Azeem",
            buttonLabel: "Read Azeem's Story",
        },
        {
            image: "/images/young-indian-college-girl-smiling_54391-7128.avif",
            text: "“The campus environment and the faculty's dedication made a huge difference in my career path. I am truly grateful to BIMT.”",
            name: "Michael",
            buttonLabel: "Read Michael's Story",
        },
        {
            image: "/images/smiling-woman-holding-orange-planners-notebooks-one-arm-her-other-arm-is-holding_878783-7373.avif",
            text: "“BIMT provided me with the opportunity to grow academically and professionally. The hands-on experiences and resources were phenomenal.”",
            name: "Sara",
            buttonLabel: "Read Sara's Story",
        },
        {
            image: "/images/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-91.avif",
            text: "“The campus environment and the faculty's dedication made a huge difference in my career path. I am truly grateful to BIMT.”",
            name: "Michael",
            buttonLabel: "Read Michael's Story",
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { image, text, buttonLabel } = testimonials[currentIndex];

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

    return (


        <>
            <head>
                <title>Certificate Programmes | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus offers comprehensive Master’s degree programs designed to deepen your expertise and advance your career. With a focus on innovation and research, our programs empower students to become leaders in their chosen fields."
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
                                        href="/DoctorateDegree"
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
                                        Programs
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
                                        Certificate Programmes
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Search Bar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 flex justify-center px-4 md:px-0 searchProgram">
                    <div
                        className="inline-flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg searchBarBox"
                        style={{
                            width: "1000px", // Default fixed width for larger screens
                            maxWidth: "90%", // Ensures responsiveness on smaller screens
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        {/* Search Icon */}
                        <img
                            src="/images/Group.svg"
                            alt="icon"
                            className="w-10 h-10 md:w-12 md:h-12 searchIcon"
                        />

                        {/* Search Input and Suggestions */}
                        <div className="relative flex items-center w-full pr-4">
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                placeholder="Search your course here..."
                                className="flex-1 bg-transparent outline-none text-base md:text-lg px-2 md:px-4 text-gray-600"
                                style={{
                                    fontFamily: "Playfair",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    color: "rgba(0,0,0,0.60)",
                                }}
                            />
                            {/* Suggestions Dropdown */}
                            {suggestions.length > 0 ? (
                                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-40 overflow-y-auto">
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handleSuggestionClick(suggestion)}
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                query.trim() && (
                                    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 text-gray-600">
                                        Sorry, not available at this time. For more information, please contact us.
                                    </div>
                                )
                            )}
                        </div>

                        {/* Search Button */}
                        <div>
                            <button
                                onClick={handleSearch}
                                className="btnBlue bg-[#272A5D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-150 text-sm md:text-lg searchBtn"
                                style={{
                                    width: "120px", // Smaller button width for mobile
                                    height: "40px", // Smaller button height for mobile
                                    fontSize: "16px", // Adjusted font size for mobile
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <span>SEARCH</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Management Deploma Courses */}

            <div className="bg-[#F6F8FB] pb-[110px] px-4 lg:px-16 pt-[110px]">
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
                    >Certificate Programmes</h2>
                </div>

                {/* Grid Section */}
                <div className="gap-6 max-w-[1590px] mx-auto h-full justify-items-center items-center content-center">
                    {/* {courses.map((course) => ( */}
                    <div
                        // key={course._id}
                        className="flex bg-white shadow-lg overflow-hidden"
                        style={{
                            borderLeft: '4px solid #A02629',
                        }}
                    >
                        {/* Left: Text Section */}
                        <div
                            className="flex flex-col justify-between p-4 w-2/3"
                            style={{
                                display: 'flex',
                                padding: '15px 20px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '35px',
                            }}
                        >
                            <div>
                                {/* <p className="text-sm text-gray-500">{course.courseTitle}</p> */}
                                <p className="text-sm text-gray-500">Certificate Programmes</p>

                                <div
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '40px',
                                    }}
                                >
                                    {/* <h3 className="text-lg font-semibold text-[#1D267D]">{course.courseName}</h3> */}
                                    <h3 className="text-lg font-semibold text-[#1D267D]">Certificate in AI Driven Accounting Practices</h3>

                                </div>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <Link href={"/CAIDAP"} >
                                    <button
                                        className="bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition"
                                        // aria-label={`View details of ${course.courseName}`}
                                        style={{
                                            display: 'flex',
                                            width: '125px',
                                            height: '40px',
                                            padding: '11px 0px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#000',
                                            fontFamily: 'Work Sans',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        }}
                                    >
                                        View more
                                    </button>
                                </Link>
                                <Link href={"/ContactUs"} >
                                    <button
                                        className="bg-white border border-[#1D267D] text-white py-2 px-4 rounded-md hover:bg-[#151B54] transition"
                                        style={{
                                            display: 'flex',
                                            width: '125px',
                                            height: '40px',
                                            padding: '11px 0px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: '#000',
                                            fontFamily: 'Work Sans',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </Link>

                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="w-1/3">
                            <Image
                                // src={course.courseImg}
                                // alt={course.courseName}
                                src={"/images/06d91ed8a19e5793b7cdef8cf982e080.jpeg"}
                                alt='certificate'
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                                style={{
                                    padding: '20px',
                                }}
                            />
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>


            <div className="max-w-[1457px] mx-auto px-6 py-10 pt-[150px]">
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
                    <div className="bg-white shadow-lg rounded-lg p-8 absolute left-[650px] w-[781px] h-[457px] top-[38px]">
                        <h4 className="text-blue-600 text-lg font-bold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: "Work Sans",
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >
                            Why BIMT
                        </h4>
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
                                <Link href={"/CAIDAP"}>
                                    <button className="mt-4 bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition">
                                        View more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Study cards end section */}

            {/* Testimonials */}

            <div
                className="bg-[#006987] flex flex-col items-center py-16"
                style={{ marginTop: '110px', marginBottom: '100px' }}
            >
                {/* Outer Container for Content with Fixed Width */}
                <div
                    className="w-[1349px] mx-auto flex flex-col lg:flex-row items-center lg:items-start"
                >
                    {/* Image Section */}
                    <div className="relative lg:mr-16 mb-8 lg:mb-0">
                        <Image
                            src={image}
                            alt="Alumni"
                            width={438}
                            height={498}
                            className="rounded-lg"
                        />
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white"
                            >
                                {/* Left Arrow SVG */}
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
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white"
                            >
                                {/* Right Arrow SVG */}
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
                        <h2 className="text-white text-4xl font-semibold mb-6 max-w-[550px]"
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
                            className="text-white text-xl leading-relaxed mb-8 max-w-[600px]"
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
                            {text}
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
                            {buttonLabel}
                        </button>
                    </div>

                    <div style={{ paddingTop: '550px' }}>

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
                </div>
            </div>

        </>
    );
}
