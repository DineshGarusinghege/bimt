const Payment = () => (
    <div className="max-w-[1600px] mx-auto bg-white shadow-md border-b-[3px] border-[#A02629] mt-[50px] lg:mt-[100px] mb-[50px] lg:mb-[100px] p-6 sm:p-10 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[70px]">
            
            {/* Left Side */}
            <div className="w-full lg:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-[#272A5D] text-white px-4 sm:px-6 py-2 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] font-avenir">
                    Payments
                </h2>

                <p className="text-gray-700 mt-4 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-justify">
                    Please feel free to contact the relevant department or course coordinator for further
                    assistance to get the appropriate payment plan for the specific programs. Moreover, you can
                    make the payments via:
                </p>

                <ul className="list-disc text-gray-600 pl-10 pt-5 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                    {[
                        { label: "Bank", value: "Hatton National Bank" },
                        { label: "Branch", value: "Colpetty (Colombo - 03)" },
                        { label: "Account Number", value: "25600124570" },
                        { label: "Swift Code", value: "HBLILKLX001" }
                    ].map((item, index) => (
                        <li key={index}>
                            <span className="font-bold">{item.label}:</span> {item.value}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#272A5D] mb-6">
                    We Accept
                </h4>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-10 md:gap-[100px]">
                    
                    {/* Debit or Credit Card Payment */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/Layer_x0020_1.svg" alt="Debit or Credit Card Payment"
                            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain" />
                        <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                            Debit or Credit Card Payment
                        </p>
                    </div>

                    {/* Bank Transfer */}
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/bank 1.svg" alt="Bank Transfer"
                            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain" />
                        <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
                            Bank Transfer
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
);

export default Payment;
