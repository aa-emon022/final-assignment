
import {cookies} from "next/headers";



export async function GET(req,res) {
    cookies().delete('token')
    return NextResponse.json(
        {status:true,message:"Request Completed"}
    )
}