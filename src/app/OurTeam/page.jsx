'use client';
import React from "react";
import Link from 'next/link';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import AdvisoryBoard from '../AdvisoryBoard/page';
import BoardofFovernors from '../BoardofGovernors/page';
import BoardofManagement from '../BoardofManagement/page';
import '../styles/OurJourney.scss'

export default function OurTeam() {
    return (
        <>
            <head>
                <title>Our Team - BIMT Campus</title>
                <meta
                    name="description"
                    content="The BIMT Campus Advisory Board is a distinguished panel of industry experts and academic leaders who provide strategic guidance to enhance the institution's academic excellence and operational success. Their collective expertise ensures that BIMT remains aligned with global standards, fostering innovation, and delivering impactful educational experiences."
                />
            </head>
            <MainHeader />

            {/* Hero Section */}
            <div>
                {/* Contact Us hero section */}
                <div
                    className="relative w-full h-[70vh] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/Our-Team-banner_page-0001-1-scaled.jpg')",
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
                                            href="/OurTeam"
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
                                            Our Team
                                        </span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <BoardofFovernors />
            <AdvisoryBoard />
            <BoardofManagement />
        </>
    );
}





