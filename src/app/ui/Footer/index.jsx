'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  // const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full text-white">
        <div
          className="relative w-full h-[425px] flex items-center justify-center text-center bg-cover bg-center"
          style={{
            background: "url('/images/Footer-blue-vector-background-01_page-0001-1-scaled.jpg') #272A5D 100% / cover no-repeat",
          }}
        >
          {/* Blue Overlay */}
          {/* <div className="absolute inset-0 bg-[#1230AE] opacity-100"></div> */}
          {/* Content Container */}
          <div
            className="relative z-10 container mx-auto max-w-[1920px] px-6 lg:px-16 py-10 flex flex-col items-center text-center"
            style={{
              width: '624px',
              padding: '0px',
              paddingTop: '50px',
              display: 'flow',
              alignContent: 'center',
            }}
          >
            {/* Heading */}
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4 font-avenir footerHeadingContinue"
             
            >
              Continue Your Studies at Our University
            </h2>

            {/* Paragraph */}
            <p
              className="text-base lg:text-lg max-w-[800px] mb-6 font-avenir"
              style={{

                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '23px',
                textAlign: 'center',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
              }}
            >
              Take the next step toward a brighter future with BIMT. Join a community
              dedicated to academic excellence, career success, and personal growth.
              Start your application today and continue your studies at an institution
              committed to your aspirations.
            </p>

            {/* Button */}
            <div className="flex justify-center pt-4 px-6">
              <Link href={'/Register'}>
                <button
                  className="flex items-end border-2 border-[#fff] rounded-lg px-4 py-4 font-semibold text-[#fff] text-lg relative"
                  style={{
                    fontFamily: 'Playfair',
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '24px',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                  }}
                >
                  {/* Icon with Rotation */}
                  <div className="absolute -top-3 -left-6 transform -rotate-10">
                    <Image
                      src="/images/graduate 1 (2).png"
                      width={61.25}
                      height={43.04}
                      alt="stories"
                      style={{ transform: 'translate(-20%, -45%) rotate(-10.795deg)' }}
                    />
                  </div>
                  {/* Button Text */}
                  <span>
                    REGISTER NOW
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Optional Overlay */}
          {/* <div className="absolute inset-0 bg-white bg-opacity-20"></div> */}
        </div>



      </div>

      {/* Second Section footer */}
      <div
        className="relative flex flex-col w-full pt-[60px] px-[20px] md:px-[50px] lg:px-[100px] pb-0"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/Footer-red-vector-background-01_page-0001-scaled.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        ></div>

        {/* Main Container */}
        <div
          className="flex flex-wrap md:flex-nowrap w-full relative z-10"
          style={{ gap: "5%" }}
        >
          {/* Column 1: Image */}
          <div className="flex flex-col w-full md:w-[45%] lg:w-[30%]" style={{ gap: "20px" }}>
            <img
              src="/images/bimtLogo.png"
              alt="BIMT Campus Logo"
              className="w-full h-auto"
            />
            {/* Animation with Certificates */}
            <div className="relative gap-1 overflow-hidden w-full">
              <div className="flex gap-1 animate-moveImages">
                {/* Images */}
                <img
                  src="/images/3.png"
                  alt="BIMT Certificates 1"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/1 (2).png"
                  alt="BIMT Certificate 2"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/2 (3).png"
                  alt="BIMT Certificate 3"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/3.png"
                  alt="BIMT Certificates 1"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/1 (2).png"
                  alt="BIMT Certificate 2"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/2 (3).png"
                  alt="BIMT Certificate 3"
                  className="w-1/3 h-auto object-cover"
                /> <img
                  src="/images/3.png"
                  alt="BIMT Certificates 1"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/1 (2).png"
                  alt="BIMT Certificate 2"
                  className="w-1/3 h-auto object-cover"
                />
                <img
                  src="/images/2 (3).png"
                  alt="BIMT Certificate 3"
                  className="w-1/3 h-auto object-cover"
                />
              </div>
            </div>


          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col w-full md:w-[22%] lg:w-[15%]" style={{ gap: "10px" }}>
            <h2 className="text-white text-[20px] md:text-[26px] font-semibold font-Playfair"
            >
              Quick Links
            </h2>
            <hr className="w-[30%] md:w-[23%] my-2" style={{ border: '1px solid white' }} />
            <ul className="flex flex-col" style={{ gap: "24px", fontFamily: "Work Sans" }} >
              <li className="text-white">Corporate Training</li>
              <li className="text-white">Career Guidance</li>
              <li className="text-white">Student Loan Facilities</li>
              <li className="text-white">Partnerships</li>
            </ul>
          </div>

          {/* Column 3: Another Quick Links */}
          <div className="flex flex-col w-full md:w-[22%] lg:w-[15%]" style={{ gap: "10px" }}>
            <h2 className="text-white text-[20px] md:text-[26px] font-semibold font-Playfair">
              Quick Links
            </h2>
            <hr className="w-[30%] md:w-[23%] my-2" style={{ border: '1px solid white' }} />
            <ul className="flex flex-col" style={{ gap: "24px", fontFamily: "Work Sans" }} >
              <li className="text-white">Home</li>
              <li className="text-white">About Us</li>
              <li className="text-white">Programs</li>
              <li className="text-white">Life at BIMT</li>
              <li className="text-white">Connect with Us</li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col w-full md:w-[45%] lg:w-[30%]" style={{ gap: "10px" }}>
            <h2 className="text-white text-[20px] md:text-[26px] font-semibold font-Playfair">
              Contact us
            </h2>
            <hr className="w-[100%] md:w-[28%] my-2" style={{ border: '1px solid white' }} />
            <ul className="flex flex-col" style={{ gap: "24px", fontFamily: "Work Sans" }}>
              {/* Email */}
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 31" fill="none">
                  <g clip-path="url(#clip0_923_2087)">
                    <path d="M27.5 5.42871H2.5V25.4287H27.5V5.42871ZM25 10.4287L15 16.6787L5 10.4287V7.92871L15 14.1787L25 7.92871V10.4287Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_923_2087">
                      <rect width="30" height="30" fill="white" transform="translate(0 0.428711)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <a href="mailto:info@bimt.lk" className="block text-white text-sm sm:text-base lg:text-lg font-normal"
                    style={{ fontSize: '16px' }}

                  >
                    info@bimt.lk
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 31" fill="none">
                  <g clip-path="url(#clip0_923_2095)">
                    <path d="M15 2.92871C10.1625 2.92871 6.25 6.84121 6.25 11.6787C6.25 18.2412 15 27.9287 15 27.9287C15 27.9287 23.75 18.2412 23.75 11.6787C23.75 6.84121 19.8375 2.92871 15 2.92871ZM15 14.8037C13.275 14.8037 11.875 13.4037 11.875 11.6787C11.875 9.95371 13.275 8.55371 15 8.55371C16.725 8.55371 18.125 9.95371 18.125 11.6787C18.125 13.4037 16.725 14.8037 15 14.8037Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_923_2095">
                      <rect width="30" height="30" fill="white" transform="translate(0 0.428711)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-white text-sm sm:text-base lg:text-lg font-normal"
                  style={{ fontSize: '16px' }}
                >
                  654, Galle Road, Colombo - 03, Sri Lanka.
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 31" fill="none">
                  <g clip-path="url(#clip0_923_2100)">
                    <path d="M26.25 19.7537L19.6625 18.9912L16.5125 22.1412C12.975 20.3412 10.075 17.4537 8.275 13.9037L11.4375 10.7412L10.675 4.17871H3.7875C3.0625 16.9037 13.525 27.3662 26.25 26.6412V19.7537Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_923_2100">
                      <rect width="30" height="30" fill="white" transform="translate(0 0.428711)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <a href="tel:+94 771 777 730" className="block text-white text-sm sm:text-base lg:text-lg font-normal"
                    style={{ fontSize: '16px' }}

                  >
                    +94 771 777 730
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-4 mt-4">
              <img src="/images/twitter.png" alt="Twitter Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
              <img src="/images/linkdin.png" alt="LinkedIn Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
              <img src="/images/facebook.png" alt="Facebook Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
              <img src="/images/youtube.png" alt="YouTube Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="w-[1450px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 flex flex-col items-center justify-center">
          <hr className="w-full h-[2px] bg-gray-300 border-0" />
          <h2
            className="text-white py-10 font-normal leading-[12.9px] font-['Work_Sans'] decoration-skip-ink-none"
          >
            Copyright © BIMT {new Date().getFullYear()} . All rights reserved. | Designed by
            <a
              href="https://olutek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition duration-300 ml-1"
            >
              Olutek Digital Solutions
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

