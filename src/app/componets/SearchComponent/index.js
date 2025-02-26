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
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch data on query change
    const fetchCourses = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/courses?search=${query}&page=${currentPage}&limit=20`);
            const data = await response.json();

            if (data.success) {
                setCourses(data.data);
                setTotalPages(data.totalPages);
            } else {
                console.error('Failed to fetch courses:', data.message);
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [query, currentPage]);

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

            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-top heroSectionHeight"
                style={{ backgroundImage: "url('/images/6-2.jpg')" }}

            >
                {/* Breadcrumb Section Wrapper */}
                <div className="relative max-w-[1450px] mx-auto top-[55px] px-10 py-50 bredcrumbSectionMain">
                    {/* Breadcrumb Section */}
                    <div className="relative flex w-full max-w-[1450px] gap-5 px-2 py-12 breadCrumbSubSection">
                        <nav
                            className="py-2 px-4 text-sm text-gray-700"
                            style={{
                                display: "inline-flex",
                                padding: "5px 25px",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                                background: "#FFFFFF30",
                                borderRadius: '100px'
                            }}
                        >
                            <ol className="flex space-x-2">
                                <li>
                                    <Link href="/" className="text-black breadcrumbFontWhite font-avenir">
                                        Home
                                    </Link>
                                </li>
                                <span className="text-gray-400 arroSvgCrumPadding">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[12px] h-[12px] svgRightArrowBreadCrumb"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>

                                <li>
                                    <Link href="/Search" className="breadcrumbFontWhite font-avenir">
                                        Programmes
                                    </Link>
                                </li>
                                <span className="text-gray-400 arroSvgCrumPadding">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[12px] h-[12px] svgRightArrowBreadCrumb"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.667 6.9147L4.99178 0.239632C4.83739 0.0851213 4.6313 0 4.41154 0C4.19179 0 3.98569 0.0851213 3.83131 0.239632L3.33972 0.731092C3.01985 1.05133 3.01985 1.57182 3.33972 1.89157L8.94504 7.49689L3.3335 13.1084C3.17912 13.2629 3.09387 13.4689 3.09387 13.6885C3.09387 13.9084 3.17912 14.1144 3.3335 14.269L3.82509 14.7604C3.9796 14.9149 4.18557 15 4.40533 15C4.62508 15 4.83118 14.9149 4.98556 14.7604L11.667 8.0792C11.8217 7.9242 11.9067 7.71725 11.9062 7.49726C11.9067 7.2764 11.8217 7.06958 11.667 6.9147Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                <li>
                                    <span className="breadcrumbFontWhite font-avenir">Search Results for:</span>
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
            <div className="container mt-[55px] mx-auto px-4 max-w-[1420px] mb-[110px]">
                {loading ? (
                    <div className="flex justify-center fullscreen-loader">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <>
                        {/* Filters Section - Moved to Top */}
                        <div className="bg-white shadow-md p-4 rounded-md mb-6">
                            <h2 className="text-lg font-semibold text-[#1D267D] text-avenir mb-4"
                                style={{
                                    color: "#272A5D",
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '53px',
                                    paddingLeft:'20px',
                                    paddingRight:'20px'

                                }}
                            >Filters</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:max-w-[600px] mx-auto">
                                {/* Programs Filter */}
                                <label className="text-gray-700 font-medium text-avenir"
                                    style={{
                                        color: "#272A5D",
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '53px'
                                    }}>Select your Favorite Programs</label>
                                <select className="border rounded-md p-2 w-full md:w-auto" onChange={(e) => handleFilterChange('program', e.target.value)} value={filters.program}>
                                    <option value="">All</option>
                                    {programOptions.map((program, index) => (
                                        <option key={index} value={program}>{program}</option>
                                    ))}
                                </select>
                            </div>


                        </div>

                        {/* Results Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-[#1D267D] mb-4 text-avenir"
                                style={{
                                    color: '#272A5D',

                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal',
                                }}>
                                {`${filteredCourses.length} results for '${query}'`}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredCourses.map((course) => (
                                    <div
                                        key={course._id}
                                        className="bg-white shadow-md p-4 rounded-md transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                                        onClick={() => handleViewDetails(course.courseID)}
                                    >
                                        <img
                                            src={course.courseImg}
                                            alt={course.courseName}
                                            className="w-full h-40 object-cover mb-4"
                                        />
                                        <h3
                                            className="text-lg font-semibold text-[#1D267D] text-avenir"
                                            style={{
                                                color: '#272A5D',
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

                        {/* Pagination */}
                        <div className="hadow-md p-4 rounded-md mb-6 max-w-[800px] mx-auto">
                            <div className="flex justify-center mt-8">
                                <button
                                    className={`py-2 px-4 rounded-md transition duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'bg-[#272A5D] text-white hover:bg-white hover:text-[#272A5D]'}`}
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    Previous
                                </button>
                                <span className="mx-4">{`Page ${currentPage} of ${totalPages}`}</span>
                                <button
                                    className={`py-2 px-4 rounded-md transition duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'bg-[#272A5D] text-white hover:bg-white hover:text-[#272A5D]'}`}
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                    </>
                )}
            </div>


            <style jsx>{`
  .fullscreen-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
  
  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`}</style>
        </>
    );
};

export default SearchPage;
