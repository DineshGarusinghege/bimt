// pages/index.js
"use client";

import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';
const Testimonials = () => {

    const testimonials = [
        {
            name: "MOHAMED IMRAN",
            role: "ACCOUNTANT",
            qualifications: "BBA in Acc, AFA (UK). MIPA (Aus), MAAT (SL)",
            location: "The Best Trading and Contracting Co. Doha, Qatar",
            message:
                '“I had a great experience at BIMT Colombo Campus. The lecturers were top Quality and their teaching methos were really benificial. It has given me a real interest in learning and aquiring the neccessary skills. I would Highly recommend this institute to anyone wanting to expand their Carrier in Accounting.” ',
            image: "/images/profile-pic (4).png",
        },
        {
            name: "AZEEM AJMIL ",
            role: "GENERAL ACCOUNTANT",
            qualifications: "BBA IN ACC, AFA (UK), MIPA (AUS), ACPM (SL)",
            location: "Katara Club - Doha, Qatar",
            message:
                '“The countinuos support, help, advices and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate. I highly recommend the brand BIMT Campus for the betterment of your future!” ',
            image: "/images/profile-pic (3).png",

        },
        {
            name: "M.N. AFRAS",
            role: "CHIEF ACCOUNTANT",
            qualifications: "BBA in Acc, AFA (UK), MIPA (Aus), MAAT (SL)",
            location: "Bandary International Group - Doha, Qatar",
            message:
                '“The demand for having a degree in the global market specially in the Middle East, persuaded me to choose BIMT Colombo Campus for BBA in Accounting programme through whih, not only me but many of my friends also have secured reputd employment in the gulf region.” ',
            image: "/images/profile-pic (6).png",

        },
        {
            name: "ASWER THAMEEM",
            role: "SITE ACCOUNTAN",
            qualifications: "BBA in Acc, AFA (UK), MIPA (AUS), CMgr (UK)",
            location: "Riyadh Metro, KSA.",
            message:
                '“I choose to study my BBA in Accounting Degree at BIMT Campus where my skills are discovered. So I am happy that I studied at BIMT Campus.” ',
            image: "/images/profile-pic (5).png",

        },
        {
            name: "Mohamed Zuhair",
            role: "ACCOUNTANT",
            qualifications: "BBA in Acc, AFA (UK), MIPA (AUS), MAAT",
            location: "AI Sahlawi & Co Law Firm",
            message:
                '“I am very thankfu to BIMT Colombo Campus for providing me the opportunity to achieve my dream job. It has saved me so mush time and allows me to see a good career in my life. The beautiful campus, good environment, friendly staff and awesome teachers helped us make great memories and build friendship for a lifetime.” ',
            image: "/images/profile-pic.png",

        },
        {
            name: "MOHAMED FASLAN",
            role: "SENIOR AUDITOR",
            qualifications: "BBA in Acc, AFA (UK), MIPA (Aus), MAAT (SL)",
            location: "Saudi Arabia",
            message:
                '“Studying at BIMT Campus has been a great investment in my career. In a world which has plenty of options for students to choose their courses and programmes, I feel blessed and lucky for choosing BIMT for my degree programme. I highly recommend the brand BIMT Campus for those individuals who are keen to enhance their values in this fast paced world.” ',
            image: "/images/profile-pic (2).png",

        },
        {
            name: "FAYAS FAHIM",
            role: "ACCOUNTING COUNSULTANT",
            qualifications: "BBA in Acc, AFA (UK), MIPA (Aus)",
            location: "Alchemist Accounting - Doha, Qatar",
            message:
                '“Studying at BIMT Colombo Campus has been a great investment in my career. I feel blessed and lucky for choosing BIMT for my degree programme. I must highly recommend the brand BIMT Colombo Campus for those individuals who are keen to enhance their values fast paced world.” ',
            image: "/images/profile-pic (7).png",

        },
    ];

    return (
        <>

            <head>
                <title>Testimonials | BIMT Campus</title>
                <meta
                    name="description"
                    content="Discover inspiring testimonials from students, alumni, and partners who share their experiences at BIMT Campus. Their stories reflect our commitment to academic excellence, personal growth, and shaping successful futures."
                />
            </head>

            <MainHeader />
            {/* <AnnounsmentBar /> */}

            <div className="relative pb-[90px]">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
                    style={{
                        backgroundImage: "url('/images/bgimgqa.jpg')",
                    }}
                ></div>

                {/* Section Content */}
                <div className="relative inset-0 bg-black">
                    {/* Breadcrumb Section */}
                    <div
                        className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full"
                        style={{
                            top: "50px",
                            left: "300px",
                        }}
                    >
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
                </div>


                <div className="w-full pt-[110px]">
                    <h2
                        className="text-center text-2xl md:text-3xl font-bold text-[#272A5D] mb-8"
                        style={{ fontSize: '64px', fontWeight: '400', lineHeight: '65px' }}
                    >
                        Hear What Our Students Say <br />About BIMT
                    </h2>
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-8 gap-[100px] max-w-[1200px] mx-auto">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="relative bg-white shadow-lg rounded-[50px] p-6 w-full max-w-[600px] mx-auto flex flex-col items-center text-center mt-[40px]"
                                style={{
                                    flexShrink: '0',
                                    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
                                    paddingBottom: '40px',
                                    paddingLeft: '62px',
                                    paddingRight: '62px',
                                    paddingTop: '20px'
                                }}
                            >
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
                                <div className="text-left" style={{paddingLeft:'120px'}}>
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
                                            color:'#5A5A5A',
                                            fontFamily:'Work Sans',
                                            fontSize:'12px',
                                            fontStyle:'normal'
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
                                        color:'#5A5A5A',
                                        fontFamily:'Work Sans',
                                        fontSize:'12px',
                                        fontStyle:'normal'
                                    }}
                                    >{testimonial.location}</p>
                                </div>

                                {/* Message */}
                                <div className="mt-[10px]">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {testimonial.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    );
};

export default Testimonials;
