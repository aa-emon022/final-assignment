import React from 'react'


export default async function feedback() {
    const res=await fetch("http://localhost:3000/api/feedback/feedbackGet",{cache:"no-store"})
    const  resJson=await res.json()

  return resJson
}
