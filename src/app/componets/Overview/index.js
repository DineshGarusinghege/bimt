
const Overview = () => (
    <div className="width-full">
        <div className="max-w-[1420px] mx-auto">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side */}
                <div className="w-[917px]">
                    {/* Overview 1 */}
                    <h2 className="text-2xl font-bold mt-2 font-avenir mb-5"
                        style={{
                            color: '#FFFFFF',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px',
                            background: '#272A5D',
                            width: '56%',
                            paddingLeft: "20px",
                            paddingTop: '10px',
                            paddingBottom: "10px",
                            paddingRight: '20px'
                        }}
                    >About Programme</h2>


                    <p className="font-avenir" style={{
                        color: '#5A5A5A',
                        textAlign: 'justify',
                        fontSize: '14px',
                        fontWeight: "400px",
                        lineHeight: '20px'
                    }}>
                        The Certificate in AI-Driven Accounting Practices is designed to equip accounting professionals with the skills to leverage artificial intelligence in modern financial management. The program focuses on integrating AI tools and technologies into accounting processes to enhance efficiency, accuracy, and decision-making. It provides practical knowledge on automating tasks, improving financial analysis, and streamlining operations using AI. This certificate is ideal for accountants seeking to stay ahead of industry trends, enabling them to navigate the evolving landscape of digital finance and adopt AI-driven solutions that optimize financial operations, ultimately driving smarter and more efficient accounting practices.
                    </p>

                    <h2 className="mt-2 font-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '53px'
                        }}
                    >Awarding Body - IFA UK</h2>
                    <img
                        className="text-gray-700 "
                        src='/images/diploma-LOGO-e1734280277541-300x143.jpg'
                    />
                    <h2 className="mt-2 font-avenir"
                        style={{
                            color: '#272A5D',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '53px'
                        }}
                    >Duration - 4 months</h2>

                </div>

                {/* Right Side */}
                <div className="relative w-[554px]">
                    {/* Large Image */}
                    <img
                        src="/images/3 (2) 1.png"
                        alt="Large"
                        className="absolute w-[462px] h-[308px] rounded-lg object-cover shadow-lg top-[57px] left-[40px] w-[259px]"
                    />
                    {/* Small Image */}
                    <img
                        src="/images/1 (1) 3.png"

                        alt="Small"
                        className="absolute top-[-20px] left-[-20px] w-[259px] h-[171px] rounded-lg object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Overview;