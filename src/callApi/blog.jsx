import React from 'react'

export default async function show() {
    const res=await fetch("http://localhost:3000/api/topic",{cache:"no-store"})
    const  resJson=await res.json()

  return resJson
}
