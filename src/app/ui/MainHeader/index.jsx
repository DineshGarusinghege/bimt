"use client";

import { useState, useEffect } from "react";
import '../../styles/ui/MainHeader.scss';
import Link from "next/link";

const MainHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for toggle menu
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const toggleMenu = (menu) => {
        setHoveredMenu((prev) => (prev === menu ? null : menu));
    };
    const [isSticky, setIsSticky] = useState(false);

    const [activeSubMenu, setActiveSubMenu] = useState(null); // Track active submenu

    const toggleSubMenu = (menu) => {
        setActiveSubMenu((prev) => (prev === menu ? null : menu));
    };


    const handleScroll = () => {
        const scrollThreshold = document.documentElement.scrollHeight * 0.2; // 20% of the page height
        const currentScroll = window.scrollY; // Amount of scrolling from top
        // If the user scrolls past 20% of the page, make the header sticky
        setIsSticky(currentScroll > scrollThreshold);
    };

    // Add scroll event listener when component mounts and cleanup when it unmounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`mainHeader-container bg-white shadow ${isSticky ? "sticky top-0 z-50" : ""}`} style={{ zIndex: '1000' }}>
                {/* Header Container */}
                <div className="flex justify-between items-center p-4 z-48 w-full mx-auto">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/images/bimtLogo.png"
                            alt="BIMT Campus Logo"
                            className="w-56 h-auto mainHeaderLogoBIMT"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 z-48 font-medium text-gray-800 items-center">
                        {/* Home */}
                        <div className="relative">
                            <Link href="/" className="hover:text-[#272A5D] menuTitle flex items-center">Home</Link>
                        </div>
                        {/* About Us */}
                        <div
                            className="relative group"
                            onMouseEnter={() => toggleMenu('about')}
                            onMouseLeave={() => toggleMenu(null)}
                        >
                            <Link href="/AboutUs" className="hover:text-[#272A5D] menuTitle font-bold flex items-center gap-3">
                                About Us
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
                            {hoveredMenu === 'about' && (
                                <ul className="absolute left-0 top-full bg-[#272A5D] shadow-lg rounded-lg text-white w-64 z-50 headerSubmenu" style={{
                                    borderBottom: '2px solid #A02629'
                                }}>
                                    <li><Link href="/AboutUs" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Overview</Link></li>
                                    <hr className="border-white" />
                                    <li className="menuTitleList"><Link href="/OurJourney" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Our Journey</Link></li>
                                    <hr className="border-white" />
                                    <li className="menuTitleList"><Link href="/ChairmansMessage" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Chairman&#39;s Message</Link></li>
                                    <hr className="border-white" />
                                    <li className="menuTitleList"><Link href="/CEOsMessage" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">CEO&#39;s Message</Link></li>
                                    <hr className="border-white" />
                                    <li className="menuTitleList"><Link href="/OurTeam" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Our Team</Link></li>
                                    {/* <hr className="border-red" /> */}
                                </ul>
                            )}
                        </div>

                        {/* Programs */}
                        <div
                            className="relative group"
                            onMouseEnter={() => toggleMenu('programs')}
                            onMouseLeave={() => toggleMenu(null)}
                        >
                            <Link href="/Search" className="hover:text-[#272A5D] menuTitle flex items-center gap-3">Programmes <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 16l-6-6h12l-6 6z" />
                            </svg></Link>
                            {hoveredMenu === 'programs' && (
                                <ul className="absolute left-0 top-full bg-[#272A5D] shadow-lg rounded-lg text-white w-64 z-50 headerSubmenu" style={{
                                    borderBottom: '2px solid #A02629'
                                }}>
                                    <li className="menuTitleList"><Link href="/CertificateProgrammes" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Certificate Programmes</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/Diploma" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Diploma</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/HigherNationalDiploma" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white"> Higher National Diploma</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/HigherDiploma" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Higher Diploma</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/BachelorsDegree" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Bachelors Degree</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/PostgraduateDiploma" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Postgraduate Diploma</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/MastersDegree" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Masters Degree</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/DoctorateDegree" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Doctorate Degree</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/CMI" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">CMI (UK) </Link></li>
                                    {/* <hr className="border-gray-300" /> */}
                                </ul>
                            )}
                        </div>

                        {/* Life at BIMT */}
                        <div
                            className="relative group"
                            onMouseEnter={() => toggleMenu('life')}
                            onMouseLeave={() => toggleMenu(null)}
                        >
                            <Link href="/CampusLife" className="hover:text-[#272A5D] menuTitle flex items-center gap-3">Life at BIMT
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 16l-6-6h12l-6 6z" />
                                </svg></Link>
                            {hoveredMenu === 'life' && (
                                <ul className="absolute left-0 top-full bg-[#272A5D] shadow-lg rounded-lg text-white w-64 z-50 headerSubmenu" style={{
                                    borderBottom: '2px solid #A02629'
                                }}>
                                    <li><Link href="/CampusLife" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Campus Life</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/Event" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Events</Link></li>
                                    {/* <hr className="border-gray-300" /> */}
                                </ul>
                            )}
                        </div>

                        {/* Contact Us */}
                        <div
                            className="relative group"
                            onMouseEnter={() => toggleMenu('contact')}
                            onMouseLeave={() => toggleMenu(null)}
                        >
                            <Link href="/ContactUs" className="hover:text-[#272A5D] menuTitle flex items-center gap-3">Connect with Us  <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 16l-6-6h12l-6 6z" />
                            </svg></Link>
                            {hoveredMenu === 'contact' && (
                                <ul className="absolute left-0 top-full bg-[#272A5D] shadow-lg rounded-lg text-white w-64 z-50 headerSubmenu" style={{
                                    borderBottom: '2px solid #A02629'
                                }}>
                                    <li className="menuTitleList"><Link href="/ContactUs" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Contact Us</Link></li>
                                    <hr className="border-gray-300" />
                                    {/* <li className="menuTitleList"><Link href="/ConnectwithUs" className="hover:text-[#A02629] menuTitle">Connect with Us</Link></li> */}
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/CareeratBIMT" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Career at BIMT</Link></li>
                                    {/* <hr className="border-gray-300" />
                                <li className="menuTitleList"><Link href="/Blog" className="hover:text-[#A02629] menuTitle">Students Blogs</Link></li> */}
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/Testimonials" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Testimonials</Link></li>
                                    <hr className="border-gray-300" />
                                    <li className="menuTitleList"><Link href="/SuggestionBox" className="block px-7 py-4 text-white hover:bg-pink-500 hover:text-white">Suggestion Box</Link></li>
                                    {/* <hr className="border-gray-300" /> */}
                                </ul>
                            )}
                        </div>

                        {/* Vertical Divider */}
                        <div className="mainMenuandContactDevider flex items-center gap-3" >
                            {/* Icon */}
                            <svg className="mainMenuPhoneIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_579_4343)">
                                    <path
                                        d="M4.75247 14.719C6.83271 17.2057 9.33688 19.1636 12.195 20.549C13.2832 21.0647 14.7385 21.6765 16.3599 21.7814C16.4604 21.7858 16.5566 21.7901 16.6571 21.7901C17.7453 21.7901 18.6193 21.4143 19.3317 20.6407C19.336 20.6364 19.3448 20.6276 19.3492 20.6189C19.6026 20.313 19.8911 20.0377 20.1926 19.7448C20.398 19.5482 20.6078 19.3428 20.8088 19.133C21.7397 18.1628 21.7397 16.9304 20.8001 15.9908L18.1736 13.3643C17.7278 12.901 17.1946 12.6563 16.6352 12.6563C16.0758 12.6563 15.5383 12.901 15.0794 13.3599L13.5149 14.9244C13.3706 14.8414 13.222 14.7671 13.0822 14.6972C12.9074 14.6098 12.7457 14.5267 12.6015 14.435C11.1768 13.5303 9.88316 12.3504 8.64637 10.8339C8.02143 10.0428 7.60188 9.37857 7.30907 8.70118C7.71988 8.32971 8.10446 7.94075 8.47593 7.56054C8.60704 7.42506 8.74252 7.28958 8.878 7.1541C9.34999 6.68211 9.60346 6.13583 9.60346 5.58081C9.60346 5.02578 9.35436 4.4795 8.878 4.00751L7.57566 2.70517C7.4227 2.55221 7.27848 2.40362 7.12989 2.25066C6.84145 1.95349 6.53991 1.64757 6.24273 1.37224C5.79259 0.930843 5.26379 0.699219 4.70439 0.699219C4.14937 0.699219 3.6162 0.930843 3.14858 1.37661L1.5141 3.01109C0.919742 3.60545 0.583231 4.32654 0.513307 5.16126C0.430272 6.20576 0.622564 7.3158 1.12077 8.65748C1.88557 10.7334 3.03932 12.6606 4.75247 14.719ZM1.57965 5.25304C1.6321 4.67179 1.85498 4.18669 2.27452 3.76715L3.90026 2.14141C4.15374 1.89667 4.43344 1.76993 4.70439 1.76993C4.97098 1.76993 5.24194 1.89667 5.49104 2.15015C5.78385 2.4211 6.05918 2.70517 6.35635 3.00672C6.50494 3.15968 6.6579 3.31264 6.81086 3.46997L8.1132 4.77231C8.38416 5.04326 8.52401 5.31859 8.52401 5.58955C8.52401 5.8605 8.38416 6.13583 8.1132 6.40679C7.97772 6.54227 7.84225 6.68211 7.70677 6.81759C7.30033 7.2284 6.92012 7.61735 6.50057 7.98882C6.49183 7.99757 6.48746 8.00194 6.47872 8.01068C6.11599 8.37341 6.1728 8.71866 6.26021 8.98088C6.26458 8.99399 6.26895 9.00273 6.27332 9.01584C6.60983 9.82434 7.07745 10.5935 7.80728 11.5113C9.11836 13.1283 10.4994 14.3825 12.0202 15.3484C12.2081 15.4707 12.4092 15.5669 12.5971 15.663C12.7719 15.7504 12.9336 15.8335 13.0778 15.9252C13.0953 15.934 13.1084 15.9427 13.1259 15.9515C13.2701 16.0257 13.41 16.0607 13.5498 16.0607C13.8994 16.0607 14.1267 15.8378 14.201 15.7635L15.8355 14.129C16.0889 13.8756 16.3643 13.7401 16.6352 13.7401C16.9674 13.7401 17.2383 13.9455 17.4088 14.129L20.044 16.76C20.5685 17.2844 20.5641 17.8525 20.0309 18.4075C19.8474 18.6042 19.6551 18.7921 19.4497 18.9888C19.1438 19.286 18.8247 19.5919 18.5363 19.9371C18.0337 20.479 17.435 20.7325 16.6614 20.7325C16.5871 20.7325 16.5085 20.7282 16.4342 20.7238C15.0007 20.632 13.6678 20.0726 12.667 19.5963C9.94871 18.2808 7.56255 16.4147 5.58282 14.046C3.95271 12.0838 2.85577 10.257 2.13031 8.29911C1.68017 7.09729 1.50973 6.13146 1.57965 5.25304Z"
                                        fill="#272A5D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_579_4343">
                                        <rect width="21.0909" height="21.0909" fill="#272A5D" transform="translate(0.45459 0.699219)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            {/* Contact Numbers */}
                            <a href="tel:+94115332222" className="menuContactNumber1">+94 115 33 22 22</a>
                            <a href="tel:+94115332222" className="menuContactTitle contactSecondNumber">+94 777 92 59 92</a>
                        </div>


                    </nav>

                    {/* Buttons (Desktop Only) */}
                    <div className="hidden md:flex space-x-4 desktopHeaderBotton">
                        <Link href={'/ContactUs'}>
                            <button className="MainMenuContactBtn1"><span>CONTACT US</span></button>
                        </Link>
                        <Link href={'https://lms.bimt.lk/'} target="_blank">
                            <button className="MainMenuContactBtn"><span>STUDENT PORTAL</span></button>
                        </Link>
                    </div>

                    {/* Hamburger Icon (Mobile Only) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 border rounded-md"
                        >
                            {menuOpen ? (
                                <span className="text-lg">✖</span> // Close icon
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow p-4">
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="block text-gray-800 menuTitle" style={{ fontSize: '18px' }}>Home</Link>
                            </li>
                            {/* About Us */}
                            <li>
                                <button
                                    className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none menuTitle"
                                    style={{ fontSize: '18px' }}
                                    onClick={() => toggleSubMenu('about')}
                                >
                                    <span>About Us</span>
                                    <span className="text-xl">{activeSubMenu === 'about' ? '-' : '+'}</span>
                                </button>
                                {activeSubMenu === 'about' && (
                                    <ul className="mt-2 pl-4 space-y-2 border-l-2 border-gray-300">
                                        <li>
                                            <Link href="/AboutUs" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Overview
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/OurJourney" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Our Journey
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ChairmansMessage" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Chairman&#39;s Message
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Programmes */}
                            <li>
                                {/* Toggle Button */}
                                <button
                                    className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none menuTitle"
                                    style={{ fontSize: '18px' }}
                                    onClick={() => toggleSubMenu('programmes')} // Pass the unique menu key
                                >
                                    <span>Programmes</span>
                                    <span className="text-xl">{activeSubMenu === 'programmes' ? '-' : '+'}</span>
                                </button>

                                {/* Submenu - Render only if activeSubMenu is 'programmes' */}
                                {activeSubMenu === 'programmes' && (
                                    <ul className="mt-2 pl-4 space-y-2 border-l-2 border-gray-300">
                                        <li>
                                            <Link href="/CertificateProgrammes" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Certificate Programmes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Diploma" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Diploma
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/BachelorsDegree" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Bachelors Degree
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Life at BIMT */}
                            <li>
                                <Link href={'/CampusLife'}>
                                    <button
                                        className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none menuTitle" style={{ fontSize: '18px' }}
                                        onClick={() => toggleSubMenu('CampusLife')}
                                    >
                                        <span>Life at BIMT</span>
                                        <span className="text-xl">{activeSubMenu === 'CampusLife' ? '-' : '+'}</span>
                                    </button>
                                </Link>
                                {/* Submenu */}
                                {activeSubMenu === 'CampusLife' && (
                                    <ul className="mt-2 pl-4 space-y-2 border-l-2 border-gray-300">
                                        <li>
                                            <Link href="/CampusLife" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Campus Life
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Event" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Events
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link href={'/ContactUs'}>
                                    <button
                                        className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none menuTitle" style={{ fontSize: '18px' }}
                                        onClick={() => toggleSubMenu('ContactUs')}
                                    >
                                        <span>Connect with Us</span>
                                        <span className="text-xl">{activeSubMenu === 'ContactUs' ? '-' : '+'}</span>

                                    </button>
                                </Link>
                                {/* Submenu */}
                                {activeSubMenu === 'ContactUs' && (
                                    <ul className="mt-2 pl-4 space-y-2 border-l-2 border-gray-300">
                                        <li>
                                            <Link href="/ContactUs" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/CareeratBIMT" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Career at BIMT
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/Testimonials" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/SuggestionBox" className="block text-gray-800 hover:text-blue-500 menuTitle" style={{ fontSize: '18px' }}>
                                                Suggestion Box
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        {/* Buttons for Mobile */}
                        <div className="mt-4 space-y-2">
                            <div className="w-full">
                                <Link href={'/ContactUs'}>
                                    <button className="w-full px-4 py-2 bg-blue-900 text-white font-semibold mobileMainMenuContactBtn">
                                        <span>Contact Us</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="w-full">
                                <Link href={'https://lms.bimt.lk/'} target="_blank">
                                    <button className="w-full px-4 py-2 bg-blue-900 text-white font-semibold mobileMainMenuContactBtn">
                                        <span>  Student Portal  </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )}
            </header>


        </>
    );
};

export default MainHeader;

