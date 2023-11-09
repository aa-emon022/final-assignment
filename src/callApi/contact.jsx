import React from 'react'


export default async function contact() {
    const res=await fetch("http://localhost:3000/api/contact/contactGet",{cache:"no-store"})
    const  resJson=await res.json()

  return resJson
}
