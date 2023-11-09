import { PrismaClient } from "@prisma/client";  
import { NextResponse } from "next/server";

import { CreateToken } from "@/utility/JWTTokenHelper"; 
export async function POST(req,res){
    try{
        let reqBody=await req.json();
        let prisma = new PrismaClient()
        let result =await prisma.user.findMany({
             where:reqBody
        })
            
        if (result.length===0){
              return NextResponse.json({status:fail,data:result});  
        }
        else{
            let token=await CreateToken(result["email"],result["id"]);
            const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

            const cookiesString = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
            return NextResponse.json(
                { status: "success", data: token },
                { status: 200, headers: { "set-cookie": cookiesString} }
              );
        }
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: e.toString() });
      }
}

export async function GET(req,res) {
    const prisma =new PrismaClient()
    const Result = await prisma.user.findMany()
    return  NextResponse.json({status:"success",data:Result})
}