// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
import '../styles/Testimonials.scss'

const Testimonials = () => {

    const testimonials = [
        {
            name: "Mohamed Imran",
            role: "Account",
            qualifications: "BBA in Acc, AFA (UK). MIPA (Aus), MAAT (SL)",
            location: "The Best Trading and Contracting Co. Doha, Qatar",
            message: `"I had a great experience at BIMT Colombo Campus. The lecturers were top quality and their teaching methods were really beneficial. It has given me a real interest in learning and acquiring the necessary skills.\n\n I would highly recommend this institute to anyone wanting to expand their career in Accounting."`,
            image: "/images/profile-pic (4).png",
        },
        {
            name: "Azeem Ajmil",
            role: "General Accountant",
            qualifications: "BBA IN ACC, AFA (UK), MIPA (AUS), ACPM (SL)",
            location: "Katara Club - Doha, Qatar",
            message: `“The continuous support, help, advice, and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate. \n\n I highly recommend the brand BIMT Campus for the betterment of your future!”`,
            image: "/images/profile-pic (3).png",

        },
        {
            name: "M.N. Afras",
            role: "Chief Accountant",
            qualifications: "BBA in Acc, AFA (UK), MIPA (Aus), MAAT (SL)",
            location: "Bandary International Group - Doha, Qatar",
            message:
                `“The demand for having a degree in the global market, especially in the Middle East, persuaded me to choose BIMT Colombo Campus for BBA in Accounting programme through which, not only me but many of my friends also have secured reputed employment in the Gulf region.”`,
            image: "/images/profile-pic (6).png",

        },
        {
            name: "Aswer Thameem",
            role: "Site Accountan",
            qualifications: "BBA in Acc, AFA (UK), MIPA (AUS), CMgr (UK)",
            location: "Riyadh Metro, KSA.",
            message:
                '“I choose to study my BBA in Accounting Degree at BIMT Campus where my skills are discovered. \n\n So I am happy that I studied at BIMT Campus.” ',
            image: "/images/profile-pic (5).png",

        },
        {
            name: "Mohamed Zuhair",
            role: "Accountant",
            qualifications: "BBA in Acc, AFA (UK), MIPA (AUS), MAAT",
            location: "AI Sahlawi & Co Law Firm",
            message:
                '“I am very thankfu to BIMT Colombo Campus for providing me the opportunity to achieve my dream job. It has saved me so mush time and allows me to see a good career in my life. \n\n The beautiful campus, good environment, friendly staff and awesome teachers helped us make great memories and build friendship for a lifetime.” ',
            image: "/images/profile-pic.png",

        },
        {
            name: "Mohamed Faslan",
            role: "Senior Auditor",
            qualifications: "BBA in Acc, AFA (UK), MIPA (Aus), MAAT (SL)",
            location: "Saudi Arabia",
            message:
                '“Studying at BIMT Campus has been a great investment in my career. In a world which has plenty of options for students to choose their courses and programmes, I feel blessed and lucky for choosing BIMT for my degree programme.\n\n I highly recommend the brand BIMT Campus for those individuals who are keen to enhance their values in this fast paced world.” ',
            image: "/images/profile-pic (2).png",

        },
        // {
        //     name: "FAYAS FAHIM",
        //     role: "ACCOUNTING COUNSULTANT",
        //     qualifications: "BBA in Acc, AFA (UK), MIPA (Aus)",
        //     location: "Alchemist Accounting - Doha, Qatar",
        //     message:
        //         '“Studying at BIMT Colombo Campus has been a great investment in my career. I feel blessed and lucky for choosing BIMT for my degree programme. I must highly recommend the brand BIMT Colombo Campus for those individuals who are keen to enhance their values fast paced world.” ',
        //     image: "/images/profile-pic (7).png",

        // },
    ];

    return (
        <>

            <head>
                <title>Testimonials - BIMT Campus</title>
                <meta
                    name="description"
                    content="Explore inspiring BIMT Campus testimonials from students, alumni & partners, showcasing success, growth, and excellence."
                />
            </head>

            <MainHeader />


            <div className="relative w-full flex justify-center items-center">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    style={{ backgroundImage: "url('/images/bgimgqa.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                ></div>

                {/* Main Content */}
                <div className="relative flex flex-col items-center justify-center w-[1450px] mx-auto">

                    {/* Icon List Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12">
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
                                        className="hover:underline hover:text-blue-500"
                                        style={{
                                            color: "#000",
                                            fontFamily: "Avenir LT Std",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <span className="text-gray-400 pt-[4px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
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
                                        className="hover:underline hover:text-blue-500"
                                        style={{
                                            color: "#000",
                                            fontFamily: "Avenir LT Std",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        Connect with us
                                    </Link>
                                </li>
                                <span className="text-gray-400 pt-[4px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
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
                                        className="text-gray-600"
                                        style={{
                                            color: "#000",
                                            fontFamily: "Avenir LT Std",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        Testimonials
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Heading Section */}
                    <h2 className="relative text-center text-[#272A5D] font-avenir testimonialText">
                        Hear What Our Alumni Say <br></br> About BIMT
                    </h2>

                    {/* Testimonials Section */}
                    <div className="relative flex flex-col w-full max-w-[1450px] gap-[100px] px-2 pt-0 pb-[100px] mt-[50px]">
                        {/* Row containing two testimonials */}
                        <div className="flex flex-col md:flex-row justify-between w-full gap-[100px] testimonialContain">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-8 mx-auto testimonialGap">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="relative bg-white shadow-lg rounded-[50px] w-full max-w-[600px] mx-auto flex flex-col items-center text-center mt-[40px] testimonialGrid"
                                        style={{
                                            flexShrink: '0',
                                            boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
                                        }}
                                    >

                                        <div className="flex flex-col md:flex-row items-center lg:items-start">
                                            {/* Profile Picture */}
                                            <div
                                                className="absolute -top-[65px] -left-[-50px] w-[130px] h-[130px] rounded-full border-4 border-white shadow-lg bg-gray-300 bg-cover bg-center"
                                                style={{
                                                    backgroundImage: `url(${testimonial.image})`,
                                                    objectFit: 'cover',
                                                }}
                                            >
                                                <img src={testimonial.image} alt={`${testimonial.name}'s photo`} />
                                            </div>
                                            {/* Name and Details */}
                                            <div className="text-left testimonialsName">
                                                <h4 className="text-lg font-semibold"
                                                    style={{
                                                        color: '#5A5A5A',
                                                        fontFamily: 'Work Sans',
                                                        fontSize: '16px',
                                                        fontStyle: 'normal',
                                                        fontWeight: "600"
                                                    }}
                                                >{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500"
                                                    style={{
                                                        color: '#5A5A5A',
                                                        fontFamily: 'Work Sans',
                                                        fontSize: '12px',
                                                        fontStyle: 'normal'
                                                    }}
                                                >{testimonial.qualifications}</p>
                                                <p className="text-sm font-bold text-gray-700"
                                                    style={{
                                                        color: '#5A5A5A',
                                                        fontFamily: 'Work Sans',
                                                        fontSize: '16px',
                                                        fontStyle: 'normal',
                                                        fontWeight: "600"
                                                    }}
                                                >{testimonial.role}</p>
                                                <p className="text-sm text-gray-400 mb-4"
                                                    style={{
                                                        color: '#5A5A5A',
                                                        fontFamily: 'Work Sans',
                                                        fontSize: '12px',
                                                        fontStyle: 'normal'
                                                    }}
                                                >{testimonial.location}</p>
                                            </div>
                                        </div>
                                        {/* Message */}
                                        <div className="mt-[10px] text-gray-600 text-sm leading-relaxed text-left">
                                            {testimonial.message.split("\n\n").map((para, index) => (
                                                <p key={index} className={index > 0 ? "mt-3" : ""}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
