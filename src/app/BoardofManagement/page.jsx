'use client';
import React, { useState } from "react";
import '../styles/OurJourney.scss'
export default function BoardofGovernors() {
    const [selectedMember, setSelectedMember] = useState({
        // tes
        name: "Mr. Farshath Jamal",
        position: "Chief Executive Officer (CEO)",
        image: "/images/7 1 (3).png",
        description: [
           `Mr. Farshath is a highly accomplished professional in field of education with over 15 years of experience. Currently serving as the Chief Executive Officer for the British Institute of Management and Technology, he has established himself as a visionary leader with a passion for excellence. In addition to his role at the British Institute of Management and Technology, Mr. Farshath is also the Regional Director for the Institute of Financial Accountants (IFA) UK in Sri Lanka. His expertise in finance and accounting has made him a valuable asset to the organization.`, `Mr. Farshath's educational background is equally impressive. He holds a Master of Law (LLM) degree from Cardiff Metropolitan University in the UK, as well as a Bachelor of Business Administration (BBA) degree in management. These qualifications have equipped him with a deep understanding of the legal and management aspects of the business world. Membership in prestigious professional bodies further showcases Mr. Farshath's commitment to continuous learning and professional development. He is a member of the Institute of Financial Accountants (IFA) in the UK and the Institute of Public Accountants (IPA) in Australia. These affiliations reflect his dedication to maintaining high standards in his field.`,`Notably, Mr. Farshath's passion for teaching has earned him a reputation as a smart and highly effective lecturer. He is frequently invited by leading schools in Colombo to teach advanced subjects, a testament to his expertise and ability to inspire students. An innovative and knowledgeable professional, Mr. Farshath has consistently delivered outstanding results throughout his career. His leadership skills, combined with his expertise in education and finance make him a valuable asset in the industry. As he continues to contribute to the field, his commitment to excellence and dedication to his students and colleagues are sure to lead to even greater achievements.`]
    });
    const [currentMember2, setCurrentMember2] = useState("Mr. Farshath Jamal");
    // Array of a management members
    const Governorsembers = [
        {
            name: "Mr. Farshath Jamal",
            position: "Chief Executive Officer (CEO)",
            image: "/images/7 1 (3).png",
            description:  [
                `Mr. Farshath is a highly accomplished professional in field of education with over 15 years of experience. Currently serving as the Chief Executive Officer for the British Institute of Management and Technology, he has established himself as a visionary leader with a passion for excellence. In addition to his role at the British Institute of Management and Technology, Mr. Farshath is also the Regional Director for the Institute of Financial Accountants (IFA) UK in Sri Lanka. His expertise in finance and accounting has made him a valuable asset to the organization.`, `Mr. Farshath's educational background is equally impressive. He holds a Master of Law (LLM) degree from Cardiff Metropolitan University in the UK, as well as a Bachelor of Business Administration (BBA) degree in management. These qualifications have equipped him with a deep understanding of the legal and management aspects of the business world. Membership in prestigious professional bodies further showcases Mr. Farshath's commitment to continuous learning and professional development. He is a member of the Institute of Financial Accountants (IFA) in the UK and the Institute of Public Accountants (IPA) in Australia. These affiliations reflect his dedication to maintaining high standards in his field.`,`Notably, Mr. Farshath's passion for teaching has earned him a reputation as a smart and highly effective lecturer. He is frequently invited by leading schools in Colombo to teach advanced subjects, a testament to his expertise and ability to inspire students. An innovative and knowledgeable professional, Mr. Farshath has consistently delivered outstanding results throughout his career. His leadership skills, combined with his expertise in education and finance make him a valuable asset in the industry. As he continues to contribute to the field, his commitment to excellence and dedication to his students and colleagues are sure to lead to even greater achievements.`]
        },
        {
            name: "Dr. Chethana Dabare",
            position: "Vice President",
            image: "/images/0566eb17fe6577ed08462d29ea940202.png",
            description: [`Dr. Dabare is a distinguished academic and business management professional with extensive qualifications and over 14 years of multifaceted experience in academia, industry, and research. She holds a B.BMgt (First Class Degree), MBA, and Ph.D., complemented by several professional certifications, including Chartered Accountancy (ICASL), Chartered Human Resource Management (CQHRM), and Banking qualifications (IBSL) Sri Lanka. Additionally, she has earned a Certificate in Teaching in Higher Education (CTHE) from the University of Sri Jayewardenepura, further solidifying her expertise in academic instruction.`,`Her professional journey spans across diverse domains such as education, auditing, taxation, corporate secretarial work, university-level lecturing, and research supervision. Dr. Dabare has contributed her expertise to several prestigious institutions and Universities, including: University of Lincoln (Malaysia), University of the West of England (UK), University of Wales (UK), University of Bristol (UK), University of Salford (UK), AAT Business School (Sri Lanka), University of Sri Jayewardenepura (Sri Lanka)`, `Within these roles, she has actively engaged in lecturing, research supervision, and participation in examination boards, making significant contributions to academic excellence and knowledge dissemination. Dr. Dabare specializes in sustainability and marketing, areas in which she has conducted impactful research and published numerous works. Her scholarly contributions reflect a deep commitment to advancing understanding in these critical fields.`,`A versatile professional with a passion for education and sustainable development, Dr. Dabare continues to inspire and mentor future generations while driving innovation and excellence in her chosen areas of expertise.` ]
        },
        {
            name: "Mr. Hashan Haputhanthri",
            position: "Chief Marketing Officer (CMO)",
            image: "/images/b8627d07ceb68c5c4628546373c58000.png",
            description: [`
                Mr. Hashan Haputhanthri is a globally recognized and award-winning marketing leader, ranked among the Top 100 Most Influential Marketing Leaders. With over 30 years of extensive experience in both local and international markets, he has held prominent leadership roles in marketing, sales, business strategy, and organizational turnaround across FMCG, Non-FMCG, B2B, and education sectors. His strategic insight and innovative approach to marketing have been instrumental in driving brand growth and operational excellence for leading organizations.
            `, `Currently serving as the Chief Marketing Officer (CMO) at BIMT Campus, Mr. Haputhanthri leads the institution’s marketing and enrolment strategies, enhancing brand presence, student recruitment, and institutional growth. He holds a Diploma in Digital Marketing from SLIM/SL, an MSc in Marketing, a Postgraduate Diploma in Marketing from SLIM/SL, and CIM UK Level 1 certification. He is a Certified Professional Marketer (Asia Pacific) and a Practicing Marketer (SLIM SL). With over 20 years of academic experience as a Senior Lecturer and more than 15 years as a corporate trainer, Mr. Haputhanthri has also established himself as a motivational coach, helping professionals reach their full potential.`, `Mr. Haputhanthri is the author of "Travis Brandsology," the first Asian philosophy for branding, and has co-authored several internationally acclaimed books. His award-winning strategies have earned him numerous accolades and recognition across industries.`, `In addition to his professional pursuits, Mr. Haputhanthri is a compere, dubbing artist, singer, and an ICC-qualified cricket coach. He was a member of the Fiji Island national cricket squad and is an avid mountain biker, blending his passion for sports and creative arts with his professional career.`]
        },
        {
            name: "Ms. Wathsala Chathurangi",
            position: "Chief Financial Officer (CFO)",
            image: "/images/c226eefa62ae4a8f742ef7c493758b50.png",
            description: [`
               Ms. Wathsala joined BIMT in 2023 as the Finance Manager and currently serves as the Chief Financial Officer (CFO) at BIMT Campus. With over seven years of experience in finance and accounting, she has worked across multiple industries, including finance, engineering, and education. Ms. Wathsala combines a strong academic foundation with extensive practical expertise, enabling her to manage complex financial operations effectively.
            `, `As CFO, Ms. Wathsala is responsible for overseeing the implementation and maintenance of financial systems, processes, and software to optimize operational efficiency. She manages cash flow, ensuring the availability of funds for day-to-day operations, payments, and capital projects. She also conducts in-depth financial analyses to assess the institution's financial performance, identify trends, and provide strategic recommendations to enhance profitability and efficiency. Additionally, Ms. Wathsala ensures compliance with financial regulations, accounting standards, and institutional policies, while safeguarding financial assets through strong internal controls.`, `Ms. Wathsala is also a key strategic planner at BIMT, developing and executing comprehensive financial plans and budgets. She forecasts revenue, allocates funds to various departments, and ensures the alignment of financial goals with organizational objectives. Her leadership has been instrumental in improving financial performance, driving efficiency, and ensuring financial stability.`, `Ms. Wathsala holds a Bachelor of Business Administration (BBA) with a specialization in Accounting and Finance from the Sri Lanka Institute of Information Technology (SLIIT) and is currently pursuing the strategic level of the Certified Management Accountant (CMA) qualification. She is a member of the Institute of Financial Accountants (IFA, UK), the Institute of Public Accountants (AIPA, Australia), and the Chartered Management Institute (MCMI, UK). She also holds the Certified Accounting and Business Manager (CABM) membership and is a Passed Finalist of AAT, reflecting her dedication to maintaining the highest professional standards.`]
        },
        {
            name: "Mr. Antonio Johanes Willis",
            position: "Manager – Marketing",
            image: "/images/dd9068ac07851f56fb49e86ed729728f.jpeg",
            description: [`
               Mr. Antonio Johanes Willis is an accomplished marketing professional with over 24 years of extensive experience in retail, marketing, promotions, and operations. Currently serving as the Marketing Manager at the British Institute of Management and Technology (Pvt) Ltd, he brings a wealth of expertise in driving successful marketing strategies and operational initiatives across diverse industries and international markets.
            `,`Throughout his career, Mr. Willis has held key positions in several prestigious organizations, where he was instrumental in developing comprehensive marketing and promotional plans, managing both online and offline campaigns, and orchestrating large-scale customer engagement events. His experience spans a wide array of sectors, including retail and passenger services, where he played a pivotal role in improving market reach and overseeing high-standard operations.`, `Mr. Willis’ global experience further includes working with international organizations, where he identified new business opportunities and led impactful marketing campaigns that contributed to significant market expansion. His ability to develop and execute innovative strategies has consistently driven business growth and operational efficiency.`,`At BIMT Campus, Mr. Willis applies his creative vision and strategic acumen to strengthen the institution’s marketing presence. His commitment to excellence ensures that marketing efforts align with the organization’s goals, while his leadership continues to inspire success and innovation within the team. With a proven track record in delivering results, Mr. Willis remains dedicated to advancing BIMT Campus' reputation and fostering growth in a dynamic, competitive market.`]
        },
        {
            name: "Mr. Santhirasekaram Gugapiriyan",
            position: "Manager – Student Enrollment",
            image: "/images/c92b8b97d8337501fa8e05094abacf86.png",
            description: [`
              Mr. Santhirasekaram Gugapiriyan brings a diverse professional background to his role as the Student Enrollment Manager at BIMT Campus, a position he has held since 2021. With over a decade of experience in various sectors, he has developed a well-rounded skill set in banking, marketing, administration, and business development.
            `,`Mr. Gugapiriyan began his career at People’s Bank, where he gained valuable experience as a Banking Assistant for three years. He then transitioned to education sector, where he worked for eight years as a Marketing and Administrative Officer. During his tenure, he played a pivotal role in business development and operational management, helping to drive the company’s growth and market presence. In addition, Mr. Gugapiriyan has one year of experience as a Cashier at Auto Tread (Pvt) Ltd, where he honed his financial management and customer service skills.`,`Since joining BIMT, Mr. Gugapiriyan has successfully managed marketing strategies and student enrolment processes, contributing to the growth of the institution. His extensive experience in marketing, combined with his administrative and business development expertise, has made him an invaluable asset to the team at BIMT Campus.`,`Mr. Gugapiriyan’s dedication to continuous professional development and his ability to navigate diverse business environments ensure his ongoing success in driving both institutional growth and student enrolment at BIMT.`]
        },
        {
            name: "Ms. Sanduni Athukorala ",
            position: "Manager – Academics",
            image: "/images/ca81594f9a65234dfd085d50c7df99d9.png",
            description: [`
              Ms. Sanduni Athukorala is a dedicated and accomplished academic with a strong foundation in Economics. She is currently pursuing a Master of Social Sciences (M.SSc.) in Economics at the University of Kelaniya, building on her Bachelor of Arts (Hons) in Economics from the Sabaragamuwa University of Sri Lanka. Ms. Sanduni is also enhancing her professional qualifications, including ongoing studies at the Chartered Institute of Management Accountants (CMA) and a Diploma in Computerized Accounting from the British Informatics of Computer Technology.
            `,`In her teaching career, Ms. Sanduni serves as an instructor at the University of Moratuwa’s Department of Industrial Management, where she lectures undergraduate students in the faculties of Business and Engineering. Known for her interactive teaching style, she fosters critical thinking and mentorship, making a significant impact on her students' academic journeys. Additionally, she has contributed to academic research, presenting at prestigious conferences such as the International Conference on Business Research (ICBR), showcasing her active involvement in scholarly work.`,`Before embarking on her academic career, Ms. Sanduni worked as an Assistant Accountant at V Pac Corrugated Pvt Ltd, where she gained valuable experience in financial management and accounting. Her expertise in adhering to accounting standards and regulatory requirements further complements her strong academic background in economics.`, `With a unique blend of teaching experience, research contributions, and hands-on financial expertise, Ms. Sanduni Athukorala is a versatile and well-rounded professional dedicated to advancing knowledge in both academic and practical domains.`]
        },
        {
            name: "Ms. Isuri Kavindi Rajapaksha",
            position: "Manager - Human Resource",
            image: "/images/dd27d482d6d5f3cbf6a6ead743a62cef.png",
            description: [`
              Ms. Isuri Kavindi Rajapaksha is a graduate from the Faculty of Management Studies at Sabaragamuwa University of Sri Lanka, where she earned a Second-Class degree in Eco-Business Management. Her academic expertise encompasses Business Management, Sustainable Development, Green Marketing, Human Resource Management, and Environmental Compliance Auditing.
            `,`Professionally, Ms. Isuri has over two years of experience in human resource management, primarily within the hospitality industry. Her practical knowledge and skills in HR strategy and operations have been developed through hands-on roles, where she successfully managed and implemented HR strategies and Standard Operating Procedures (SOPs) to drive organizational growth and performance.`, `In addition to her experience, Ms. Isuri has completed a Diploma in Professional Human Resource Management from the Chartered Institute of Personnel Management Sri Lanka, further enhancing her expertise in HR practices and methodologies.`,`Ms. Isuri is also deeply committed to sustainability and corporate social responsibility. Throughout her academic career, she has been actively involved in various sustainability projects, demonstrating her passion for promoting environmental and social responsibility within organizations.`, `With her strong academic background, hands-on HR experience, and commitment to sustainability, Ms. Isuri is a well-rounded professional ready to contribute meaningfully to dynamic and forward-thinking organizations. Her dedication to continuous personal and professional growth makes her an asset to any team.`]
        },
    ];

    // Function to handle member selection
    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setCurrentMember2(member.name);
    };

    return (


        <>

            <div className="relative mx-auto w-[1300px]  flex flex-col lg:flex-row gap-[179px] mt-[110px] mb-[100px]">
                {/* Left Section */}
                <div className="flex flex-col gap-6">

                    {/* Board of Advisory Title */}
                    <h2 className="text-[#272A5D] font-normal text-[24px] font-['Work Sans']"
                    >
                        BOARD OF MANAGEMENT
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
                        The Board of Management at BIMT Campus is dedicated to steering the institution towards academic excellence, growth, and innovation. Comprised of accomplished professionals across various fields, our board brings invaluable expertise and strategic vision, ensuring that BIMT continues to provide transformative education and impactful learning experiences for future leaders.
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
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember2 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{objectFit:'cover'}}

                                />
                            ))}
                        </div>
                        {/* Second Row */}
                        <div className="flex items-center gap-[30px]">
                            {Governorsembers.slice(1, 2).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember2 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{objectFit:'cover'}}

                                />
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-[30px]">
                            {Governorsembers.slice(2,4).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember2 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{objectFit:'cover'}}

                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-[30px]">
                            {Governorsembers.slice(4,8).map((member, index) => (
                                <img
                                    key={index}
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-[150px] h-[150px] rounded-md cursor-pointer ${currentMember2 === member.name ? 'image-pulse' : ''}`}
                                    onClick={() => handleMemberClick(member)}
                                    style={{objectFit:'cover'}}

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





