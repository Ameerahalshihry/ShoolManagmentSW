import { Router } from "express";
import { getTeachers, createTeacher, getTeacherById} from "../controller/teacher.controller";
import validate from "../middleware/validate";
// import { Movietype } from "../schema.zod/movie.zod";

const router= Router()

router.get('/', getTeachers)
// router.post('/', validate(Movietype) ,createMovie)
router.post('/', createTeacher)
router.get('/:id', getTeacherById)

export default router