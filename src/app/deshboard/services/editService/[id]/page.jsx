import EditBlog from '@/components/EditBlogs'
import React from 'react'
//import EditBlog from '@/components/EditBlogs'
//import { data } from 'autoprefixer';

const getId=async(id)=>{
  try{
    const res=await fetch(`http://localhost:3000/api/services/${id}`,{
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
  const services=await getId(id)
  console.log(services)
  const title = services.data.title;
  const counts = services.data.counts;
  console.log(title)
  console.log(counts)
  console.log(id)
  return <EditBlog id={id} title={title} counts={counts}/> 
}
