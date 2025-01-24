'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const teamMembers = [
  { id: 1, name: 'Assad Abdelati AlAssad', role: 'General Manager', img: '/images/medium-shot-graduate-student_23-2148950577 1.png', description: 'Mr. Assad is the General Manager of the firm. He has wide and diverse experience in legal matters.' },
  { id: 2, name: 'John Doe', role: 'Designer', img: '/images/young-designer_1098-13734 1.png', description: 'John is an experienced designer with a creative eye for innovative solutions.' },
  { id: 3, name: 'Jane Smith', role: 'Engineer', img: '/images/crouse3.jpg', description: 'Jane is an engineer with expertise in modern infrastructure and systems.' },
  { id: 4, name: 'Adam Cooper', role: 'HR Specialist', img: '/images/course2.jpg', description: 'Adam oversees HR policies and ensures a productive work environment.' },
  { id: 5, name: 'Sophia Brown', role: 'Marketing Head', img: '/images/course1.jpg', description: 'Sophia leads marketing initiatives, driving brand growth and engagement.' },
  { id: 6, name: 'Michael Green', role: 'Finance Manager', img: '/images/crouse3.jpg', description: 'Michael manages financial operations and ensures sustainable business growth.' },
];

export default function TeamCircle() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Left Panel: Details */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 p-6 w-[300px] bg-white shadow-lg rounded-lg">
        <Image
          src={selectedMember.img}
          alt={selectedMember.name}
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300 mx-auto"
        />
        <h2 className="text-center font-bold mt-4">{selectedMember.name}</h2>
        <p className="text-center text-sm text-gray-600">{selectedMember.role}</p>
        <p className="mt-4 text-justify text-gray-800">{selectedMember.description}</p>
      </div>

      {/* Center Circle */}
      <div className="relative">
        <Image
          src={selectedMember.img}
          alt="Central Member"
          width={150}
          height={150}
          className="rounded-full border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-center font-bold mt-4">{selectedMember.name}</h2>
        <p className="text-center text-sm">{selectedMember.role}</p>
      </div>

      {/* Rotating Circle */}
      <div className="relative flex items-center justify-center">
        {/* Background Circle Line */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-gray-300"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        />
        {teamMembers.map((member, index) => {
          const angle = (360 / teamMembers.length) * index;
          return (
            <motion.div
              key={member.id}
              className="absolute"
              initial={{ transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)` }}
              animate={{
                transform: [
                  `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
                  `rotate(${angle + 360}deg) translate(200px) rotate(-${angle + 360}deg)`,
                ],
              }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{
                transformOrigin: 'center',
              }}
              onClick={() => setSelectedMember(member)}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className={`rounded-full border-4 shadow-md ${selectedMember.id === member.id ? 'border-blue-500' : 'border-gray-300'
                  }`}
              />
              <p className="text-center text-xs mt-2">{member.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
