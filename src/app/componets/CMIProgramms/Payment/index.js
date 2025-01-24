const Payment = () => (
    <div
        className="max-w-[1600px] h-[491px] mx-auto flex-shrink-0 border-b-[3px] bg-white shadow-md"
        style={{
            borderBottomColor: '#A02629',
            boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
            marginTop: '100px',
            marginBottom: '100px'
        }}
    >
        <div className="flex justify-between items-start gap-[70px] h-full"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                paddingLeft: '66px',
                paddingRight: '66px',
                paddingTop: '70px',
                paddingBottom: '69.93px',
                borderBottom: '3px solid #A02629',
                background: '#fff',
                boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.25)'
            }}
        >
            {/* Left Side */}
            <div className="w-1/2">
                <h4 className="text-lg font-bold text-gray-600"
                    style={{
                        color: '#272A5D',
                        fontFamily: 'Work Sans',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}
                >About Programme</h4>
                <h2 className="text-2xl font-bold mt-2"
                    style={{
                        color: '#272A5D',
                        fontFamily: 'Avenir LT Std',
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '53px'
                    }}
                >Payments</h2>
                <p className="text-gray-700 mt-4 leading-relaxed"
                    style={{
                        color: '#000',
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '30px'
                    }}
                >
                    Please feel free to contact the relevant department or course coordinator for further
                    assistance to get the appropriate payment plan for the specific programs. Moreover, you can
                    make the payments via:
                </p>

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
                    >
                        <span className="font-bold">Bank:</span> Hatton National Bank
                    </li>
                    <li style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>
                        <span className="font-bold">Branch:</span> Colpetty (Colombo - 03)
                    </li>
                    <li style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>
                        <span className="font-bold">Account Number:</span> 25600124570
                    </li>
                    <li style={{
                        color: "#5A5A5A",
                        textAlign: 'justify',
                        fontFamily: 'Work Sans',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>
                        <span className="font-bold">Swift Code:</span> HBLILKLX001
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-1/2 flex flex-col items-center">
                <h4 className="text-lg font-bold text-center text-gray-600 mb-6"
                    style={{
                        color: '#272A5D',
                        fontFamily: 'Avenir LT Std',
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '53px'
                    }}

                >We Accept</h4>
                <div className="flex justify-center gap-[100px]">
                    {/* Debit or Credit Card Payment */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/Layer_x0020_1.svg"
                            alt="Debit or Credit Card Payment"
                            className="w-[100px] h-[100px] object-contain"
                        />
                        <p className="text-gray-700 mt-4 text-center"
                            style={{
                                color: '#000',
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',

                            }}
                        >Debit or Credit Card Payment</p>
                    </div>
                    {/* Bank Transfer */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/images/bank 1.svg"
                            alt="Bank Transfer"
                            className="w-[100px] h-[100px] object-contain"
                        />
                        <p className="text-gray-700 mt-4 text-center"
                            style={{
                                color: '#000',
                                textAlign: 'justify',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',

                            }}
                        >Bank Transfer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Payment;