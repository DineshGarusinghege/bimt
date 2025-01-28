'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/ContactUs.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ContactForm from '../componets/ContactForm';

export default function ContactUs() {

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

    const faqData = [
        {
            question: "1. What if I have a query ?",
            answer: "Each of our student is provided with their own course advisor. You will be able to communicate with them via telephone, email or walk in to our campus. There is also the option to contact our support team.",
        },
        {
            question: "2. How is the program delivered ?",
            answer: "We provide physical and live online lectures Physical classes are based in a classroom. Online classes are taught through live session which you will attend online, this gives you the classroom experience, but means you can attend class from anywhere. You can chat to the lecturer and your fellow students, and will take part in a discussion and Q&A session during every session.",
        },
        {
            question: "3. Where is BIMT located ?",
            answer: "We are located at No 654 Galle Road Colombo 03.",
        },
        {
            question: "4. How can I pay ?",
            answer: "BIMT Campus accepts payment via credit or debit card and bank transfer. For more information, feel free to speak to one of our course advisors who can find a method of payment to suit you.",
        },
        {
            question: "5. Are there any discount ?",
            answer: "To find out please contact our customer Support Team – Contact us.",
        },
        {
            question: "6. How I receive course material ?",
            answer: "Yes, you will receive material from the relevant lecturer and you can download from the portal.",
        },
        {
            question: "7. How do I attend the online session ?",
            answer: "You will receive a confirmation email, with a link to the Attend Class via Microsoft Teams. Simply click the link and join 10 minutes before class begins.",
        },
        {
            question: "8. What if I missed an online session? Will I be able to catch up ?",
            answer: "No problem. We record every online class and upload them to the LMS. You will have access to these recordings for as long as the duration of your course.",
        },
        {
            question: "9. Are there Exams or Assignment ?",
            answer: "Yes, upon course completion, mandatory Mock & Final exam / assignments will be made.",
        },
        {
            question: "10. Other queries ?",
            answer: {
                text: "For other queries, please reach out to our team.",
                buttonLabel: "Contact Us",
            },
        },
    ];


    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        // If the clicked index is already active, close it; otherwise, open it
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <head>
                <title>Contact Us | BIMT Campus</title>
                <meta
                    name="description"
                    content="Have questions or need assistance? Contact BIMT Campus today! Our dedicated team is ready to provide you with the information and support you need to take the next step in your educational journey. Reach out to us and let's connect!"
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}


            {/* Hero Section */}
            <div>
                {/* Contact Us hero section */}
                <div
                    className="relative w-full h-[70vh] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/Contact-Us-banner_page-0001-1-scaled.jpg')",
                        objectPosition: 'center center'
                    }}
                >

                    <div className='relative max-w-[1450px] mx-auto top-[55px] px-10 py-50'>
                        {/* Breadcrumb Section */}
                        <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20 ">
                            <nav
                                className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-600"
                                style={{
                                    display: 'inline-flex',
                                    padding: '5px 25px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: '#000000',
                                }}
                            >
                                <ol className="flex space-x-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:underline hover:text-blue-500"
                                            style={{
                                                color: 'gray',
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
                                            href="/AboutUs"
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
                                            About Us
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
                                            Our Journey
                                        </span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                </div>
            </div>


            {/* Contact Form */}
            <div className="relative w-full">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        background: 'linear-gradient(48deg, #272A5D 0%, #F2295B 100%)',
                    }}
                >
                    {/* <div className="absolute inset-0 bg-white opacity-50"></div> */}
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto w-[1450px] flex flex-col lg:flex-row"
                    style={{
                        padding: '100px 10px',
                        gap: '100px',
                    }}
                >
                    {/* Left Side - Contact Form */}
                    <div className="flex flex-col w-1/2 gap-5">
                        {/* Title */}
                        <h2
                            className="text-white font-['Avenir LT Std'] text-[40px] font-bold capitalize mb-0 p-0"
                        >
                            Feel Free To Write
                        </h2>


                        {/* Contact Form */}
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            {/* Row 1 - First Name & Last Name */}
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px'
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px'
                                    }}
                                />
                            </div>

                            {/* Row 2 - Phone & Email */}
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px'
                                    }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '25px'
                                    }}
                                />
                            </div>

                            {/* Message */}

                            <textarea
                                placeholder="Message"
                                className="flex h-[110px] w-[673.21px] px-[14px] py-[5px] border border-gray-300 text-sm resize-none"
                                style={{
                                    color: '#5A5A5A',
                                    fontFamily: "Work Sans",
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '25px'
                                }}
                            ></textarea>
                            {/* Buttons */}
                            <div className="flex h-[51.6px] w-[673.21px] gap-6 justify-center"
                            >
                                <button
                                    className="h-[51.6px] w-[673.21px] border border-white rounded-[10px] font-['Work Sans'] text-white font-semibold text-[20px] leading-[20px] transition duration-300 ease-in-out
  hover:bg-white hover:text-[#272A5D] active:bg-white active:text-[#272A5D]"
                                >
                                    SEND
                                </button>

                            </div>
                        </form>
                        <ToastContainer />
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="flex flex-col w-1/2 gap-10 pl-12">
                        <h2 className="text-white font-['Avenir LT STD'] text-[40px] font-bold capitalize">
                            Get In Touch With Us
                        </h2>

                        <p class="text-white font-['Work Sans'] font-normal text-[16px] mb-[-30px] mt-0 mr-0 ml-0">
                            We&#39;re dedicated to providing expert legal services tailored to your
                            needs. Whether you seek advice or have a specific inquiry, our
                            experienced team is ready to assist with professionalism and care.
                        </p>
                        <div className="flex flex-col gap-6 mt-4">
                            {/* Contact Details */}
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        fill="#ffffff"
                                    ><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                </div>
                                <p className="text-[#ffffff] font-normal text-[16px] font-['Work Sans']">
                                    Have any question? <br />
                                    <span className="font-semibold">+94 115 33 22 22</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg aria-hidden="true" class="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        fill="#ffffff"
                                    ><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                                </div>
                                <p className="text-[#ffffff] font-normal text-[16px] font-['Work Sans']">
                                    Write Email <br />
                                    <span className="font-semibold">info@bimt.lk</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-location-arrow" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        fill="#ffffff"
                                    ><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
                                </div>
                                <p className="text-[#ffffff] font-normal text-[16px] font-['Work Sans']">
                                    Visit anytime <br />
                                    <span className="font-semibold">
                                        654 Colombo - Galle Main Rd, Colombo 00300
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Google Map */}
            <div className="w-full flex justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.97484105639!2d79.8361202!3d6.9009607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f181d684c1%3A0xc78c1a2c16c983c3!2sBIMT%20Campus!5e0!3m2!1sen!2slk!4v1733485696165!5m2!1sen!2slk"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-lg w-full"
                ></iframe>
            </div>


            {/* FAQS */}
            <section id="FAQ" className="max-w-[1450px] mx-auto section-about mt-[110px] mb-[110px]">
                <h2 className="text-[#272A5D] font-work-sans text-[24px] sm:text-[28px] font-normal leading-normal mb-4 heading">
                    FAQs
                </h2>
                <h3 className="text-[#272A5D] font-avenir text-[36px] sm:text-[40px] font-semibold leading-[1.3] mb-6 subheading">
                    Find Answers to Your Questions
                </h3>
                <div>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                          

                            className={`relative bg-[#F0F4F7] mb-4 shadow overflow-hidden transition-all duration-300 hover:bg-[#A83585] active:bg-[#A83585]`}
                        >
                            {/* Question Header */}
                            {/* t */}
                            <div
                                className="relative flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                {/* Question Background Layer */}
                              
                                {/* Question Text */}
                                <h3
                                    className="text-lg font-medium"
                                    style={{
                                        color: "#272A5D", // Text color for the question
                                    }}
                                >
                                    {item.question}
                                </h3>
                                <span>
                                    {activeIndex === index ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#272A5D" // Arrow color
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 14l-7-7-7 7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="#272A5D" // Arrow color
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 10l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>

                            {/* Answer Section */}
                            {activeIndex === index && (
                                <div
                                    className="relative p-4 text-sm flex justify-between items-center"
                                    style={{
                                        color: "#000", // Text color for the answer
                                    }}
                                >
                                    {/* Answer Background Layer */}
                                    {/* <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: "url('/images/bgimgqa.jpg')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            opacity: 0.5, // Answer background opacity
                                            zIndex: -1, // Place behind the content
                                        }}
                                    ></div> */}

                                    {/* Render Text and Button for Question 10 */}
                                    {index === 9 ? ( // Check if it's question 10
                                        <div className='relative p-4 text-sm flex justify-left items-left'>
                                            <p>
                                                For other queries, please reach out to our team.
                                            </p>
                                            <button
                                                className="ml-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600"
                                                style={{
                                                    display: 'flex',
                                                    height: '56px',
                                                    width: '200px',
                                                    padding: '0px 10px',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    borderRadius: '10px',
                                                    border: '2px solid #272A5D',
                                                    background: '#272A5D'
                                                }}
                                                onClick={() => alert("Contacting Support")}
                                            >
                                                Contact Us
                                            </button>
                                        </div>
                                    ) : (
                                        <p>{item.answer}</p> // Render regular answer for other questions
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </section>

        </>
    );
}
