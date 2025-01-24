import Image from "next/image";

const CareerProgression = () => (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 shadow-md max-w-[1300px] mx-auto relative"
        style={{
            marginBottom: '30px',
            alignItems: 'center',
            gap: '128px',
            borderBottom: '3px solid #A02629',
            background: '#fff',
            boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)',
            marginTop: '100px',
            marginBottom: '100px'

        }}>

        {/* Left Content */}
        <div className="w-full lg:w-2/3">
            <h3 className="text-lg text-blue-700 font-semibold mb-2"
                style={{
                    color: '#272A5D',
                    fontFamily: 'Work Sans',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}
            >About program</h3>
            <h1 className="text-3xl font-bold text-gray-800 mb-4"
                style={{
                    color: '#272A5D',
                    fontFamily: 'Avenir LT Std',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '53px'
                }}
            >CAREER PROGRESSION</h1>
            <ul className="list-disc text-gray-600 pl-5 leading-relaxed">
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Business Developent Executives.</li>
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Business Analyst.</li>
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Office Manager.</li>
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Account Assistant</li>
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Sales and Marketing Executives</li>
                <li
                    style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >Customer Relations Officer</li>
            </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <Image
                src="/images/4 3.png"
                alt="Program Aim"
                width={400}
                height={300}
                className="shadow-md"
            />
        </div>

        {/* Red Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500"></div>
    </div>
)

export default CareerProgression;