import { Request, Response } from "express"
import { prisma } from "../config/db";

export const  getStudents = async (req:Request, res:Response)=>{
    try{
        const students = await prisma.student.findMany()
        res.json(students)
    }catch(error){
        console.log(error);
    }
}

export const  createStudent = async (req:Request, res:Response)=>{
    try{
        const student = await prisma.student.create({
            data: req.body
        })
        res.json({"msg":"student created", "student": student})
    }catch(error){
        console.log(error);
    }
}

export const getStudentById = async (req:Request, res:Response)=>{
    try{
        let student = await prisma.student.findFirst({
            where: {
                id: req.params.id
            },
            select:{
                name:true,
                age:true,
                major:true
            }
        })
        console.log(student);
        res.json(student)
    }catch(error){
        console.log(error);
    }
}
