import { Request, Response } from "express"
import { prisma } from "../config/db";

export const  getTeachers = async (req:Request, res:Response)=>{
    try{
        const teachers = await prisma.teacher.findMany()
        res.json(teachers)
    }catch(error){
        console.log(error);
    }
}

export const  createTeacher = async (req:Request, res:Response)=>{
    try{
        const teacher = await prisma.teacher.create({
            data: req.body
        })
        res.json({"msg":"teacher created", "teacher": teacher})
    }catch(error){
        console.log(error);
    }
}

export const getTeacherById = async (req:Request, res:Response)=>{
    try{
        let teacher = await prisma.teacher.findFirst({
            where: {
                id: req.params.id
            },
            select:{
                name:true,
            }
        })
        console.log(teacher);
        res.json(teacher)
    }catch(error){
        console.log(error);
    }
}
