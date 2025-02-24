'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MainHeader from '../ui/MainHeader/index';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/CourseContent.scss'

export default function CourseContent() {

    const [activeSection, setActiveSection] = useState("why-bimt");

    const renderContent = () => {
        switch (activeSection) {
            case "why-bimt":
                return (
                    <div className="max-w-[1300px] mx-auto px-6 py-10 pt-[150] pb-[70]">
                        <div className="flex flex-col lg:flex-row items-start gap-5 relative">
                            {/* Left Side Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42637 1 (1).png"
                                    alt="Student"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    style={{
                                        width: '800px',
                                        height: '532.907px',
                                        flexShrink: '0'
                                    }}
                                />
                            </div>

                            {/* Right Side Content */}
                            <div className="bg-white shadow-lg rounded-lg p-8 absolute left-[650] w-[781px] h-[457px] top-[38]">
                                <h4 className="text-blue-600 text-lg font-bold mb-2"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: "Work Sans",
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Why BIMT</h4>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-4"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '40px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: "53px"
                                    }}
                                >
                                    WHY WE’RE THE RIGHT CHOICE FOR YOU
                                </h2>
                                <p className="text-gray-600 leading-relaxed"
                                    style={{
                                        color: '#5A5A5A',
                                        textAlign: "justify",
                                        fontFamily: 'Work Sans',
                                        fontSize: "16px",
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    BIMT Campus was established in order to electrify the employability of
                                    the Nation. We are equipped with the best panel of lecturers who are not
                                    only qualified professionally and academically but also enriched with
                                    global and local corporate competence. We have created a unique learning
                                    environment that will empower our students with the necessary skills to
                                    achieve their corporate ambitions. Their success depends upon the
                                    applications of theoretical skills and practical experience. It is the
                                    combination, where we are true experts, ensuring that students get the
                                    right balance of solid theory coupled with necessary real-life case
                                    studies and teaching.
                                </p>
                                <p className="text-gray-600 leading-relaxed mt-4"
                                    style={{
                                        color: '#5A5A5A',
                                        textAlign: "justify",
                                        fontFamily: 'Work Sans',
                                        fontSize: "16px",
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    BIMT CAMPUS is the fastest growing Private Sector Higher Educational
                                    Institute in Sri Lanka. We offer a range of internationally Recognized
                                    Educational programs in partnership with globally reputed Universities
                                    and Awarding bodies. We have picked the best courses, which offer the
                                    qualifications suitable for Sri Lankan students to gain complete
                                    knowledge on subject matters.
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case "programme-aim":
                return (
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: '30px',
                            alignItems: 'center',
                            gap: '128px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'

                        }}>

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >About program</h3>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >PROGRAM AIM</h1>
                            <p className="text-gray-600 leading-relaxed"
                                style={{
                                    color: '#5A5A5A',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontStyle: 'normal',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >
                                We provide the students with the knowledge and skills related to business management
                                and basic understanding of the concepts and aspects of business management,
                                Accounting, Human Capital Management, as well as Banking and Financial sectors.
                                Our program primarily focuses on the analytical and quantitative skills as far as
                                Business Management is concerned. We also work towards the enhancement of the
                                strategic & critical thinking ability of the students as well. Thus we aim to develop
                                leadership as well as interpersonal skills of the students through our program.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <Image
                                src="/images/4 3.png"
                                alt="Program Aim"
                                width={400}
                                height={300}
                                className="shadow-md"
                            />
                        </div>

                        {/* Red Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                    </div>
                );

            case "modules":
                return (
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: '30px',
                            alignItems: 'center',
                            gap: '128px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            marginTop: '90px',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'

                        }}>

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'

                                }}
                            >About program</h3>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >MODULES</h1>
                            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Principles of Management.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Business Law.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Basics of Management Information System.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Principles of Organizational Behavior.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Basics of Accounting and Finance.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Introduction to Operation Management.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Mandatory Field Visit.</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <Image
                                src="/images/4 3.png"
                                alt="Program Aim"
                                width={400}
                                height={300}
                                className="shadow-md"
                            />
                        </div>

                        {/* Red Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                    </div>
                )
            case "career-progression":
                return (
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: '30px',
                            alignItems: 'center',
                            gap: '128px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'

                        }}>

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >About program</h3>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >CAREER PROGRESSION</h1>
                            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Business Developent Executives.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Business Analyst.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Office Manager.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Account Assistant</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Sales and Marketing Executives</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Customer Relations Officer</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <Image
                                src="/images/4 3.png"
                                alt="Program Aim"
                                width={400}
                                height={300}
                                className="shadow-md"
                            />
                        </div>

                        {/* Red Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                    </div>
                )
            case 'requirements':
                return (
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: '30px',
                            alignItems: 'center',
                            gap: '128px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'

                        }}>

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >About program</h3>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >REQUIREMENTS</h1>
                            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >You should be over the agae of 16+.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >You should have intermediate English knowledge.</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <Image
                                src="/images/4 3.png"
                                alt="Program Aim"
                                width={400}
                                height={300}
                                className="shadow-md"
                            />
                        </div>

                        {/* Red Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                    </div>
                );
            case "admission":
                return (
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: '30px',
                            alignItems: 'center',
                            gap: '128px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'

                        }}>

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >About program</h3>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >ADMISSION</h1>
                            <h4
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                }}
                            >Note - Necessary documents should be submitted before registering for this program. As below</h4>
                            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Duly Filled Application.</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >O/L and A/L Result sheet (if available).</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >NIC or Passport (copy).</li>
                                <li
                                    style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >Passport Size Photo.</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <Image
                                src="/images/4 3.png"
                                alt="Program Aim"
                                width={400}
                                height={300}
                                className="shadow-md"
                            />
                        </div>

                        {/* Red Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                    </div>
                );
            case "payment":
                return (
                    <div
                        className="max-w-[1600px] h-[491px] mx-auto flex-shrink-0 border-b-[3px] bg-white shadow-md"
                        style={{
                            borderBottomColor: '#A02629',
                            boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
                            marginTop: '100px',
                            marginBottom: '100px'
                        }}
                    >
                        <div className="flex justify-between items-start gap-[70px] h-full"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                paddingLeft: '66px',
                                paddingRight: '66px',
                                paddingTop: '70px',
                                paddingBottom: '69.93px',
                                borderBottom: '3px solid #A02629',
                                background: '#fff',
                                boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)'
                            }}
                        >
                            {/* Left Side */}
                            <div className="w-1/2">
                                <h4 className="text-lg font-bold text-gray-600"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Work Sans',
                                        fontSize: '24px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}
                                >About Programme</h4>
                                <h2 className="text-2xl font-bold mt-2"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '40px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '53px'
                                    }}
                                >Payments</h2>
                                <p className="text-gray-700 mt-4 leading-relaxed"
                                    style={{
                                        color: '#000',
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '30px'
                                    }}
                                >
                                    Please feel free to contact the relevant department or course coordinator for further
                                    assistance to get the appropriate payment plan for the specific programs. Moreover, you can
                                    make the payments via:
                                </p>

                                <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                    <li
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
                                        <span className="font-bold">Bank:</span> Hatton National Bank
                                    </li>
                                    <li style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}>
                                        <span className="font-bold">Branch:</span> Colpetty (Colombo - 03)
                                    </li>
                                    <li style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}>
                                        <span className="font-bold">Account Number:</span> 25600124570
                                    </li>
                                    <li style={{
                                        color: "#5A5A5A",
                                        textAlign: 'justify',
                                        fontFamily: 'Work Sans',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    }}>
                                        <span className="font-bold">Swift Code:</span> HBLILKLX001
                                    </li>
                                </ul>
                            </div>

                            {/* Right Side */}
                            <div className="w-1/2 flex flex-col items-center">
                                <h4 className="text-lg font-bold text-center text-gray-600 mb-6"
                                    style={{
                                        color: '#272A5D',
                                        fontFamily: 'Avenir LT Std',
                                        fontSize: '32px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '53px'
                                    }}

                                >We Accept</h4>
                                <div className="flex justify-center gap-[100px]">
                                    {/* Debit or Credit Card Payment */}
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="/images/Layer_x0020_1.svg"
                                            alt="Debit or Credit Card Payment"
                                            className="w-[100px] h-[100px] object-contain"
                                        />
                                        <p className="text-gray-700 mt-4 text-center text-avenir"
                                            style={{
                                                color: '#000',
                                                textAlign: 'justify',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: '400',

                                            }}
                                        >Debit or Credit Card Payment</p>
                                    </div>
                                    {/* Bank Transfer */}
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="/images/bank 1.svg"
                                            alt="Bank Transfer"
                                            className="w-[100px] h-[100px] object-contain"
                                        />
                                        <p className="text-gray-700 mt-4 text-center text-avenir"
                                            style={{
                                                color: '#000',
                                                textAlign: 'justify',                                                
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: '400',

                                            }}
                                        >Bank Transfer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    const studyPrograms = [
        {
            id: 1,
            title: 'Higher Diploma',
            img: '/images/Rectangle 49 (4).png',
        },
        {
            id: 2,
            title: "Bachelor's Degree",
            img: '/images/Rectangle 49 (3).png',
        },
        {
            id: 3,
            title: 'Masters Degree',
            img: '/images/Rectangle 49 (2).png',
        },
        {
            id: 4,
            title: 'Doctorate Degree',
            img: '/images/Rectangle 49 (1).png',
        },
        {
            id: 5,
            title: 'CMI',
            img: '/images/Rectangle 49.png',
        },
    ];

   


    return (

        <>

            <MainHeader />
            {/* <AnnounsmentBar /> */}

            <div className="max-w-screen-xl py-6 px-4 navMenu">
                <nav>
                    <ol className="flex flex-wrap items-center space-x-2 text-sm md:text-base">
                        <li>
                            <Link href="#" className="hover:underline hover:text-blue-500 navigationMenu">
                                Home
                            </Link>
                        </li>
                        <span className="text-gray-400 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <li>
                            <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500 navigationMenu">
                                Programs
                            </Link>
                        </li>
                        <span className="text-gray-400 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <li>
                            <Link href="/life-at-bimt" className="hover:underline hover:text-blue-500 navigationMenu">
                                Diploma
                            </Link>
                        </li>
                        <span className="text-gray-400 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <li>
                            <span className="text-gray-600 navigationMenu">  Management Diploma Course</span>
                        </li>
                        <span className="text-gray-400 pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path
                                    d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <li>
                            <span className="text-gray-600 navigationMenu">Diploma in Business Management</span>
                        </li>
                    </ol>
                </nav>
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
                            >What Will I Learn</h2>
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
                                <li>Gain a clear understanding of your job role in a business organization.</li>
                                <li>Learn how to motivate your employees to ensure they perform to the highest standard.</li>
                                <li>Learn how to plan and organize meetings.</li>
                                <li>Learn how to supervise a team, motivate them, and encourage them to reach maximum potential.</li>
                                <li>Learn how to apply administrative best practices to increase growth and success within a business environment.</li>
                                <li>Gain an understanding of finance functions and how to apply your knowledge in real-world scenarios.</li>
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
                            >About Programme?</h2>
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
                                Diploma in Business Management is a short term certificate program that prepares students for roles in a wide range of fields like accounting, marketing, and management. Do you want to strive and success within your business organisation? Business and management is vital for any organisation to succeed in the 21st century world. It is the perfect programme for employees in a business environment to improve their skills and become a competitive force in the job market. The certification will make individuals desirable to potential employers and organisations.
                                Organisational skills are in high-demand by organisations around the world. The Diploma in Business Management will develop your skills and knowledge and you to make effective and informed decisions. This is a highly effective course for students who want to take their academic knowledge to the next level.
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



            {/* Second Section */}
            <div>
                <div className="w-full border-t border-gray-300"></div>
                <div className="max-w-[1300px] mx-auto py-6 flex justify-between items-center">
                    {/* Links */}
                    <div className="flex gap-8">
                        <button
                            className={`text-gray-600 hover:text-red-600 transition font-medium ${activeSection === "why-bimt" ? "text-red-600" : ""
                                }`}
                            onClick={() => setActiveSection("why-bimt")}
                            style={{
                                color: "#A02629",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Why BIMT?
                        </button>
                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("programme-aim")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Programme Aim
                        </button>

                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("modules")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Modules
                        </button>

                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("career-progression")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Career Progression
                        </button>

                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("requirements")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Requirements
                        </button>

                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("admission")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Admission
                        </button>

                        <button
                            className={`text-gray-600 hover:text-blue-600 transition font-medium ${activeSection === "programme-aim" ? "text-blue-600" : ""
                                }`}
                            onClick={() => setActiveSection("payment")}
                            style={{
                                color: "#000",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: "500",
                            }}
                        >
                            Payment
                        </button>
                    </div>

                    {/* Button */}
                    <div className="ml-[166px]">
                        <button className="bg-[#1D267D] text-white py-2 px-6 rounded-md hover:bg-[#151B54] transition"
                            style={{
                                display: 'flex',
                                width: '200px',
                                height: '56px',
                                padding: '0px 10px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                border: '2px solid #272A5D',
                                background: "#272A5D",
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '20px',
                                fontStyle: "normal",
                                fontWeight: '600',
                                lineHeight: 'normal'
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="w-full border-t border-gray-300"></div>
                <section>{renderContent()}</section>
            </div>






            <div className="bg-[#F0F4F7]"
                style={{
                    paddingTop: '80px',
                    paddingBottom: '110px'

                }}>
                {/* About Programme Section Start */}
                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                    style={{
                        marginBottom: '30px',
                        alignItems: 'center',
                        gap: '128px',
                        borderBottom: '3px solid #A02629',
                        background: '#fff',
                        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',

                    }}>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg text-blue-700 font-semibold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >About program</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >PROGRAM AIM</h1>
                        <p className="text-gray-600 leading-relaxed"
                            style={{
                                color: '#5A5A5A',
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                                fontStyle: 'normal',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >
                            We provide the students with the knowledge and skills related to business management
                            and basic understanding of the concepts and aspects of business management,
                            Accounting, Human Capital Management, as well as Banking and Financial sectors.
                            Our program primarily focuses on the analytical and quantitative skills as far as
                            Business Management is concerned. We also work towards the enhancement of the
                            strategic & critical thinking ability of the students as well. Thus we aim to develop
                            leadership as well as interpersonal skills of the students through our program.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <Image
                            src="/images/4 3.png"
                            alt="Program Aim"
                            width={400}
                            height={300}
                            className="shadow-md"
                        />
                    </div>

                    {/* Red Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                </div>


                {/* Module */}

                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                    style={{
                        marginBottom: '30px',
                        alignItems: 'center',
                        gap: '128px',
                        borderBottom: '3px solid #A02629',
                        background: '#fff',
                        marginTop: '90px',
                        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',

                    }}>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg text-blue-700 font-semibold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'

                            }}
                        >About program</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >MODULES</h1>
                        <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Principles of Management.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Business Law.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Basics of Management Information System.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Principles of Organizational Behavior.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Basics of Accounting and Finance.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Introduction to Operation Management.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Mandatory Field Visit.</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <Image
                            src="/images/4 3.png"
                            alt="Program Aim"
                            width={400}
                            height={300}
                            className="shadow-md"
                        />
                    </div>

                    {/* Red Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                </div>


                {/*Start Event section */}
                <div
                    className="relative flex flex-col md:flex-row  items-center text-white p-6"
                    style={{ width: "1502px", paddingTop: '70px', paddingBottom: '0px', margin: "0 auto" }}
                >
                    {/* Events List */}
                    <div className="bg-[#006987] p-10 w-full md:w-2/3 rounded-lg shadow-lg"

                        style={{
                            width: '1035px',
                            height: 'fit-content',
                            flexShrink: '0',
                            paddingLeft: '100px',
                            paddingTop: '60px',
                            paddingBottom: '60px'
                        }}

                    >

                        <div style={{
                            display: 'flex',
                            width: '743px',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '30px'
                        }}>
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold"
                                    style={{ color: '#fff', fontFamily: 'Work Sans', fontSize: "24px", fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}
                                >Events</h2>
                                <h1 className="text-4xl font-bold mt-2"
                                    style={{ color: '#fff', fontFamily: 'Avenir LT Std', fontSize: '40px', fontStyle: 'normal', fontWeight: '600', lineHeight: '53px' }}
                                >UPCOMING EVENTS</h1>
                            </div>

                            {/* Event Item */}
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex py-6"
                                    style={{
                                        border: "0.25px solid white",
                                        marginBottom: "20px",
                                        padding: "20px",
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '67px'
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center w-20 text-center">
                                        <span className="text-lg font-light text-avenir"
                                            style={{
                                                color: '#fff',
                                                fontSize: '20px',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                lineHeight: 'normal'
                                            }}
                                        >nov</span>
                                        <span className="text-4xl font-bold"
                                            style={{
                                                color: '#fff',
                                                fontFamily: 'Avenir LT Std',
                                                fontSize: '32px',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: '53px'
                                            }}
                                        >6th</span>
                                    </div>
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-xl font-semibold text-avenir"
                                            style={{
                                                color: '#fff',
                                                fontSize: '20px',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                lineHeight: 'normal'
                                            }}
                                        >Workshop on Capital Market</h3>
                                        <p className="text-sm text-gray-300 mt-2"
                                            style={{ overflow: 'hidden', color: '#fff', textOverflow: 'ellipsis', fontFamily: 'Work Sans', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '25px' }}
                                        >
                                            A workshop on Capital Market was organized for our BIMT Campus
                                            Students on the 23rd of November.
                                        </p>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-sm font-semibold text-avenir"
                                                style={{
                                                    color: '#fff',
                                                    fontSize: '16px',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    lineHeight: 'normal'
                                                }}
                                            >9.00 - 17.00</span>
                                            <span className="text-sm font-semibold text-avenir"
                                                style={{
                                                    color: '#fff',
                                                    fontSize: '16px',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    lineHeight: 'normal'
                                                }}
                                            >Kingsbury Hotel</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Countdown Section */}
                    <div className="absolute right-[50px] w-full md:w-1/3">
                        <Image
                            src="/images/3 1.png"
                            alt="Event Image"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <div className="bg-white p-6 rounded-lg shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/4">
                            <h4 className="text-xl font-semibold" style={{ color: "#000" }}>
                                Next Event
                            </h4>
                            <p className="text-2xl font-bold mt-2" style={{ color: "#000" }}>
                                8d 00h 00m
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <button className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
                                    View all events
                                </button>
                                <button className="px-6 py-3 border border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*End Event section */}


                {/* career progression */}
                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                    style={{
                        marginBottom: '30px',
                        alignItems: 'center',
                        gap: '128px',
                        borderBottom: '3px solid #A02629',
                        background: '#fff',
                        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                        marginTop: '110px',
                        marginBottom: '0px'

                    }}>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg text-blue-700 font-semibold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >About program</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >CAREER PROGRESSION</h1>
                        <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Business Developent Executives.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Business Analyst.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Office Manager.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Account Assistant</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Sales and Marketing Executives</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Customer Relations Officer</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <Image
                            src="/images/4 3.png"
                            alt="Program Aim"
                            width={400}
                            height={300}
                            className="shadow-md"
                        />
                    </div>

                    {/* Red Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                </div>







                {/* Build your career section */}
                <div className="mx-auto w-[1300px] flex flex-col md:flex-row items-stretch"
                    style={{
                        width: '1300px',
                        height: '575px',
                        paddingTop: '179px',
                        marginBottom: '0px'
                    }}

                >
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 bg-blue-900 text-white p-10 flex flex-col justify-center"
                        style={{
                            paddingTop: '63px',
                            paddingLeft: '60px',
                            paddingRight: '150px',
                            background: '#272A5D',
                            height: '496px',
                            paddingBottom: '63px'

                        }}
                    >
                        <h3 className="text-lg font-medium"
                            style={{
                                color: '#fff',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >Career at BIMT</h3>
                        <h2 className="text-4xl font-bold mt-2 mb-6 leading-snug"
                            style={{
                                color: '#fff',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >
                            BUILD YOUR CAREER WITH BIMT
                        </h2>
                        <p className="text-sm leading-relaxed mb-8"
                            style={{
                                color: '#fff',
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '25px'
                            }}
                        >
                            Join a team dedicated to shaping future leaders in education. At BIMT, we value
                            innovation, growth, and collaboration. Discover rewarding career opportunities
                            where you can make a lasting impact on students&#39;  lives and your own.
                        </p>
                        <div className="space-y-4">
                            <a href="#" className="text-sm font-medium hover:underline block"
                                style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '25px'
                                }}
                            >
                                Student Counsellor →
                            </a>
                            <a href="#" className="text-sm font-medium hover:underline block"
                                style={{
                                    color: '#fff',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '25px'
                                }}
                            >
                                Marketing Executive →
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative w-full md:w-1/2"
                        style={{ height: '496px' }}
                    >
                        {/* Top Half (Blue Background) */}
                        <div className="h-1/2 bg-blue-900"
                            style={{
                                background: '#272A5D'

                            }}
                        ></div>

                        {/* Bottom Half (Content Section) */}
                        <div className="flex flex-col items-center justify-center h-1/2 bg-white px-6"
                            style={{
                                display: 'inline-flex',
                                padding: '40px 100px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '30px',
                                width: '100%'
                            }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-center"
                                style={{
                                    color: '#000',
                                    fontFamily: 'Work Sans',
                                    fontSize: '32px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 'normal'
                                }}
                            >
                                Find a career that suits you
                            </h2>
                            <div className="flex gap-4">
                                <button className="px-6 py-2 border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition rounded-lg"
                                    style={{
                                        display: 'flex',
                                        width: '200px',
                                        height: '56px',
                                        padding: '0px 10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        borderRadius: '10px',
                                        border: '2px solid #272A5D',
                                        color: '#272A5D',
                                        fontFamily: 'Work Sans',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    View all careers
                                </button>
                                <button className="px-6 py-2 border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition rounded-lg"
                                    style={{
                                        display: 'flex',
                                        width: '200px',
                                        height: '56px',
                                        padding: '0px 10px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        borderRadius: '10px',
                                        border: '2px solid #272A5D',
                                        color: '#272A5D',
                                        fontFamily: 'Work Sans',
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: 'normal'
                                    }}
                                >
                                    Contact us
                                </button>
                            </div>
                        </div>

                        {/* Absolute Positioned Image */}
                        <div className="absolute top-1/4 right-1/4 transform translate-x-[-80px] -translate-y-1/4"
                            style={{
                                top: '5px',
                            }}>
                            <img
                                src="/images/young-designer_1098-13734 1.png"
                                alt="Career Image"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div >

                {/* build your career section end */}




                {/* About Programme Section Start */}
                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                    style={{
                        marginBottom: '30px',
                        alignItems: 'center',
                        gap: '128px',
                        borderBottom: '3px solid #A02629',
                        background: '#fff',
                        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                        marginTop: '200px',
                        marginBottom: '0px'

                    }}>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg text-blue-700 font-semibold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >About program</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >REQUIREMENTS</h1>
                        <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >You should be over the agae of 16+.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >You should have intermediate English knowledge.</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <Image
                            src="/images/4 3.png"
                            alt="Program Aim"
                            width={400}
                            height={300}
                            className="shadow-md"
                        />
                    </div>

                    {/* Red Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                </div>

                {/* Admition */}
                <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                    style={{
                        marginBottom: '30px',
                        alignItems: 'center',
                        gap: '128px',
                        borderBottom: '3px solid #A02629',
                        background: '#fff',
                        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
                        marginTop: '110px',
                        marginBottom: '0px'

                    }}>

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg text-blue-700 font-semibold mb-2"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}
                        >About program</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Avenir LT Std',
                                fontSize: '40px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >ADMISSION</h1>
                        <h4
                            style={{
                                color: "#5A5A5A",
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                            }}
                        >Note - Necessary documents should be submitted before registering for this program. As below</h4>
                        <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Duly Filled Application.</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >O/L and A/L Result sheet (if available).</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >NIC or Passport (copy).</li>
                            <li
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >Passport Size Photo.</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <Image
                            src="/images/4 3.png"
                            alt="Program Aim"
                            width={400}
                            height={300}
                            className="shadow-md"
                        />
                    </div>

                    {/* Red Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
                </div>



                {/* Payment */}
                <div
                    className="max-w-[1600px] h-[491px] mx-auto flex-shrink-0 border-b-[3px] bg-white shadow-md"
                    style={{
                        borderBottomColor: '#A02629',
                        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
                        marginTop: '110px'
                    }}
                >
                    <div className="flex justify-between items-start gap-[70px] h-full"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            paddingLeft: '66px',
                            paddingRight: '66px',
                            paddingTop: '70px',
                            paddingBottom: '69.93px',
                            borderBottom: '3px solid #A02629',
                            background: '#fff',
                            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)'
                        }}
                    >
                        {/* Left Side */}
                        <div className="w-1/2">
                            <h4 className="text-lg font-bold text-gray-600"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                            >About Programme</h4>
                            <h2 className="text-2xl font-bold mt-2"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}
                            >Payments</h2>
                            <p className="text-gray-700 mt-4 leading-relaxed"
                                style={{
                                    color: '#000',
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '30px'
                                }}
                            >
                                Please feel free to contact the relevant department or course coordinator for further
                                assistance to get the appropriate payment plan for the specific programs. Moreover, you can
                                make the payments via:
                            </p>

                            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                                <li
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
                                    <span className="font-bold">Bank:</span> Hatton National Bank
                                </li>
                                <li style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}>
                                    <span className="font-bold">Branch:</span> Colpetty (Colombo - 03)
                                </li>
                                <li style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}>
                                    <span className="font-bold">Account Number:</span> 25600124570
                                </li>
                                <li style={{
                                    color: "#5A5A5A",
                                    textAlign: 'justify',
                                    fontFamily: 'Work Sans',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}>
                                    <span className="font-bold">Swift Code:</span> HBLILKLX001
                                </li>
                            </ul>
                        </div>

                        {/* Right Side */}
                        <div className="w-1/2 flex flex-col items-center">
                            <h4 className="text-lg font-bold text-center text-gray-600 mb-6"
                                style={{
                                    color: '#272A5D',
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '32px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px'
                                }}

                            >We Accept</h4>
                            <div className="flex justify-center gap-[100px]">
                                {/* Debit or Credit Card Payment */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/Layer_x0020_1.svg"
                                        alt="Debit or Credit Card Payment"
                                        className="w-[100px] h-[100px] object-contain"
                                    />
                                    <p className="text-gray-700 mt-4 text-center"
                                        style={{
                                            color: '#000',
                                            textAlign: 'justify',
                                            fontFamily: 'Work Sans',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',

                                        }}
                                    >Debit or Credit Card Payment</p>
                                </div>
                                {/* Bank Transfer */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/images/bank 1.svg"
                                        alt="Bank Transfer"
                                        className="w-[100px] h-[100px] object-contain"
                                    />
                                    <p className="text-gray-700 mt-4 text-center"
                                        style={{
                                            color: '#000',
                                            textAlign: 'justify',
                                            fontFamily: 'Work Sans',
                                            fontSize: '24px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',

                                        }}
                                    >Bank Transfer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* study card start section */}
            <div className="bg-[#fff] py-10 px-4 lg:px-16">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-gray-500"
                        style={{
                            paddingTop: '70px',
                            color: '#272A5D',
                            fontFamily: 'Work Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            marginBottom: '0px'
                        }}
                    >Study</h3>
                    <h2 className="text-3xl font-bold text-[#1D267D]"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Avenir LT Std',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >WE OFFER TO YOU</h2>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1850px] mx-auto"
                    style={{
                        paddingBottom: '100px'
                    }}
                >
                    {studyPrograms.map((studyPrograms) => (
                        <div
                            key={studyPrograms.id}
                            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"

                            style={{
                                display: 'flex',
                                width: '350px',
                                paddingBottom: '20px',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '7px'
                            }}
                        >
                            {/* Card Image */}
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={studyPrograms.img}
                                    alt={studyPrograms.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                            {/* Card Text */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-[#1D267D]">{studyPrograms.title}</h3>
                                <button className="mt-4 bg-white text-[#1D267D] border border-[#1D267D] py-2 px-4 rounded-md hover:bg-[#1D267D] hover:text-white transition">
                                    View more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Study cards end section */}


            {/* Testimonials */}

            < div className='bg-[#006987] flex flex-col items-center py-16 px-6'

                style={{ marginTop: '0px', marginBottom: '110px' }}
            >
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Image Section */}
                    <div className="relative lg:mr-16 mb-8 lg:mb-0">
                        <Image
                            src="/images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated1 1.png"
                            alt="Alumni"
                            width={500}
                            height={500}
                            className="w-96 h-auto rounded-lg"

                            style={{
                                width: '438px',
                                height: '498px'
                            }}
                        />
                        <div className="flex justify-center mt-4">
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <button style={{ width: '50px', height: '50px', color: 'white', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
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
                                <button style={{ width: '50px', height: '50px', color: 'white', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
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
                        <h2 className="text-white text-4xl font-semibold mb-6"
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
                            className="text-white text-xl leading-relaxed mb-8"
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
                            “The continuous support, help, advices and guidance given by the
                            management of the campus can never go unnoticed as they fully
                            committed themselves to deliver their promises to accomplish the
                            objective of becoming a recognized graduate...”
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
                            Read Azeem&#39;s Story
                        </button>
                    </div>

                </div>


                <div className="flex justify-center pt-4 px-6" style={{ marginLeft: '1000px' }}>
                    {/* Button Container */}
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

            </div >
        </>
    );
}