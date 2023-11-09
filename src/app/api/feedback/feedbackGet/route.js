import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


export async function GET(req,res){
  try{
    
    const prisma =new PrismaClient()
    const result=await prisma.feedback.findMany({
        
        orderBy:{id:'desc'}
    })
    return NextResponse.json({status:"success",data:result})
  }
catch(e){
    return NextResponse.json({status:"failed",data:e.message})
}
}
