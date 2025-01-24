'use client'
import React, { useState } from "react";
import Image from "next/image";

const BIMTContent = () => {
    const [activeSection, setActiveSection] = useState("why-bimt"); // Default section

    const renderContent = () => {
        switch (activeSection) {
            case "why-bimt":
                return (
                    <div className="flex flex-col lg:flex-row items-start gap-5 relative">
                        {/* Left Side Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42637 1 (1).png"
                                alt="Student"
                                className="w-full h-auto rounded-lg shadow-lg"
                                style={{
                                    width: "800px",
                                    height: "532.907px",
                                    flexShrink: "0",
                                }}
                            />
                        </div>

                        {/* Right Side Content */}
                        <div className="bg-white shadow-lg rounded-lg p-8 absolute left-[650] w-[781px] h-[457px] top-[38]">
                            <h4
                                className="text-blue-600 text-lg font-bold mb-2"
                                style={{
                                    color: "#272A5D",
                                    fontFamily: "Work Sans",
                                    fontSize: "24px",
                                    fontWeight: "400",
                                }}
                            >
                                Why BIMT
                            </h4>
                            <h2
                                className="text-2xl lg:text-3xl font-bold mb-4"
                                style={{
                                    color: "#272A5D",
                                    fontFamily: "Avenir LT Std",
                                    fontSize: "40px",
                                    fontWeight: "600",
                                    lineHeight: "53px",
                                }}
                            >
                                WHY WE’RE THE RIGHT CHOICE FOR YOU
                            </h2>
                            <p
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: "justify",
                                    fontFamily: "Work Sans",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                }}
                            >
                                BIMT Campus was established in order to electrify the
                                employability of the Nation...
                            </p>
                        </div>
                    </div>
                );

            case "programme-aim":
                return (
                    <div
                        className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
                        style={{
                            marginBottom: "30px",
                            alignItems: "center",
                            gap: "128px",
                            borderBottom: "3px solid #A02629",
                            background: "#fff",
                            boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.25)",
                        }}
                    >
                        {/* Left Content */}
                        <div className="w-full lg:w-2/3">
                            <h3
                                className="text-lg text-blue-700 font-semibold mb-2"
                                style={{
                                    color: "#272A5D",
                                    fontFamily: "Work Sans",
                                    fontSize: "24px",
                                    fontWeight: "400",
                                }}
                            >
                                About program
                            </h3>
                            <h1
                                className="text-3xl font-bold text-gray-800 mb-4"
                                style={{
                                    color: "#272A5D",
                                    fontFamily: "Avenir LT Std",
                                    fontSize: "40px",
                                    fontWeight: "600",
                                }}
                            >
                                PROGRAM AIM
                            </h1>
                            <p
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    color: "#5A5A5A",
                                    textAlign: "justify",
                                    fontFamily: "Work Sans",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                }}
                            >
                                We provide the students with the knowledge and skills related to
                                business management...
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

            default:
                return null;
        }
    };

    return (
        <div>
            {/* Menu Links */}
            <div className="w-full border-t border-gray-300"></div>
            <div className="max-w-[1300px] mx-auto py-6 flex justify-between items-center">
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
                    {/* Add more buttons as needed */}
                </div>
            </div>
            <div className="w-full border-t border-gray-300"></div>

            {/* Render Active Section */}
            <section>{renderContent()}</section>
        </div>
    );
};

export default BIMTContent;
