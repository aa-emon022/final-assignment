import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

export async function POST(req,res) {
    try{
        let reqBody=await req.json();
         reqBody.otp="@#SSD&*747439#4A"
         const prisma =new PrismaClient()
         const Result= await prisma.user.create({
            data:reqBody
         })
         return  NextResponse.json({status:"success",data:Result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e.message})
    }
}

export async function GET(req,res){
    const prisma =new PrismaClient()
    const Result = await prisma.user.findMany()
    return  NextResponse.json({status:"success",data:Result})
}