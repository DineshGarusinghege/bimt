'use client';

import MainHeader from '../ui/MainHeader/index';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import '../styles/OurJourney.scss'
export default function ChairmansMessage() {


    return (


        <>

            <head>
                <title>Chairmans Message | BIMT Campus</title>
                <meta
                    name="description"
                    content="The Chairman's message embodies the strategic vision and values that drive BIMT Campus. It reflects a steadfast commitment to delivering quality education, fostering innovation, and building a brighter future for students as they embark on their journey toward academic and professional excellence."
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
                            backgroundImage: `url('/images/charimen.jpeg')`,
                            marginTop:'58px'
                        }}
                    ></div>
                    <h2 className="mt-6 text-white font-bold text-[40px] leading-[53px]">
                        Mr. Sagara <br /> Fernando
                    </h2>
                    <p className="text-white font-semibold text-[24px] leading-[53px]">
                        Chairman - Board of Governors
                    </p>
                </div>

                {/* Right Section */}
                <div className="lg:w-[770px] flex flex-col justify-center">
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        As Chairman of the Board of Governance at BIMT Campus, I am proud to share
                        our unwavering commitment to producing scholars who are equipped to secure
                        significant positions at strategic levels within the corporate world.
                        Since our inception, we have been focused on providing our students with
                        the skills, knowledge, and leadership qualities necessary to excel in
                        today’s competitive business environment.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        At BIMT Campus, we believe in nurturing the potential of each individual,
                        empowering them to become influential leaders who can drive change and
                        innovation. Our academic programs are designed to not only impart
                        theoretical knowledge but also to cultivate critical thinking, strategic
                        decision-making, and effective management practices. We are committed to
                        shaping future professionals who can contribute meaningfully to
                        organizations at the highest levels.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        A key focus of our institution is corporate leadership, as we recognize
                        the pivotal role it plays in the advancement and betterment of our
                        country. By emphasizing the development of strong leadership skills, we
                        aim to produce graduates who are ready to make a positive impact on the
                        corporate sector and contribute to the economic growth and development of
                        Sri Lanka.
                    </p>
                    <br />
                    <p className="text-white text-justify text-[16px] leading-[25px] font-normal">
                        As we continue to evolve, BIMT Campus remains dedicated to shaping the
                        next generation of leaders who will thrive in the global business
                        landscape. Together with our dedicated team and committed faculty, we are
                        proud to play a part in preparing our students for a future of success,
                        leadership, and national progress.
                    </p>
                </div>
            </div>

        </>
    );
}
