'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import { useState } from "react";

export default function BlogPage() {
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
                <title>Campus Life | BIMT Campus</title>
                <meta
                    name="description"
                    content="Campus life at BIMT is vibrant, inclusive, and enriching, offering students a perfect blend of academics, extracurricular activities, and personal growth opportunities. From state-of-the-art facilities to engaging events and clubs, BIMT provides a dynamic environment where students can learn, connect, and thrive."
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
                                        href="/ContactUs"
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
                                        Contact Us
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
                                        Students Blogs
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

            </div>

            <div className="relative max-w-[1300px] mx-auto mt-[110px]">
                {/* Blog and Popular Posts Section */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Blog Content */}
                    <div className="lg:w-2/3">
                        {/* Blog Heading Section */}
                        <div>
                            <p className="text-[#42526E] text-lg uppercase tracking-wide font-semibold">Category</p>
                            <h1 className="text-[#172B4D] text-4xl lg:text-5xl font-bold leading-tight mt-4">Blog Title Goes Here</h1>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                                    <Image
                                        src="/images/young-female-indian-collage-girl-going-college-smiling_437792-127.avif"
                                        alt="Author"
                                        width={40}
                                        height={40}
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-[#172B4D] text-sm">
                                    By <span className="font-medium">Author Name</span> | Published on <span className="font-medium">November 14, 2022</span> | 2 min read
                                </p>
                            </div>
                        </div>

                        {/* Feature Image */}
                        <div className="relative mt-8 w-full h-[594px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/10.webp"
                                alt="Feature Image"
                                layout="fill"
                                className="object-cover"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="mt-10 text-[#000000] text-lg leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                                mattis tellus. Nullam quis imperdiet augue.
                            </p>
                            <p className="mt-6">
                                Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
                                maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
                                ut diam condimentum, vel euismod erat placerat.
                            </p>
                        </div>
                    </div>

                    {/* Popular Posts */}
                    <div className="lg:w-1/3 mt-[180px]">
                        <h2 className="text-[#42526E] text-lg uppercase tracking-wide font-semibold">Popular Posts</h2>
                        <div className="mt-6 flex flex-col gap-8">
                            {[1, 2, 3, 4].map((post, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-20 h-20 rounded-md overflow-hidden">
                                        <Image
                                            src={`/images/3-4.webp`}
                                            alt={`Popular`}
                                            width={80}
                                            height={80}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[#42526E] text-xs uppercase tracking-wide">Category</p>
                                        <h3 className="text-[#172B4D] text-md font-medium leading-snug">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Articles Section */}
                <div className="mt-16">
                    <h2 className="text-[#42526E] text-lg uppercase tracking-wide font-semibold">Related Articles</h2>
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((article, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-64 h-48 rounded-md overflow-hidden">
                                    <Image
                                        src={`/images/1-3.webp`}
                                        alt={`Related Article ${index + 1}`}
                                        width={270}
                                        height={203}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#42526E] text-xs uppercase tracking-wide">Category</p>
                                    <h3 className="text-[#172B4D] text-lg font-medium leading-snug">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
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
}
