'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/ContactUs.scss'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

            {/* Here section */}
            <div className="relative bg-cover bg-center h-[480px] z-0" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
                {/* Overlay for better text visibility */}
                {/* <div className="absolute inset-0 bg-[#272A5DB2] opacity-[70%] z-10"></div> */}

                <div className='relative max-w-[1430px] mx-auto top-[55px]'>
                    {/* Breadcrumb Section */}
                    <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20">
                        <nav
                            className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700"
                            style={{
                                display: 'inline-flex',
                                padding: '5px 25px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                background: '#ffffff45',
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link
                                        href="/"
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
                                        href="/CampusLife"
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
                                        Campus Life
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
                                        Contact Us
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

            </div>


            <div className="relative w-full pb-[100px]">
                {/* Background Image with Opacity */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/bgimgqa.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto w-[1300px] pt-[110px] flex flex-col lg:flex-row gap-10">
                    {/* Left Side - Contact Form */}
                    <div className="w-[834px] ">
                        {/* Title */}
                        <h2 className=" font-bold text-[40px] leading-none font-['Avenir LT Std'] mb-8 gettingToush">
                            Feel free to write
                        </h2>

                        {/* Contact Form */}
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            {/* Row 1 - First Name & Last Name */}
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="flex w-[307px] px-[20px] py-[15px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 'normal'
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="flex w-[307px] px-[20px] py-[15px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 'normal'
                                    }}
                                />
                            </div>

                            {/* Row 2 - Phone & Email */}
                            <div className="flex gap-6">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="flex w-[307px] px-[20px] py-[15px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 'normal'
                                    }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex w-[307px] px-[20px] py-[15px] border border-gray-300 text-sm"
                                    style={{
                                        color: '#5A5A5A',
                                        fontFamily: "Work Sans",
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 'normal'
                                    }}
                                />
                            </div>

                            {/* Message */}

                            <textarea
                                placeholder="Message"
                                className="flex h-[150px] w-[640px] px-[20px] py-[15px] border border-gray-300 text-sm resize-none"
                                style={{
                                    color: '#5A5A5A',
                                    fontFamily: "Work Sans",
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: 'normal'
                                }}
                            ></textarea>
                            {/* Buttons */}
                            <div className="flex gap-6 justify-start">
                                <button className="formbtn">
                                    SEND
                                </button>
                                <button className="formbtn">
                                    RESET
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="w-[541px]">
                        <h2 className="text-[#272A5D] font-bold text-[40px] leading-none font-['Avenir LT Std'] mb-6">
                            Get in touch with us
                        </h2>
                        <p className="text-[#5A5A5A] text-justify font-normal text-[16px] leading-[26px] font-['Work Sans'] mb-8">
                            We&#39;re dedicated to providing expert legal services tailored to your
                            needs. Whether you seek advice or have a specific inquiry, our
                            experienced team is ready to assist with professionalism and care.
                        </p>
                        <div className="flex flex-col gap-6">
                            {/* Contact Details */}
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                        <g clip-path="url(#clip0_593_3911)">
                                            <rect width="34.2727" height="34.2727" transform="translate(0.363525 0.367188)" fill="#272A5D" />
                                            <path d="M7.34721 23.1494C10.7276 27.1902 14.7969 30.3718 19.4414 32.623C21.2097 33.461 23.5746 34.4553 26.2093 34.6257C26.3726 34.6328 26.5289 34.6399 26.6922 34.6399C28.4605 34.6399 29.8808 34.0292 31.0384 32.7722C31.0455 32.7651 31.0597 32.7509 31.0668 32.7367C31.4787 32.2395 31.9474 31.7921 32.4375 31.3163C32.7712 30.9967 33.1121 30.663 33.4388 30.3221C34.9515 28.7455 34.9515 26.7428 33.4246 25.216L29.1565 20.9479C28.4321 20.1951 27.5657 19.7974 26.6567 19.7974C25.7477 19.7974 24.8742 20.1951 24.1285 20.9408L21.5861 23.4832C21.3517 23.3482 21.1103 23.2275 20.883 23.1139C20.5989 22.9718 20.3362 22.8369 20.1018 22.6878C17.7867 21.2177 15.6846 19.3003 13.6748 16.836C12.6593 15.5506 11.9775 14.4711 11.5017 13.3704C12.1693 12.7667 12.7942 12.1347 13.3978 11.5168C13.6109 11.2967 13.831 11.0765 14.0512 10.8564C14.8182 10.0894 15.2301 9.20168 15.2301 8.29977C15.2301 7.39785 14.8253 6.51014 14.0512 5.74316L11.9349 3.62686C11.6863 3.3783 11.452 3.13684 11.2105 2.88829C10.7418 2.40537 10.2518 1.90825 9.76888 1.46085C9.03741 0.743577 8.17811 0.367188 7.26909 0.367188C6.36718 0.367188 5.50077 0.743577 4.74089 1.46795L2.08486 4.12398C1.11903 5.08981 0.572202 6.26159 0.458575 7.61801C0.323643 9.31531 0.636117 11.1191 1.44571 13.2994C2.6885 16.6727 4.56335 19.8045 7.34721 23.1494ZM2.19139 7.76714C2.27661 6.82262 2.63879 6.03433 3.32055 5.35257L5.96238 2.71074C6.37428 2.31305 6.82879 2.1071 7.26909 2.1071C7.70229 2.1071 8.1426 2.31305 8.54739 2.72495C9.02321 3.16525 9.47061 3.62686 9.95353 4.11688C10.195 4.36544 10.4435 4.61399 10.6921 4.86966L12.8084 6.98596C13.2487 7.42626 13.476 7.87367 13.476 8.31397C13.476 8.75428 13.2487 9.20168 12.8084 9.64199C12.5883 9.86214 12.3681 10.0894 12.1479 10.3095C11.4875 10.9771 10.8696 11.6092 10.1879 12.2128C10.1737 12.227 10.1666 12.2341 10.1524 12.2483C9.56293 12.8377 9.65526 13.3988 9.79729 13.8249C9.80439 13.8462 9.81149 13.8604 9.81859 13.8817C10.3654 15.1955 11.1253 16.4454 12.3113 17.9368C14.4418 20.5644 16.6859 22.6026 19.1573 24.172C19.4627 24.3709 19.7894 24.5271 20.0947 24.6834C20.3788 24.8254 20.6416 24.9603 20.8759 25.1095C20.9043 25.1237 20.9256 25.1379 20.954 25.1521C21.1884 25.2728 21.4156 25.3296 21.6429 25.3296C22.211 25.3296 22.5803 24.9674 22.701 24.8467L25.3571 22.1907C25.769 21.7788 26.2164 21.5586 26.6567 21.5586C27.1964 21.5586 27.6367 21.8924 27.9137 22.1907L32.196 26.4659C33.0482 27.3181 33.0411 28.2413 32.1747 29.1432C31.8764 29.4628 31.5639 29.7682 31.2302 30.0877C30.7331 30.5707 30.2146 31.0678 29.7459 31.6288C28.9292 32.5094 27.9563 32.9213 26.6993 32.9213C26.5786 32.9213 26.4507 32.9142 26.33 32.9071C24.0007 32.758 21.8346 31.849 20.2084 31.0749C15.7911 28.9373 11.9136 25.9048 8.69653 22.0557C6.0476 18.8671 4.26508 15.8986 3.0862 12.717C2.35472 10.7641 2.07776 9.19458 2.19139 7.76714Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_593_3911">
                                                <rect width="34.2727" height="34.2727" fill="white" transform="translate(0.363525 0.367188)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-[#272A5D] font-normal text-[16px] font-['Work Sans']">
                                    Have any question? <br />
                                    <span className="font-semibold">+94 115 33 22 22</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <rect width="40.1818" height="40.1818" transform="translate(0.818115 0.820312)" fill="#272A5D" />
                                        <path d="M34.6294 32.2617H7.18873C6.29679 32.2607 5.44168 31.9059 4.81102 31.2752C4.18036 30.6444 3.82564 29.7893 3.82471 28.8974V11.9503C3.82564 11.0583 4.18036 10.2032 4.81102 9.57248C5.44168 8.94175 6.29679 8.58696 7.18873 8.58594H34.6294C35.5213 8.58696 36.3764 8.94175 37.0071 9.57248C37.6377 10.2032 37.9925 11.0583 37.9934 11.9503V28.8974C37.9925 29.7893 37.6377 30.6444 37.0071 31.2752C36.3764 31.9059 35.5213 32.2607 34.6294 32.2617ZM7.18873 9.87176C6.63768 9.87235 6.10938 10.0915 5.71976 10.4812C5.33014 10.8709 5.11104 11.3992 5.11053 11.9503V28.8974C5.11104 29.4484 5.33014 29.9767 5.71976 30.3664C6.10938 30.7561 6.63768 30.9753 7.18873 30.9759H34.6294C35.1804 30.9753 35.7087 30.7561 36.0983 30.3664C36.488 29.9767 36.7071 29.4484 36.7076 28.8974V11.9503C36.7071 11.3992 36.488 10.8709 36.0983 10.4812C35.7087 10.0915 35.1804 9.87235 34.6294 9.87176H7.18873Z" fill="white" />
                                        <path d="M20.909 24.2086C20.7523 24.2087 20.6009 24.1515 20.4834 24.0479L4.98926 10.3706L5.84015 9.40625L20.909 22.7093L35.9784 9.40786L36.8293 10.3722L21.3352 24.0495C21.2174 24.1528 21.0657 24.2095 20.909 24.2086Z" fill="white" />
                                        <path d="M4.63965 30.2422L15.0484 18.3825L16.0154 19.2311L5.60658 31.0908L4.63965 30.2422Z" fill="white" />
                                        <path d="M25.8354 19.2188L26.8024 18.3701L37.2114 30.2301L36.2444 31.0787L25.8354 19.2188Z" fill="white" />
                                    </svg>
                                </div>
                                <p className="text-[#272A5D] font-normal text-[16px] font-['Work Sans']">
                                    Write Email <br />
                                    <span className="font-semibold">info@bimt.lk</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <g clip-path="url(#clip0_593_3931)">
                                            <rect width="40.1818" height="40.1818" transform="translate(0.818115 0.820312)" fill="#272A5D" />
                                            <path d="M20.909 0.820312C12.7242 0.820312 6.06567 7.47886 6.06567 15.6637C6.06567 18.3582 7.2741 21.2561 7.32474 21.3783C7.71503 22.3047 8.48514 23.7437 9.04045 24.5871L19.2178 40.0076C19.6342 40.6398 20.2507 41.0021 20.909 41.0021C21.5674 41.0021 22.1838 40.6398 22.6003 40.0085L32.7785 24.5871C33.3346 23.7437 34.1039 22.3047 34.4942 21.3783C34.5448 21.257 35.7524 18.359 35.7524 15.6637C35.7524 7.47886 29.0938 0.820312 20.909 0.820312ZM32.8841 20.7008C32.5357 21.5311 31.8189 22.8697 31.3203 23.6258L21.1421 39.0472C20.9413 39.3519 20.8776 39.3519 20.6768 39.0472L10.4986 23.6258C10 22.8697 9.28319 21.5303 8.9348 20.6999C8.91996 20.6641 7.81195 17.9967 7.81195 15.6637C7.81195 8.44194 13.6873 2.56659 20.909 2.56659C28.1307 2.56659 34.0061 8.44194 34.0061 15.6637C34.0061 18.0002 32.8955 20.6746 32.8841 20.7008Z" fill="white" />
                                            <path d="M20.909 7.80469C16.5756 7.80469 13.0508 11.3304 13.0508 15.6629C13.0508 19.9954 16.5756 23.5212 20.909 23.5212C25.2424 23.5212 28.7673 19.9954 28.7673 15.6629C28.7673 11.3304 25.2424 7.80469 20.909 7.80469ZM20.909 21.7749C17.5396 21.7749 14.7971 19.0332 14.7971 15.6629C14.7971 12.2926 17.5396 9.55096 20.909 9.55096C24.2785 9.55096 27.021 12.2926 27.021 15.6629C27.021 19.0332 24.2785 21.7749 20.909 21.7749Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_593_3931">
                                                <rect width="40.1818" height="40.1818" fill="white" transform="translate(0.818115 0.820312)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-[#272A5D] font-normal text-[16px] font-['Work Sans']">
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



            <div className="w-full h-[500px] flex justify-center items-center mt-[110px]">
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



            <section id="FAQ" className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 section-about mt-[110px] mb-[110px]">
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
                            className={`relative bg-[#F0F4F7] mb-4 shadow overflow-hidden transition-all duration-300`}
                        >
                            {/* Question Header */}
                            <div
                                className="relative flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                {/* Question Background Layer */}
                                {/* <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/images/bgimgqa.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0.5, // Question opacity
                                        zIndex: -1, // Behind content
                                    }}
                                ></div> */}

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
