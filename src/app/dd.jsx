{/* activity cards */ }
<div className="flex flex-col mt-[110px] w-full max-w-[1450px] mx-auto" >
    {/* Header */}
    <div className="mb-12 text-left">
        <h2 className="text-2xl font-semibold text-blue-900 font-avenir"
            style={{
                color: '#272A5D',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: "400",
                lineHeight: 'normal'
            }}
        >Events</h2>
        <h1 className="text-4xl font-bold text-blue-900 leading-tight"
            style={{
                color: '#272A5D',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '53px'
            }}
        >
            CAMPUS LIFE
        </h1>
    </div>

    {/* Events Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ marginBottom: "200px" }}>
        {/* Event 1 */}
        <div className="relative flex flex-col items-center w-full">
            <img src="/images/actitivity1.png" alt="Graduation" className="w-full h-auto object-cover" />
            <div className="absolute bg-white p-6 shadow-lg w-[90%] md:w-[85%] lg:w-[75%] -bottom-12">
                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Graduation</h3>
                <p className="text-gray-600 text-sm text-justify">
                    Our BIMT Campus annual graduation ceremony is a day devoted to celebrate an important point in our students’ lives. Examinations are finally over, scruffiness is replaced with fancy clothes and parents admire their children for reaching the finishing line of a long marathon. The future of BIMT past pupil always seems more promising than the present, and the present on graduation day is pretty good even if it is not quite the reality.
                </p>
            </div>
        </div>

        {/* Event 2 */}
        <div className="relative flex flex-col items-center w-full">
            <img src="/images/activitiy2.png" alt="Camping Night - Kabaragala" className="w-full h-auto object-cover" />
            <div className="absolute bg-white p-6 shadow-lg w-[90%] md:w-[85%] lg:w-[75%] -bottom-12">
                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Camping Night - Kabaragala</h3>
                <p className="text-gray-600 text-sm text-justify">
                    This Camping Night was organized to build the confidence of our students to dream big and to make them such people who are driver, to achieve their dreams.
                </p>
            </div>
        </div>

        {/* Event 3 */}
        <div className="relative flex flex-col items-center w-full">
            <img src="/images/activitiy3.png" alt="Cricket Tournament" className="w-full h-auto object-cover" />
            <div className="absolute bg-white p-6 shadow-lg w-[90%] md:w-[85%] lg:w-[75%] -bottom-12">
                <h3 className="text-2xl font-bold text-[#272A5D] text-center md:text-left">Cricket Tournament</h3>
                <p className="text-gray-600 text-sm text-justify">
                    BIMT cricket tournament was well-organized by Alumni Association of BIMT Campus. This game proved a true leadership and team sprit throughout the whole day of the matches. Main theme of the cricket tournament was to build a Positive behavior that make cricket an exciting game that encourages leadership, friendship, and teamwork.
                </p>
            </div>
        </div>
    </div>
</div>