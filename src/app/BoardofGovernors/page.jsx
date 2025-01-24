'use client';
import React, { useState } from "react";
import '../styles/OurJourney.scss'
export default function BoardofGovernors() {
    const [selectedMember, setSelectedMember] = useState({
        name: "Mr. Sagara Fernando",
        position: " Chairman - Board of Governors",
        image: "/images/7 1 (5).png",
        description: [
            "Mr. Sagara Fernando is a highly accomplished professional with extensive experience in the field of accounting and lecturing. He holds the prestigious qualifications of Chartered Management Accountant (ACMA-UK) and Chartered Global Management Accountant (CGMA–UK). Furthermore, he is an associate member of the Chartered Institute of Marketing (ACIM – UK). Mr. Fernando's academic background includes an MBA from the University of Sunderland, where he received a comprehensive education in business and management. His knowledge and expertise in finance and accounting have been honed over a remarkable career spanning over 15 years.",
            "Throughout his career, Mr. Fernando has held various significant positions, contributing to his comprehensive understanding of the financial landscape. He has taken on roles such as controller, chief financial officer, and treasurer. These positions have equipped him with a deep understanding of financial modelling, analysis, and other key aspects of finance.",
            "Additionally, he has leveraged his expertise to conduct internal audits for local companies, ensuring compliance and improving financial efficiency. Mr. Fernando's passion for sharing knowledge and educating others has led him to a lecturing career. He is currently a lecturer of Management Accounting at the University of Sunderland, where he imparts his wealth of knowledge to aspiring professionals in the field. Through his lectures, he strives to equip his students with the necessary skills to excel in the diverse and challenging world of accounting.",
            "Prior to his lecturing career, Mr. Fernando held the position of Group Head - Sales & Marketing at Certis Lanka Group in Sri Lanka. This role allowed him to develop a comprehensive understanding of sales and marketing strategies, further enhancing his overall business acumen. With his esteemed qualifications and extensive experience, he continues to make significant contributions to the financial industry, while also nurturing the future generation of professionals through his lecturing career.",
        ],
    });
    const [currentMember1, setCurrentMember1] = useState("Mr. Sagara Fernando");
    // Array of a Governoser members
    const Governorsembers = [
        {
            name: "Mr. Sagara Fernando",
            position: " Chairman - Board of Governors",
            image: "/images/7 1 (5).png",
            description: ["Mr. Sagara Fernando is a highly accomplished professional with extensive experience in the field of accounting and lecturing. He holds the prestigious qualifications of Chartered Management Accountant (ACMA-UK) and Chartered Global Management Accountant (CGMA–UK). Furthermore, he is an associate member of the Chartered Institute of Marketing (ACIM – UK). Mr. Fernando's academic background includes an MBA from the University of Sunderland, where he received a comprehensive education in business and management. His knowledge and expertise in finance and accounting have been honed over a remarkable career spanning over 15 years.",
                "Throughout his career, Mr. Fernando has held various significant positions, contributing to his comprehensive understanding of the financial landscape. He has taken on roles such as controller, chief financial officer, and treasurer. These positions have equipped him with a deep understanding of financial modelling, analysis, and other key aspects of finance.",
                "Additionally, he has leveraged his expertise to conduct internal audits for local companies, ensuring compliance and improving financial efficiency. Mr. Fernando's passion for sharing knowledge and educating others has led him to a lecturing career. He is currently a lecturer of Management Accounting at the University of Sunderland, where he imparts his wealth of knowledge to aspiring professionals in the field. Through his lectures, he strives to equip his students with the necessary skills to excel in the diverse and challenging world of accounting.",
                "Prior to his lecturing career, Mr. Fernando held the position of Group Head - Sales & Marketing at Certis Lanka Group in Sri Lanka. This role allowed him to develop a comprehensive understanding of sales and marketing strategies, further enhancing his overall business acumen. With his esteemed qualifications and extensive experience, he continues to make significant contributions to the financial industry, while also nurturing the future generation of professionals through his lecturing career.",]
        },
        {
            name: "Mr. Harshan Prasath",
            position: "Director - Board of Governance",
            image: "/images/cf615d87892e31d91c2b6c60b5bbbf3a.png",
            description: ["Mr. Harshan Prasath is a highly qualified finance professional with extensive experience in the fields of financial and investment management. With memberships in the Association of Chartered Certified Accountants (ACCA), the Institute of Management Accountants (CIMA), and the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka). Mr. Prasath embarked on his career at EY Sri Lanka and EY Maldives, working as an Auditor. During this time, he gained valuable insights into financial processes and auditing standards, honing his skills in meticulous analysis and financial reporting.", "After his successful tenure at EY, Mr. Prasath moved on to Corporate Finance in CDB, where he assumed the role of Manager. This position provided him with an opportunity to delve deeper into the complexities of the capital market. He developed a comprehensive understanding of investment strategies, risk assessment, and financial planning, further enhancing his expertise in financial management.", "Continuing his career trajectory, Mr. Prasath currently holds the position of Investment Manager at Allianz, a globally renowned financial services company. In this role, he is responsible for overseeing investment portfolios, analyzing market trends, and making strategic investment decisions. His keen eye for detail and ability to assess risks have made him a valuable asset to the organization.", "Prior to joining Allianz, Mr. Prasath served as Manager of Corporate Finance at Citizens Development Business Finance PLC. Here, he played a crucial role in developing financial strategies, managing mergers and acquisitions, and conducting financial due diligence, with his extensive knowledge of finance and investment, Mr. Harshan Prasath continues to make noteworthy contributions to the industry."]
        },
        {
            name: "Eng. Irshath AJ",
            position: "Director - Board of Governance",
            image: "/images/fa231986504f8d72b057e2b4a608f6e8.jpeg",
            description: ["Mr. Irshath AJ is an accomplished engineer with more than 17 years of experience in the industry. Throughout his career, he has established himself as a leading figure with expertise in building structural design and extensive knowledge in areas such as cost controlling, quantity surveying, estimation, tender management, variation management, claims management, and commercial management.", "His educational background is impressive, having earned his MSc in Quantity Surveying from Birmingham University, one of the prestigious institutions in the United Kingdom. He also holds a BEng (Hons) in Civil Engineering with a specialization in Structural Design from the University of East London. These degrees have equipped him with a strong foundation in the principles and practices of quantity surveying and engineering, enabling him to excel in his field.", "Aside from his qualifications, he is a member of the Royal Institution of Chartered Surveyors (RICS-APC) and the Institution of Engineering and Technology (MIET) in the UK. This demonstrates his commitment to professional development and his dedication to staying up-to-date with the latest advancements and best practices in his field. Additionally, his expertise in variation management and claims management has proven invaluable in dealing with potential issues and ensuring smooth project execution.", "His career achievements highlight his talent and dedication to his profession. He has successfully completed numerous projects, delivered exceptional results and earned the trust and admiration of clients and colleagues alike. His meticulous approach to project management, coupled with his strong analytical and problem-solving skills, has consistently yielded outstanding outcomes."]
        },
        {
            name: "Dr. Selvanayagam Anbananthan",
            position: "Director - Board of Governance",
            image: "/images/2849db5518b55a3b93247436d39080b4.jpeg",
            description: ["Dr. Anbananthan is a distinguished individual who has achieved notable success in multiple fields. As a President Award holder and a Social Activist, he has dedicated his career to making positive contributions to society. He commenced his academic journey by earning his PhD from the Open International University for Complementary Medicines. Dr. Anbananthan's deep knowledge and expertise in complementary medicines have helped him develop innovative approaches to healthcare. Additionally, he holds a Doctor of Medicine (MD), which further solidifies his medical credentials.", "To broaden his horizons, Dr. Anbananthan pursued legal studies and obtained both an LLB (Law degree) and LL M (Master of Laws degree) from Birmingham University in the United Kingdom. This legal education has equipped him with valuable insights and skills that he has utilized in various capacities. Dr. Anbananthan's passion for human rights led him to work for a prominent Human Rights Organization, where he made significant contributions. His outstanding service was recognized with an excellence achievement award and a gold medal, highlighting the impact he has made in advocating for social justice and equality.", "Beyond his work in social activism, Dr. Anbananthan has also contributed to the corporate world. He served as a Manager at Unilever Sri Lanka Limited, a renowned British multinational consumer goods company. This experience enabled him to gain a deep understanding of corporate operations and management principles.", "Another area where Dr. Anbananthan has excelled is educational consultations. His vast knowledge and experience have made him a sought-after advisor in the field of education. His expertise has been invaluable in shaping the educational landscape and offering strategic guidance to educational institutions."]
        },
    ];

    // Function to handle member selection
    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setCurrentMember1(member.name);
    };

    return (


        <>

            <div className="relative mx-auto w-[1300px]  flex flex-col lg:flex-row gap-[179px] mt-[110px] mb-[100px]">
                {/* Left Section */}
                <div className="flex flex-col gap-6">

                    {/* Board of Advisory Title */}
                    <h2 className="text-[#272A5D] font-normal text-[24px] font-['Work Sans']"
                    >
                        BOARD OF GOVERNORS
                    </h2>
                    <p className="text-[#5A5A5A] text-justify font-['Work Sans'] text-[20px] font-normal leading-[26px]"
                        style={{
                            color: '#5A5A5A',
                            textAlign: 'justify',
                            fontFamily: "Work Sans",
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '26px'

                        }}
                    >
                        The Board of Governors at BIMT Campus is responsible for setting the strategic direction and ensuring that BIMT remains committed to excellence in education. This distinguished board is composed of leaders with expertise across various fields, each contributing unique insights and governance to advance BIMT&#39;s mission.
                    </p>
                    {/* Image Box */}
                    <div className="flex flex-col gap-[30px]">
                        {/* First Row */}
                        <div className="flex items-center gap-[30px]">
                            {Governorsembers.slice(0, 1).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember1 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{ objectFit: 'cover' }}

                                />
                            ))}
                        </div>
                        {/* Second Row */}
                        <div className="flex items-center gap-[30px]">
                            {Governorsembers.slice(1).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember1 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{ objectFit: 'cover' }}

                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex flex-col gap-6">
                    <div className="relative flex flex-col gap-6">
                        {/* Image with Name and Position */}
                        <div className="relative flex justify-start items-end gap-[18px]">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="w-[300px] h-[340.761px] rounded-md bg-lightgray"
                                style={{ objectFit: 'cover' }}

                            />
                            <div className="relative">
                                {/* Name with absolute positioning */}
                                <h3
                                    className="absolute top-[-100px] text-[#272A5D] font-bold text-[30px] leading-[53px] font-['Avenir LT Std'] whitespace-nowrap"
                                    style={{
                                        left: 0,
                                        color: '272A5D',
                                        fontFamily: "Avenir LT Std",
                                        fontSize: '30px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '53px',/* 176.667% */
                                    }}
                                >
                                    {selectedMember.name}
                                </h3>
                                {/* Position below the name, displayed in one line */}
                                <p
                                    className="absolute top-[-60px] left-0 text-[#272A5D] font-semibold text-[20px] leading-[53px] font-['Avenir LT Std'] whitespace-nowrap"

                                    style={{
                                        color: '#272A5D',
                                        fontFamily: "Avenir LT Std",
                                        fontSize: '20px',
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
                    <p className="text-[#5A5A5A] text-justify text-[16px] font-normal font-['Work Sans'] w-[573px]" style={{
                        color: '#5A5A5A',
                        textAlign: 'justify',
                        fontFamily: "Work Sans",
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                    }}>
                        {selectedMember.description.map((paragraph, index) => (
                            <span key={index}>
                                {paragraph}
                                <br />
                                <br />
                            </span>
                        ))}
                    </p>
                </div >
            </div >




        </>
    );
}





