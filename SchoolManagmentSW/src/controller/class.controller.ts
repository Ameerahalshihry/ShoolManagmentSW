import { Request, Response } from "express"
import { prisma } from "../config/db";

export const  getClasses = async (req:Request, res:Response)=>{
    try{
        const classes = await prisma.class.findMany()
        res.json(classes)
    }catch(error){
        console.log(error);
    }
}

export const  createClass = async (req:Request, res:Response)=>{
    try{
        const _class = await prisma.class.create({
            data: req.body
        })
        res.json({"msg":"class created", "class": _class})
    }catch(error){
        console.log(error);
    }
}

export const getClassById = async (req:Request, res:Response)=>{
    try{
        let _class = await prisma.class.findFirst({
            where: {
                id: req.params.id
            },
            select:{
                name:true,
                teacher:{
                    select:{
                        name:true,
                    },
                },
                students:{
                    select:{
                        studentId: true
                        }
                    }
            }
        })
        console.log(_class);
        res.json(_class)
    }catch(error){
        console.log(error);
    }
}
