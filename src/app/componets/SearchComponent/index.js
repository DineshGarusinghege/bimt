'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '../../styles/Global.scss'

const SearchPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialQuery = searchParams.get('query') || ''; // Extract query from URL or set default to empty
    const [query, setQuery] = useState(initialQuery); // Local state for search query
    const [courses, setCourses] = useState([]); // Courses fetched from API
    const [filters, setFilters] = useState({
        method: '',
        level: '',
        program: '',
    });

    // Fetch data on query change
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`/api/courses?search=${query}`);
                const data = await response.json();

                if (data.success) {
                    setCourses(data.data);
                } else {
                    console.error('Failed to fetch courses:', data.message);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [query]);

    // Handle filter updates
    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // Programs filter options
    const programOptions = [
        'Diploma',
        'Higher Diploma',
        'Bachelors Degree',
        'Master Degree',
        'Doctorate Degree',
        'CMI(UK) - Management Skill Development Programme',
    ];

    // Filtered courses based on filters
    const filteredCourses = courses.filter((course) => {
        return (
            (!filters.method || course.method === filters.method) &&
            (!filters.level || course.level === filters.level) &&
            (!filters.program || course.program === filters.program)
        );
    });

    // Navigate to CourseContent page with courseID
    const handleViewDetails = (courseID) => {
        router.push(`/CourseContent/${courseID}`);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-[480px] z-0" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }}>
                <div className="relative max-w-[1430px] mx-auto top-[55px]">
                    {/* Breadcrumb Section */}
                    <div className="absolute container mx-auto px-6 lg:px-16 flex items-center h-full z-20">
                        <nav className="bg-gray-200 bg-opacity-80 py-2 px-4 rounded-lg text-sm text-gray-700" style={{ background: '#ffffff45' }}>
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="hover:underline text-white font-semibold">
                                        Home
                                    </Link>
                                </li>
                                <span className="text-gray-400">/</span>
                                <li>
                                    <Link href="/Programs" className="hover:underline text-white font-semibold">
                                        Programs
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 flex justify-center px-4 md:px-0 searchProgram">
                    <div className="inline-flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg" style={{ width: "1000px", maxWidth: "90%" }}>
                        <img src="/images/Group.svg" alt="icon" className="w-10 h-10" />
                        <div className="relative flex items-center w-full pr-4">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search your programs..."
                                className="flex-1 bg-transparent outline-none text-lg px-2 text-gray-600"
                            />
                        </div>
                        <button onClick={() => setQuery('')} className="ml-2 p-2 rounded-full hover:bg-gray-300 transition duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="container mt-[55px] mx-auto px-4 max-w-[1300px] mb-[110px]">
                <div className="py-8">
                    <p className="text-gray-600 mt-4"
                        style={{
                            color: '#272A5D',
                            fontFamily: 'Work Sans',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}
                    >
                        Search results for: <span className="font-semibold">{query}</span>
                    </p>
                </div>

                <div className="flex gap-8">
                    {/* Filters Section */}
                    <div className="w-1/4 bg-white shadow-md p-4 rounded-md">
                        <h2 className="text-lg font-semibold text-[#1D267D] mb-4"
                            style={{
                                color: "#272A5D",
                                fontFamily: 'Avenir LT Std',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '53px'
                            }}
                        >Filters</h2>
                        {/* Programs Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2"
                                style={{
                                    color: "#272A5D",
                                    fontFamily: 'Avenir LT Std',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '53px'
                                }}
                            >Programs</label>
                            <select className="w-full border rounded-md p-2" onChange={(e) => handleFilterChange('program', e.target.value)} value={filters.program}>
                                <option value="">All</option>
                                {programOptions.map((program, index) => (
                                    <option key={index} value={program}>
                                        {program}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Method Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" style={{
                                color: "#272A5D",
                                fontFamily: 'Avenir LT Std',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '53px'
                            }}>Method</label>
                            <select className="w-full border rounded-md p-2" onChange={(e) => handleFilterChange('method', e.target.value)} value={filters.method}>
                                <option value="">All</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        {/* Level Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" style={{
                                color: "#272A5D",
                                fontFamily: 'Avenir LT Std',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '53px'
                            }}>Level</label>
                            <select className="w-full border rounded-md p-2" onChange={(e) => handleFilterChange('level', e.target.value)} value={filters.level}>
                                <option value="">All</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="Postgraduate">Postgraduate</option>
                            </select>
                        </div>

                    </div>

                    {/* Results Section */}
                    <div className="w-3/4">
                        <h2
                            className="text-lg font-semibold text-[#1D267D] mb-4"
                            style={{
                                color: '#272A5D',
                                fontFamily: 'Work Sans',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal',
                            }}
                        >{`${filteredCourses.length} results for '${query}'`}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <div
                                    key={course._id}
                                    className="bg-white shadow-md p-4 rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                                    style={{
                                        transition: "all 0.3s ease",
                                    }}
                                    onClick={() => handleViewDetails(course.courseID)}
                                >
                                    <img
                                        src={course.courseImg}
                                        alt={course.courseName}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                    <h3
                                        className="text-lg font-semibold text-[#1D267D]"
                                        style={{
                                            color: '#272A5D',
                                            fontFamily: "Avenir LT Std",
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '25px',
                                        }}
                                    >
                                        {course.courseName}
                                    </h3>
                                    <p className="text-sm text-gray-500">{course.program}</p>
                                    <button
                                        className="CourseDetailsBtn mt-4 w-full bg-[#1D267D] text-white py-2 px-4 rounded-md hover:bg-[#151B54] transition duration-300 transform hover:scale-105"
                                    >
                                        <span>View Details</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div >
            </div >
        </>
    );
};

export default SearchPage;
