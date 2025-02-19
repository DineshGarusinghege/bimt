
const Overview = () => (
    <div className="bg-white py-10 px-6 lg:px-16">
        <div className="max-w-[1498px] mx-auto py-10">
            {/* First Section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side */}
                <div className="w-[917px]">
                    {/* Overview 1 */}
                    <h4 className="text-lg font-bold text-gray-600"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Work Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}
                    >Overview</h4>
                    <h2 className="text-2xl font-bold mt-2"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Avenir LT Std',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >What Will I Learn</h2>
                    <ul className="list-disc list-inside mt-4 text-gray-700 leading-relaxed"
                        style={{
                            color: '#5A5A5A',
                            textAlign: "justify",
                            fontFamily: 'Work Sans',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}
                    >
                        <li>Gain a clear understanding of your job role in a business organization.</li>
                        <li>Learn how to motivate your employees to ensure they perform to the highest standard.</li>
                        <li>Learn how to plan and organize meetings.</li>
                        <li>Learn how to supervise a team, motivate them, and encourage them to reach maximum potential.</li>
                        <li>Learn how to apply administrative best practices to increase growth and success within a business environment.</li>
                        <li>Gain an understanding of finance functions and how to apply your knowledge in real-world scenarios.</li>
                    </ul>
                    {/* Overview 2 */}
                    <h4 className="text-lg font-bold text-gray-600 mt-8"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Work Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}
                    >Overview</h4>
                    <h2 className="text-2xl font-bold mt-2"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Avenir LT Std',
                            fontSize: '40px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '53px'
                        }}
                    >Awarding Body - IFA UK</h2>
                    <img
                        width={'490px'}

                        height={'0px'}
                        className="text-gray-700 "
                        src='/images/b-logo3 (1) 3.png'
                    />

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