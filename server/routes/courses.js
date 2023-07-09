import express from "express"

import { createCourse, getCousrses, home  } from '../controllers/courses.js'

const router = express.Router()

router.get('/', home );
router.get('/courses', getCousrses)
router.post('/courses', createCourse )



export default router