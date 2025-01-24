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
            {/* Container */}
            <div className="container mx-auto max-w-[1300px] px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Panel: Details */}
                <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-10 lg:mb-0">
                    <Image
                        src={selectedMember.img}
                        alt={selectedMember.name}
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-gray-300 mx-auto"
                    />
                    <h2 className="text-center font-bold mt-4 text-lg">{selectedMember.name}</h2>
                    <p className="text-center text-sm text-gray-600">{selectedMember.role}</p>
                    <p className="mt-4 text-justify text-gray-800">{selectedMember.description}</p>
                </div>

                {/* Center Section with Rotating Circle */}
                <div className="relative w-full lg:w-2/3 flex items-center justify-center">
                    {/* Rotating Circle */}
                    <motion.div
                        className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border border-gray-300"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    ></motion.div>

                    {/* Team Members */}
                    {teamMembers.map((member, index) => {
                        const angle = (360 / teamMembers.length) * index;
                        return (
                            <motion.div
                                key={member.id}
                                className="absolute"
                                style={{
                                    transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
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
        </div>
    );
}
