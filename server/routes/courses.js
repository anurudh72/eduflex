import express from "express"

import { createCourse, getCourses, home  } from '../controllers/courses.js'

const router = express.Router()

// router.get('/', home );
router.get('/', getCourses)
router.post('/', createCourse )



export default router