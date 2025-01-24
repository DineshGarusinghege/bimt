'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useRouter } from "next/navigation";


export default function Event() {
    const scrollRef = useRef(null);
    const animationRef = useRef(null);

    const startScrolling = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 4; // Increase for faster scrolling
            animationRef.current = requestAnimationFrame(startScrolling);
        }
    };

    const stopScrolling = () => {
        cancelAnimationFrame(animationRef.current);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(startScrolling);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);



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


    const [courses, setCourses] = useState([]);

    // Fetch data from API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses'); // Replace with your API endpoint
                const data = await response.json();
                if (data.success) {
                    // Filter courses where program is "Diploma"
                    const diplomaCourses = data.data.filter(course => course.program === 'Diploma');
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
            title: 'Certificate Programmes',
            img: '/images/06d91ed8a19e5793b7cdef8cf982e080.webp',
            link: "/CertificateProgrammes",
        },
        {
            id: 2,
            title: 'Diploma',
            img: '/images/1 (1).jpg',
            link: "/Diploma",
        }, {
            id: 3,
            title: 'Higher National Diploma',
            img: '/images/2.webp',
            link: "/HigherNationalDiploma",
        },
        {
            id: 4,
            title: 'Higher Diploma',
            img: '/images/Rectangle 49 (4).png',
            link: "/HigherDiploma",
        },
        {
            id: 5,
            title: "Bachelors Degree",
            img: '/images/Rectangle 49 (3).png',
            link: "/BachelorsDegree",
        },
        {
            id: 6,
            title: "Postgraduate Degree",
            img: '/images/516bd0bc870b4d2021b42d3988381fb2.webp',
            link: "/PostgraduateDiploma",
        },
        {
            id: 7,
            title: 'Masters Degree',
            img: '/images/Rectangle 49 (2).png',
            link: "/MastersDegree",
        },
        {
            id: 8,
            title: 'Doctorate Degree',
            img: '/images/Rectangle 49 (1).png',
            link: "/DoctorateDegree",
        },
        {
            id: 9,
            title: 'CMI (UK)',
            img: '/images/Rectangle 49.png',
            link: "/CMI",
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
                <title>Diploma | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus offers industry-focused diploma programs designed to provide practical knowledge and essential skills. Our programs empower students to excel in their chosen fields and create a strong foundation for further education or career advancement."
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
                                        href="/Diploma"
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
                                        Diploma
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




            {/* featured */}


            {/* dynamically add courses */}

            <div
                className="max-w-[1300px] mx-auto text-center"
                style={{
                    paddingTop: '80px',
                    paddingBottom: '100px',
                }}
            >
                {/* Header Section */}
                <h3
                    className="text-xl font-medium mb-2"
                    style={{
                        color: '#272A5D',
                        fontFamily: 'Work Sans',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                    }}
                >
                    Programs
                </h3>
                <h1
                    className="text-3xl font-bold mb-10"
                    style={{
                        color: '#272A5D',
                        fontFamily: 'Avenir LT Std',
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '53px',
                    }}
                >
                    Browse Diploma Programs
                </h1>

                {/* Grid Section */}
                <div className="grid grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course._id}
                            className="border rounded-lg shadow-lg overflow-hidden"
                            style={{ width: '400px' }}
                        >
                            <img
                                src={course.courseImg}
                                alt={course.courseName}
                                className="h-[264.339px] w-[400px] object-cover"
                            />
                            <div className="flex justify-between items-center px-5 py-3 bg-white">
                                <span
                                    className="text-lg font-medium"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '53px',
                                    }}
                                >
                                    {course.courseName}
                                </span>
                                <Link href={`/CourseContent/${course.courseID}`}>
                                    <button
                                        className="text-lg font-bold p-2 rounded-full hover:bg-gray-100 transition"
                                        aria-label={`View details of ${course.courseName}`}
                                    >
                                        {/* SVG Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="31"
                                            viewBox="0 0 30 31"
                                            fill="none"
                                        >
                                            <g clipPath="url(#clip0_474_2258)">
                                                <path
                                                    d="M15 0.838867C6.72914 0.838867 0 7.56801 0 15.8389C0 24.1097 6.72914 30.8389 15 30.8389C23.2709 30.8389 30 24.1097 30 15.8389C30 7.56801 23.2709 0.838867 15 0.838867ZM15 28.9639C7.76273 28.9639 1.875 23.0761 1.875 15.8389C1.875 8.6016 7.76273 2.71387 15 2.71387C22.2373 2.71387 28.125 8.6016 28.125 15.8389C28.125 23.0761 22.2373 28.9639 15 28.9639ZM21.2878 15.1761C21.6541 15.5424 21.6541 16.1356 21.2878 16.5017L16.6003 21.1892C16.4173 21.3722 16.1773 21.4639 15.9375 21.4639C15.6977 21.4639 15.4577 21.3722 15.2747 21.1892C14.9084 20.8229 14.9084 20.2296 15.2747 19.8636L18.3619 16.7764H9.375C8.85727 16.7764 8.4375 16.3571 8.4375 15.8389C8.4375 15.3207 8.85727 14.9014 9.375 14.9014H18.3619L15.2747 11.8142C14.9084 11.4479 14.9084 10.8546 15.2747 10.4886C15.641 10.1225 16.2342 10.1222 16.6003 10.4886L21.2878 15.1761Z"
                                                    fill="#272A5D"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_474_2258">
                                                    <rect
                                                        width="30"
                                                        height="30"
                                                        fill="white"
                                                        transform="translate(0 0.838867)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* study card start section */}
            <div className="bg-[#F6F8FB] py-10 px-4 lg:px-16">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3
                        className="text-lg font-medium"
                        style={{
                            paddingTop: "70px",
                            color: "#272A5D",
                            fontFamily: "Work Sans",
                            fontSize: "24px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                        }}
                    >
                        Study
                    </h3>
                    <h2
                        className="text-3xl font-bold"
                        style={{
                            color: "#272A5D",
                            fontFamily: "Avenir LT Std",
                            fontSize: "40px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "53px",
                        }}
                    >
                        WE OFFER TO YOU
                    </h2>
                </div>

                {/* Auto-Scrolling Section */}
                <div
                    ref={scrollRef}
                    className="relative flex gap-6 overflow-hidden whitespace-nowrap py-6"
                    style={{ scrollBehavior: "smooth" }}
                    onMouseEnter={stopScrolling}
                    onMouseLeave={startScrolling}
                >
                    {studyPrograms.map((program) => (
                        <div
                            key={program.id}
                            className="inline-block bg-white border border-gray-200 shadow-md rounded-lg mx-2 overflow-hidden hover:shadow-lg transition-shadow"
                            style={{
                                width: "350px",
                                height: "350px",
                                flexShrink: 0,
                            }}
                        >
                            {/* Card Image */}
                            <Link href={program.link}>
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src={program.img}
                                        alt={program.title}
                                        width={350}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </Link>

                            {/* Card Text */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-[#1D267D]">
                                    {program.title}
                                </h3>
                                <Link href={program.link}>
                                    <button className="mt-4 bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition">
                                        View more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
