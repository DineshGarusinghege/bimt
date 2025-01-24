import dbConnect from '../../../../../lib/mongodb';
import CourseDetails from '../../../../../models/CourseDetails_Model';

export async function GET(req) {
  await dbConnect();

  const { id } = req.params; // Extract the `courseID` from the URL

  try {
    const courseDetails = await CourseDetails.findOne({ courseID: id }); // Search by courseID

    if (!courseDetails) {
      return new Response(
        JSON.stringify({ success: false, message: 'CourseDetails not found' }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: courseDetails }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400 }
    );
  }
}
