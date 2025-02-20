import Image from "next/image";

const Admission = () => (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 shadow-md max-w-[1300px] mx-auto relative bg-white border-b-4 border-[#A02629]"
        style={{
            marginTop: '90px',
            marginBottom: '30px',
            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
        }}>

        {/* Left Content */}
        <div className="w-full lg:w-2/3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-avenir bg-[#272A5D] px-4 sm:px-6 py-2 
                w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%]"
                style={{ fontWeight: '600', lineHeight: '1.3' }}>
                ADMISSION
            </h1>

            <h4 className="text-sm sm:text-base md:text-lg text-gray-600 text-justify font-sans pr-[20px]">
                <strong>Note:</strong> Necessary documents should be submitted before registering for this program. As below:
            </h4>

            <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                {[
                    "Duly Filled Application.",
                    "O/L and A/L Result sheet (if available).",
                    "NIC or Passport (copy).",
                    "Passport Size Photo."
                ].map((item, index) => (
                    <li key={index} className="text-gray-600 text-justify font-sans">
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <Image
                src="/images/4 3.png"
                alt="Admission"
                width={400}
                height={300}
                className="shadow-md w-[90%] sm:w-[80%] md:w-[400px] h-auto"
            />
        </div>

        {/* Red Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
    </div>
);

export default Admission;
