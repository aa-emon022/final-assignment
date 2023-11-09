import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(req,res){
   // let id =params
   const id=req.url.split('services/')[1]
   
    const prisma=new PrismaClient()
    const result=await prisma.post.findUnique({
        where:{id:parseInt(id)}
    })

    return NextResponse.json({status:"success ",data:result})
}




