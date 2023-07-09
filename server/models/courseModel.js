// import data from 'emacs/src/data';
import mongoose from 'mongoose'
console.log('fuf')
const courseSchema = mongoose.Schema(
    {
        uid: {
            type: String
        },
        title: {
            type: String,
            required: [true, "Please enter a course name"]
        },
        instructor: {
            type: String,
            required: true
        },
        duration: {
            type: mongoose.Schema.Types.Mixed,
            default: { hours: 0, minutes: 0 },
        },
        tags: {
            type: [String],
            default: [],
        }, 

        testimonials: {
            type: [String],
            default: [],
        },
        views: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            default: "https://youthincmag.com/wp-content/uploads/2019/03/NILIS-University-of-Colombo.jpg",
            required: false,
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        courseURL: {
            type: String,

        },
        level: {
            type: String,
            enum: ['easy', 'medium', 'hard'],
            default: 'medium'
        },
        topicsCovered: {
            type: [String],
            default: []
        },
        outcome: {
            type: String
        }
    }
)

const Courses = mongoose.model('Courses', courseSchema);

export default Courses;