'use client';

import MainHeader from '../ui/MainHeader/index';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/OurJourney.scss'
export default function CEOsMessage() {


    return (


        <>
          <head>
                <title>CEOs Message | BIMT Campus</title>
                <meta
                    name="description"
                    content="Our CEO's message reflects the vision and commitment of BIMT Campus to inspire academic excellence, foster innovation, and empower students to achieve their full potential. It serves as a guiding beacon for our journey toward creating impactful educational experiences and shaping future leaders."
                />
            </head>
            <MainHeader />
            {/* <AnnounsmentBar /> */}
            


            <div className="mx-auto w-[1300px] h-auto lg:h-[658px] flex flex-col lg:flex-row bg-[#272A5D] rounded-[30px] p-6 lg:p-10 gap-12 mt-[110px] mb-[110px]">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <div
                        className="h-[350px] w-[350px] rounded-[10px] border-r-[10px] border-b-[10px] border-[#A02629] bg-lightgray bg-cover bg-center"
                        style={{
                            backgroundImage: `url('/images/seo.jpeg')`,
                            marginTop:'30px'
                        }}
                    ></div>
                    <h2 className="mt-6 text-white font-bold text-[40px] leading-[53px]">
                        Mr. Farshath Jamal
                    </h2>
                    <p className="text-white font-semibold text-[24px] leading-[53px]">
                        Chief Executive Officer
                    </p>
                </div>

                {/* Right Section */}
                <div className="lg:w-[770px] flex flex-col justify-center">
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        At BIMT Campus, we are dedicated to fulfilling our mission of preparing
                        and graduating students who embody the highest standards of principled,
                        specialized, and professional excellence. Since our inception in 2017,
                        our focus has been on equipping students with the skills and knowledge
                        needed to thrive in the modern world. At BIMT Campus, we believe that
                        each individual has an untapped potential, which, when nurtured, can be
                        transformed into limitless ability.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        Our primary objective is to provide a meaningful learning experience that
                        helps students acquire the relevant skills needed for success. BIMT
                        Campus offers a diverse range of programs, attracting students from all
                        walks of life, and ensuring that everyone has the opportunity to pursue
                        their academic and professional aspirations.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        The dedicated team at BIMT Campus is committed to supporting our students
                        from their first day to graduation. Our passionate administrative team
                        plays a vital role in guiding students to select the program that aligns
                        with their interests and career goals. Together, we adhere strictly to
                        our vision and mission, ensuring that every decision made focuses on
                        enriching the student experience and fostering their personal growth.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        As CEO, I am honored to lead an institution that brings energy and
                        purpose to education every day. We look forward to continuing to guide
                        and support our students on their journey toward academic and
                        professional success. Together, we are committed to nurturing
                        well-educated individuals who will contribute meaningfully to society and
                        excel in their future careers.
                    </p>
                </div>
            </div>
        </>
    );
}
