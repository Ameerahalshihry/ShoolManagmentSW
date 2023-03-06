import { Router } from "express";
import { getClasses, createClass, getClassById} from "../controller/class.controller";
import validate from "../middleware/validate";
// import { Movietype } from "../schema.zod/movie.zod";

const router= Router()

router.get('/', getClasses)
// router.post('/', validate(Movietype) ,createMovie)
router.post('/', createClass)
router.get('/:id', getClassById)

export default router