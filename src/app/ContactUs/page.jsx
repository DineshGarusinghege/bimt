'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/ContactUs.scss'
// import ContactForm from '../componets/ContactForm';
import '../styles/Global.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {

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


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comment: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to validate email format
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.comment) {
            toast.error("All fields are required!", { position: "top-right", autoClose: 3000 });
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Invalid email format!", { position: "top-right", autoClose: 3000 });
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Your message has been sent successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                });

                // Reset the form after successful submission
                setFormData({ firstName: "", lastName: "", phone: "", email: "", comment: "" });
            } else {
                toast.error(data.message || "Something went wrong. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("⚠️ Network error. Please try again later.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <>
            <head>
                <title>Contact Us - BIMT Campus</title>
                <meta
                    name="description"
                    content="Get expert support at BIMT Campus. Contact us today!"
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}


            {/* Hero Section */}
            <div>
                {/* Contact Us hero section */}
                <div
                    className="relative w-full bg-cover bg-center heroSectionHeight"
                    style={{
                        backgroundImage: "url('/images/Contact-Us-banner_page-0001-1-scaled.jpg')",
                        objectPosition: 'center center'
                    }}
                >

                    <div className='relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain'>
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
                                        <Link
                                            href="/"
                                            className="hover:underline hover:text-blue-500 breadcrumbFont font-avenir"
                                        >
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
                                                fill="black"
                                            />
                                        </svg>
                                    </span>

                                    <li>
                                        <Link
                                            href="/life-at-bimt"
                                            className="hover:underline hover:text-blue-500 breadcrumbFont font-avenir"
                                        >
                                            Connect with us
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
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    <li>
                                        <span
                                            className="text-gray-600 breadcrumbFont font-avenir"
                                        >
                                            Contact Us
                                        </span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                </div>
            </div>



            {/* Contact Form */}
            <div className="relative w-full px-4 sm:px-8 lg:px-16 py-[110px]">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#272A5D] to-[#F2295B]"></div>

                {/* Content */}
                <div className="relative z-10 max-w-[1450px] mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-[100px]">
                    {/* Left Side - Contact Form */}
                    <div className="flex flex-col gap-5">
                        {/* Title */}
                        <h2 className="text-white text-3xl sm:text-4xl font-bold capitalize">
                            Feel Free To Write
                        </h2>

                        {/* Contact Form */}
                        <form className="flex flex-col gap-6 sm:gap-6" onSubmit={handleSubmit}>
                            {/* Row 1 - First Name & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input name="firstName"
                                    value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" className="h-12 w-full px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold" />
                                <input name="lastName"
                                    value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="h-12 w-full px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold" />
                            </div>

                            {/* Row 2 - Phone & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input name="phone"
                                    value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className="h-12 w-full px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold" />
                                <input value={formData.email} onChange={handleChange}
                                    name="email" type="email" placeholder="Email" className="h-12 w-full px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold" />
                            </div>

                            {/* Message */}
                            <textarea name="comment"
                                value={formData.comment} onChange={handleChange} placeholder="Message" className="h-28 w-full px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold resize-none"></textarea>

                            {/* Submit Button */}
                            <button className="FeelFreeSubmit px-6 py-3 border border-blue-900 text-white rounded-lg font-semibold hover:text-white transition"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    borderRadius: '10px',
                                    border: '2px solid rgb(255, 255, 255)'
                                }}
                            >
                                <span>SEND</span>
                            </button>
                        </form>
                        <ToastContainer />
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="flex flex-col gap-10 pl-12 contactFormSecondSection">
                        <h2 className="text-white font-['Avenir LT STD'] text-[40px] font-bold capitalize">
                            Get In Touch With Us
                        </h2>

                        <p class="text-white font-['Work Sans'] font-normal text-[16px] mb-[-30px] mt-0 mr-0 ml-0">
                            We&#39;re dedicated to providing expert legal services tailored to your
                            needs. Whether you seek advice or have a specific inquiry, our
                            experienced team is ready to assist with professionalism and care.
                        </p>
                        <div className="flex flex-col gap-6 mt-4">

                            <div className="flex items-center gap-4">
                                {/* Animated Phone Icon */}
                                <div className="w-[65px] iconBg h-[65px] bg-white bg-opacity-20 flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-110">
                                    <svg
                                        aria-hidden="true"
                                        className="w-[34px] h-[34px] fill-white transition-transform duration-300 ease-in-out hover:animate-bounce"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                    </svg>
                                </div>

                                {/* Clickable Phone Number */}
                                <p className="text-white text-[16px] font-work-sans">
                                    Have any question? <br />
                                    <a
                                        href="tel:+94115332222"
                                        className="font-semibold text-white hover:text-[#272A5D] transition duration-300 ease-in-out"
                                    >
                                        +94 115 33 22 22
                                    </a>
                                </p>
                            </div>

                            {/* Email Section */}
                            <div className="flex items-center gap-4">
                                {/* Animated Email Icon */}
                                <div className="w-[65px] h-[65px] iconBg bg-white bg-opacity-20 flex items-center justify-center text-white  transition duration-300 ease-in-out hover:scale-110">
                                    <svg
                                        aria-hidden="true"
                                        className="w-[34px] h-[34px] fill-white transition-transform duration-300 ease-in-out hover:animate-bounce"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                                    </svg>
                                </div>

                                {/* Clickable Email */}
                                <p className="text-white text-[16px] font-work-sans">
                                    Write Email <br />
                                    <a
                                        href="mailto:info@bimt.lk"
                                        className="font-semibold text-white hover:text-[#272A5D] transition duration-300 ease-in-out"
                                    >
                                        info@bimt.lk
                                    </a>
                                </p>
                            </div>


                            {/* Address Section */}
                            <div className="flex items-center gap-4">
                                {/* Animated Location Icon */}
                                <div className="w-[65px] h-[65px] iconBg bg-white bg-opacity-20 flex items-center justify-center text-white transition duration-300 ease-in-out hover:scale-110">
                                    <svg
                                        aria-hidden="true"
                                        className="w-[34px] h-[34px] fill-white transition-transform duration-300 ease-in-out hover:animate-bounce"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
                                    </svg>
                                </div>

                                {/* Clickable Google Maps Address */}
                                <p className="text-white text-[16px] font-work-sans">
                                    Visit anytime <br />
                                    <a
                                        href="https://maps.app.goo.gl/WoGs5C6Dm2cpW13R7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-white hover:text-[#272A5D] transition duration-300 ease-in-out"
                                    >
                                        654, Galle Road, - 03, Sri Lana.
                                    </a>
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
            <section id="FAQ" className="max-w-[1450px] mx-auto section-about mt-[110px] mb-[110px] FAQSection">
                <h2 className="text-[#272A5D] font-work-sans text-[24px] sm:text-[28px] font-normal leading-normal mb-4 heading">
                    FAQs
                </h2>
                <h3 className="text-[#272A5D] font-avenir text-[36px] sm:text-[40px] font-semibold leading-[1.3] mb-6 subheading" style={{
                    paddingBottom: '40px'
                }}>
                    Find Answers to Your Questions
                </h3>

                <div>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#F0F4F7] mb-4 shadow overflow-hidden transition-all duration-300 
                        hover:bg-[#A83585] hover:text-white 
                        active:bg-[#272A5D] active:text-white`}
                        >
                            <div
                                className={`relative flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 group
        ${activeIndex === index ? "bg-[#272A5D] text-white" : "bg-[#F0F4F7] text-[#272A5D] hover:bg-[#A83585] hover:text-white"}`}
                                onClick={() => toggleAnswer(index)}
                            >
                                {/* Question Text */}
                                <h3
                                    className={`text-lg font-medium transition-colors duration-300 
        ${activeIndex === index ? "text-white" : "text-[#272A5D]"} 
        group-hover:text-white`}
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
                                            className="w-6 h-6 transition-transform duration-300 rotate-180 
                stroke-white group-hover:stroke-white"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            className="w-6 h-6 transition-transform duration-300 
                stroke-[#272A5D] group-hover:stroke-white"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
                                        </svg>
                                    )}
                                </span>
                            </div>


                            {/* Answer Section */}
                            {activeIndex === index && (
                                <div className="relative p-4 text-sm flex justify-between items-center text-white bg-[#272A5D]">
                                    {index === 9 ? (
                                        <div className="relative p-4 text-sm flex justify-left items-left">
                                            <p>For other queries, please reach out to our team.</p>
                                            <Link href={'/ContactUs'}>
                                                <button
                                                    className="AboutUsBtn1"
                                                    onClick={() => alert("Contacting Support")}
                                                >
                                                    <span> Contact Us</span>
                                                </button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <p>{item.answer}</p>
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
