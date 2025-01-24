"use client";

import '../../styles/ui/AnnounsmentBar.scss'

const AnnounsmentBar = () => {

    return (
        <>
          {/* Announsment bar */}
          <div className="bg-[#A02629] w-full text-center p-0 py-2 m-0 anounmentSection">
                <p className="text-white text-sm md:text-base font-medium">
                    A workshop on Capital Market was organized for our BIMT Campus Students on 23rd of November 2022 at Kingsbury Hotel Colombo in association with the Institute of Financial Accountants, UK.{' '}
                    <a
                        href="#"
                        className="underline text-white font-semibold hover:text-gray-200"
                    >
                        Find Out More.
                    </a>
                </p>
            </div>
        </>
    );
};

export default AnnounsmentBar;