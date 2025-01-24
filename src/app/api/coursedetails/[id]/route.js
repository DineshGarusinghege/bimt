import dbConnect from '../../../../../lib/mongodb';
import Course from '../../../../../models/Course_Model';
import CourseDetails from '../../../../../models/CourseDetails_Model';

export async function GET(req, { params }) {
  const { id: courseID } = params; // Extract courseID from URL
  await dbConnect();

  try {
    // Check if the course exists
    const course = await Course.findOne({ courseID });
    if (!course) {
      return new Response(
        JSON.stringify({ success: false, message: 'Course not found' }),
        { status: 404 }
      );
    }

    // Check if course details exist for the same courseID
    const courseDetails = await CourseDetails.findOne({ courseID });
    if (!courseDetails) {
      return new Response(
        JSON.stringify({ success: false, message: 'Course details not found' }),
        { status: 404 }
      );
    }

    // Return both Course and CourseDetails
    return new Response(
      JSON.stringify({
        success: true,
        data: {
          course,
          courseDetails,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
