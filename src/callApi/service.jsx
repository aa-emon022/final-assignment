import React from 'react'

export default async function service() {
    const res=await fetch("http://localhost:3000/api/services",{cache:"no-store"})
    const  resJson=await res.json()

  return resJson
}
