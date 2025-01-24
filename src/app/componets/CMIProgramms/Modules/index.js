import React, { useState } from "react";
import Image from "next/image";

const Modules = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Leadership in the Organization",
            items: [
                "Key Skills for Organizational Leadership",
                "Essential Leadership Mindsets",
                "Leadership in Absentia",
                "Leadership in Times of Crisis",
                "Project Planning and Delegating",
                "Problem Solving and Decision Making",
                "Enhancing Entrepreneurial Thinking",
                "Change Management and Transformational Leadership",
            ],
        },
        {
            title: "Principles of Managing People",
            items: [
                "Understanding Human behavior at Workplace",
                "Conflict Management at the Workplace",
                "Building a Collaborative Workplace",
                "Enhancing Team Performance",
                "Recruitment, Onboarding, and Probation",
                "Employee Absence Management Strategies",
                "Equality, Diversity, and Inclusion",
                "The Importance of Empathy in the Workplace",
            ],
        },
        {
            title: "Personal Development Strategies",
            items: [
                "Personal Branding Strategies",
                "Personal Development Skills in the Workplace",
                "Understanding the Psychology of Influence",
                "Enhancing Negotiation Skills",
                "Importance of Emotional Intelligence",
                "The Power of Networking",
                "Enhancing Coaching Skills",
                "The Power of Self-Confidence",
            ],
        },
        {
            title: "Managing Stakeholders and Finance",
            items: [
                "Understanding Finance Essentials",
                "Studying the Economic Environment",
                "Working with Stakeholder Groups",
                "Treasury Management Tools and Techniques",
                "Financial Investment Appraisal Techniques",
                "Working Capital Management Techniques",
                "Deciding Pricing Factors",
                "Evaluating Action Plans",
            ],
        },
    ];

    return (
        <div
            className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
            style={{
                marginBottom: "30px",
                alignItems: "center",
                gap: "128px",
                borderBottom: "3px solid #A02629",
                background: "#fff",
                marginTop: "100px",
                boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.25)",
                marginBottom: "100px",
            }}
        >
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
                {sections.map((section, index) => (
                    <div key={index} className="mb-4 border rounded shadow">
                        <button
                            className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-semibold flex justify-between items-center"
                            onClick={() => toggleDropdown(index)}
                        >
                            {section.title}
                            {openIndex === index ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 15l-7-7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                        {openIndex === index && (
                            <ul className="list-disc pl-8 pr-4 py-2 bg-gray-100">
                                {section.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-gray-600 leading-relaxed py-1"
                                        style={{
                                            color: "#5A5A5A",
                                            textAlign: "justify",
                                            fontFamily: "Work Sans",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
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
};

export default Modules;
