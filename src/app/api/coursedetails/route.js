import dbConnect from '../../../../lib/mongodb';
import CourseDetails from '../../../../models/CourseDetails_Model';
import { NextResponse } from 'next/server';

// Handle GET request
export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const limit = parseInt(searchParams.get('limit'), 10) || 10;
  const search = searchParams.get('search');
  const skip = (page - 1) * limit;

  try {
    let query = {};
    if (search) {
      query = {
        $or: [
          { aboutProgramme: { $regex: search, $options: 'i' } },
          { programAim: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const courseDetails = await CourseDetails.find(query).skip(skip).limit(limit);
    const total = await CourseDetails.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: courseDetails,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      limit,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// Handle POST request
export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const courseDetails = await CourseDetails.create(body);
    return NextResponse.json({ success: true, data: courseDetails }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
