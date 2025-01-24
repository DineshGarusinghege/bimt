'use client'

import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            image: "/images/testimonial1.png",
            text: "“The continuous support, help, advice, and guidance given by the management of the campus can never go unnoticed as they fully committed themselves to deliver their promises to accomplish the objective of becoming a recognized graduate...”",
            name: "Azeem",
            buttonLabel: "Read Azeem's Story",
        },
        {
            image: "/images/testimonial2.png",
            text: "“BIMT provided me with the opportunity to grow academically and professionally. The hands-on experiences and resources were phenomenal.”",
            name: "Sara",
            buttonLabel: "Read Sara's Story",
        },
        {
            image: "/images/testimonial3.png",
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

    const { image, text, name, buttonLabel } = testimonials[currentIndex];

    return (
        <div className="bg-[#272A5D] flex flex-col items-center py-16" style={{ marginTop: '202px', marginBottom: '100px' }}>
            <div className="w-[1349px] mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                {/* Image Section */}
                <div className="relative lg:mr-16 mb-8 lg:mb-0">
                    <Image
                        src={image}
                        alt={`Testimonial from ${name}`}
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
                           
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent border-2 border-white text-white"
                        >
                            {/* Right Arrow SVG */}
                            
                        </button>
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col">
                    <h4 className="text-white text-2xl font-light">Testimonials</h4>
                    <h2 className="text-white text-4xl font-semibold mb-6 max-w-[550px]">
                        HEAR WHAT OUR ALUMNI SAY ABOUT BIMT
                    </h2>
                    <p className="text-white text-xl leading-relaxed mb-8 max-w-[600px]">
                        {text}
                    </p>
                    <button className="border-2 border-white text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
