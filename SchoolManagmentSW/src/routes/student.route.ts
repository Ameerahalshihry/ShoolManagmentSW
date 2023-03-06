import { Router } from "express";
import { getStudents, createStudent, getStudentById} from "../controller/student.controller";
import validate from "../middleware/validate";
// import { Movietype } from "../schema.zod/movie.zod";

const router= Router()

router.get('/', getStudents)
// router.post('/', validate(Movietype) ,createMovie)
router.post('/', createStudent)
router.get('/:id', getStudentById)

export default router