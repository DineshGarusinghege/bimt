// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import '../styles/Global.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConnectwithUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };



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

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];








    const [activeButton, setActiveButton] = useState("Button1");

    const sectionContent = {
        Button1: {
            title: "Requirements",
            aboutTitle: "About This Position",
            description:
                "This position involves guiding and supporting individuals to achieve their goals effectively.",
            list: [
                "Excellent communication skills.",
                "Ability to work under pressure.",
                "Good interpersonal skills.",
                "Team-oriented mindset.",
            ],
        },
        Button2: {
            title: "Requirements",
            aboutTitle: "About This Position",
            description:
                "This role requires planning and executing strategies to drive organizational success.",
            list: [
                "Strong analytical skills.",
                "Experience in marketing or sales.",
                "Ability to create and execute campaigns.",
                "Excellent project management skills.",
            ],
        },
        Button3: {
            title: "Requirements",
            aboutTitle: "About This Position",
            description:
                "A leadership position focused on mentoring and delivering results through expertise.",
            list: [
                "Expert knowledge in the field.",
                "Proven leadership experience.",
                "Strong problem-solving abilities.",
                "Commitment to continuous learning.",
            ],
        },
    };

    const activeContent = sectionContent[activeButton];
    return (
        <>

            <head>
                <title>Career at BIMT | BIMT Campus</title>
                <meta
                    name="description"
                    content="A career at BIMT Campus means being part of a dynamic and innovative educational institution committed to excellence. We offer a supportive environment, professional growth opportunities, and the chance to shape the future of education while working with a team of dedicated professionals."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}
            <div className="relative inset-0 bg-black bg-opacity-40">

                {/* Breadcrumb Section */}
                <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full"
                    style={{
                        top: '50px',
                        left: '300px'
                    }}

                >
                    <nav className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
                        style={{ display: 'inline-flex', padding: '5px 25px', justifyContent: 'center', alignItems: 'center', gap: '10px', background: "#ffffff45" }}
                    >
                        <ol className="flex space-x-2">
                            <li>
                                <Link href="/" className="hover:underline hover:text-blue-500"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <span className="text-gray-400 pt-[4px]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="black" />
                            </svg></span>
                            <li>
                                <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    Connect with us
                                </Link>
                            </li>
                            <span className="text-gray-400 pt-[4px]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z" fill="black" />
                            </svg></span>
                            <li>
                                <span className="text-gray-600"
                                    style={{
                                        color: '#000',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >Career at BIMT</span>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>


            <div className="flex flex-col items-center justify-content mt-[110px] mx-auto max-w-[1300px]">
                {/* Image Section */}
                <div
                    className="w-[1038px] h-[403px] flex-shrink-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/7ce1312fe28583fa496bb8e4065124f6.jpeg')",
                    }}
                ></div>

                {/* Below Layout Section */}
                <div className="flex justify-center items-center gap-[125px] bg-white shadow-md p-[30px_25px] mb-[0px]">
                    {/* Vacancies Title */}
                    <h2 className="text-[#272A5D] text-center font-bold text-[40px] leading-none font-['Avenir LT Std']">
                        Vacancies
                    </h2>

                    {/* Buttons */}
                    <div className="flex gap-[125px]">
                        {/* Button 1 - Student Counsellor */}
                        <button
                            className={`flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] 
                                ${activeButton === "Button1" ? "bg-[#272A5D] text-white border-[#272A5D]" : "bg-white text-black border-gray-300"}`}
                            onClick={() => setActiveButton("Button1")}
                        >
                            Student Counsellor
                        </button>

                        {/* Button 2 - Marketing Executive */}
                        <button
                            className={`flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] 
                                ${activeButton === "Button2" ? "bg-[#272A5D] text-white border-[#272A5D]" : "bg-white text-black border-gray-300"}`}
                            onClick={() => setActiveButton("Button2")}
                        >
                            Marketing Executive
                        </button>

                        {/* Button 3 - Senior Lecturer */}
                        <button
                            className={`flex w-[250px] h-[56px] justify-center items-center gap-[10px] rounded-[10px] border-[2px] 
                            ${activeButton === "Button3" ? "bg-[#272A5D] text-white border-[#272A5D]" : "bg-white text-black border-gray-300"}`}
                            onClick={() => setActiveButton("Button3")}
                        >
                            Senior Lecturer
                        </button>
                    </div>
                </div>
            </div>



            <div className="bg-white py-10 px-6 lg:px-16">
                <div className="max-w-[1498px] mx-auto py-10">
                    {/* First Section */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left Side */}
                        <div className="w-[917px]">
                            {/* Overview 1 */}
                            <h4 className="text-lg font-bold text-gray-600"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Overview</h4>
                            <h2 className="text-2xl font-bold mt-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >{activeContent.title}</h2>
                            <ul className="list-disc list-inside mt-4 text-gray-700 leading-relaxed"
                                style={{
                                    color: '#5A5A5A',
                                    textAlign: "justify",
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                {activeContent.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            {/* Overview 2 */}
                            <h4 className="text-lg font-bold text-gray-600 mt-8"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Overview</h4>
                            <h2 className="text-2xl font-bold mt-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >{activeContent.aboutTitle}</h2>
                            <p className="text-gray-700 mt-4 leading-relaxed"
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                {activeContent.description}
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="relative w-[554px]">
                            {/* Large Image */}
                            <img
                                src="/images/3 (2) 1.png"
                                alt="Large"
                                className="absolute w-[462px] h-[308px] rounded-lg object-cover shadow-lg top-[57px] left-[40px] w-[259px]"
                            />
                            {/* Small Image */}
                            <img
                                src="/images/1 (1) 3.png"
                                alt="Small"
                                className="absolute top-[-20px] left-[-20px] w-[259px] h-[171px] rounded-lg object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#F5F9FC] py-12 px-4">
                <div className="max-w-[900px] mx-auto">
                    {/* Heading */}
                    <h2 className="text-center text-xl font-semibold text-[#272A5D] mb-8">
                        Leave your details here
                    </h2>

                    {/* Form */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg
                                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A10.965 10.965 0 0112 15c2.658 0 5.077.93 6.879 2.482M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>

                        {/* Email */}
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg
                                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email">
                                <path fill="#222" d="M53.42 52.82H10.58a8 8 0 0 1-8-8V19.18a8 8 0 0 1 8-8h42.84a8 8 0 0 1 8 8v25.64a8 8 0 0 1-8 8ZM10.58 13.18a6 6 0 0 0-6 6v25.64a6 6 0 0 0 6 6h42.84a6 6 0 0 0 6-6V19.18a6 6 0 0 0-6-6Z"></path>
                                <path fill="#222" d="M32 37.58A8 8 0 0 1 27.18 36L3.82 18.31A1 1 0 1 1 5 16.72l23.38 17.65a6 6 0 0 0 7.24 0L59 16.72a1 1 0 1 1 1.21 1.59L36.82 36A8 8 0 0 1 32 37.58Z"></path>
                                <path fill="#222" d="M4.17 48.64a1 1 0 0 1-.66-1.74L21.9 30.49A1 1 0 0 1 23.23 32L4.84 48.39a1 1 0 0 1-.67.25zm55.66 0a1 1 0 0 1-.67-.25L40.77 32a1 1 0 1 1 1.33-1.49L60.49 46.9a1 1 0 0 1 .08 1.41 1 1 0 0 1-.74.33z"></path>
                            </svg>
                        </div>

                        {/* Contact */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Your Contact no"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="phone">
                                <path fill="#546e7a" d="M48.648 53.335a1.5 1.5 0 0 1-.814-2.761A12.083 12.083 0 0 0 51.362 47c.863-1.311 1.159-2.372.882-3.156-.563-1.594-3.594-2.745-6.171-3.57a6.477 6.477 0 0 0-6.586 1.593l-.976.977a1.5 1.5 0 0 1-.627.376c-.67.2-4.347.864-11.155-5.945a1.5 1.5 0 1 1 2.121-2.125c4.466 4.467 7.08 5.095 7.94 5.168l.576-.576a9.478 9.478 0 0 1 9.621-2.33c3.365 1.078 7.041 2.474 8.085 5.428.607 1.715.2 3.668-1.2 5.8a15.1 15.1 0 0 1-4.411 4.46 1.5 1.5 0 0 1-.813.235zm-7.207 2.012c-6.866 0-14.749-3.97-21.783-11.005a1.5 1.5 0 1 1 2.121-2.121c6.638 6.639 14.27 10.412 20.39 10.108a1.48 1.48 0 0 1 1.574 1.422 1.5 1.5 0 0 1-1.422 1.574c-.291.014-.585.022-.88.022z"></path>
                                <path fill="#546e7a" d="M20.718 44.782a1.494 1.494 0 0 1-1.06-.44C12.09 36.775 8.008 27.989 8.739 20.84a14.232 14.232 0 0 1 6.617-10.71c2.137-1.4 4.09-1.807 5.8-1.2 2.954 1.044 4.351 4.72 5.428 8.085a9.471 9.471 0 0 1-2.33 9.621l-.591.592c.072.773.655 3.4 5.183 7.924a1.5 1.5 0 0 1-2.121 2.121c-6.808-6.807-6.146-10.486-5.945-11.154a1.484 1.484 0 0 1 .376-.627l.977-.977a6.482 6.482 0 0 0 1.593-6.585c-.825-2.578-1.976-5.609-3.569-6.172-.785-.277-1.847.019-3.157.881a11.18 11.18 0 0 0-5.28 8.509c-.641 6.26 3.118 14.139 10.055 21.075a1.5 1.5 0 0 1-1.061 2.561Z"></path>
                            </svg>
                        </div>

                        {/* LinkedIn */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Your LinkedIn Link"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm"
                            />
                            <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                                width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#546e7a" d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" /></svg>
                        </div>

                        {/* Few Words */}
                        <div className="relative w-full md:col-span-2">
                            <textarea
                                placeholder="Few words about you"
                                className="w-full px-10 py-3 border border-gray-300 rounded-md text-sm resize-none h-[100px]"
                            ></textarea>
                        </div>

                        {/* Upload Your CV */}
                        <div className="md:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                Upload Your CV
                            </label>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm cursor-pointer"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex md:col-span-2 gap-4 mt-4">
                            <button
                                type="submit"
                                className="CourseDetailsBtn px-6 py-3 bg-[#272A5D] text-white rounded-md text-sm font-semibold hover:bg-[#1F214A]"
                            >
                                <span>SUBMIT</span>
                            </button>
                        </div>
                    </form>
                </div>
                {/* Toast Container */}
                <ToastContainer />
            </div>



            <div
                className="bg-[#005F73] py-12 mt-[90px] mb-[110px] mx-auto"
               // Restrict section width to 1300pxs
               style={{display:'flex', justifyContent:'center' }}
            >
                <div className="flex flex-col lg:flex-row items-center gap-10 px-4"  style={{ maxWidth: "1300px" , }} >
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                        <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            height={438}
                            className="w-full h-auto"
                            style={{ height: "438px", objectFit: "contain" }}
                        />

                        <div
                            className="flex gap-2"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: "40px",
                            }}
                        >
                            {/* Pagination Dots */}
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
                                        }`}
                                    onClick={() => handleDotClick(index)}
                                    style={{ cursor: "pointer" }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="text-center lg:text-left lg:w-1/2 text-white">
                        <h4 className="text-sm font-semibold mb-2">Testimonials</h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            HEAR WHAT OUR TEAM SAY ABOUT BIMT
                        </h2>
                        <p className="text-lg italic mb-4">{currentTestimonial.text}</p>
                        <p className="text-sm">{currentTestimonial.name}</p>

                        <div className="flex justify-end items-center mt-12 gap-4">
                            {/* Arrows */}
                            <div className="flex items-center gap-4">
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#005F73]"
                                    onClick={handlePrev}
                                >
                                    &#x276E;
                                </button>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#005F73]"
                                    onClick={handleNext}
                                >
                                    &#x276F;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConnectwithUs;
