import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {

        courseID: {
            type: String,
            required: true,
            unique: true
        },
        program: {
            type: String,
            required: true,
            enum: [
                'Diploma',
                'Higher Diploma',
                'Bachelors Degree',
                'Master Degree',
                'Doctorate Degree',
                'CMI(UK) - Management Skill Development Programme',
            ]
        },
        courseTitle: {
            type: String,
            required: true,
        },
        courseName: {
            type: String,
            required: true,
        },
        courseImg: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Course || mongoose.model('Course', courseSchema);
