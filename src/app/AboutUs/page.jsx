'use client'
import React from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/AboutUs.scss'
import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";
import BreadcrumbSection from "../componets/BreadcrumbAboutLinks";

const AboutUs = () => {
    const images = [
        "/images/british counsil.jpg",
        "/images/b-logo1.png",
        "/images/b-logo2.png",
        "/images/cminew.jpg",
        "/images/b-logo4.png",
        "/images/b-logo3.png",
        "/images/ACCA.jpg",
        "/images/athe.jpg",
        "/images/edupro.jpg",
        "/images/british counsil.jpg",
        "/images/b-logo1.png",
        "/images/b-logo2.png",
        "/images/cminew.jpg",
        "/images/b-logo4.png",
        "/images/b-logo3.png",
        "/images/ACCA.jpg",
        "/images/athe.jpg",
        "/images/edupro.jpg",
    ];

    const breadcrumbLinks = [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/AboutUs" },
        { label: "OverView", url: "/AboutUs" },

    ];

    
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAnswer = (index) => {
        // If the clicked index is already active, close it; otherwise, open it
        setActiveIndex(index === activeIndex ? null : index);
    };

    const [selectedBox, setSelectedBox] = useState("Accountability");

    // Step 2: Ensure the function updates the state
    const handleBoxClick = (boxName) => {
        console.log("Clicked box:", boxName); // Debugging step
        setSelectedBox(boxName);
    };


    // Box content mapping
    const boxContent = {
        Learning: "Supporting a learning environment that continuously motivates all individuals to change the world by increasing knowledge and skills.",
        Community: "Creating and maintaining meaningful relationships among students, families, teachers, staff, and community partners to change the world for the better by building and supporting a sense of community.",
        Integrity: "Trust and honesty are the cornerstones of our college. We keep our commitments, act consistently and fairly, and do what we say we will. Our students and constituents know what to expect when they deal with us. We are ethical and forthright.",
        Accountability: "All of us contribute to the success of our students and our college. We act with responsibility when we do our job well and help others do the same. We act professionally and respectfully. We are accountable for what we say and do.",
        Innovation: "We challenging ourselves to create unique ideas and innovative solutions to meet the challenge of providing an inclusive and equitable education for all, we confront the global learning crisis by growing more leaders worldwide who will take the initiative to accelerate change.",
        Respect: "Promoting a school community that appreciates the value of students, families, colleagues, and cultures.",
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


    const testimonials = [
        {
            image: "/images/1-3-768x768.jpg",
            text: "“I am very thankful to BIMT Colombo Campus for providing me the opportunity to achieve my dream job. It has saved me so much time and allows me to see a good career in my life. The beautiful campus, good environment, friendly staff, and awesome teachers helped us make great memories and build friendships for a lifetime.”",
            buttonLabel: "Read Azeem's Story",
        },
        {
            image: "/images/2-3-768x768.jpg",
            text: "“I had a great experience at BIMT Colombo Campus. The lecturers were top quality, and their teaching methods were really beneficial. It has given me a real interest in learning and acquiring the necessary skills. I would highly recommend this institute to anyone wanting to expand their career in Accounting.”",
            buttonLabel: "Read Michael's Story",
        },
        {
            image: "/images/pixelcut-export (1).jpeg",
            text: "“The continuous support, help, advice, and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate. I highly recommend the brand BIMT Campus for the betterment of your future!”",
            buttonLabel: "Read Sara's Story",
        },
        {
            image: "/images/pixelcut-export.jpeg",
            text: "“The demand for having a degree in the global market, especially in the Middle East, persuaded me to choose BIMT Colombo Campus for BBA in Accounting programme through which, not only me but many of my friends also have secured reputed employment in the Gulf region.”",
            buttonLabel: "Read Michael's Story",
        },
        {
            image: "/images/5-5-768x768.jpg",
            text: "“Studying at BIMT Campus has been a great investment in my career. In a world which has plenty of options for students to choose their courses and programmes, I feel blessed and lucky for choosing BIMT for my degree programme. I highly recommend the brand BIMT Campus for those individuals who are keen to enhance their values in this fast-paced world.”",
            buttonLabel: "Read Sara's Story",
        },
        {
            image: "/images/erw-768x768.jpg",
            text: "“I choose to study my BBA in Accounting Degree at BIMT Campus where my skills are discovered. So, I am happy that I studied at BIMT Campus.”",
            buttonLabel: "Read Michael's Story",
        },
    ];




    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // };

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    //     );
    // };
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Adjust speed here (5000ms = 5 seconds)

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    // Function to go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Function to go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <>

            <head>
                <title>About Us | BIMT Campus</title>
                <meta
                    name="description"
                    content="BIMT Campus is a leading educational institution dedicated to empowering students with high-quality education and innovative learning experiences. We take pride in nurturing future leaders by offering a diverse range of academic programs designed to meet global standards.

Our mission is to create an inclusive learning environment that inspires academic excellence, personal growth, and professional success. With a team of experienced educators, state-of-the-art facilities, and a focus on holistic development, BIMT Campus is committed to shaping well-rounded individuals who can thrive in a competitive world.

Join us on a journey of knowledge and transformation, where your aspirations become achievements, and your potential is realized to the fullest. At BIMT Campus, we don't just educate; we create opportunities for a brighter future."
                />
            </head>
            <MainHeader />




            <section className="w-full flex justify-center items-center relative bg-gray-100">
                {/* Full-width background */}
                <div className="w-full bg-gray-100 scaling-section relative">
                    <div className="relative bg-gray-100 overViewSection px-10 w-[1920px] mx-auto">
                    <BreadcrumbSection breadcrumbLinks={breadcrumbLinks} />
                        {/* Breadcrum menubar */}
                        <nav>
                            <ol className="breadcrumb breadCrumbAbout">
                                {breadcrumbLinks.map((link, index) => (
                                    <React.Fragment key={index}>
                                        <li>
                                            {link.url ? (
                                                <Link href={link.url} className="breadcrumb-link">
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <span className="breadcrumb-text">{link.label}</span>
                                            )}
                                        </li>
                                        {index < breadcrumbLinks.length - 1 && (
                                            <span className="breadcrumb-icon">
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
                                        )}
                                    </React.Fragment>
                                ))}
                            </ol>
                        </nav>
                        {/* Overlapping Boxes Section */}
                        <div style={{ display: 'flow', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            {/* Vision Box */}
                            <div className="relative h-[300px] w-full left-[-40px] top-[100px] visionBox">
                                <div
                                    className="absolute top-0 left-10 w-[550px] h-[550px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 visionBoxBackgroundLine"
                                    style={{
                                        zIndex: 11,
                                        border: "2px solid #91278F",
                                        background: '#fff',
                                        borderRadius: '550px',
                                    }}
                                ></div>
                                <div
                                    className="absolute top-[50px] left-[89px] w-[450px] h-[450px] visionBoxSecondLine"
                                >
                                    <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                                        <h1 className='VisionHeader'>
                                            Vision
                                        </h1>
                                        <p className='VisionParagraph'>
                                            To be leaders in originating intellectuals who are immensely competent to face the global challenges
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mission Box */}
                            <div className="relative left-[-155px] top-[-170px] MissionBox">
                                <div
                                    className="absolute left-[500px] bg-[#fff] top-[200px] w-[430px] h-[430px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 missionboxLine"

                                ></div>
                                <div
                                    className="absolute left-[535px] bg-[#fff] top-[245px] w-[350px] h-[350px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 missionBoxSecondLine"

                                >
                                    <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                                        <h1 className='missionHeading'>
                                            Mission
                                        </h1>
                                        <p className='missionParagraph'>
                                            To produce scholars who can secure momentous employment at strategic level within the corporate world
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Core Values */}
                            <div className="relative left-[-165px] top-[-150px] coreBox">
                                <div
                                    className="absolute left-[835px] top-[90px] bg-white w-[400px] h-[400px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 coreBoxLine"
                                ></div>
                                <div
                                    className="absolute left-[866px] top-[125px] w-[330px] h-[330px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 coreBoxSecondLine">
                                    <h1 className='coreValueHeading' >
                                        Core Values
                                    </h1>
                                </div>
                            </div>

                            {/* Learning */}
                            <div className="relative left-[-50px] top-[-240px] LearningBox">
                                <div
                                    className="absolute left-[824px] top-[80px] w-[190px] h-[190px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 LearningBoxSecondLine"
                                ></div>
                                <div
                                    className={`absolute left-[835px] top-[90px] w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 LearningBoxLine ${selectedBox === "Learning" ? "bg-[#272A5D]" : "bg-[#FFFFFF]"
                                        }`}
                                    onClick={() => handleBoxClick("Learning")}
                                >
                                    <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: 6 }}>
                                        <h4 className="LearningHeading">Learning</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Community */}
                            <div className="relative left-[-110px] top-[-190px] CommunityBox">
                                {/* Background Circle */}
                                <div
                                    className="absolute left-[1012px] top-[80px] w-[190px] h-[190px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300  CommunityBoxSecondLine"
                                ></div>

                                {/* Foreground Clickable Circle */}
                                <div
                                    className="absolute left-[1024px] top-[90px] bg-[#5DB7E0] w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 CommunityBoxLine"
                                    onClick={() => handleBoxClick("Community")}
                                >
                                    <div className="flex justify-center items-center">
                                        <h4 className="CommunityHeading">Community</h4>
                                    </div>
                                </div>
                            </div>


                            {/* box 6 */}
                            <div className="relative left-[-29px] top-[-280px] intergerityBox">
                                {/* Background Circle */}
                                <div
                                    className="absolute left-[1012px] top-[280px] w-[190px] h-[190px] shadow-lg intergerityBoxSecondLine"

                                ></div>

                                {/* Foreground Clickable Circle */}
                                <div
                                    className="absolute left-[1024px] top-[290px] w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 intergerityBoxLine"

                                    onClick={() => handleBoxClick("Integrity")}
                                >
                                    <div className="flex justify-center items-center">
                                        <h4 className="IntergrityHeading">Integrity</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Accountability Box */}
                            <div className="relative left-[-20px] top-[-170px] accountabilityBox">
                                {/* Background Circle */}
                                <div
                                    className="absolute left-[1012px] top-[280px] w-[190px] h-[190px] shadow-lg accountabiityBoxSecondLine"

                                ></div>

                                {/* Foreground Clickable Circle */}
                                <div
                                    className="absolute left-[1024px] top-[290px] bg-green-500 w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 accountabilityBoxLine"

                                    onClick={() => handleBoxClick("Accountability")}
                                >
                                    <div className="flex justify-center items-center">
                                        <h4 className="accountabilityHeading">Accountability</h4>
                                    </div>
                                </div>
                            </div>


                            {/* Innovation Box */}
                            <div className="relative left-[-110px] top-[-70px] InnovationBox">
                                {/* Background Circle */}
                                <div
                                    className="absolute left-[1012px] top-[280px] w-[190px] h-[190px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 InnovationBoxSecondLine"

                                ></div>

                                {/* Foreground Clickable Circle */}
                                <div
                                    className="absolute left-[1024px] top-[290px] w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 InnovationBoxLine"

                                    onClick={() => handleBoxClick("Innovation")}
                                >
                                    <div className="flex justify-center items-center">
                                        <h4 className="InnovationHeading">Innovation</h4>
                                    </div>
                                </div>
                            </div>



                            {/* box 9 */}
                            <div className="relative left-[-240px] top-[-5px] RespectBox">

                                <div
                                    className="absolute left-[1024px] top-[290px] bg-green-500 w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 RespectBoxLine"
                                >
                                    <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: 6 }}>
                                        <h4 className='RespectHeading' >Respect</h4>
                                    </div>
                                </div>
                                <div
                                    className="absolute left-[1012px] top-[280px] w-[190px] h-[190px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 RespectBoxSecondLine"

                                ></div>
                            </div>
                        </div>{/* Respect Box */}
                        <div className="relative left-[-240px] top-[-5px] RespectBox">
                            {/* Background Circle */}
                            <div
                                className="absolute left-[1012px] top-[280px] w-[190px] h-[190px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-2xl transition-all duration-300 RespectBoxSecondLine"
                            ></div>

                            {/* Foreground Clickable Circle */}
                            <div
                                className="absolute left-[1024px] top-[290px] bg-green-500 w-[170px] h-[170px] shadow-lg hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 RespectBoxLine"
                                onClick={() => handleBoxClick("Respect")}
                            >
                                <div className="flex justify-center items-center">
                                    <h4 className="RespectHeading">Respect</h4>
                                </div>
                            </div>
                        </div>


                        {/* 1st dashed line */}
                        <div className="hidden sm:block relative left-[940px] top-[-150px]"
                            style={{ zIndex: 10 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#9F3181"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 2nd dashed line */}
                        <div className="hidden sm:block relative left-[1080px] top-[-105px]"
                            style={{ zIndex: 50 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#5DB7E0"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 3rd dashed line */}
                        <div className="hidden sm:block relative left-[1160px] top-[-50px]"
                            style={{ zIndex: 50 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#D86027"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 4th dashed line */}
                        <div className="hidden sm:block relative left-[1170px] top-[5px]"
                            style={{ zIndex: 50 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#272A5D"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 5th dashed line */}
                        <div className="hidden sm:block relative left-[1080px] top-[80px]"
                            style={{ zIndex: 50 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#818541"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 6th dashed line */}
                        <div className="hidden sm:block relative left-[935px] top-[135px]"
                            style={{ zIndex: 50 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
                                <line
                                    x1="10"
                                    y1="25"
                                    x2="990"
                                    y2="25"
                                    stroke="#A81E25"
                                    stroke-width="2"
                                    stroke-dasharray="10 10"
                                />
                            </svg>
                        </div>

                        {/* 01 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[72px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#A02629',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    Promoting a school community that appreciates the value of students, families, colleagues, and cultures.
                                </p>
                            </div>
                        </div>

                        {/* 02 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[-130px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#818541',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    We challenging ourselves to create unique ideas and innovative solutions to meet the challenge of providing an inclusive and equitable education for all, we confront the global learning crisis by growing more leaders worldwide who will take the initiative to accelerate change.
                                </p>
                            </div>
                        </div>

                        {/* 03 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[-357px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#272A5D',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    All of us contribute to the success of our students and our college. We act with responsibility when we do our job well and help others do the same. We act professionally and respectfully. We are accountable for what we say and do.
                                </p>
                            </div>
                        </div>

                        {/* 04 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[-558px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#D86027',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    Trust and honesty are the cornerstones of our college. We keep our commitments, act consistently and fairly, and do what we say we will. Our students and constituents know what to expect when they deal with us. We are ethical and forthright.
                                </p>
                            </div>
                        </div>

                        {/* 05 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[-759px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#5DB7E0',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    Creating and maintaining meaningful relationships among students, families, teachers, staff, and community partners to change the world for the better by building and supporting a sense of community.
                                </p>
                            </div>
                        </div>

                        {/* 06 Text box */}
                        <div className="hidden sm:block relative left-[1243px] top-[-935px]"
                            style={{ zIndex: 50 }}
                        >
                            <div style={{
                                display: 'flex',
                                padding: '10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                alignSelf: 'stretch',
                                background: '#9F3181',
                                borderRadius: '10px',
                                width: '600px'
                            }}>
                                <p style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '25px'
                                }}>
                                    Supporting a learning environment that continuously motivates all individuals to change the world by increasing knowledge and skills.
                                </p>
                            </div>
                        </div>

                        {/* Left Side Backround Circls */}
                        {/* 1st bg line */}
                        <div className="hidden sm:block absolute left-[-560px] top-[190px]"
                        >
                            <div
                                className="absolute left-[824px] top-[80px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 1,
                                    width: '710px',
                                    height: '710px',
                                    flexShrink: '0',
                                    borderRadius: '710px',
                                    border: '3px solid rgba(168, 38, 41, 0.15)'
                                }}
                            ></div>
                        </div>

                        {/* 2nd bg line */}
                        <div className="hidden sm:block absolute left-[-560px] top-[200px]"
                        >
                            <div
                                className="absolute left-[785px] top-[30px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 2,
                                    width: '795px',
                                    height: '795px',
                                    flexShrink: '0',
                                    borderRadius: '795px',
                                    border: '3px solid rgba(168, 38, 41, 0.15)'
                                }}
                            ></div>
                        </div>
                        {/* 3rd bg line */}
                        <div className="hidden sm:block absolute left-[-560px] top-[200px]"
                        >
                            <div
                                className="absolute left-[750px] top-[-20px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 2,
                                    width: '880px',
                                    height: '880px',
                                    flexShrink: '0',
                                    borderRadius: '880px',
                                    border: '3px solid #A0262926'
                                }}
                            ></div>
                        </div>

                        {/* 4th bg line */}
                        <div className="hidden sm:block absolute left-[-560px] top-[200px]"
                        >
                            <div
                                className="absolute left-[710px] top-[-70px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 2,
                                    width: '965px',
                                    height: '965px',
                                    flexShrink: '0',
                                    borderRadius: '965px',
                                    border: '3px solid #A0262926'
                                }}
                            ></div>
                        </div>

                        {/* 5th bg line */}
                        <div className="hidden sm:block absolute left-[-560px] top-[200px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 2,
                                    width: '1050px',
                                    height: '1050px',
                                    flexShrink: '0',
                                    borderRadius: '1050px',
                                    border: '3px solid #A0262926'
                                }}
                            ></div>
                        </div>


                        {/* Right Side BG line */}

                        {/* 1st bg line */}
                        <div className="hidden sm:block absolute left-[140px] top-[115px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 6,
                                    width: '1050px',
                                    height: '1050px',
                                    flexShrink: '0',
                                    borderRadius: '1050px',
                                    border: '10px solid #FFFFFF99'
                                }}
                            ></div>
                        </div>

                        {/* 2nd bg line */}
                        <div className="hidden sm:block absolute left-[180px] top-[165px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 6,
                                    width: '965px',
                                    height: '965px',
                                    flexShrink: '0',
                                    borderRadius: '965px',
                                    border: '10px solid #FFFFFF99'
                                }}
                            ></div>
                        </div>

                        {/* 3rd bg line */}
                        <div className="hidden sm:block absolute left-[225px] top-[210px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 6,
                                    width: '880px',
                                    height: '880px',
                                    flexShrink: '0',
                                    borderRadius: '880px',
                                    border: '10px solid #FFFFFF99'
                                }}
                            ></div>
                        </div>

                        {/* 4th bg line */}
                        <div className="hidden sm:block absolute left-[268px] top-[255px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 6,
                                    width: '795px',
                                    height: '795px',
                                    flexShrink: '0',
                                    borderRadius: '795px',
                                    border: '10px solid #FFFFFF99'
                                }}
                            ></div>
                        </div>

                        {/* 5th bg line */}
                        <div className="hidden sm:block absolute left-[308px] top-[300px]"
                        >
                            <div
                                className="absolute left-[670px] top-[-115px] w-[190px] h-[190px]"
                                style={{
                                    zIndex: 6,
                                    width: '710px',
                                    height: '710px',
                                    flexShrink: '0',
                                    borderRadius: '710px',
                                    border: '10px solid #FFFFFF99'
                                }}
                            ></div>
                        </div>

                        {/* Mobile for only preview Boxe */}
                        {selectedBox && (
                            <div className="block sm:hidden absolute mobileonlyShowBox bg-[#272A5D] text-white text-center p-6 rounded-lg shadow-md w-[400px]">
                                <p className="text-lg leading-relaxed">
                                    {boxContent[selectedBox]}
                                </p>
                            </div>
                        )}


                    </div >
                </div>
            </section>



            <section className="max-w-[1450px] mx-auto section-about">
                <h2 className="text-[#272A5D] font-work-sans text-[24px] sm:text-[28px] font-normal leading-normal mb-4 heading">
                    {/* About us */}
                </h2>
                <h3 className="text-white font-avenir text-[36px] sm:text-[40px] font-semibold leading-[1.3] mb-6 subheadingAbout"
                >
                    ABOUT US
                </h3>
                <p className="text-[#5A5A5A] text-justify font-workSans text-[16px] sm:text-[20px] font-normal leading-[1.5] paragraph">
                    The BIMT Campus was established to offer opportunities to acquire the right knowledge in the areas of management and technology with the collaboration of a  prominent international organization. We have aimed  to offer a high-standard education that is affordable for  students who are eager to study, while being one of  the tertiary education providers in Sri Lanka.
                </p>
                <p className="text-[#5A5A5A] text-justify font-workSans text-[16px] sm:text-[20px] font-normal leading-[1.5] paragraph pt-[25px]">
                    We have created a unique learning environment that  will empower our students with the necessary skills to  achieve their corporate ambitions. Their success  depends upon the application of theoretical skills and  practical experience.
                </p>
                <p className="text-[#5A5A5A] text-justify font-workSans text-[16px] sm:text-[20px] font-normal leading-[1.5] paragraph pt-[25px]">
                    The campus has a strong panel of lecturers who are  academically and professionally qualified to share  their knowledge and guide them to succeed in their  careers. Our lecturers are in the art of adapting  modern and structured coaching methods to make  the students employable.
                </p>
                <p className="text-[#5A5A5A] text-justify font-workSans text-[16px] sm:text-[20px] font-normal leading-[1.5] paragraph pt-[25px]">
                    BIMT Campus is an ISO 9001:2015- certified educational organization and the fastest-growing private  sector higher educational institute in Sri Lanka. We  offer a range of internationally recognized education al programs in partnership with globally reputed  universities and awarding bodies. We have picked  the best courses that offer the qualifications suitable  for Sri Lankan students to gain a complete knowledge on subject matters.
                </p>
            </section>


            <div className="max-w-[1450px] mx-auto section-about">

                <section className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-center text-[#272A5D] font-avenir text-[40px] font-semibold leading-[53px]"
                    >
                        OUR VALUES
                    </h3>
                    <h3 className="text-[#272A5D] text-center text-[24px] leading-[28px] mb-[20px] mt-[20px]">
                        BUILDING SUCCESS THROUGH CORE PRINCIPLES
                    </h3>
                </section>


                <section
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1450px] mx-auto" style={{ marginTop: '64px' }}
                >

                    {/* <!-- Card 1 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#9F3181] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/idea 1.svg"
                                alt="Learning Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-white">Learning</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            Supporting a learning environment that continuously motivates all individuals to change the world by increasing knowledge and skills.
                        </p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#5DB7E0] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/communities 1.svg"
                                alt="Community Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-[#fff]">Community</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            Creating and maintaining meaningful relationships among students, families, teachers, staff, and community partners to change the world for the better by building and supporting a sense of community.
                        </p>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#D86027] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/data-integration 1.svg"
                                alt="Integrity Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-[#fff]">Integrity</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            Trust and honesty are the cornerstones of our college. We keep our commitments, act consistently and fairly, and do what we say we will. Our students and constituents know what to expect when they deal with us. We are ethical and forthright.
                        </p>
                    </div>

                </section>
                <section
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto"
                    style={{ marginTop: '60px' }}
                >
                    {/* <!-- Card 4 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#232F65] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/accountability 1.svg"
                                alt="Learning Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-white">Accountability</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            All of us contribute to the success of our students and our college. We act with responsibility when we do our job well and help others do the same. We act professionally and respectfully. We are accountable for what we say and do.
                        </p>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#818541] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/innovation 1.svg"
                                alt="Community Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-[#fff]">Innovation</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            We challenging ourselves to create unique ideas and innovative solutions to meet the challenge of providing an inclusive and equitable education for all, we confront the global learning crisis by growing more leaders worldwide who will take the initiative to accelerate change.
                        </p>
                    </div>

                    {/* <!-- Card 6 --> */}
                    <div className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800">
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#A81E25] px-3 py-2" style={{ width: '92%', padding: '15px' }}>
                            <img
                                src="/images/shake 1.svg"
                                alt="Integrity Icon"
                                className="w-10 h-10"
                            />
                            <h2 className="font-semibold text-lg text-[#fff]">Respect</h2>
                        </div>
                        <p className="text-gray-500 text-base mt-10">
                            Promoting a school community that appreciates the value of students, families, colleagues, and cultures.
                        </p>
                    </div>

                </section>
            </div>



            {/* FAQS */}
            <section id="FAQ" className="max-w-[1450px] mx-auto section-about mt-[110px] mb-[110px]">
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




            {/* Banner Section */}
            <div className="carousel-container overflow-hidden relative">
                <div className="carousel-track flex items-center">
                    {/* Duplicate images for smooth infinite scrolling */}
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="carousel-item">
                            <img src={src} alt={`Logo ${index}`} layout="intrinsic" className="object-contain w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>



            {/* Testimonials  section*/}
            <div className="bg-[#006987] flex flex-col items-center py-16 mt-[110px]" style={{
                paddingTop: '100px',
                paddingBlock: '100px',
                paddingLeft: '10px',
                paddingRight: "10px"
            }}>
                {/* Outer Container */}
                <div className="w-[90%] max-w-[1450px] mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Image Section */}
                    <div className="relative lg:mr-16 mb-8 lg:mb-0">
                        <Image
                            src={testimonials[currentIndex].image}
                            alt="Alumni"
                            width={438}
                            height={498}
                            className="rounded-lg"
                        />
                        <div className="flex justify-center mt-4 space-x-4">
                            {/* Left Arrow Button */}
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006987] transition"
                            >
                                {/* Left Arrow SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 50 50"
                                    fill="currentColor"
                                >
                                    <path d="M30 38l-10-10 10-10" stroke="currentColor" strokeWidth="4" />
                                </svg>
                            </button>

                            {/* Right Arrow Button */}
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#006987] transition"
                            >
                                {/* Right Arrow SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 50 50"
                                    fill="currentColor"
                                >
                                    <path d="M20 38l10-10-10-10" stroke="currentColor" strokeWidth="4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col justify-center mt-20">
                        <div className="flex flex-col">
                            <h4 className="text-white text-2xl font-light font-['Work Sans']">
                                Testimonials
                            </h4>
                            <h2 className="text-white text-4xl font-semibold mb-6 max-w-[550px] font-['Avenir LT Std']">
                                HEAR WHAT OUR ALUMNI SAY ABOUT BIMT
                            </h2>
                            <p className="text-white text-xl leading-relaxed mb-8 font-workSans max-w-[700px]">
                                {testimonials[currentIndex].text}
                            </p>
                        </div>

                        {/* View All Stories Button */}
                        <div className="flex items-end justify-end">
                            <Link href={'/Testimonials'}>
                                <button className="flex items-end border-2 border-white rounded-lg px-4 py-2 font-semibold text-white text-lg relative hover:bg-white hover:text-[#006987] transition">
                                    {/* Small Graduate Icon */}
                                    <div className="absolute -top-8 -left-9 transform -rotate-10">
                                        <Image
                                            src="/images/graduate 1 (2).png"
                                            width={61.25}
                                            height={43.04}
                                            alt="stories"
                                            className="transform -translate-y-1 rotate-[-10deg]"
                                        />
                                    </div>
                                    <span> View all stories </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AboutUs;
