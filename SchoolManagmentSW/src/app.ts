import express, {Application} from 'express'
import studentRouter from './routes/student.route'
import teacherRouter from './routes/teacher.route'
import classRouter from './routes/class.route'

const app:Application = express()
const port = 3004

app.use(express.json());

app.use('/students', studentRouter)
app.use('/teachers', teacherRouter)
app.use('/classes', classRouter)

app.listen(port,()=>console.log(`express started on port ${port}`));