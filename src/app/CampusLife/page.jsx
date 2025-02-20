'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useState } from "react";
import '../styles/Global.scss'
export const dynamic = 'force-dynamic'; // Prevents pre-rendering issues
export default function CampusLife() {


  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);

  const toggleGallery = () => {
    setIsGalleryExpanded(!isGalleryExpanded);
  };


  const [isGalleryExpanded1, setIsGalleryExpanded1] = useState(false);

  const toggleGallery1 = () => {
    setIsGalleryExpanded1(!isGalleryExpanded1);
  };

  const [isGalleryExpanded2, setIsGalleryExpanded2] = useState(false);

  const toggleGallery2 = () => {
    setIsGalleryExpanded2(!isGalleryExpanded2);
  };

  // const [isGalleryExpanded3, setIsGalleryExpanded3] = useState(false);

  // const toggleGallery3 = () => {
  //   setIsGalleryExpanded3(!isGalleryExpanded3);
  // };


  return (
    <>
      <MainHeader />
      {/* <AnnounsmentBar /> */}


      {/* Hero Section */}
      <div className="relative w-full bg-cover bg-center heroSectionHeight before:absolute before:inset-0 before:bg-white before:bg-opacity-50"
        style={{ backgroundImage: "url('/images/SEK_5536-scaled.webp')" }}

      >
        {/* Breadcrumb Section Wrapper */}
        <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
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
                  <Link href="/" className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">
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
                      fill="white"
                    />
                  </svg>
                </span>

                <li>
                  <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">
                    Life at BIMT
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
                      fill="white"
                    />
                  </svg>
                </span>
                <li>
                  <span className="hover:underline hover:text-blue-500 breadcrumbFontWhite font-avenir">Campus Life</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>





      <div className="max-w-[1450px] w-full mx-auto px-4 mb-[110px] mt-[50px]">
        <div className="w-full h-auto bg-gradient-to-r from-[#13218F] to-[rgba(101,90,173,0.8)] flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8 py-6 md:py-8">
          {/* Left Side Image */}
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/6-1 1 (7).png"
              alt="Facilities"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col gap-4 flex-grow w-full">
            <h2 className="text-white font-bold text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-avenir">
              GRADUATION
            </h2>
            <p className="text-white text-[14px] md:text-[16px] leading-relaxed text-justify font-work-sans">
              Our BIMT Campus annual graduation ceremony is a day devoted to celebrate an important point in our students’ lives. Examinations are finally over, scruffiness is replaced with fancy clothes and parents admire their children for reaching the finishing line of a long marathon. The future of BIMT past pupil always seems more promising than the present, and the present on graduation day is pretty good even if it is not quite the reality.
            </p>
          </div>

          {/* Toggle Arrow */}
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleSection}>
            <Image
              src={isExpanded ? "/images/uparrow.png" : "/images/down-arrow-svgrepo-com (1).svg"}
              alt="Toggle Arrow"
              width={30}
              height={20}
            />
          </div>
        </div>

        {/* Expanded Section */}
        {isExpanded && (
          <div
            className="relative max-w-[1450px] w-full mx-auto py-8 px-4 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/1-2 1.png")' }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-50"></div>

            {/* Grid Layout */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 z-10">
              {[
                "/images/2-4 2.png",
                "/images/1-2 1.png",
                "/images/3 2.png",
                "/images/6-1 1 (1).png",
              ].map((src, index) => (
                <div key={index} className="w-full h-auto bg-white shadow-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Graduation Image ${index + 1}`}
                    width={625}
                    height={416.67}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>






      {/* Banner Section 02 */}
      {/* Facilities Banner Section */}
      <div className="max-w-[1450px] w-full mx-auto px-4 mb-[110px] mt-[35px]">
        <div className="w-full h-auto bg-gradient-to-r from-[#7323BF] to-[rgba(150,3,80,0.8)] flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-8">
          {/* Left Side Image */}
          <div className="w-full md:w-[300px] h-auto">
            <Image
              src="/images/4-2.png"
              alt="Facilities"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-tight font-avenir">
              FACILITIES
            </h2>
            <p className="text-white text-[14px] md:text-[16px] leading-relaxed text-justify font-work-sans">
              We strive to provide the best possible facilities to enable our students to benefit from a modern learning environment and enjoy their educational experience. We offer adequate facilities suitable for the specific subject areas taught with students’ comfort and welfare in mind. These include the following,
            </p>
          </div>

          {/* Toggle Arrow */}
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleGallery}>
            <Image
              src={isGalleryExpanded ? "/images/uparrow.png" : "/images/down-arrow-svgrepo-com (1).svg"}
              alt="Toggle Arrow"
              width={30}
              height={20}
            />
          </div>
        </div>

        {/* Gallery Section */}
        {isGalleryExpanded && (
          <div className="relative max-w-[1450px] w-full mx-auto py-8 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/17-1.jpg")' }}>
            <div className="absolute inset-0 bg-white bg-opacity-50"></div>

            {/* Grid Layout - Now 3 Images Per Row */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 z-10">
              {[
                "/images/1-4.WEBP",
                "/images/3-2.WEBP",
                "/images/2-6.WEBP",
              ].map((src, index) => (
                <div key={index} className="w-full md:w-[300px] lg:w-[400px] h-auto bg-white shadow-lg overflow-hidden">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} width={625} height={416.67} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Banner Section 03 */}
      {/* Facilities Banner Section */}
      <div className="max-w-[1450px] w-full mx-auto px-4 mb-[110px] mt-[35px]">
        <div className="w-full h-auto  bg-gradient-to-r from-[#20808F] to-[rgba(14,76,166,0.8)] flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-8">
          {/* Left Side Image */}
          <div className="w-full md:w-[300px] h-auto">
            <Image
              src="/images/1-3.WEBP"
              alt="Facilities"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-tight font-avenir">
              CRICKET TOURNAMENT
            </h2>
            <p className="text-white text-[14px] md:text-[16px] leading-relaxed text-justify font-work-sans">
              BIMT cricket tournament was well-organized by Alumni Association of BIMT Campus. This game proved a true leadership and team sprit throughout the whole day of the matches. Main theme of the cricket tournament was to build a Positive behavior that make cricket an exciting game that encourages leadership, friendship, and teamwork.
            </p>
          </div>

          {/* Toggle Arrow */}
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleGallery1}>
            <Image
              src={isGalleryExpanded1 ? "/images/uparrow.png" : "/images/down-arrow-svgrepo-com (1).svg"}
              alt="Toggle Arrow"
              width={30}
              height={20}
            />
          </div>
        </div>

        {/* Gallery Section */}
        {isGalleryExpanded1 && (
          <div className="relative max-w-[1450px] w-full mx-auto py-8 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/17-1.jpg")' }}>
            <div className="absolute inset-0 bg-white bg-opacity-50"></div>

            {/* Grid Layout - Now 3 Images Per Row */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 z-10">
              {[
                "/images/4-1.WEBP",
                "/images/5-1-1.WEBP",
                "/images/1-3.WEBP",
              ].map((src, index) => (
                <div key={index} className="w-full md:w-[300px] lg:w-[400px] h-auto bg-white shadow-lg overflow-hidden">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} width={625} height={416.67} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Banner Section 04 */}
      <div className="max-w-[1450px] w-full mx-auto px-4 mb-[110px] mt-[35px]">
        <div className="w-full h-auto  bg-gradient-to-r from-[#A96702] to-[#5A5111] flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-8">
          {/* Left Side Image */}
          <div className="w-full md:w-[300px] h-auto">
            <Image
              src="/images/10.WEBP"
              alt="Facilities"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-tight font-avenir">
              ADVENTURE TRIP - KITHULGALA
            </h2>
            <p className="text-white text-[14px] md:text-[16px] leading-relaxed text-justify font-work-sans">
              This Camping Night was organized to build the confidence of our students to dream big and to make them such people who are driver, to achieve their dreams.
            </p>
          </div>

          {/* Toggle Arrow */}
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleGallery2}>
            <Image
              src={isGalleryExpanded2 ? "/images/uparrow.png" : "/images/down-arrow-svgrepo-com (1).svg"}
              alt="Toggle Arrow"
              width={30}
              height={20}
            />
          </div>
        </div>

        {/* Gallery Section */}
        {isGalleryExpanded2 && (
          <div className="relative max-w-[1450px] w-full mx-auto py-8 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/17-1.jpg")' }}>
            <div className="absolute inset-0 bg-white bg-opacity-50"></div>

            {/* Grid Layout - Now 3 Images Per Row */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 z-10">
              {[
                "/images/3-3-1.webp",
                "/images/2-7-1.webp",
                "/images/10.WEBP",
              ].map((src, index) => (
                <div key={index} className="w-full md:w-[300px] lg:w-[400px] h-auto bg-white shadow-lg overflow-hidden">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} width={625} height={416.67} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      {/* Banner section 05 */}
      <div className="max-w-[1450px] w-full mx-auto px-4 mb-[110px] mt-[35px]">
        <div className="w-full h-auto  bg-gradient-to-r from-[#3B8144] to-[rgba(6,56,3,0.8)] flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-8">
          {/* Left Side Image */}
          <div className="w-full md:w-[300px] h-auto">
            <Image
              src="/images/10.WEBP"
              alt="Facilities"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col gap-4 flex-grow w-full md:w-[800px]">
            <h2 className="text-white font-bold text-[28px] md:text-[40px] leading-tight font-avenir">
              CAMPING NIGHT - KABARAGALA
            </h2>
            <p className="text-white text-[14px] md:text-[16px] leading-relaxed text-justify font-work-sans">
            This Camping Night was organized to build the confidence of our students to dream big and to make them such people who are driver, to achieve their dreams.
            </p>
          </div>

          {/* Toggle Arrow */}
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={toggleGallery2}>
            <Image
              src={isGalleryExpanded2 ? "/images/uparrow.png" : "/images/down-arrow-svgrepo-com (1).svg"}
              alt="Toggle Arrow"
              width={30}
              height={20}
            />
          </div>
        </div>

        {/* Gallery Section */}
        {isGalleryExpanded2 && (
          <div className="relative max-w-[1450px] w-full mx-auto py-8 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/17-1.jpg")' }}>
            <div className="absolute inset-0 bg-white bg-opacity-50"></div>

            {/* Grid Layout - Now 3 Images Per Row */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 z-10">
              {[
                "/images/1-6.webp",
                "/images/2-8.webp",
                "/images/3-4.WEBP",
                "/images/4-4.WEBP",
              ].map((src, index) => (
                <div key={index} className="w-full md:w-[300px] lg:w-[400px] h-auto bg-white shadow-lg overflow-hidden">
                  <Image src={src} alt={`Gallery Image ${index + 1}`} width={625} height={416.67} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
