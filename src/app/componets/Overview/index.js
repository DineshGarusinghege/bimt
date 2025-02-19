const Overview = () => (
    <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1420px] mx-auto">
            {/* Responsive Flex Layout */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Side */}
                <div className="w-full lg:w-[60%]">
                    {/* About Programme */}
                    <h2 className="text-2xl font-bold font-avenir mb-5 bg-[#272A5D] text-white 
                        px-5 py-2 w-full lg:w-[56%] text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    >
                        About Programme
                    </h2>

                    <p className="font-avenir text-[#5A5A5A] text-justify text-sm sm:text-base leading-6">
                        The Certificate in AI-Driven Accounting Practices is designed to equip accounting professionals 
                        with the skills to leverage artificial intelligence in modern financial management. The program 
                        focuses on integrating AI tools and technologies into accounting processes to enhance efficiency, 
                        accuracy, and decision-making. It provides practical knowledge on automating tasks, improving financial 
                        analysis, and streamlining operations using AI. This certificate is ideal for accountants seeking to 
                        stay ahead of industry trends, enabling them to navigate the evolving landscape of digital finance and 
                        adopt AI-driven solutions that optimize financial operations, ultimately driving smarter and more 
                        efficient accounting practices.
                    </p>

                    {/* Awarding Body */}
                    <h2 className="mt-4 text-lg sm:text-xl font-avenir text-[#272A5D]">
                        Awarding Body - IFA UK
                    </h2>
                    <img
                        className="mt-2 w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px]"
                        src='/images/diploma-LOGO-e1734280277541-300x143.jpg'
                        alt="Awarding Body Logo"
                    />

                    {/* Course Duration */}
                    <h2 className="mt-4 text-lg sm:text-xl font-avenir text-[#272A5D]">
                        Duration - 4 months
                    </h2>
                </div>

                {/* Right Side - Images */}
                <div className="relative w-full lg:w-[40%] flex items-center justify-center lg:justify-end">
                    {/* Large Image */}
                    <img
                        src="/images/3 (2) 1.png"
                        alt="Large"
                        className="absolute w-[80%] sm:w-[70%] md:w-[65%] lg:w-[460px] h-auto object-cover shadow-lg 
                        top-[70px] left-[10%] sm:left-[15%] md:left-[20%] lg:left-[40px]"
                    />

                    {/* Small Image */}
                    <img
                        src="/images/1 (1) 3.png"
                        alt="Small"
                        className="absolute top-[-20px] left-[-10px] w-[50%] sm:w-[40%] md:w-[35%] lg:w-[250px] h-auto object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Overview;
