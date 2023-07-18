import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        id: {
            type: String,
            unique: true,
            required: true
        },
        email: { 
            type: String,
            required : true
        },
        password: {
            type: String,
            required: true
        },
        likedCourses: {
            type: [String],
            default: []
        },
        cart: {
            type: [String],
            default: []
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        profile: {
            type: String
        }

    }
)
const Users = mongoose.model('Users', userSchema)
export default Users;