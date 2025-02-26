"use client";
import React from "react";
import { motion } from "framer-motion";
import "../../styles/Global.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExpertSection = () => {
  return (
    <div className="max-w-[1450px] mx-auto section-about ExpertSectionMain mt-[180px]">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1450px] mx-auto gap-6">
        {/* Card 1 */}
        <motion.div
          className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
            <img src="/images/Group.png" alt="Learning Icon" width={51} height={50} />
            <h2 className="font-semibold text-lg text-white bg-[#9F3181] px-4 py-6 CardExert">
              Expert Learning
            </h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            Our lectures teach you a great deal about your chosen industry or area of study. Learning
            from them exposes you to their vast expertise, which can benefit you in your future career.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800 cardTwo"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] cardWidth">
            <img src="/images/skill-development 1.png" alt="Community Icon" width={51} height={50} />
            <h2 className="font-semibold text-lg text-[#fff] bg-[#5DB7E0] px-4 py-6 CardExert">
              Skill Development
            </h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            BIMT Campus gives you the opportunity to major in a particular field. This means you have
            the opportunity to gain industry-specific skills and knowledge.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative flex flex-col items-start p-6 border border-gray-300 border-b-4 border-red-800 ThirdCard"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute -top-6 left-4 flex items-center gap-2 bg-[#FFFFFF] px-3 py-2 cardWidth">
            <img src="/images/mentorship 1.png" alt="Integrity Icon" width={51} height={50} />
            <h2 className="font-semibold text-lg text-white bg-[#D86027] px-4 py-6 CardExert">
              Career Switch Opportunities
            </h2>
          </div>
          <p className="text-gray-500 text-base mt-10">
            Since BIMT offers a wide variety of programs, students may have several opportunities to
            venture into a new industry.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ExpertSection;
