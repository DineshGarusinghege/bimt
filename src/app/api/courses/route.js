import dbConnect from '../../../../lib/mongodb';
import Course from '../../../../models/Course_Model';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 6;
  const skip = (page - 1) * limit;

  try {
    let query = {};
    if (search) {
      query = {
        $or: [
          { courseID: { $regex: search, $options: 'i' } },
          { courseTitle: { $regex: search, $options: 'i' } },
          { courseName: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const courses = await Course.find(query).skip(skip).limit(limit);
    const total = await Course.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: courses,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}



// import dbConnect from '../../../../lib/mongodb';
// import Course from '../../../../models/Course_Model';
// import { NextResponse } from 'next/server';

// export async function GET(req) {
//   await dbConnect();
//   const { searchParams } = new URL(req.url);
//   const search = searchParams.get('search');

//   try {
//     let query = {};
//     if (search) {
//       query = {
//         $or: [
//           { courseID: { $regex: search, $options: 'i' } },
//           { courseTitle: { $regex: search, $options: 'i' } },
//           { courseName: { $regex: search, $options: 'i' } },
//         ],
//       };
//     }

//     // Fetch all courses without a limit
//     const courses = await Course.find(query);
//     const total = courses.length;

//     return NextResponse.json({
//       success: true,
//       data: courses,
//       totalItems: total,
//       totalPages: 1, // No pagination when fetching all items
//       currentPage: 1,
//     });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//   }
// }

// export async function POST(req) {
//   await dbConnect();
//   const body = await req.json();

//   try {
//     const { courseID, program, courseTitle, courseName, courseImg } = body;

//     if (!courseID || !program || !courseTitle || !courseName || !courseImg) {
//       return NextResponse.json(
//         { success: false, message: 'All fields, including courseID, are required.' },
//         { status: 400 }
//       );
//     }

//     const existingCourse = await Course.findOne({ courseID });
//     if (existingCourse) {
//       return NextResponse.json(
//         { success: false, message: 'A course with this courseID already exists.' },
//         { status: 400 }
//       );
//     }

//     const course = await Course.create(body);
//     return NextResponse.json({ success: true, data: course }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//   }
// }
