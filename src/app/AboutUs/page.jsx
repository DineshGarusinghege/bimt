'use client'
import React from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Breadcrumb from '../ui/Breadcrumb';
import '../styles/AboutUs.scss'
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";



const AboutUs = () => {

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

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { image, text, buttonLabel } = testimonials[currentIndex];


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
                                    className="absolute top-12 left-[90] w-[450px] h-[450px] visionBoxSecondLine"
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#9F3181] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#5DB7E0] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#D86027] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#232F65] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#818541] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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
                        <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#A81E25] px-3 py-2" style={{ width: '382px', padding: '15px' }}>
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


            <section className="max-w-[1300px] mx-auto section-about">
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
                            className={`relative mb-4 shadow overflow-hidden transition-all duration-300`}
                        >
                            {/* Question Header */}
                            <div
                                className="relative flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                {/* Question Background Layer */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/images/bgimgqa.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0.5, // Question opacity
                                        zIndex: -1, // Behind content
                                    }}
                                ></div>

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
                                        color: "#fff", // Text color for the answer
                                    }}
                                >
                                    {/* Answer Background Layer */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: "url('/images/bgimgqa.jpg')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            opacity: 0.5, // Answer background opacity
                                            zIndex: -1, // Place behind the content
                                        }}
                                    ></div>

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
            <div
                className="banner-container relative mx-auto mt-[110px] mb-[110px] max-w-[1900px] w-full overflow-x-auto"
            >
                <div
                    className="banner-slider flex items-center gap-6"
                    style={{
                        whiteSpace: "nowrap", // Ensures images are in a single row
                    }}
                >
                    {/* Image Tags with Fixed Dimensions */}
                    {[
                        "/images/british counsil.jpg",
                        "/images/b-logo1.png",
                        "/images/b-logo2.png",
                        "/images/cminew.jpg",
                        "/images/b-logo4.png",
                        "/images/b-logo3.png",
                        "/images/ACCA.jpg",
                        "/images/athe.jpg",
                        "/images/edupro.jpg",
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                width: "350px", // Fixed width
                                height: "105px", // Fixed height
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Brand ${index + 1}`}
                                width={350}
                                height={350}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>




            {/* Testimonials */}

            <div
                className="bg-[#006987] flex flex-col items-center py-16"
                style={{ marginTop: '110px', marginBottom: '100px' }}
            >
                {/* Outer Container for Content with Fixed Width */}
                <div
                    className="w-[1349px] mx-auto flex flex-col lg:flex-row items-center lg:items-start"
                >
                    {/* Image Section */}
                    <div className="relative lg:mr-16 mb-8 lg:mb-0">
                        <Image
                            src={image}
                            alt="Alumni"
                            width={438}
                            height={498}
                            className="rounded-lg"
                        />
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white"
                            >
                                {/* Left Arrow SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <g clip-path="url(#clip0_327_4530)">
                                        <path d="M25 0C38.8068 0 50 11.1932 50 25C50 38.8068 38.8068 50 25 50C11.1932 50 0 38.8068 0 25C0 11.1932 11.1932 0 25 0ZM25 45.8333C36.5057 45.8333 45.8333 36.5057 45.8333 25C45.8333 13.4943 36.5057 4.1667 25 4.1667C13.4943 4.1667 4.1667 13.4943 4.1667 25C4.1667 36.5057 13.4943 45.8333 25 45.8333Z" fill="white" />
                                        <path d="M27.6936 13.1102C28.5071 12.2966 29.8263 12.2966 30.6398 13.1102C31.4534 13.9238 31.4534 15.2429 30.6398 16.0565L21.6963 25L30.6398 33.9436C31.4534 34.7572 31.4534 36.0763 30.6398 36.8899C29.8263 37.7034 28.5071 37.7034 27.6936 36.8899L17.2769 26.4732C16.4633 25.6596 16.4633 24.3405 17.2769 23.5269L27.6936 13.1102Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_327_4530">
                                            <rect width="50" height="50" fill="white" transform="matrix(-1 0 0 1 50 0)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white"
                            >
                                {/* Right Arrow SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <g clip-path="url(#clip0_327_4536)">
                                        <path d="M25 0C11.1932 0 0 11.1932 0 25C0 38.8068 11.1932 50 25 50C38.8068 50 50 38.8068 50 25C50 11.1932 38.8068 0 25 0ZM25 45.8333C13.4943 45.8333 4.1667 36.5057 4.1667 25C4.1667 13.4943 13.4943 4.1667 25 4.1667C36.5057 4.1667 45.8333 13.4943 45.8333 25C45.8333 36.5057 36.5057 45.8333 25 45.8333Z" fill="white" />
                                        <path d="M22.3064 13.1102C21.4929 12.2966 20.1737 12.2966 19.3602 13.1102C18.5466 13.9238 18.5466 15.2429 19.3602 16.0565L28.3037 25L19.3602 33.9436C18.5466 34.7572 18.5466 36.0763 19.3602 36.8899C20.1737 37.7034 21.4929 37.7034 22.3064 36.8899L32.7231 26.4732C33.5367 25.6596 33.5367 24.3405 32.7231 23.5269L22.3064 13.1102Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_327_4536">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>


                    {/* Text Section */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-2xl font-light"
                            style={{
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >Testimonials</h4>
                        <h2 className="text-white text-4xl font-semibold mb-6 max-w-[550px]"
                            style={{
                                color: '#fff',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px',
                                maxWidth: '550px',

                            }}
                        >
                            HEAR WHAT OUR ALUMNI SAY ABOUT BIMT
                        </h2>
                        <p
                            className="text-white text-xl leading-relaxed mb-8 max-w-[600px]"
                            style={{
                                overflow: 'hidden',
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '36px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '35px',
                                maxWidth: '600px',
                                whiteSpace: 'normal',
                                wordBreak: 'keep-all',
                            }}
                        >
                            {text}
                        </p>
                        <button className="border-2 border-white text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300" style={{
                            width: '234px',
                            display: 'inline-flex',
                            height: '56px',
                            padding: '0px 20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: '0'

                        }}>
                            {buttonLabel}
                        </button>
                    </div>

                    <div style={{ paddingTop: '550px' }}>

                        <button className="flex items-end border-2 border-[#fff] rounded-lg px-4 py-2 font-semibold text-[#fff] text-lg relative"
                            style={{ fontFamily: 'Playfair', fontSize: '20px', fontWeight: '700', lineHeight: '24px', textAlign: 'left', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}
                        >
                            {/* Icon with Rotation */}
                            <div className="absolute -top-3 -left-6 transform -rotate-10">
                                <Image src="/images/graduate 1 (2).png"
                                    width={61.25}
                                    height={43.04}
                                    alt='storeis'
                                    style={{ transform: 'translate(-20%, -45%) rotate(-10.795deg)' }} />
                            </div>
                            {/* Button Text */}
                            View all stories

                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AboutUs;
