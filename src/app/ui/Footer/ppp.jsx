// pages/index.js
"use client";

import Image from 'next/image';
import './styles/home.scss';
import PopupMoel from './componets/PopupModel/index'
import MainHeader from './ui/MainHeader';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const HomePage = () => {

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

  return (
    <>
      <head>
        <title>Home | BIMT Campus</title>
        <meta
          name="description"
          content="Welcome to BIMT Campus, where education meets innovation. Explore our diverse programs, vibrant campus life, and opportunities to shape your future with excellence in higher education."
        />
      </head>



      {showHeader && <MainHeader />}

      <div className="relative">
        <PopupMoel />

        {/* Announcement Banner */}
        <div
          className="bg-[#A02629] text-white text-center p-4 announsmentBar"
        >
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed annousmentText"

          >
            A workshop on Capital Market was organized for our BIMT Campus Students on 23rd of November 2022 at Kingsbury Hotel Colombo in association with the Institute of Financial Accountants, UK.{' '}
            <a
              href="#"
              className="underline hover:text-gray-300 transition-colors duration-200 ease-in-out annousmentbarfindout"
            >
              Find Out More.
            </a>
          </p>
        </div>


        <div className="relative heroSection">
          {/* Background Image */}
          <div className="absolute inset-0 hreBgSection">
            <Image className='heroBackgroundImg'
              src="/images/background.png"
              alt="Background Image"
              fill
              priority
            />
          </div>

          {/* YouTube Video Background */}
          <div className="absolute inset-0 z-0 video-container">
            {/* Black Overlay */}
            <div
              className="absolute inset-0 bg-black overlay-mobile"
              style={{
                opacity: 0.5, // Adjust the opacity for the black overlay
                zIndex: 1, // Ensure it appears above the video
              }}
            ></div>

            {/* Responsive YouTube Video */}
            <div
              className="absolute inset-0"
              style={{
                overflow: 'hidden', // Ensures the video doesn't exceed bounds
              }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/2NW6cly9898?autoplay=1&mute=1&loop=1&controls=0&start=5&playlist=2NW6cly9898"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; loop; muted"
                allowFullScreen
                style={{
                  objectFit: 'cover',
                  width: '102vw',
                  height: '121vh',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                }}
              />
            </div>
          </div>

          {/* Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            style={{
              overflow: 'hidden', // Ensures the overlay doesn't overflow
            }}
          ></div>

          {/* Header Section */}
          <div className="max-w-[1300px] mx-auto flex justify-between items-center h-full">
            <header
              className="absolute top-10 right-10 w-[250px] z-30" // Added `z-30` to ensure it's above other elements
              style={{ pointerEvents: 'auto', marginRight: '258px' }}
            >
              {/* First Section: Logo and Menu */}
              <div className="bg-white/15 backdrop-blur-lg text-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 mb-4"

                style={{
                  display: 'flex',
                  width: '250px',
                  padding: '25px 25px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '25px'
                }}
              >
                {/* Logo */}
                <div className="mb-4">
                  <Image
                    src="/images/bimtlog.png"
                    alt="BIMT Logo"
                    width={150}
                    height={64}
                    quality={100}
                  />
                </div>

                {/* Menu Links */}
                <nav className="flex flex-col items-center gap-4 text-gray-200">
                  <Link href="/" className="hover:underline">Home</Link>
                  <Link href="/AboutUs" className="hover:underline">About Us</Link>
                  <Link href="/Diploma" className="hover:underline">Programs</Link>
                  <Link href="/CampusLife" className="hover:underline">Life at BIMT</Link>
                  <Link href="/CareeratBIMT" className="hover:underline">Connect with Us</Link>
                </nav>

                {/* Student Portal Button */}
                <button className="flex items-end border-2 border-[#fff] rounded-lg px-4 py-2 font-semibold text-[#fff] text-lg relative"
                  style={{
                    display: 'flex',
                    height: '56px',
                    padding: '16px 10px',
                    justifyContent: 'center',
                    alignContent: 'center',
                    gap: '10px',
                    flexShrink: '0',
                    color: '#fff',
                    fontFamily: 'Work Sans',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal'
                  }}
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
                  STUDENT PORTAL
                </button>
              </div>

              {/* Second Section: Follow Us */}
              <div className="bg-white/15 backdrop-blur-lg text-white p-4 rounded-lg shadow-lg flex flex-col items-center gap-4"

                style={{
                  display: 'flex',
                  width: '250px',
                  padding: '10px 0px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px'
                }}

              >
                <p className="text-lg text-white">Follow Us On</p>
                <div className="flex space-x-4">
                  {/* Facebook Icon */}
                  <div className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <rect x="1" y="1" width="24" height="24" rx="4" stroke="#E0E6EB" />
                      <path d="M13.8834 10.2187C13.8834 9.29436 14.3318 9.29436 14.7802 9.29436H15.3183C15.4082 9.2956 15.4974 9.27828 15.5806 9.24341C15.6638 9.20855 15.7395 9.15685 15.803 9.09137C15.8665 9.02588 15.9167 8.94795 15.9505 8.86215C15.9843 8.77636 16.0011 8.68445 15.9999 8.59185V7.72297C15.9999 7.62993 15.982 7.53782 15.9472 7.45198C15.9124 7.36614 15.8614 7.28828 15.7971 7.22292C15.7329 7.15757 15.6567 7.10602 15.573 7.07126C15.4892 7.03651 15.3996 7.01924 15.3094 7.02046L14.0358 7.00198C13.665 6.98719 13.2955 7.05552 12.9528 7.20223C12.6101 7.34895 12.3023 7.57056 12.0508 7.85177C11.7993 8.13298 11.6099 8.4671 11.4959 8.83106C11.3818 9.19502 11.3457 9.58016 11.3901 9.95989V11.3002H10.6816C10.5008 11.3002 10.3275 11.3742 10.1996 11.5059C10.0718 11.6377 10 11.8164 10 12.0027V12.8716C10 13.0579 10.0718 13.2366 10.1996 13.3683C10.3275 13.5001 10.5008 13.5741 10.6816 13.5741H11.3901V18.5378C11.3901 18.6604 11.4374 18.778 11.5215 18.8646C11.6056 18.9513 11.7196 19 11.8385 19H13.4618C13.5761 18.9929 13.6833 18.9411 13.7617 18.8552C13.84 18.7693 13.8836 18.6557 13.8834 18.5378V13.5741H14.6726C14.8534 13.5741 15.0267 13.5001 15.1546 13.3683C15.2824 13.2366 15.3542 13.0579 15.3542 12.8716V12.0027C15.3542 11.8164 15.2824 11.6377 15.1546 11.5059C15.0267 11.3742 14.8534 11.3002 14.6726 11.3002H13.8834V10.2187Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  {/* Twitter Icon */}
                  <div className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_327_4580)">
                        <path d="M14.2342 10.1624L22.9766 0H20.9049L13.3139 8.82384L7.25095 0H0.258057L9.42642 13.3432L0.258057 24H2.32985L10.3462 14.6817L16.7491 24H23.742L14.2337 10.1624H14.2342ZM11.3966 13.4608L10.4676 12.1321L3.07634 1.55961H6.2585L12.2234 10.0919L13.1523 11.4206L20.9059 22.5113H17.7238L11.3966 13.4613V13.4608Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_327_4580">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  {/* LinkedIn Icon */}
                  <div className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"  viewBox="0 0 26 26" fill="none">
                      <rect x="1" y="1" width="24" height="24" rx="4" stroke="#E0E6EB" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62213 6.00011C8.61566 5.99997 8.60919 5.99996 8.60272 6.0001C8.18684 6.009 7.78989 6.17571 7.49236 6.46643C7.19483 6.75714 7.01898 7.15012 7.00045 7.56569C7.00005 7.57445 6.99992 7.58321 7.00004 7.59197C7.00601 8.01679 7.17494 8.42308 7.47194 8.72687C7.76894 9.03068 8.1713 9.20876 8.59588 9.22434C8.60472 9.22468 8.61358 9.22474 8.62243 9.22453C9.05048 9.21489 9.45756 9.03722 9.75569 8.72991C10.0538 8.42261 10.2191 8.01033 10.2158 7.58219L10.2155 7.56892C10.1999 7.15358 10.0263 6.75986 9.73018 6.46826C9.43402 6.17666 9.03766 6.00919 8.62213 6.00011ZM8.98783 10.8811C8.88709 10.8738 8.76884 10.8735 8.61241 10.8735C8.45608 10.8735 8.33709 10.8738 8.23534 10.8811C8.19222 10.8842 8.15909 10.8882 8.13401 10.8922V17.4116C8.16015 17.4155 8.19402 17.4195 8.23737 17.4224C8.33975 17.4294 8.45862 17.4297 8.61241 17.4297C8.76629 17.4297 8.88442 17.4294 8.98581 17.4224C9.02567 17.4197 9.05723 17.4162 9.08193 17.4125V10.8912C9.05821 10.8876 9.02738 10.8839 8.98783 10.8811ZM10.0459 10.2647C10.1655 10.4612 10.2037 10.6806 10.2037 10.89V17.4398C10.2037 17.6487 10.1625 17.868 10.0364 18.0629C9.90651 18.2637 9.72417 18.3806 9.54806 18.4467C9.38184 18.5092 9.20895 18.5314 9.06316 18.5415C8.91917 18.5514 8.76393 18.5514 8.62302 18.5514H8.602C8.46094 18.5514 8.30524 18.5514 8.16053 18.5415C8.01404 18.5314 7.84087 18.5094 7.67439 18.4475C7.49861 18.3823 7.31494 18.2667 7.18323 18.0664C7.05477 17.8711 7.01227 17.6506 7.01227 17.4398V10.89C7.01227 10.6788 7.05172 10.4581 7.17364 10.2611C7.30045 10.0562 7.48139 9.93319 7.66176 9.86257C7.83095 9.79632 8.00705 9.77286 8.15507 9.76225C8.30106 9.75177 8.45863 9.75178 8.60144 9.75178H8.62352C8.76618 9.75178 8.92333 9.75177 9.06863 9.76227C9.21597 9.7729 9.39182 9.79646 9.56077 9.86342C9.74148 9.93504 9.92094 10.0594 10.0459 10.2647ZM14.0744 11.4205C14.3983 10.9859 14.9003 10.758 15.6146 10.758C16.8486 10.758 17.8783 11.7365 17.8783 12.9774V17.3865C17.8543 17.3899 17.824 17.3932 17.786 17.3958C17.6842 17.4028 17.5649 17.4031 17.4087 17.4031C17.2526 17.4031 17.1333 17.4028 17.0315 17.3958C16.9935 17.3932 16.9632 17.3899 16.9392 17.3865V13.9723C16.9392 12.9185 16.1502 11.9721 15.019 12.0254C13.8987 12.0101 13.1529 12.9339 13.1529 13.9989L13.1526 17.4121C13.1272 17.4159 13.0946 17.4196 13.0531 17.4224C12.9503 17.4294 12.8303 17.4297 12.6742 17.4297C12.518 17.4297 12.3988 17.4294 12.2969 17.4224C12.259 17.4198 12.2286 17.4165 12.2047 17.4131V10.89C12.2047 10.8813 12.2048 10.8731 12.205 10.8655C12.2247 10.8647 12.2466 10.864 12.2708 10.8636C12.3663 10.8617 12.4819 10.8629 12.6052 10.8656C12.6976 10.8676 12.8 10.8708 12.8982 10.8738L13.0489 10.8783C13.0508 10.8882 13.0525 10.8987 13.0542 10.9097C13.0622 10.9641 13.0653 11.0203 13.064 11.0703C13.0574 11.3147 13.2099 11.5353 13.441 11.6154C13.672 11.6955 13.9283 11.6166 14.0744 11.4205ZM15.6146 9.6363C14.9875 9.6363 14.3978 9.77192 13.9004 10.0807C13.7697 9.91473 13.5656 9.76065 13.2605 9.76065C13.19 9.76065 13.0892 9.75747 12.9665 9.75359C12.8672 9.75045 12.7535 9.74686 12.6299 9.74414C12.5012 9.7413 12.3676 9.73971 12.249 9.74202C12.1426 9.74409 12.0079 9.74957 11.898 9.77155C11.6926 9.81264 11.4555 9.91568 11.2859 10.1537C11.1277 10.3756 11.0829 10.64 11.0829 10.89V17.4398C11.0829 17.6466 11.1227 17.865 11.247 18.0599C11.3757 18.2615 11.5573 18.3795 11.7342 18.4464C11.9005 18.5093 12.0738 18.5314 12.2198 18.5415C12.3642 18.5514 12.5205 18.5514 12.6635 18.5514H12.6848C12.8279 18.5514 12.9847 18.5514 13.1297 18.5415C13.2765 18.5314 13.45 18.5094 13.6166 18.4472C13.7931 18.3812 13.9761 18.2646 14.1066 18.0634C14.2332 17.8683 14.2743 17.6486 14.2743 17.4398L14.2747 13.9989C14.2747 13.4387 14.6235 13.1374 15.0142 13.1473C15.03 13.1477 15.0458 13.1474 15.0616 13.1465C15.4511 13.1234 15.8175 13.4412 15.8175 13.9723V17.4132C15.8175 17.62 15.8572 17.8384 15.9815 18.0332C16.1102 18.2348 16.2919 18.3529 16.4687 18.4197C16.6351 18.4826 16.8083 18.5048 16.9544 18.5148C17.0987 18.5248 17.255 18.5248 17.398 18.5248H17.4194C17.5624 18.5248 17.7187 18.5248 17.8631 18.5148C18.0092 18.5048 18.1824 18.4826 18.3488 18.4197C18.5256 18.3529 18.7073 18.2348 18.8359 18.0332C18.9602 17.8384 19 17.62 19 17.4132V12.9774C19 11.0835 17.4341 9.6363 15.6146 9.6363Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full sm:items-start sm:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Meet Our Dedicated Team
              </h1>
              <p className="text-base md:text-lg max-w-xl heroOurTeamParagraph">
                Our team consists of 12 highly skilled legal professionals, each bringing unique expertise and experience to the firm. Together, we are committed to delivering exceptional legal services, working collaboratively to meet the diverse needs of our clients.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <a
                  href="#"
                  className="bg-white text-black px-6 py-3 rounded-[5px] font-semibold hover:bg-gray-200"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="bg-transparent border border-white px-6 py-3 rounded-[5px] font-semibold hover:bg-white hover:text-black transition"
                >
                  Our Service
                </a>
              </div>
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
              {/* Program Select Dropdown */}
              <div className="relative flex items-center w-full pr-4">
                {/* Custom Dropdown */}
                <div className="flex items-center gap-2 w-full bg-transparent outline-none text-gray-600 text-sm md:text-lg px-2 md:px-4 textContentBox">
                  <select
                    className="flex-1 appearance-none bg-transparent outline-none text-base md:text-lg"
                    style={{
                      color: "rgba(0,0,0,0.60)",
                      fontFamily: "Playfair",
                      fontSize: "16px", // Smaller font size for mobile
                      fontWeight: "600",
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Your Program here
                    </option>
                    <option value="program1">Program 1</option>
                    <option value="program2">Program 2</option>
                  </select>
                  {/* Custom Dropdown Icon */}
                  <svg className='dropDownIcon'
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M0 5L10 15L20 5H0Z" fill="black" />
                  </svg>
                </div>
              </div>
              {/* Search Button */}
              <div>
                <button className="bg-[#272A5D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-150 text-sm md:text-lg searchBtn"
                  style={{
                    width: "120px", // Smaller button width for mobile
                    height: "40px", // Smaller button height for mobile
                    fontSize: "16px", // Adjusted font size for mobile
                  }}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto mt-[110px] mb-[0px]"
      >
        {/* <!-- Card 1 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '250px' }}>
            <img
              src="/images/Group.png"
              alt="Learning Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Expert Learning</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            Our lectures teach you a great deal about your chosen industry or area of
            study. Learning from them exposes you to their vast expertise, which can
            benefit you in your future career.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '270px' }}>
            <img
              src="/images/skill-development 1.png"
              alt="Community Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Skill Development</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT Campus gives you the opportunity to major in a particular field.
            This means you have the opportunity to gain industry-specific skills and
            knowledge.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '400px' }}>
            <img
              src="/images/mentorship 1.png"
              alt="Integrity Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Career Switch Opportunities</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            Since BIMT offers a wide variety of programs, students may have several
            opportunities to venture into a new industry.
          </p>
        </div>
      </section>



      <div className="flex flex-col items-center max-w-[1300px] mt-[110px] w-full md:w-4/5 mx-auto">

        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image src="/images/course1.jpg"
              width={712}
              height={422}
              objectFit='cover'
              alt="Diploma Program"
              className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-gray-700 font-semibold text-xl"
              style={{
                color: '#272A5D',
                fontFamily: 'Work Sans',
                fontSize: '24px',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 'normal'
              }}
            >Program</h2>
            <h1 className="text-4xl font-bold text-[#272A5D]">DIPLOMA</h1>
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

            <div className="grid grid-cols-2 gap-4 text-lg">
              <span className="underline-hover"
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontFamily: "Work Sans",
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '25px'
                }}
              >Management ➔</span>
              <span className="underline-hover"
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontFamily: "Work Sans",
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '25px'
                }}
              >Language ➔</span>
              <span className="underline-hover"
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontFamily: "Work Sans",
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '25px'
                }}
              >Humanity & Education ➔</span>
              <span className="underline-hover"
                style={{
                  color: '#000',
                  textAlign: 'justify',
                  fontFamily: "Work Sans",
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '25px'
                }}
              >Computing ➔</span>
            </div>


            {/* Buttons */}
            <div className="flex space-x-4 mt-4 gap-10">
              <button className="button" style={{
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

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 space-y-8 md:space-y-0 mt-[110px]">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image src="/images/course2.jpg"
              objectFit='cover'
              width={712}
              height={422}
              alt="Higher Diploma Program"
              className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-gray-700 font-semibold text-xl"
              style={{
                color: '#272A5D',
                fontFamily: 'Work Sans',
                fontSize: '24px',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 'normal'
              }}
            >Program</h2>
            <h1 className="text-4xl font-bold text-[#272A5D]">HIGHER DIPLOMA</h1>
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
              <div className="flex w-full gap-4">
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
              <button className="button" style={{
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
              <button className="button" style={{
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

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 mt-[110px]">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image src="/images/crouse3.jpg"
              objectFit='cover'
              width={712}
              height={422}
              alt="Diploma Program"
              className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h2 className="text-gray-700 font-semibold text-xl"
              style={{
                color: '#272A5D',
                fontFamily: 'Work Sans',
                fontSize: '24px',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 'normal'
              }}
            >Program</h2>
            <h1 className="text-4xl font-bold text-[#272A5D]">BACHELOR’S DEGREE</h1>
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
              Gain in-depth knowledge and real-world skills with our Bachelor’s Degree programs. Through internships and case studies, you’ll be prepared to enter the workforce or pursue advanced studies with confidence.
            </p>

            {/* Sub-categories */}
            <div className="flex flex-col gap-4 text-lg">
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
                BBA in Accounting ➔
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
                BSc (Hons) in Computing ➔
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
                BBA in Business Management ➔
              </span>
            </div>


            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="button" style={{
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
      </div>

      {/* View All Courses */}
      <div className="relative flex justify-center mt-[110px]">
        {/* Button Container */}
        <button className="flex items-end border-2 border-[#272A5D] rounded-lg px-4 py-2 font-semibold text-[#272A5D] text-lg relative"
          style={{ fontFamily: 'Playfair', fontSize: '20px', fontWeight: '700', lineHeight: '24px', textAlign: 'left', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
        >
          {/* Icon with Rotation */}
          <div className="absolute -top-3 -left-6 transform -rotate-10">
            <Image src="/images/graduate 1.png"
              width={61.25}
              height={43.04}
              alt='storeis'
              style={{ transform: 'translate(-20%, -45%) rotate(-10.795deg)' }} />
          </div>
          {/* Button Text */}
          View all Programs
        </button>
      </div>






      {/* About Us */}

      <div
        className="relative w-full px-6 pt-[110px] md:px-12 lg:px-24 mt-[100px] mb-[-40px]"
        style={{
          backgroundImage: "url('/images/bgimgqa.jpg')",
          backgroundSize: 'cover', // Ensure the background covers the full width and height
          backgroundPosition: 'center', // Center the background image
        }}
      >
        <div className="max-w-[1300px] mx-auto relative">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2 relative">
            {/* First Image */}
            <div
              className="col-span-1 relative"
              style={{
                width: '250px',
                zIndex: '20',
                position: 'absolute',
                left: '25px',
                top: '35px',
              }}
            >
              <Image
                src="/images/medium-shot-graduate-student_23-2148950577 1.png"
                alt="Graduate student"
                width={240}
                height={159}
                objectFit='cover'
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Second Image */}
            <div
              className="col-span-1 row-span-2 relative"
              style={{
                marginLeft: '10px',
                left: '280px',
                height: '600px',
                top: '0px',
              }}
            >
              <Image
                src="/images/college-student-holding-books-walking-campus-going-class-smiling-young-smiling-multiracial-asian-wom 1.png"
                alt="Student walking on campus"
                width={368}
                height={545}
                className="w-full h-auto rounded-lg shadow-lg"
                objectFit='cover'
              />
            </div>

            {/* Third Image */}
            <div
              className="col-span-1 absolute"
              style={{
                top: '215px',
                left: '0px',
              }}
            >
              <Image
                src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-smiling-blue-wall_140725-4264 1.png"
                alt="Student with files"
                width={335}
                height={223}
                objectFit='cover'
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className="absolute bg-white lg:p-12 rounded-lg shadow-md lg:w-1/2"
            style={{
              right: '0',
              top: '25px',
              paddingTop: '25px',
              paddingLeft: '50px',
              paddingBottom: '25px',
              paddingRight: '50px',
              color: '#5A5A5A',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px',
              width: '763px', // Fixed width for the text 
            }}
          >
            <h2 className="text-lg font-semibold text-[#272A5D] mb-2">About us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#272A5D] mb-4">
              DISCOVER WHO WE ARE?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At BIMT Campus, we are dedicated to providing high-quality, accessible education in management and technology.
              In collaboration with a leading international organization, we offer a unique learning environment where students
              gain both theoretical knowledge and practical skills to excel in their careers. With an ISO 9001:2015 certification,
              a highly qualified faculty, and internationally recognized programs, BIMT Campus empowers students to achieve
              their goals and make a lasting impact in their chosen fields.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 border-2 border-[#272A5D] text-[#272A5D] rounded-lg font-semibold hover:bg-[#272A5D] hover:text-white transition">
                View more
              </button>
              <button className="px-6 py-3 border-2 border-[#272A5D] text-[#272A5D] rounded-lg font-semibold hover:bg-[#272A5D] hover:text-white transition">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>



      {/*Start Event section */}
      <div
        className="relative flex flex-col md:flex-row  items-center bg-white text-white p-6"
        style={{ width: "1502px", margin: "0 auto", marginTop: '110px', marginBottom: '0px' }}
      >
        {/* Events List */}
        <div className="bg-[#272A5D] p-10 w-full md:w-2/3 rounded-lg shadow-lg"

          style={{
            width: '1035px',
            height: 'fit-content',
            flexShrink: '0',
            paddingLeft: '100px',
            paddingTop: '60px',
            paddingBottom: '60px'
          }}

        >

          <div style={{
            display: 'flex',
            width: '743px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '30px'
          }}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold"
                style={{ color: '#fff', fontFamily: 'Work Sans', fontSize: "24px", fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}
              >Events</h2>
              <h1 className="text-4xl font-bold mt-2"
                style={{ color: '#fff', fontFamily: 'Avenir LT Std', fontSize: '40px', fontStyle: 'normal', fontWeight: '600', lineHeight: '53px' }}
              >UPCOMING EVENTS</h1>
            </div>

            {/* Event Item */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex py-6"
                style={{
                  border: "0.25px solid white",
                  marginBottom: "20px",
                  padding: "20px",
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '67px'
                }}
              >
                <div className="flex flex-col items-center justify-center w-20 text-center">
                  <span className="text-lg font-light"
                    style={{
                      color: '#fff',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}
                  >nov</span>
                  <span className="text-4xl font-bold"
                    style={{
                      color: '#fff',
                      fontFamily: 'Avenir LT Std',
                      fontSize: '32px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '53px'
                    }}
                  >6th</span>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-semibold"
                    style={{
                      color: '#fff',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: 'normal'
                    }}
                  >Workshop on Capital Market</h3>
                  <p className="text-sm text-gray-300 mt-2"
                    style={{ overflow: 'hidden', color: '#fff', textOverflow: 'ellipsis', fontFamily: 'Work Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '25px' }}
                  >
                    A workshop on Capital Market was organized for our BIMT Campus
                    Students on the 23rd of November.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-semibold"
                      style={{
                        color: '#fff',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                      }}
                    >9.00 - 17.00</span>
                    <span className="text-sm font-semibold"
                      style={{
                        color: '#fff',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                      }}
                    >Kingsbury Hotel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Countdown Section */}
        <div className="absolute right-[50px] w-full md:w-1/3">
          <Image
            src="/images/3 1.png"
            alt="Event Image"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/4">
            <h4 className="text-xl font-semibold" style={{ color: "#000" }}>
              Next Event
            </h4>
            <p className="text-2xl font-bold mt-2" style={{ color: "#000" }}>
              8d 00h 00m
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
                View all events
              </button>
              <button className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*End Event section */}




      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto mt-[110px] mb-[0px]"
      >
        {/* <!-- Card 1 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '260px' }}>
            <img
              src="/images/network 1.png"
              alt="Learning Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Broader Network</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT Campus gives you the opportunity to meet a wide variety of people through clubs and other college activities, allowing you to expand your network.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '270px' }}>
            <img
              src="/images/Group (1).png"
              alt="Community Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Competitive Edge</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT gives you the opportunity to work on your unique qualifications in order to help you overcome any competition you may face in the job applicant pool.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '180px' }}>
            <img
              src="/images/provision 1.png"
              alt="Integrity Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Flexibility</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT provides you with a great amount of flexibility. This makes it easier for you to balance your professional life with your personal obligations and responsibilities.
          </p>
        </div>
      </section>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1300px] mx-auto mt-[70px] mb-[0px]"
        style={{ paddingLeft: '207px', paddingRight: '207px' }}
      >
        {/* <!-- Card 1 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '270px' }}>
            <img
              src="/images/united 1.png"
              alt="expert"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Exposure to Different Cultures</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT allows you to immerse yourself in these diverse groups of people, helping you appreciate the other cultures the world offers.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
          <div className="absolute -top-6 flex items-center gap-2 bg-[#fff]" style={{ width: '270px' }}>
            <img
              src="/images/Group (2).png"
              alt="Community Icon"
              width={51}
              height={50}
            />
            <h2 className="font-semibold text-2xl text-[#272A5D]">Sports and Events</h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT has a variety of sports and events you can attend, which can help you build connections. It also provides you an opportunity to make lasting memories from the events that you attend.
          </p>
        </div>
      </section>





      <div className="mx-auto w-[1300px] flex flex-col md:flex-row items-stretch bg-white"
        style={{
          width: '1300px',
          height: '575px',
          paddingTop: '179px',
        }}

      >
        {/* Left Side */}
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
            where you can make a lasting impact on students&#39;  lives and your own.
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

        {/* Right Side */}
        <div className="relative w-full md:w-1/2"
          style={{ height: '496px' }}
        >
          {/* Top Half (Blue Background) */}
          <div className="h-1/2 bg-blue-900"
            style={{
              background: '#272A5D'

            }}
          ></div>

          {/* Bottom Half (Content Section) */}
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
              <button className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
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
                View all careers
              </button>
              <button className="px-6 py-2 border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition rounded-lg px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
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
                Contact us
              </button>
            </div>
          </div>

          {/* Absolute Positioned Image */}
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
      </div >



      {/* Testimonials */}

      <div
        className="bg-[#272A5D] flex flex-col items-center py-16"
        style={{ marginTop: '202px', marginBottom: '100px' }}
      >
        {/* Outer Container for Content with Fixed Width */}
        <div
          className="w-[1349px] mx-auto flex flex-col lg:flex-row items-center lg:items-start"
        >
          {/* Image Section */}
          <div className="relative lg:mr-16 mb-8 lg:mb-0">
            <Image
              src="/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated1 1.png"
              alt="Alumni"
              width={438}
              height={498}
              className="rounded-lg"
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button
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
              “The continuous support, help, advices and guidance given by the
              management of the campus can never go unnoticed as they fully
              committed themselves to deliver their promises to accomplish the
              objective of becoming a recognized graduate...”
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
              Read Azeem&#39;s Story
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





      {/* activity cards */}
      <div className="flex flex-col bg-white mb-[0px] mt-[110px]" style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl font-semibold text-blue-900"
            style={{
              color: '#272A5D',
              fontFamily: 'Sans',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: "400",
              lineHeight: 'normal'
            }}
          >Campus Life</h2>
          <h1 className="text-4xl font-bold text-blue-900 leading-tight"
            style={{
              color: '#272A5D',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '53px'
            }}
          >
            STAY CONNECTED WITH <br /> CAMPUS LIFE
          </h1>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ marginBottom: "200px" }}>
          {/* Event 1 */}
          <div className="relative" style={{ width: "400px", flexShrink: 0 }}>
            <img
              src="/images/actitivity1.png"
              alt="Graduation"
              style={{ width: "400px", height: "266.667px", flexShrink: 0 }}
              className="rounded-t-lg object-cover"
            />
            <div
              className="absolute bg-white p-4"
              style={{
                display: "flex",
                width: "370px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                top: "200px",
                left: "15px",
              }}
            >
              <h3 className="text-xl font-bold text-blue-900"
                style={{
                  color: '#272A5D',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '30px',
                  fontStyle: "normal",
                  fontWeight: '600',
                  lineHeight: 'normal'
                }}
              >Graduation</h3>
              <p className="text-gray-600"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal'
                }}
              >
                Our BIMT Campus annual graduation ceremony is a day devoted to
                celebrating an important point in our students&#39;  lives. Examinations
                are finally over, scruffiness is replaced with fancy clothes, and
                parents admire their children for reaching the finishing line of a
                long marathon.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative" style={{ width: "400px", flexShrink: 0 }}>
            <img
              src="/images/activitiy2.png"
              alt="Camping Night - Kabaragala"
              style={{ width: "400px", height: "266.667px", flexShrink: 0 }}
              className="rounded-t-lg object-cover"
            />
            <div
              className="absolute bg-white p-4"
              style={{
                display: "flex",
                width: "370px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                top: "200px",
                left: "15px",
              }}
            >
              <h3 className="text-xl font-bold text-blue-900"
                style={{
                  color: '#272A5D',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '30px',
                  fontStyle: "normal",
                  fontWeight: '600',
                  lineHeight: 'normal'
                }}
              >Camping Night - Kabaragala</h3>
              <p className="text-gray-600"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal'
                }}
              >
                This Camping Night was organized to build the confidence of our
                students to dream big and to make them such people who are driven to
                achieve their dreams.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="relative" style={{ width: "400px", flexShrink: 0 }}>
            <img
              src="/images/activitiy3.png"
              alt="Cricket Tournament"
              style={{ width: "400px", height: "266.667px", flexShrink: 0 }}
              className="rounded-t-lg object-cover"
            />
            <div
              className="absolute bg-white p-4"
              style={{
                display: "flex",
                width: "370px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                top: "200px",
                left: "15px",
              }}
            >
              <h3 className="text-xl font-bold text-blue-900"
                style={{
                  color: '#272A5D',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '30px',
                  fontStyle: "normal",
                  fontWeight: '600',
                  lineHeight: 'normal'
                }}
              >Cricket Tournament</h3>
              <p className="text-gray-600"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal'
                }}
              >
                BIMT cricket tournament was well-organized by the Alumni Association
                of BIMT Campus. This game proved true leadership and team spirit
                throughout the matches.
              </p>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default HomePage;
