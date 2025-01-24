
const WhyBIMT = () => (
    <div className="max-w-[1457px] mx-auto px-6 py-10 pt-[150px]">
    <div className="flex flex-col lg:flex-row items-start gap-5 relative">
        {/* Left Side Image */}
        <div className="flex-shrink-0">
            <img
                src="/images/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42637 1 (1).png"
                alt="Student"
                className="w-full h-auto rounded-lg shadow-lg"
                style={{
                    width: '800px',
                    height: '532.907px',
                    flexShrink: '0'
                }}
            />
        </div>

        {/* Right Side Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 absolute left-[650px] w-[781px] h-[457px] top-[38px]">
            <h4 className="text-blue-600 text-lg font-bold mb-2"
                style={{
                    color: '#272A5D',
                    fontFamily: "Work Sans",
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}
            >
                Why BIMT
            </h4>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4"
                style={{
                    color: '#272A5D',
                    fontFamily: 'Avenir LT Std',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: "53px"
                }}
            >
                WHY WE’RE THE RIGHT CHOICE FOR YOU
            </h2>
            <p className="text-gray-600 leading-relaxed"
                style={{
                    color: '#5A5A5A',
                    textAlign: "justify",
                    fontFamily: 'Work Sans',
                    fontSize: "16px",
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}
            >
                BIMT Campus was established in order to electrify the employability of
                the Nation. We are equipped with the best panel of lecturers who are not
                only qualified professionally and academically but also enriched with
                global and local corporate competence. We have created a unique learning
                environment that will empower our students with the necessary skills to
                achieve their corporate ambitions. Their success depends upon the
                applications of theoretical skills and practical experience. It is the
                combination, where we are true experts, ensuring that students get the
                right balance of solid theory coupled with necessary real-life case
                studies and teaching.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4"
                style={{
                    color: '#5A5A5A',
                    textAlign: "justify",
                    fontFamily: 'Work Sans',
                    fontSize: "16px",
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}
            >
                BIMT CAMPUS is the fastest growing Private Sector Higher Educational
                Institute in Sri Lanka. We offer a range of internationally Recognized
                Educational programs in partnership with globally reputed Universities
                and Awarding bodies. We have picked the best courses, which offer the
                qualifications suitable for Sri Lankan students to gain complete
                knowledge on subject matters.
            </p>
        </div>
    </div>
</div>
);

export default WhyBIMT;