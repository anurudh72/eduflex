import mongoose, { mongo } from "mongoose"

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
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