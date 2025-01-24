'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const CourseDetailsPage = () => {
  const pathname = usePathname(); // Get the current URL path
  const courseID = pathname.split('/').pop(); // Extract the dynamic `courseID` from the URL

  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!courseID) return;

    const fetchCourseDetails = async () => {
      try {
        console.log(`Fetching details for courseID: ${courseID}`); // Debugging log

        const response = await fetch(`/api/coursedetails/${courseID}`);
        const result = await response.json();

        console.log('API Response:', result); // Log the response for debugging

        if (!result.success) {
          setError('Course details not found.');
          return;
        }

        setData(result.data);
      } catch (err) {
        console.error('Error fetching course details:', err); 
        setError('An error occurred while fetching course details.');
      }
    };

    fetchCourseDetails();
  }, [courseID]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  const { course, courseDetails } = data;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{course.courseName}</h1>
      <img
        src={courseDetails.firstImage}
        alt={course.courseName}
        className="mb-6 w-full rounded-lg"
      />
      <p className="text-lg mb-6">{courseDetails.aboutProgramme}</p>

      <h2 className="text-2xl font-semibold mb-4">What Will I Learn</h2>
      {courseDetails.whatWillILearn.length > 0 ? (
        <ul className="list-disc pl-6 mb-6">
          {courseDetails.whatWillILearn.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No details available</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Program Aim</h2>
      <p className="mb-6">{courseDetails.programAim || 'No details available'}</p>

      <h2 className="text-2xl font-semibold mb-4">Modules</h2>
      {courseDetails.modules.length > 0 ? (
        <ul className="list-disc pl-6 mb-6">
          {courseDetails.modules.map((module, index) => (
            <li key={index} className="mb-2">{module}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No modules available</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Career Progression</h2>
      {courseDetails.careerProgression.length > 0 ? (
        <ul className="list-disc pl-6 mb-6">
          {courseDetails.careerProgression.map((career, index) => (
            <li key={index} className="mb-2">{career}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No career progression details available</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
      {courseDetails.requirements.length > 0 ? (
        <ul className="list-disc pl-6 mb-6">
          {courseDetails.requirements.map((req, index) => (
            <li key={index} className="mb-2">{req}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mb-6">No requirements available</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Admission Details</h2>
      <p className="mb-4">{courseDetails.admission.paragraph || 'No admission details available'}</p>
      {courseDetails.admission.bulletPoints.length > 0 ? (
        <ul className="list-disc pl-6">
          {courseDetails.admission.bulletPoints.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No admission details available</p>
      )}
    </div>
  );
};

export default CourseDetailsPage;
