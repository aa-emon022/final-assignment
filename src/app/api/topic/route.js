//import { PrismaClient } from "@prisma/client"
import { PrismaClient } from "@prisma/client"

import { NextResponse } from "next/server"

export async function POST(req,res){
    const {title,des}= await req.json()
    const prisma =new PrismaClient()
    const  result=await prisma.topic.create({
        data:{title,des}
    })
    return NextResponse.json({status:"success",data:result})
}

export async function GET(req,res){
    const prisma=new PrismaClient()
    const result=await prisma.topic.findMany({})

    return NextResponse.json({status:"success ",data:result})
}



export async function DELETE(req,res){
   try{
    const id =parseInt(req.nextUrl.searchParams.get("id"));
    const prisma=new PrismaClient()
    const result= await prisma.topic.delete({
       where:{ id: id }
    })
      return NextResponse.json({status:"success",data:result})
   }
catch(e){
    return NextResponse.json({status:"failed",data:e.message})
}
}

export async function PUT(req,res){
    try{
        let { searchParams } = new URL(req.url);
        let serviceID = searchParams.get("id");
        //const =await req.json()
        const prisma=new PrismaClient()
        let { newTitle:title, newDes:des }  = await req.json();
     const result= await prisma.topic.update({
        where: { id: parseInt(serviceID) },
        data: {title,des},
     })
       return NextResponse.json({status:"success",data:result})
    }
 catch(e){
     return NextResponse.json({status:"failed",data:e.message})
 }
 }
 

