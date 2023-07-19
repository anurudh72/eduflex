import express from "express"

import { createCourse, getCourses, getCourse, deleteCourse, likeCourse, updateCourse, home  } from '../controllers/courses.js'

import auth from '../middleware/auth.js'
const courseRoutes = express.Router()

// courseRoutes.get('/', home );
courseRoutes.get('/', getCourses)
courseRoutes.post('/', createCourse )
courseRoutes.get('/:id', getCourse)
courseRoutes.delete('/:id',  deleteCourse)
courseRoutes.patch('/:id',  updateCourse)
courseRoutes.patch('/likeCourse', likeCourse)





export default courseRoutes