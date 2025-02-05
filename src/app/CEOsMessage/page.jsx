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


            <div className="hidden sm:flex max-w-[1450px] mx-auto w-full h-screen justify-center items-center messagespeachhide">
                <img
                     src="/images/ceos-message_page-0001-2048x944.jpg"
                    alt="Descriptive Text"
                    className="object-cover"
                />
            </div>

            <div className="block md:hidden">
                {/* Wrapper div visible only on mobile (md and above hidden) */}

                <div>
                    <img
                        src="/images/Screenshot-2025-01-01-095417.png"
                        alt="Descriptive Image"
                        className="w-full object-cover"
                    />
                </div>

                <div style={{ borderRadius: '30px', backgroundColor: '#F2F2F2', margin: '20px' }}>
                    <p
                        className="text-[#5A5A5A] font-['WorkSans'] text-[14px] font-normal p-5 text-justify"
                    >
                        As Chairman of the Board of Governance at BIMT Campus, I am proud to share our
                        unwavering commitment to producing scholars who are equipped to secure significant
                        positions at strategic levels within the corporate world. Since our inception, we
                        have been focused on providing our students with the skills, knowledge, and
                        leadership qualities necessary to excel in today’s competitive business environment.
                        <br /><br />
                        At BIMT Campus, we believe in nurturing the potential of each individual, empowering
                        them to become influential leaders who can drive change and innovation. Our academic
                        programs are designed to not only impart theoretical knowledge but also to cultivate
                        critical thinking, strategic decision-making, and effective management practices.
                        We are committed to shaping future professionals who can contribute meaningfully to
                        organizations at the highest levels.
                        <br /><br />
                        A key focus of our institution is corporate leadership, as we recognize the pivotal
                        role it plays in the advancement and betterment of our country.
                        <br /><br />
                        By emphasizing the development of strong leadership skills, we aim to produce
                        graduates who are ready to make a positive impact on the corporate sector and
                        contribute to the economic growth and development of Sri Lanka.
                        <br /><br />
                        As we continue to evolve, BIMT Campus remains dedicated to shaping the next
                        generation of leaders who will thrive in the global business landscape. Together
                        with our dedicated team and committed faculty, we are proud to play a part in
                        preparing our students for a future of success, leadership, and national progress.
                    </p>
                </div>
            </div>
        </>
    );
}
