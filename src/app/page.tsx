// pages/index.js
"use client";
import "tailwindcss/tailwind.css";
import Image from 'next/image';
import './styles/home.scss';
import './styles/Global.scss';
// import PopupMoel from './componets/PopupModel/index'
import MainHeader from './ui/MainHeader';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import "@/app/globals.css";
import { motion } from 'framer-motion';
import ExpertSection from './componets/ExpertSection';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported


interface Course {
    _id: string;
    courseName: string;
}


interface CountdownProps {
    eventDate: string;
}

// Countdown Component
const CountdownComponent: React.FC<CountdownProps> = ({ eventDate }) => {
    const [countdown, setCountdown] = useState<string>('Loading...');
    const calculateCountdown = () => {
        const eventTime = new Date(eventDate).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
            setCountdown('Event started!');
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown(`${days}d ${hours}h ${minutes}m`);
    };

    useEffect(() => {
        calculateCountdown(); // Initial calculation

        const interval = setInterval(() => {
            calculateCountdown();
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [eventDate]);

    return <p className="text-2xl font-bold mt-2" style={{ color: '#000' }}>{countdown}</p>;
};


const HomePage: React.FC = () => {
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    type MenuType = "programs" | "services" | "contact" | null;

    const toggleMenu = (menuName: MenuType) => { // ✅ Use specific type instead of "any"
        setHoveredMenu(hoveredMenu === menuName ? null : menuName);
    };
    const nextEventDate = '2025-01-25T00:00:00'; // Date for the event (ISO format)

    const router = useRouter();
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Course[]>([]);


    const [showVideo, setShowVideo] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1480px)");
        let timer: NodeJS.Timeout;

        if (mediaQuery.matches) {
            // Only set timeout if screen width is > 480px
            timer = setTimeout(() => {
                setShowVideo(true);
                console.log(showVideo);
            }, 10000); // 10 seconds delay
        } else {
            setShowVideo(false); // Ensure video is hidden on small screens
        }

        // Cleanup on component unmount
        return () => clearTimeout(timer);
    }, []);


    // Fetch suggestions dynamically as user types
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.trim()) {
                try {
                    const response = await fetch(`/api/courses?search=${encodeURIComponent(query)}`);
                    const data = await response.json();

                    if (data.success) {
                        setSuggestions(data.data);
                    } else {
                        setSuggestions([]);
                    }
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [query]);

    // Handle search navigation
    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/Search?query=${encodeURIComponent(query)}`);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion: Course) => {
        setQuery(suggestion.courseName);
        router.push(`/Search?query=${encodeURIComponent(suggestion.courseName)}`);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
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


    // const [menuOpen, setMenuOpen] = useState(false); 

    const [showHeader, setShowHeader] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollPercent = (currentScroll / scrollHeight) * 100;

            if (scrollPercent >= 10 && currentScroll > lastScroll) {
                // Show header on 20% scroll down
                setShowHeader(true);
            } else if (scrollPercent < 10 || currentScroll < lastScroll) {
                // Hide header on scroll up or less than 20% scroll
                setShowHeader(false);
            }

            // Update lastScroll position
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);


    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.trim()) {
                try {
                    const response = await fetch(`/api/courses?search=${encodeURIComponent(query)}`);
                    const data = await response.json();

                    if (data.success) {
                        setSuggestions(data.data); // Update suggestions with fetched courses
                    } else {
                        setSuggestions([]);
                    }
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [query]);


    return (
        <>
            {/* <PopupMoel /> */}
            <div
                className="min-h-screen bg-fixed bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/bg1.jpg')",
                    backgroundPosition: "bottom",
                }}
            >
                <head>
                    <title>BIMT Campus</title>
                    <meta
                        name="description"
                        content="BIMT Campus gives you the opportunity to major in a particular field. This means you have the opportunity to gain industry- specific skills and knowledge."
                    />
                </head>

                {showHeader && <MainHeader />}
                <div className="relative w-full h-screen z-10 overflow-hidden">
                    {/* Background Video */}
                    <div className="absolute inset-0 -z-10">
                        <video
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        >
                            <source src="/0124.webm" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row w-full h-full max-w-[1450px] mx-auto heroHomeSection">
                        {/* Left Section (Text at Bottom Center) */}
                        <div className="flex flex-col justify-end items-center md:items-start w-full md:w-12/12 p-4 text-center md:text-left">
                            <h1 className="text-[64px] font-bold leading-[53px] text-white mb-2 ">
                                WELCOME TO BIMT CAMPUS
                            </h1>


                            <p className="text-lg md:text-xl text-white herosectionSUbsectiontext">
                                Learn, Lead, and Change the World.
                            </p>

                            {/* Sound Icon */}
                            <div className="mt-4 pb-[50px]">
                                <button
                                    className="flex justify-center items-center w-12 h-12 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200"
                                    onClick={() => console.log('Sound icon clicked!')}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9 4.804v10.392a1 1 0 01-1.555.832L4.526 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.526l2.919-3.028A1 1 0 019 4.804zM13.707 5.293a1 1 0 011.414 0 7.978 7.978 0 012.121 5.657 7.978 7.978 0 01-2.121 5.657 1 1 0 01-1.414-1.414 5.978 5.978 0 001.415-4.243 5.978 5.978 0 00-1.415-4.243 1 1 0 010-1.414zM11.707 7.293a1 1 0 011.414 0 3.978 3.978 0 011.172 2.828 3.978 3.978 0 01-1.172 2.828 1 1 0 01-1.414-1.414A1.978 1.978 0 0012 10a1.978 1.978 0 00-.293-1.414 1 1 0 010-1.414z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Section (Centered Navigation Links) */}
                        <div className="flex justify-end items-center w-full md:w-1/2 p-4">
                            {/* Hamburger Menu Icon (Visible on Mobile Only) */}
                            <div className="mobileResponsiveSVgMenuIcon absolute top-5 right-5 md:hidden z-50"

                            >
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="p-2 text-white"
                                >
                                    {menuOpen ? (
                                        // Close Icon
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ffffff" /> </g>

                                        </svg>
                                    ) : (
                                        // Menu Icon
                                        <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path fill="#ffffff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <header
                                className={`mobileHeaderRes absolute w-[250px] z-50 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
                                    } md:translate-x-0 md:opacity-100`}
                                style={{
                                    transition: "transform 0.3s ease, opacity 0.3s ease",
                                    pointerEvents: "auto", // Ensure clicks are enabled
                                }}
                            >
                                {/* First Section: Logo and Menu */}
                                <div className="bg-white/15 backdrop-blur-lg text-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 mb-4">
                                    {/* Logo */}
                                    <div className="mb-4">
                                        <img
                                            src="/images/bimtlog.png"
                                            alt="BIMT Logo"
                                            width={150}
                                            height={64}
                                            className="w-auto h-auto"
                                        />
                                    </div>

                                    {/* Menu Links */}
                                    <nav className="flex flex-col items-center gap-4 text-gray-200">
                                        <Link href="/" className="hover:underline">
                                            Home
                                        </Link>
                                        <Link href="/AboutUs" className="hover:underline">
                                            About Us
                                        </Link>

                                        {/* Programs Menu */}

                                        <div
                                            className="relative group"
                                            onMouseEnter={() => setHoveredMenu("programs")}
                                            onMouseLeave={() => setHoveredMenu(null)}
                                            onClick={() => toggleMenu("programs")} // Enables click toggle
                                        >

                                            <Link
                                                href="/Search"
                                                className="hover:text-[#272A5D] menuTitle flex items-center menuTitleGap cursor-pointer"
                                            >
                                                Programmes
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 16l-6-6h12l-6 6z" />
                                                </svg>
                                            </Link>

                                            {/* Dropdown Menu */}
                                            {hoveredMenu === "programs" && (
                                                <ul
                                                    className="absolute left-[full] top-[full] bg-[#272A5D] shadow-lg rounded-lg text-white w-64 headerSubmenu z-30"
                                                    style={{
                                                        borderBottom: "2px solid #A02629",
                                                    }}
                                                >
                                                    {[
                                                        { href: "/CertificateProgrammes", label: "Certificate Programmes" },
                                                        { href: "/Diploma", label: "Diploma" },
                                                        { href: "/HigherNationalDiploma", label: "Higher National Diploma" },
                                                        { href: "/HigherDiploma", label: "Higher Diploma" },
                                                        { href: "/BachelorsDegree", label: "Bachelors Degree" },
                                                        { href: "/PostgraduateDiploma", label: "Postgraduate Diploma" },
                                                        { href: "/MastersDegree", label: "Masters Degree" },
                                                        { href: "/DoctorateDegree", label: "Doctorate Degree" },
                                                        { href: "/CMI", label: "CMI (UK)" },
                                                    ].map((item, index) => (
                                                        <li key={index} className="menuTitleList">
                                                            <Link
                                                                href={item.href}
                                                                className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white"
                                                            >
                                                                {item.label}
                                                            </Link>
                                                            {index !== 8 && <hr className="border-gray-300" />}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <Link href="/CampusLife" className="hover:underline">
                                            Life at BIMT
                                        </Link>
                                        <Link href="/ContactUs" className="hover:underline">
                                            Connect with Us
                                        </Link>
                                    </nav>

                                    {/* Student Portal Button */}
                                    <Link
                                        href="https://lms.bimt.lk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div
                                            className="studentPortal flex items-end border-2 border-[#fff] rounded-lg px-4 py-2 font-semibold text-[#fff] text-lg "
                                            style={{
                                                display: 'flex',
                                                height: '56px',
                                                padding: '16px 10px',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                                gap: '10px',
                                                flexShrink: '0',
                                                fontSize: '16px',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal',
                                            }}
                                        >

                                            {/* Button Text */}
                                            <span className="text-avenir text-white hover:text-blue-500 transition-all duration-300">
                                                STUDENT PORTAL
                                            </span>

                                        </div>
                                    </Link>
                                    {/* Icon */}
                                    <div className="studentPortalIcon">
                                        <Image
                                            src="/images/graduate 1 (2).png"
                                            width={61.25}
                                            height={43.04}
                                            alt="graduate icon"
                                        />
                                    </div>
                                </div>

                                {/* Second Section: Follow Us */}
                                <div className="bg-white/15 backdrop-blur-lg text-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-4">
                                    <p className="text-lg text-white">Follow Us On</p>
                                    <div className="flex space-x-4">
                                        <Link href="https://www.facebook.com/bimt.lk" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <rect x="1" y="1" width="24" height="24" rx="4" stroke="#E0E6EB" />
                                                <path d="M13.8834 10.2187C13.8834 9.29436 14.3318 9.29436 14.7802 9.29436H15.3183C15.4082 9.2956 15.4974 9.27828 15.5806 9.24341C15.6638 9.20855 15.7395 9.15685 15.803 9.09137C15.8665 9.02588 15.9167 8.94795 15.9505 8.86215C15.9843 8.77636 16.0011 8.68445 15.9999 8.59185V7.72297C15.9999 7.62993 15.982 7.53782 15.9472 7.45198C15.9124 7.36614 15.8614 7.28828 15.7971 7.22292C15.7329 7.15757 15.6567 7.10602 15.573 7.07126C15.4892 7.03651 15.3996 7.01924 15.3094 7.02046L14.0358 7.00198C13.665 6.98719 13.2955 7.05552 12.9528 7.20223C12.6101 7.34895 12.3023 7.57056 12.0508 7.85177C11.7993 8.13298 11.6099 8.4671 11.4959 8.83106C11.3818 9.19502 11.3457 9.58016 11.3901 9.95989V11.3002H10.6816C10.5008 11.3002 10.3275 11.3742 10.1996 11.5059C10.0718 11.6377 10 11.8164 10 12.0027V12.8716C10 13.0579 10.0718 13.2366 10.1996 13.3683C10.3275 13.5001 10.5008 13.5741 10.6816 13.5741H11.3901V18.5378C11.3901 18.6604 11.4374 18.778 11.5215 18.8646C11.6056 18.9513 11.7196 19 11.8385 19H13.4618C13.5761 18.9929 13.6833 18.9411 13.7617 18.8552C13.84 18.7693 13.8836 18.6557 13.8834 18.5378V13.5741H14.6726C14.8534 13.5741 15.0267 13.5001 15.1546 13.3683C15.2824 13.2366 15.3542 13.0579 15.3542 12.8716V12.0027C15.3542 11.8164 15.2824 11.6377 15.1546 11.5059C15.0267 11.3742 14.8534 11.3002 14.6726 11.3002H13.8834V10.2187Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link href="https://www.youtube.com/@colombocampus8522" target="_blank" rel="noopener noreferrer">
                                            <svg fill="#ffffff" height="26px" width="26px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49" stroke="#ffffff">

                                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512 c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744 C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z" /> <path d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229 c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113 c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z" /> </g> </g> </g>

                                            </svg>
                                        </Link>

                                        <Link href="https://www.tiktok.com/discover/bimt-campus-colombo" target="_blank" rel="noopener noreferrer">
                                            <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                                <g id="SVGRepo_iconCarrier"> <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" stroke="#ffffff" stroke-linejoin="round" /> </g>

                                            </svg>
                                        </Link>

                                        <Link href="https://www.linkedin.com/company/bimt-colombo-campus/" target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                <rect x="1" y="1" width="24" height="24" rx="4" stroke="#E0E6EB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62213 6.00011C8.61566 5.99997 8.60919 5.99996 8.60272 6.0001C8.18684 6.009 7.78989 6.17571 7.49236 6.46643C7.19483 6.75714 7.01898 7.15012 7.00045 7.56569C7.00005 7.57445 6.99992 7.58321 7.00004 7.59197C7.00601 8.01679 7.17494 8.42308 7.47194 8.72687C7.76894 9.03068 8.1713 9.20876 8.59588 9.22434C8.60472 9.22468 8.61358 9.22474 8.62243 9.22453C9.05048 9.21489 9.45756 9.03722 9.75569 8.72991C10.0538 8.42261 10.2191 8.01033 10.2158 7.58219L10.2155 7.56892C10.1999 7.15358 10.0263 6.75986 9.73018 6.46826C9.43402 6.17666 9.03766 6.00919 8.62213 6.00011ZM8.98783 10.8811C8.88709 10.8738 8.76884 10.8735 8.61241 10.8735C8.45608 10.8735 8.33709 10.8738 8.23534 10.8811C8.19222 10.8842 8.15909 10.8882 8.13401 10.8922V17.4116C8.16015 17.4155 8.19402 17.4195 8.23737 17.4224C8.33975 17.4294 8.45862 17.4297 8.61241 17.4297C8.76629 17.4297 8.88442 17.4294 8.98581 17.4224C9.02567 17.4197 9.05723 17.4162 9.08193 17.4125V10.8912C9.05821 10.8876 9.02738 10.8839 8.98783 10.8811ZM10.0459 10.2647C10.1655 10.4612 10.2037 10.6806 10.2037 10.89V17.4398C10.2037 17.6487 10.1625 17.868 10.0364 18.0629C9.90651 18.2637 9.72417 18.3806 9.54806 18.4467C9.38184 18.5092 9.20895 18.5314 9.06316 18.5415C8.91917 18.5514 8.76393 18.5514 8.62302 18.5514H8.602C8.46094 18.5514 8.30524 18.5514 8.16053 18.5415C8.01404 18.5314 7.84087 18.5094 7.67439 18.4475C7.49861 18.3823 7.31494 18.2667 7.18323 18.0664C7.05477 17.8711 7.01227 17.6506 7.01227 17.4398V10.89C7.01227 10.6788 7.05172 10.4581 7.17364 10.2611C7.30045 10.0562 7.48139 9.93319 7.66176 9.86257C7.83095 9.79632 8.00705 9.77286 8.15507 9.76225C8.30106 9.75177 8.45863 9.75178 8.60144 9.75178H8.62352C8.76618 9.75178 8.92333 9.75177 9.06863 9.76227C9.21597 9.7729 9.39182 9.79646 9.56077 9.86342C9.74148 9.93504 9.92094 10.0594 10.0459 10.2647ZM14.0744 11.4205C14.3983 10.9859 14.9003 10.758 15.6146 10.758C16.8486 10.758 17.8783 11.7365 17.8783 12.9774V17.3865C17.8543 17.3899 17.824 17.3932 17.786 17.3958C17.6842 17.4028 17.5649 17.4031 17.4087 17.4031C17.2526 17.4031 17.1333 17.4028 17.0315 17.3958C16.9935 17.3932 16.9632 17.3899 16.9392 17.3865V13.9723C16.9392 12.9185 16.1502 11.9721 15.019 12.0254C13.8987 12.0101 13.1529 12.9339 13.1529 13.9989L13.1526 17.4121C13.1272 17.4159 13.0946 17.4196 13.0531 17.4224C12.9503 17.4294 12.8303 17.4297 12.6742 17.4297C12.518 17.4297 12.3988 17.4294 12.2969 17.4224C12.259 17.4198 12.2286 17.4165 12.2047 17.4131V10.89C12.2047 10.8813 12.2048 10.8731 12.205 10.8655C12.2247 10.8647 12.2466 10.864 12.2708 10.8636C12.3663 10.8617 12.4819 10.8629 12.6052 10.8656C12.6976 10.8676 12.8 10.8708 12.8982 10.8738L13.0489 10.8783C13.0508 10.8882 13.0525 10.8987 13.0542 10.9097C13.0622 10.9641 13.0653 11.0203 13.064 11.0703C13.0574 11.3147 13.2099 11.5353 13.441 11.6154C13.672 11.6955 13.9283 11.6166 14.0744 11.4205ZM15.6146 9.6363C14.9875 9.6363 14.3978 9.77192 13.9004 10.0807C13.7697 9.91473 13.5656 9.76065 13.2605 9.76065C13.19 9.76065 13.0892 9.75747 12.9665 9.75359C12.8672 9.75045 12.7535 9.74686 12.6299 9.74414C12.5012 9.7413 12.3676 9.73971 12.249 9.74202C12.1426 9.74409 12.0079 9.74957 11.898 9.77155C11.6926 9.81264 11.4555 9.91568 11.2859 10.1537C11.1277 10.3756 11.0829 10.64 11.0829 10.89V17.4398C11.0829 17.6466 11.1227 17.865 11.247 18.0599C11.3757 18.2615 11.5573 18.3795 11.7342 18.4464C11.9005 18.5093 12.0738 18.5314 12.2198 18.5415C12.3642 18.5514 12.5205 18.5514 12.6635 18.5514H12.6848C12.8279 18.5514 12.9847 18.5514 13.1297 18.5415C13.2765 18.5314 13.45 18.5094 13.6166 18.4472C13.7931 18.3812 13.9761 18.2646 14.1066 18.0634C14.2332 17.8683 14.2743 17.6486 14.2743 17.4398L14.2747 13.9989C14.2747 13.4387 14.6235 13.1374 15.0142 13.1473C15.03 13.1477 15.0458 13.1474 15.0616 13.1465C15.4511 13.1234 15.8175 13.4412 15.8175 13.9723V17.4132C15.8175 17.62 15.8572 17.8384 15.9815 18.0332C16.1102 18.2348 16.2919 18.3529 16.4687 18.4197C16.6351 18.4826 16.8083 18.5048 16.9544 18.5148C17.0987 18.5248 17.255 18.5248 17.398 18.5248H17.4194C17.5624 18.5248 17.7187 18.5248 17.8631 18.5148C18.0092 18.5048 18.1824 18.4826 18.3488 18.4197C18.5256 18.3529 18.7073 18.2348 18.8359 18.0332C18.9602 17.8384 19 17.62 19 17.4132V12.9774C19 11.0835 17.4341 9.6363 15.6146 9.6363Z" fill="white" />
                                            </svg>
                                        </Link>

                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>


                {/* Search Section */}
                {/* <div className="relative" >
                    <div className="absolute top-[-37px] z-50 left-1/2 transform -translate-x-1/2 flex justify-center w-full searchProgram searchBarForProgrammes"
                        style={{ width: '67%' }}
                    >
                        <div
                            className="inline-flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg searchBarBox searchBarAreabox"

                        >

                            <div className="relative flex items-center w-full pr-4 searchprgramplaceHolder" style={{
                                border: '2px solid', padding: '12px',
                            }}>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={handleInputChange}
                                    placeholder="Type to Start searching..."
                                    className="flex-1 bg-transparent outline-none text-base md:text-lg px-2 md:px-4 text-gray-600"

                                />
                                {suggestions.length > 0 ? (
                                    <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-40 overflow-y-auto z-50">
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
                                        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 text-gray-600">
                                            waiting....
                                        </div>
                                    )
                                )}
                            </div>

                            <button
                                onClick={() => setQuery('')} // Clears the input field
                                className="absolute ml-2 p-2 hover:bg-gray-300 transition duration-150 clearBtninSearch"
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <div>
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#272A5D] text-white px-4 py-2 font-semibold transition duration-150 text-sm md:text-lg searchBtn searchbarProgrammsSearchBtn"

                                >
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div> */}

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



                {/* Expert Learning Section Start */}
                <ExpertSection />
                {/* Expert Learning Section End */}


                <div className="flex flex-col items-center max-w-[1450px] mt-[110px] w-full md:w-4/5 mx-auto DiplomaMainSection">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // Starts off-screen to the left
                        whileInView={{ opacity: 1, x: 0 }} // Moves to the center
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }} // Animates every time it enters the viewport
                        className="my-section"
                    >
                        {/* First Section */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                {/* <Image src="/images/course1.jpg" */}
                                <Image src="/images/DSC_0174-2048x1367 (1).jpg"


                                    width={712}
                                    height={422}
                                    objectFit='cover'
                                    alt="Diploma Program"
                                    className="w-full h-auto" />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                <h1 className="text-4xl font-bold text-[#FFFFFF] bg-[#272A5D] DiplomaHeding">DIPLOMA</h1>
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
                                    Build foundational skills with our Diploma Programs, combining theory and hands-on learning to prepare you for entry-level roles or further studies. Gain practical knowledge that sets you on the path to career success.
                                </p>

                                {/* Sub-categories */}
                                <div className="flex flex-wrap gap-4 text-lg">
                                    {/* First Row */}
                                    <div className="flex w-full fistRowDiploma">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Management ➔
                                        </span>
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",

                                            }}
                                        >
                                            Language ➔
                                        </span>
                                    </div>

                                    {/* Second Row */}
                                    <div className="flex w-full SecondRowDiploma">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Humanity & Education ➔
                                        </span>
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Computing ➔
                                        </span>
                                    </div>
                                </div>


                                {/* Buttons */}
                                <div className="flex space-x-4 mt-4 gap-10">
                                    <button className="button"
                                        onClick={() => router.push("/Diploma")}
                                        style={{
                                            display: "flex",
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >View more</span>
                                    </button>

                                    <button className="button"
                                        onClick={() => router.push("/ContactUs")}
                                        style={{
                                            display: "flex",
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >Contact us</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} // Starts off-screen to the right
                        whileInView={{ opacity: 1, x: 0 }} // Moves to the center
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }} // Animates every time it enters the viewport
                        className="my-section"
                    >
                        {/* Second Section */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 space-y-8 md:space-y-0 mt-[110px]">
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <Image src="/images/SEK_4716-768x512.webp"
                                    objectFit='cover'
                                    width={712}
                                    height={422}
                                    alt="Higher Diploma Program"
                                    className="w-full h-auto" />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                {/* <h2 className="text-gray-700 font-semibold text-xl"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Work Sans',
                                        fontSize: '24px',
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: 'normal'
                                    }}
                                >Program</h2> */}
                                <h1 className="text-4xl font-bold text-[#FFFFFF] bg-[#272A5D]  HigherDiplomaHeading">HIGHER DIPLOMA</h1>
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
                                    Enhance your expertise with our Higher Diploma, offering specialized knowledge and practical skills. This program bridges diploma and degree qualifications, providing a strong foundation for career advancement or continued studies.
                                </p>

                                {/* Sub-categories */}
                                <div className="flex flex-wrap gap-4 text-lg">
                                    {/* First Row */}
                                    <div className="flex w-full higherDiplomaSub">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Accounting and Finance ➔
                                        </span>
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Computing ➔
                                        </span>
                                    </div>

                                    {/* Second Row */}
                                    <div className="w-full">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Business Management ➔
                                        </span>
                                    </div>
                                </div>


                                {/* Buttons */}
                                <div className="flex space-x-4 mt-4">
                                    <button
                                        className="button"
                                        onClick={() => router.push("/Diploma")}
                                        style={{
                                            display: "flex",
                                            width: "200px",
                                            height: "56px",
                                            padding: "0px 10px",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: "normal",
                                                fontWeight: "600",
                                                lineHeight: "normal",
                                            }}
                                        >
                                            View more
                                        </span>
                                    </button>
                                    <button className="button"
                                        onClick={() => router.push("/ContactUs")}
                                        style={{
                                            display: "flex",
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >Contact us</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Third Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // Starts off-screen to the left
                        whileInView={{ opacity: 1, x: 0 }} // Moves to the center
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }} // Animates every time it enters the viewport
                        className="my-section"
                    >
                        {/* First Section */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 mt-[110px]">
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                {/* <Image src="/images/course1.jpg" */}
                                <Image src="/images/degree.png"


                                    width={712}
                                    height={422}
                                    objectFit='cover'
                                    alt="Diploma Program"
                                    className="w-full h-auto" />
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                                <h1 className="text-4xl font-bold text-[#FFFFFF] bg-[#272A5D] BatchDegree">BACHELOR’S DEGREE</h1>
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
                                    Gain in-depth knowledge and real-world skills with our Bachelor’s Degree programms. Through internships and case studies, you’ll be prepared to enter the workforce or pursue advanced studies with confidence.
                                </p>

                                {/* Sub-categories */}
                                <div className="flex flex-wrap gap-4 text-lg">
                                    {/* First Row */}
                                    <div className="flex w-full fistRowDiploma">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            BBA in Accounting ➔
                                        </span>
                                    </div>

                                    {/* Second Row */}
                                    <div className="flex w-full SecondRowDiploma">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            BSc (Hons) in Computing ➔
                                        </span>
                                    </div>

                                    <div className="flex w-full SecondRowDiploma">
                                        <span
                                            className="underline-hover"
                                            style={{
                                                color: "#000",
                                                textAlign: "justify",
                                                fontFamily: "Work Sans",
                                                fontSize: "16px",
                                                fontStyle: "normal",
                                                fontWeight: "500",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            BBA in Business Management ➔
                                        </span>
                                    </div>
                                </div>


                                {/* Buttons */}
                                <div className="flex space-x-4 mt-4 gap-10">
                                    <button className="button"
                                        onClick={() => router.push("/Diploma")}
                                        style={{
                                            display: "flex",
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >View more</span>
                                    </button>

                                    <button className="button"
                                        onClick={() => router.push("/ContactUs")}
                                        style={{
                                            display: "flex",
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "20px",
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >Contact us</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* View All Courses */}
                <div className="relative flex justify-center mt-[110px]">
                    {/* Button Container */}
                    <div className='relative w-[1300px]'
                        style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                    >
                        <Link href={"/Search"}>
                            <button className="allProgramViewBtn flex items-end border-2 border-[#272A5D] rounded-lg px-4 py-2 font-semibold text-[#272A5D] text-lg relative"
                                style={{ fontFamily: 'Playfair', fontSize: '20px', fontWeight: '700', lineHeight: '24px', textAlign: 'left', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}

                                onClick={() => router.push("/Search")}
                            >
                                {/* Button Text */}
                                <span>View all Programms</span>

                            </button>
                        </Link>

                        {/* Icon with Rotation */}
                        <div className="absolute -top-1 -left-9 transform -rotate-10">
                            <Image src="/images/graduate 1.png"
                                width={61.25}
                                height={43.04}
                                alt='storeis'
                                style={{ transform: 'translate(863%, -45%) rotate(-10.795deg)' }} />
                        </div>
                    </div>
                </div>

                {/* About Us */}

                <div
                    className="relative w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-[110px] pb-[120px] mt-[100px] mb-[110px]"
                    style={{
                        backgroundImage: "url('/images/bgimgqa.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="max-w-[1450px] mx-auto relative flex flex-col lg:flex-row items-center ScalingAboutSection">
                        {/* Left Section - Images */}
                        <div className="relative w-full lg:w-1/2 flex justify-center">
                            {/* First Image */}
                            <div className="absolute top-8 left-2 sm:left-6 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] transition-transform duration-500 hover:scale-110 gStudent">
                                <Image
                                    src="/images/SEK_5541-scaled.webp"
                                    alt="Graduate student"
                                    width={250}
                                    height={159}
                                    className="w-full h-auto shadow-lg"
                                />
                            </div>

                            {/* Second Image - Main (Largest) */}
                            <div className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] z-20 transition-transform duration-500 hover:scale-110 CBoodGirl">
                                <Image
                                    src="/images/SEK_5536-scaled (1).jpg"
                                    alt="Student walking on campus"
                                    width={368}
                                    height={545}
                                    className="w-full h-auto shadow-lg"
                                />
                            </div>

                            {/* Third Image */}
                            <div className="absolute top-28 left-[-10px] sm:left-0 w-[160px] sm:w-[220px] md:w-[270px] lg:w-[335px] transition-transform duration-500 hover:scale-110 maleStudent">
                                <Image
                                    src="/images/SEK_4742-scaled.webp"
                                    alt="Student with files"
                                    width={335}
                                    height={223}
                                    className="w-full h-auto shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Right Section - Text Content */}
                        <div
                            className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-md w-full lg:w-1/2 mt-16 lg:mt-0 transition-transform duration-500 hover:scale-105"
                            style={{ color: '#5A5A5A', textAlign: 'justify' }}
                        >
                            <h2 className="mb-2 aboutusHeading">ABOUT US</h2>
                            <h3 className="text-left text-[#272A5D] mb-4" style={{
                                fontSize: '24px', lineHeight: '28px'
                            }}>
                                DISCOVER WHO WE ARE?
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base font-left font-[16px]">
                                At BIMT Campus, we are dedicated to providing high-quality, accessible education in management and technology.
                                In collaboration with a leading international organization, we offer a unique learning environment where students
                                gain both theoretical knowledge and practical skills to excel in their careers. With an ISO 9001:2015 certification,
                                a highly qualified faculty, and internationally recognized programs, BIMT Campus empowers students to achieve
                                their goals and make a lasting impact in their chosen fields.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                <Link href={'/AboutUs'}>
                                    <button className="bluBorderWhitebgTextblack font-semibold transition px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white">
                                        <span> View more</span>
                                    </button>
                                </Link>
                                <Link href={'/ContactUs'}>
                                    <button className="bluBorderWhitebgTextblack font-semibold px-6 py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white">
                                        <span>Contact us</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Section */}
                <div className="eventSectionContainer relative flex flex-col md:flex-row items-center bg-white text-white p-6 eventSectionMain">
                    {/* Events List */}
                    <div className="eventLargeContent bg-[#272A5D] mx-auto p-8.5 md:p-10 w-full md:w-2/3 shadow-lg EventSectionLeftSideMain">
                        <div className="flex flex-col w-full  gap-6 eventLeftSide">
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold text-white">Events</h2>
                                <h1 className="text-2xl md:text-4xl font-bold mt-2 upCommingEvntTxt">UPCOMING EVENTS</h1>
                            </div>

                            {/* Events Loop */}
                            {[1, 2, 3].map((event, index) => (
                                <div key={index} className="flex flex-col md:flex-row py-4 md:py-6 border border-white p-4 md:p-5 items-start gap-4 md:gap-[67px] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
                                    <div className="flex flex-col items-center justify-center w-16 md:w-20 text-center">
                                        <span className="text-lg md:text-xl font-light text-white">Dec</span>
                                        <span className="text-2xl md:text-3xl font-bold text-white">10th</span>
                                    </div>
                                    <div className="ml-0 md:ml-6 flex-1">
                                        <h3 className="text-lg md:text-xl font-semibold text-white">Leadership Summit</h3>
                                        <p className="text-sm md:text-base font-light text-white leading-relaxed">
                                            Join us for an inspiring Leadership Summit to empower leaders of tomorrow.
                                        </p>
                                        <div className="flex flex-wrap justify-between items-center mt-4 text-sm md:text-base font-semibold text-white">
                                            <span>10.00 - 16.00</span>
                                            <span>Hilton Colombo</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Countdown Section */}
                    <div className="countDownimageWithSection relative w-full md:w-1/3 flex flex-col items-center mt-6 md:mt-0 absolute right-[90px] countDownMainSection">
                        <Image src="/images/DSC_0126-1024x682.jpg" alt="Event Image" width={600} height={400} className="w-full h-auto" />
                        <div className="countDownBoxs bg-white p-6 shadow-lg mt-4 md:mt-0 w-11/12 md:w-3/4 text-center absolute top-[320px] coundDOwnnextEvent">
                            <h4 className="text-lg md:text-xl font-semibold text-black">Next Event</h4>
                            {/* Countdown Timer */}
                            <CountdownComponent eventDate={nextEventDate} />
                            <div className="flex justify-center gap-4 mt-4">
                                <Link href={'/Event'}>
                                    <button className="viewEvents px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:text-white transition eventViewAllBtn">
                                        <span className='EventViewAll'>View all events</span>
                                    </button>
                                </Link>
                                <Link href={'/ContactUs'}>
                                    <button className="viewEvents px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:text-white transition eventViewAllBtn">
                                        <span>Contact us</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Event section */}




                <div className="max-w-[1450px] mx-auto section-about ExpertSectionMain mt-[110px]">
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1450px] mx-auto"
                    >

                        {/* <!-- Card 1 --> */}
                        <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                            <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
                                <img src="/images/network 1.png" alt="Learning Icon" width={51} height={50} />
                                <h2 className="font-semibold text-lg text-white bg-[#9F3181] px-4 py-6 CardExert">Broader Network</h2>
                            </div>
                            <p className="text-gray-500 text-base mt-10">
                                BIMT Campus gives you the opportunity to meet a wide variety of people through clubs and other college activities, allowing you to expand your network.
                            </p>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800 cardTwo">
                            <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
                                <img
                                    src="/images/Group (1).png"
                                    alt="Community Icon"
                                    width={51}
                                    height={50}
                                />
                                <h2 className="font-semibold text-lg text-[#fff] text-white bg-[#5DB7E0] px-4 py-6 CardExert">Competitive Edge</h2>
                            </div>
                            <p className="text-gray-500 text-base mt-10">
                                BIMT gives you the opportunity to work on your unique qualifications in order to help you overcome any competition you may face in the job applicant pool.
                            </p>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800 ThirdCard">
                            <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] px-3 py-2 cardWidth">
                                <img
                                    src="/images/provision 1.png"
                                    alt="Integrity Icon"
                                    width={51}
                                    height={50}
                                />
                                <h2 className="font-semibold text-lg text-white bg-[#D86027] px-4 py-6 CardExert">Flexibility</h2>
                            </div>
                            <p className="text-gray-500 text-base mt-10">
                                BIMT provides you with a great amount of flexibility. This makes it easier for you to balance your professional life with your personal obligations and responsibilities.
                            </p>
                        </div>

                    </section>
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto"
                        style={{ marginTop: '60px' }}
                    >
                    </section>
                </div>


                <div className="max-w-[1450px] mx-auto section-about ExpertSectionMain">
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-[1450px] mx-auto pl-[210px] pr-[210px] SecondSectionExpert"
                    >

                        {/* <!-- Card 1 --> */}
                        <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                            <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
                                <img src="/images/united 1.png" alt="Learning Icon" width={51} height={50} />
                                <h2 className="font-semibold text-lg text-white bg-[#9F3181] px-4 py-6 CardExert">Exposure to Different Cultures</h2>
                            </div>
                            <p className="text-gray-500 text-base mt-10">
                                BIMT allows you to immerse yourself in these diverse groups of people, helping you appreciate the other cultures the world offers.
                            </p>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800 cardTwo">
                            <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
                                <img
                                    src="/images/Group (2).png"
                                    alt="Community Icon"
                                    width={51}
                                    height={50}
                                />
                                <h2 className="font-semibold text-lg text-[#fff] text-white bg-[#5DB7E0] px-4 py-6 CardExert">Sports and Events</h2>
                            </div>
                            <p className="text-gray-500 text-base mt-10">
                                BIMT has a variety of sports and events you can attend, which can help you build connections. It also provides you an opportunity to make lasting memories from the events that you attend.
                            </p>
                        </div>
                    </section>
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto"
                        style={{ marginTop: '60px' }}
                    >
                    </section>
                </div>




                {/* 
                <div className="mx-auto w-[1300px] flex flex-col md:flex-row items-stretch bg-white"
                    style={{
                        width: '1300px',
                        height: '575px',
                        paddingTop: '179px',
                    }}

                    >
                    <div className="w-full md:w-1/2 bg-blue-900 text-white p-10 flex flex-col justify-center"
                        style={{
                            paddingTop: '63px',
                            paddingLeft: '60px',
                            paddingRight: '150px',
                            background: '#272A5D',
                            height: '496px',
                            paddingBottom: '63px'

                        }}
                    >
                        <h3 className="text-lg font-medium"
                            style={{
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >Career at BIMT</h3>
                        <h2 className="text-4xl font-bold mt-2 mb-6 leading-snug"
                            style={{
                                color: '#fff',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >
                            BUILD YOUR CAREER WITH BIMT
                        </h2>
                        <p className="text-sm leading-relaxed mb-8"
                            style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '25px'
                            }}
                        >
                            Join a team dedicated to shaping future leaders in education. At BIMT, we value
                            innovation, growth, and collaboration. Discover rewarding career opportunities
                            where you can make a lasting impact on student&#39;s  lives and your own.
                        </p>
                        <div className="space-y-4">
                            <a href="#" className="text-sm font-medium hover:underline block"
                                style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '25px'
                                }}
                            >
                                Student Counsellor →
                            </a>
                            <a href="#" className="text-sm font-medium hover:underline block"
                                style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '25px'
                                }}
                            >
                                Marketing Executive →
                            </a>
                        </div>
                    </div>


                    <div className="relative w-full md:w-1/2"
                        style={{ height: '496px' }}
                    >
                        <div className="h-1/2 bg-blue-900"
                            style={{
                                background: '#272A5D'

                            }}
                        ></div>

                        <div className="flex flex-col items-center justify-center h-1/2 bg-white px-6"
                            style={{
                                display: 'inline-flex',
                                padding: '40px 100px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '30px'
                            }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-center"
                                style={{
                                    color: '#000',
                                    fontFamily: 'Work Sans',
                                    fontSize: '32px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 'normal'
                                }}
                            >
                                Find a career that suits you
                            </h2>
                            <div className="flex gap-4">
                                <Link href={'/CareeratBIMT'}>
                                    <button className="viewEvents px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:text-white transition"
                                        style={{
                                            display: 'flex',
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            borderRadius: '10px',
                                            border: '2px solid #272A5D'
                                        }}
                                    >
                                        <span>View all careers</span>
                                    </button>
                                </Link>
                                <Link href={'/ContactUs'}>
                                    <button className="viewEvents px-6 py-2 border border-blue-900 text-blue-900 hover:text-white transition rounded-lg px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:text-white transition"
                                        style={{
                                            display: 'flex',
                                            width: '200px',
                                            height: '56px',
                                            padding: '0px 10px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            borderRadius: '10px',
                                            border: '2px solid #272A5D'
                                        }}
                                    >
                                        <span> Contact us </span>
                                    </button>
                                </Link>

                            </div>
                        </div>

                        <div className="absolute top-1/4 right-1/4 transform translate-x-[-80px] -translate-y-1/4"
                            style={{
                                top: '5px',
                            }}>
                            <img
                                src="/images/young-designer_1098-13734 1.png"
                                alt="Career Image"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div > */}






                {/* activity cards */}
                <div className="flex flex-col mt-[110px] w-full max-w-[1450px] mx-auto campusLifeEventSection mb-[110px]" >
                    {/* Header */}
                    <div className="mb-12 text-left">
                        <h2 className="text-2xl font-semibold text-blue-900 font-avenir"
                            style={{
                                color: '#272A5D',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: "400",
                                lineHeight: 'normal'
                            }}
                        >Events</h2>
                        <h1 className="text-4xl font-bold text-blue-900 leading-tight"
                            style={{
                                color: '#272A5D',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >
                            CAMPUS LIFE
                        </h1>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ marginBottom: "200px" }}>
                        {/* Event 1 */}
                        <div className="relative flex flex-col items-center w-full">
                            <img src="/images/actitivity1.png" alt="Graduation" className="w-full h-auto object-cover" />
                            <div className="absolute bg-white p-4 shadow eventDescriptionContainer">
                                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Graduation</h3>
                                <p className="text-gray-600 text-sm text-justify">
                                    Our BIMT Campus annual graduation ceremony is a day devoted to celebrate an important point in our students’ lives. Examinations are finally over, scruffiness is replaced with fancy clothes and parents admire their children for reaching the finishing line of a long marathon. The future of BIMT past pupil always seems more promising than the present, and the present on graduation day is pretty good even if it is not quite the reality.
                                </p>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="relative flex flex-col items-center w-full CampingEvent">
                            <img src="/images/activitiy2.png" alt="Camping Night - Kabaragala" className="w-full h-auto object-cover" />
                            <div className="absolute bg-white p-4 shadow eventDescriptionContainer">
                                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Camping Night - Kabaragala</h3>
                                <p className="text-gray-600 text-sm text-justify">
                                    This Camping Night was organized to build the confidence of our students to dream big and to make them such people who are driver, to achieve their dreams.
                                </p>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="relative flex flex-col items-center w-full eventCricket">
                            <img src="/images/activitiy3.png" alt="Cricket Tournament" className="w-full h-auto object-cover" />
                            <div className="absolute bg-white p-4 shadow eventDescriptionContainer"
                            >
                                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Cricket Tournament</h3>
                                <p className="text-gray-600 text-sm text-justify">
                                    BIMT cricket tournament was well-organized by Alumni Association of BIMT Campus. This game proved a true leadership and team sprit throughout the whole day of the matches. Main theme of the cricket tournament was to build a Positive behavior that make cricket an exciting game that encourages leadership, friendship, and teamwork.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
