import EditBlog from '@/components/EditBlogs'
import React from 'react'
//import EditBlog from '@/components/EditBlogs'
//import { data } from 'autoprefixer';

const getId=async(id)=>{
  try{
    const res=await fetch(`http://localhost:3000/api/topic/${id}`,{
      cache:"no-store",
    })
    const resJson=await res.json()
    if(!resJson["status"]){
      throw new Error("failed fetch")
    }
    console.log(resJson)
    return resJson
    
  }
  catch(e){

  }
}
export default async function page({params}) {
  const {id}=params
  console.log(id)
  const topic=await getId(id)
  console.log(topic)
  const title = topic.data.title;
  const des = topic.data.des;
  console.log(title)
  console.log(des)
  return <EditBlog id={id} title={title} des={des}/> 
}
