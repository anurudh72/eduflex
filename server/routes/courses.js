import express from "express"

import { createCourse, getCourses, getCourse, deleteCourse, likeCourse, updateCourse, home  } from '../controllers/courses.js'

import auth from '../middleware/auth.js'
const courseRoutes = express.Router()

// courseRoutes.get('/', home );
courseRoutes.get('/', getCourses)
courseRoutes.post('/', auth, createCourse )
courseRoutes.get('/:id', getCourse)
courseRoutes.delete('/:id', auth, deleteCourse)
courseRoutes.patch('/:id', auth, updateCourse)
courseRoutes.patch('/:id/likeCourse', auth, likeCourse)





export default courseRoutes