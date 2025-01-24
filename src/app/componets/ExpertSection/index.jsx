// components/ExpertSection.js
import React from 'react';

const ExpertSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto mt-[110px] mb-[0px]">
      {/* Card 1 */}
      <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
        <div
          className="absolute -top-6 flex items-center gap-2 bg-[#fff]"
          style={{ width: '250px' }}
        >
          <img src="/images/Group.png" alt="Learning Icon" width={51} height={50} />
          <h2 className="font-semibold text-2xl text-[#272A5D]">Expert Learning</h2>
        </div>
        <p className="text-gray-500 text-base mt-10">
          Our lectures teach you a great deal about your chosen industry or area of study. Learning
          from them exposes you to their vast expertise, which can benefit you in your future
          career.
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
        <div
          className="absolute -top-6 flex items-center gap-2 bg-[#fff]"
          style={{ width: '270px' }}
        >
          <img
            src="/images/skill-development 1.png"
            alt="Community Icon"
            width={51}
            height={50}
          />
          <h2 className="font-semibold text-2xl text-[#272A5D]">Skill Development</h2>
        </div>
        <p className="text-gray-500 text-base mt-10">
          BIMT Campus gives you the opportunity to major in a particular field. This means you have
          the opportunity to gain industry-specific skills and knowledge.
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative flex flex-col items-center p-6 border border-gray-300 border-b-4 border-red-800">
        <div
          className="absolute -top-6 flex items-center gap-2 bg-[#fff]"
          style={{ width: '400px' }}
        >
          <img
            src="/images/mentorship 1.png"
            alt="Integrity Icon"
            width={51}
            height={50}
          />
          <h2 className="font-semibold text-2xl text-[#272A5D]">Career Switch Opportunities</h2>
        </div>
        <p className="text-gray-500 text-base mt-10">
          Since BIMT offers a wide variety of programms, students may have several opportunities to
          venture into a new industry.
        </p>
      </div>
    </section>
  );
};

export default ExpertSection;
