'use client';
import React, { useState } from "react";
import '../styles/OurJourney.scss'
export default function AdvisoryBoard() {
    const [selectedMember, setSelectedMember] = useState({
        name: "Mr. Jonathan Barber",
        position: "President - Advisory Board",
        image: "/images/146b0df3e91fa3b022dbf154fabf1887 (1).jpeg",
        description: `
            Business Development & Membership at the Institute of Financial Accountants (IFA - UK),
            where he is dedicated to supporting small and medium-sized enterprises (SMEs) and small and medium-sized practices (SMPs).
            Known for his exceptional work ethic, Mr. Jonathan consistently delivers excellent results, even in the face of challenges.
        `,
    });


    const [currentMember, setCurrentMember] = useState("Mr. Jonathan Barber");
    // Array of advisory members
    const advisoryMembers = [
        {
            name: "Mr. Jonathan Barber",
            position: "President - Advisory Board",
            image: "/images/146b0df3e91fa3b022dbf154fabf1887 (1).jpeg",
            description: [`
                Business Development & Membership at the Institute of Financial Accountants (IFA - UK),
                where he is dedicated to supporting small and medium-sized enterprises (SMEs) and small and medium-sized practices (SMPs).
                Known for his exceptional work ethic, Mr. Jonathan consistently delivers excellent results, even in the face of challenges.
            `,]
        },
        {
            name: "Prof. Hilal Ismail",
            position: "Member - Advisotry Board",
            image: "/images/0de4048427156c87dc37fa1c46833f57.jpeg",
            description: [`Prof. Hilal is a highly accomplished and experienced Senior Lecturer in Marketing Management at South Eastern University of Sri Lanka. With an extensive educational background, he holds a PhD in Management from Cochin University of Science & Technology in India, a Master of Commerce (M. Com) from the University of Kelaniya, and a B. Com from South Eastern University of Sri Lanka.`,
                `Having spent several years in the Sri Lankan education system, Prof. Hilal possesses a wealth of knowledge and expertise in his field. Throughout his career, he has encountered and interacted with thousands of students, gaining valuable insights into their needs and aspirations. Prof. Hilal underwent training in publishing skills at Henson Editorial Services in the United Kingdom. This training was made possible through the prestigious Commonwealth Professional Fellowship, awarded by the Association of Commonwealth Universities in the UK.`,
                `Besides his academic commitments, Prof. Hilal has actively contributed to research and publication in the field of marketing management. His work has been recognized and published in reputable journals. Prof. Hilal is a highly respected figure in the academic community. Beyond his professional achievements. He strives to create an engaging and dynamic learning environment, where students are encouraged to think critically and apply their knowledge to real-world scenarios.`, `Overall, Prof. Hilal's passion for teaching, extensive academic achievements, and dedication to his students make him an invaluable asset to the South Eastern University of Sri Lanka. He continues to inspire and empower his students, leaving a lasting impact on their academic and personal lives.`
            ],
        },
        {
            name: "Dr. Deepal Perera",
            position: "Member - Advisory Board",
            image: "/images/770c4b947256c466b14745763672bdab.png",
            description: ["Dr. Deepal Perera is an experienced senior lecturer and resource person with over two decades of expertise in Strategic Management, Strategic Marketing, Strategic HR, and Organizational Behavior. Throughout his career, Dr. Perera has been dedicated to imparting knowledge and nurturing leadership in these critical areas. He is a Chartered Marketer and holds a Postgraduate Diploma in Business Administration (MBA) from the USA, as well as a Ph.D. from ICFAI University in India.", "Dr. Perera is a distinguished member of the Sri Lanka Institute of Marketing (SLIM) and a Fellow Member of the Chartered Institute of Managers. He is also an alumnus of ICFAI University, Tripura, India, further enriching his academic credentials. His comprehensive expertise spans both academia and corporate practice, providing a unique blend of theory and real-world application.", "In addition to his academic role, Dr. Perera currently serves as the Head of Sales at a leading listed packaging company within a prominent conglomerate. In this capacity, he applies his strategic insights to drive business growth, enhance market positioning, and foster innovation. His dual experience in higher education and business leadership enables him to bridge the gap between academic theory and industry practice effectively.", "Dr. Perera’s career reflects a commitment to excellence in education and business, making him a highly regarded professional in the fields of marketing, management, and organizational development. His contributions continue to shape both future leaders and the strategic direction of the organizations he works with."

            ]
        },
        {
            name: "Mr. Salikram Bhandari",
            position: "Member – Advisory Board",
            image: "/images/dd987e8a3c01f08938beb22d58bf4b77.png",
            description: ["With over 20 years of experience in the education sector, Mr. Salikram Bhandari is a passionate and results-oriented professional specializing in Educational Counseling, Career Counseling, International Admissions, Marketing, and Team Management. As the CEO of The Next Education Consultancy Pvt. Ltd., he has developed a versatile skill set with a focus on operational excellence, strategic planning, and effective leadership. Mr. Bhandari is deeply committed to fostering student success and building strong, lasting relationships within the international education landscape.", "His experience spans across multiple facets of education consulting, from guiding students through their academic journey to managing and motivating high-performing teams. He thrives in high-pressure environments and is adept at driving team productivity while maintaining a strong focus on achieving organizational goals.", "In his role, Mr. Bhandari frequently travels internationally to build and maintain relationships with partner institutions, consulates, government bodies, and key stakeholders. These trips are essential for ensuring that his team has access to authentic, up-to-date information, which allows them to provide students and their families with accurate and reliable guidance.", "Mr. Bhandari is a Qualified Education Agent Counsellor (QEAC), and an Education New Zealand Trained Agent. He has also completed agent training with the British Council and Australian High Commission, in addition to attending several training sessions at universities across the world. His expertise, coupled with his commitment to professional development, positions him as a trusted leader in the international education sector."]
        },
    ];

    // Function to handle member selection
    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setCurrentMember(member.name);
    };

    return (


        <>

            <section className="flex flex-col items-center mt-20">
                {/* Container */}
                <div className="flex flex-col lg:flex-row w-[1450px] mx-auto gap-[100px]">

                    {/* Left Section - Text */}
                    <div className="w-full lg:w-[45%] flex flex-col">
                        <h2 className="text-white text-[24px] leading-[28px] py-2 px-4 bg-[#272A5D] w-[41%]">
                            ADVISORY BOARD
                        </h2>

                        <p className="text-[#272A5D] text-justify text-[16px] leading-relaxed pt-2 px-4" style={{
                            borderTop: '2px solid #272A5D', borderLeft: '2px solid #272A5D'
                        }}>
                            The Advisory Board at BIMT Campus plays a vital role in shaping the institution&#39;s strategic vision and ensuring its alignment with global standards in education and industry practices. Composed of esteemed professionals and academics, the Advisory Board provides guidance, insights, and expertise that enhance BIMT&#39;s educational offerings and foster innovation.

                        </p>

                        {/* Image Box */}
                        <div className="flex flex-col gap-[30px] mt-5">
                            {/* First Row */}
                            <div className="flex items-center gap-[30px]">
                                {advisoryMembers.slice(0, 1).map((member, index) => (
                                    <img
                                        key={index}
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember === member.name ? 'image-pulse' : ''}`}
                                        onClick={() => handleMemberClick(member)}
                                        style={{ objectFit: 'cover' }}

                                    />
                                ))}
                            </div>
                            {/* Second Row */}
                            <div className="flex items-center gap-[30px]">
                                {advisoryMembers.slice(1).map((member, index) => (
                                    <img
                                        key={index}
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember === member.name ? 'image-pulse' : ''}`}
                                        onClick={() => handleMemberClick(member)}
                                        style={{ objectFit: 'cover' }}

                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image or Content */}
                    <div className="w-full lg:w-[55%] flex flex-col items-start">
                        <div className="relative flex flex-col gap-6">
                            {/* Image with Name and Position */}
                            <div className="relative flex justify-start items-end gap-[18px]">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="h-[340.761px] rounded-md bg-lightgray"
                                    style={{
                                        objectFit: 'cover', borderTop: '2px solid pink', borderBottom: '2px solid pink',
                                        padding: '10px', borderRadius: "50px"
                                    }}

                                />
                                <div className="relative">
                                    {/* Name with absolute positioning */}
                                    <h3
                                        className="absolute top-[-100px] text-[#272A5D] font-bold text-[30px] leading-[53px] font-avenir whitespace-nowrap"
                                        style={{
                                            left: 0,
                                            color: '272A5D',
                                            fontSize: '28px',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: '53px',/* 176.667% */
                                        }}
                                    >
                                        {selectedMember.name}
                                    </h3>
                                    {/* Position below the name, displayed in one line */}
                                    <p
                                        className="absolute top-[-60px] left-0 text-[#272A5D] font-semibold text-[20px] leading-[53px] font-avenir whitespace-nowrap"

                                        style={{
                                            color: '#272A5D',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '53px'
                                        }}
                                    >
                                        {selectedMember.position}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Paragraph */}
                        <p className="text-[#5A5A5A] text-justify text-[16px] font-normal mt-10 font-avenir" style={{
                            color: '#5A5A5A',
                            textAlign: 'justify',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                        }}>
                            {Array.isArray(selectedMember.description) &&
                                selectedMember.description.map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                        </p>
                    </div>

                </div>
            </section>









        </>
    );
}





