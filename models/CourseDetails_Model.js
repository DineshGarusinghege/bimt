import mongoose from 'mongoose';

const courseDetailsSchema = new mongoose.Schema(
  {
    courseID: {
      type: String,
      ref: 'Course',
      required: true,
    },
    whatWillILearn: {
      type: [String],
      required: true,
    },
    aboutProgramme: {
      type: String,
      required: true,
    },
    firstImage: {
      type: String,
      required: true,
    },
    secondImage: {
      type: String,
      required: true,
    },
    programAim: {
      type: String,
      required: true,
    },
    modules: {
      type: [String],
      required: true,
    },
    careerProgression: {
      type: [String],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    admission: {
      paragraph: {
        type: String,
        required: true,
      },
      bulletPoints: {
        type: [String],
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.CourseDetails || mongoose.model('CourseDetails', courseDetailsSchema);
