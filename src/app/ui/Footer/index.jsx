'use client';

import Image from 'next/image';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <div className="w-full bg-[#272A5D] text-white">

      <div
        className="relative w-full h-[425px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          background: "url('/images/bgimgqa.jpg') lightgray 50% / cover no-repeat",
        }}
      >
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
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              fontFamily: 'Playfair',
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '57.6px',
              textAlign: 'center',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Continue Your Studies at Our University
          </h2>

          {/* Paragraph */}
          <p
            className="text-base lg:text-lg max-w-[800px] mb-6"
            style={{
              fontFamily: 'Work Sans',
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
            <button
              className="flex items-end border-2 border-[#fff] rounded-lg px-4 py-2 font-semibold text-[#fff] text-lg relative"
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
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      </div>


      <div
        className="relative w-full bg-cover bg-center text-white"
        style={{
          background: "url('/images/4f02ab140ac87bb714dbb492350a9169.jpeg') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="container mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-16 py-10">
          {/* Single Row Layout */}
          <div className="flex flex-wrap lg:flex-nowrap gap-[80px] items-start justify-between">
            {/* Logo and Social Links Section */}
            <div className="flex flex-col items-start text-left justify-start lg:mr-[145px]">
              {/* BIMT Logo */}
              <img
                src="/images/bimtLogo.png"
                alt="BIMT Campus Logo"
                className="w-[200px] sm:w-[300px] lg:w-[350px] mb-4"
              />

              {/* Certificates */}
              <img
                src="/images/ISO.png"
                alt="BIMT Certificates"
                className="w-[200px] sm:w-[300px] lg:w-[350px] h-[108px]"
              />

              {/* Social Media Icons */}
              <div className="flex justify-start space-x-4 mt-4">
                <img src="/images/twitter.png" alt="Twitter Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <img src="/images/linkdin.png" alt="LinkedIn Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <img src="/images/facebook.png" alt="Facebook Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
                <img src="/images/youtube.png" alt="YouTube Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
            </div>


            {/* Quick Links Sections */}
            <div className="flex gap-[120px]">
              {/* Quick Links Section 1 */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 relative" style={{
                  color: 'var(--White, #FFF)',
                  fontFamily: 'Playfair',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '32px',
                  letterSpacing: '-0.72px'

                }}>
                  Quick Links
                  <span className="absolute w-1/2 h-[2px] bg-white bottom-[-5px] left-0"></span>
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Promotions', url: '/Promotion' },
                    { name: 'Career at BIMT', url: '/CareeratBIMT' },
                    { name: 'Help & FAQs', url: '/ContactUs#FAQ' },
                    { name: 'Alumni Association', url: '/Testimonials' },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-sm sm:text-base lg:text-lg hover:text-gray-200"
                        style={{
                          color: 'var(--White, #FFF)',
                          fontFamily: 'Work Sans',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal',
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Quick Links Section 2 */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 relative" style={{
                  color: 'var(--White, #FFF)',
                  fontFamily: 'Playfair',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '32px',
                  letterSpacing: '-0.72px'

                }}>
                  Quick Links
                  <span className="absolute w-1/2 h-[2px] bg-white bottom-[-5px] left-0"></span>
                </h3>
                <ul className="space-y-2">
                  {['Corporate Training', 'Career Guidance', 'Student Loan Facilities', 'Partnerships'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm sm:text-base lg:text-lg hover:text-gray-200" style={{
                        color: 'var(--White, #FFF)',
                        fontFamily: 'Work Sans',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                      }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Section 3 */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 relative"
                  style={{
                    color: 'var(--White, #FFF)',
                    fontFamily: 'Playfair',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '32px',
                    letterSpacing: '-0.72px'

                  }}

                >
                  Quick Links
                  <span className="absolute w-1/2 h-[2px] bg-white bottom-[-5px] left-0"></span>
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Home', url: '/' },
                    { name: 'About Us', url: '/AboutUs' },
                    { name: 'Programs', url: '/Diploma' },
                    { name: 'Life at BIMT', url: '/CampusLife' },
                    { name: 'Connect with Us', url: '/ConnectwithUs' },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-sm sm:text-base lg:text-lg hover:text-gray-200"
                        style={{
                          color: 'var(--White, #FFF)',
                          fontFamily: 'Work Sans',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: 'normal',
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>



            {/* Contact Section */}
            <div className="flex-shrink-0">
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 relative"
                style={{
                  color: 'var(--White, #FFF)',
                  fontFamily: 'Playfair',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '32px',
                  letterSpacing: '-0.72px'
                }}
              >
                Contact Us
                <span className="absolute w-1/2 h-[2px] bg-white bottom-[-5px] left-0 w-20"></span>
              </h3>
              <ul className="space-y-4">
                {/* Email */}
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
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
                    <a href="mailto:info@bimt.lk" className="block text-sm sm:text-base lg:text-lg hover:text-gray-200" style={{
                      color: 'var(--White, #FFF)',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>
                      info@bimt.lk
                    </a>
                    <a href="mailto:help@bimt.lk" className="block text-sm sm:text-base lg:text-lg hover:text-gray-200" style={{
                      color: 'var(--White, #FFF)',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>
                      help@bimt.lk
                    </a>
                  </div>
                </li>
                {/* Address */}
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <g clip-path="url(#clip0_923_2095)">
                      <path d="M15 2.92871C10.1625 2.92871 6.25 6.84121 6.25 11.6787C6.25 18.2412 15 27.9287 15 27.9287C15 27.9287 23.75 18.2412 23.75 11.6787C23.75 6.84121 19.8375 2.92871 15 2.92871ZM15 14.8037C13.275 14.8037 11.875 13.4037 11.875 11.6787C11.875 9.95371 13.275 8.55371 15 8.55371C16.725 8.55371 18.125 9.95371 18.125 11.6787C18.125 13.4037 16.725 14.8037 15 14.8037Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_923_2095">
                        <rect width="30" height="30" fill="white" transform="translate(0 0.428711)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm sm:text-base lg:text-lg" style={{
                    color: 'var(--White, #FFF)',
                    fontFamily: 'Work Sans',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                  }}>
                    654, Galle Road, Colombo - 00300,<br /> Sri Lanka
                  </span>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
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
                    <a href="tel:+94777700016" className="block text-sm sm:text-base lg:text-lg hover:text-gray-200" style={{
                      color: 'var(--White, #FFF)',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>
                      +94 777 700 016
                    </a>
                    <a href="tel:+94777700026" className="block text-sm sm:text-base lg:text-lg hover:text-gray-200" style={{
                      color: 'var(--White, #FFF)',
                      fontFamily: 'Work Sans',
                      fontSize: '20px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: 'normal'
                    }}>
                      +94 777 700 026
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div
        className="bg-[#272A5D] h-[53px] text-center py-4 text-sm font-sans"
        style={{
          fontSize: '11px',
          fontWeight: 400,
          alignContent: 'center',
          lineHeight: '12.9px',
          fontFamily: 'Work Sans',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        }}
      >
        Copyright © BIMT {currentYear}. All rights reserved.
      </div>


    </div>

  );
}

