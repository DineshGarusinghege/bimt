import Image from "next/image";

const ProgrammeAim = () => (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8 md:py-12 shadow-md max-w-[1300px] mx-auto relative bg-white"
        style={{
            marginBottom: '30px',
            gap: '64px', // Adjusted for better mobile view
            borderBottom: '3px solid #A02629',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.25)',
            marginTop: '60px',
            marginBottom: '60px'
        }}>

        {/* Left Content */}
        <div className="w-full lg:w-2/3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-avenir bg-[#272A5D] px-5 py-2 
    w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[48%]"
                style={{
                    color: '#FFFFFF',
                    fontWeight: '600',
                    lineHeight: '1.3'
                }}
            >
                PROGRAM AIM
            </h1>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed"
                style={{
                    color: '#5A5A5A',
                    textAlign: 'justify',
                    fontFamily: 'Work Sans',
                    fontWeight: '400'
                }}
            >
                The aim of the Certificate in AI-Driven Accounting Practices is to empower accounting professionals with the knowledge and skills necessary to effectively integrate artificial intelligence into their financial management practices. This program seeks to enhance efficiency, accuracy, and decision-making in accounting by equipping participants with the tools to automate tasks, improve financial analysis, and streamline operations using AI technologies. By completing this certificate, accountants will be prepared to navigate the evolving digital finance landscape and adopt AI-driven solutions that optimize accounting practices and drive smarter, more efficient financial operations.
            </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
            <Image
                src="/images/4 3.png"
                alt="Program Aim"
                width={400}
                height={300}
                className="shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
        </div>

        {/* Red Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
    </div>
);

export default ProgrammeAim;
