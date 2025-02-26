'use client';

import Link from 'next/link';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/OurJourney.scss'
import '../styles/Global.scss'



export default function OurJourney() {


    return (


        <>
            <head>
                <title>Our Journey - BIMT Campus</title>
                <meta
                    name="description"
                    content="Discover BIMT Campus's remarkable journey of growth and transformation. From our humble beginnings to becoming a leading educational institution, our story reflects a commitment to excellence, innovation, and empowering students to achieve their dreams."
                />
            </head>
            <MainHeader />
            {/* <AnnounsmentBar /> */}


            {/* Hero Section */}
            <div>
                {/* Our Journey hero section */}
                <div
                    className="relative w-full h-[70vh] bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/SEK_5816-scaled.webp')",
                        objectPosition: 'center center'
                    }}
                >

                    <div className='relative max-w-[1450px] mx-auto top-[55px] px-10 py-50'>
                        {/* Breadcrumb Section */}
                        <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20 ">
                            <nav
                                className="py-2 px-4 text-sm text-gray-700"
                                style={{
                                    display: "inline-flex",
                                    padding: "5px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    background: "#FFFFFF30",
                                    borderRadius: '100px'
                                }}
                            >
                                <ol className="flex space-x-2">
                                    <li>
                                        <Link href="/" className="text-black breadcrumbFontWhite font-avenir">
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
                                                fill="white"
                                            />
                                        </svg>
                                    </span>

                                    <li>
                                        <Link href="/OurJourney" className="breadcrumbFontWhite font-avenir">
                                            About Us
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
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                    <li>
                                        <span className="breadcrumbFontWhite font-avenir">Our Journey</span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>


                </div>
            </div>




            <div className="hidden md:block w-full flex justify-center items-center">
                <img
                    src="/images/our-journey-copy-1_page-0001-scaled.jpg"
                    alt="Descriptive Text"
                    className="object-cover"
                />
            </div>


            <div className="block md:hidden flex flex-col items-center w-full my-10">
                {/* 2017 Section */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-103534.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#5CB4E4]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    Established in 2017 to offer opportunities to acquire the right knowledge in management and technology.
                                </li>
                                <li className="text-white text-avenir">
                                    In the beginning, diploma programs were offered.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* 2018 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-103634.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#9C3483]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    Obtained the Certificate of Incorporation from the Registrar of Companies and affliated with Lincoln University Malayasia to offer degree programs.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* 2019 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-103703.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#AA1D25]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    Became the official country representative of the institute of Financial Accountants (IFA) in 2019.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* 2020 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-103749.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#848444]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    BIMT Campus has cetebrated its inaugural Graduation Ceremony for 142 BBA Accounting Students.
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* 2021 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-103824.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#242D64]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    BIMT Campus has celebrated its second graduation ceremony for 372 BBA accounting students.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2022 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-104524.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#DB6325]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    The International Higher Diploma in Accounting and Finance was endorsed by the institute of Financial Accountants (IFA).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2023 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-104558.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#5CB4E3]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    Became ISO 9001 : 2015 certificate educational organization.
                                </li>
                                <li className="text-white text-avenir">
                                    Received Asia Business and Leadership Excellence Award. BIMT Signed an agreement with Charatered Management Institute (CMI) to offer various Qualifications in the area of management.
                                </li>
                                <li className="text-white text-avenir">
                                    Become an ATHE recognized Center.
                                </li>
                                <li className="text-white text-avenir">
                                    Received Gold Award from the University of Kelaniya.
                                </li>
                                <li className="text-white text-avenir">
                                    Became an EDUPRO UK Approved Center.
                                </li>
                                <li className="text-white text-avenir">
                                    Become a Tertiary and Vocational Education Commission (TVEC) Approved Higher Education Provider, which is a goverment apex body.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2024 */}
                <div className="flex items-center w-full max-w-md mb-8">
                    <div className="relative flex flex-col items-center w-full">
                        {/* Arrow & Icon */}
                        <div className="flex items-center ourjourneyimg">
                            <img
                                src="/images/Screenshot-2025-01-05-104654.png"
                                alt="Descriptive Text"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Box */}
                        <div className="text-white shadow-lg ourjourneybox bg-[#9C3483]">
                            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
                                <li className="text-white text-avenir">
                                    Received the National Business Excellence Awards 2024 from The National Chamber of Commerce.
                                </li>
                                <li className="text-white text-avenir">
                                    Received Excellence student service award from Lincoln University.
                                </li>
                                <li className="text-white text-avenir">
                                    Received Community service award from Lincoln University.
                                </li>
                                <li className="text-white text-avenir">
                                    Established the Institute of Hybrid Learning (IHL) as a division for professional studies within the BIMT campus. Obtained approval from the charted Management Institue (CMI) for the Management Skill Development Programme.
                                </li>
                                <li className="text-white text-avenir">
                                    BIMT Campus proudly Secures Two Prestigious Awars at the Sri Lana Entepreneur Awards by National Enterprise Development Authority - NEDA
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
