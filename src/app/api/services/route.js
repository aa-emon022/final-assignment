import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
       
         const prisma =new PrismaClient()
         const Result= await prisma.post.create({
            data:reqBody
         })
         console.log("create",Result)
         return  NextResponse.json({status:"success",data:Result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.message})
    }
}

export async function GET(req,res){
    const prisma=new PrismaClient()
    const result=await prisma.post.findMany({})

    return NextResponse.json({status:"success ",data:result})
}

export async function DELETE(req,res){
    try{
     const id =parseInt(req.nextUrl.searchParams.get("id"));
     const prisma=new PrismaClient()
     const result= await prisma.post.delete({
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
        let reqBody  = await req.json();
     const result= await prisma.post.update({
        where: { id: parseInt(serviceID) },
        data: reqBody,
     })
       return NextResponse.json({status:"success",data:result})
    }
 catch(e){
     return NextResponse.json({status:"failed",data:e.message})
 }
 }