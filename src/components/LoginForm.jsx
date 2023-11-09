'use client'

import React, { useState } from 'react'
import {
  IsEmpty,
  IsEmail,
  ErrorToast,
  SuccessToast,
} from '@/utility/FromHelper'
import { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter()
  const [data, setData] = useState({ email: '', password: "" });

  const inputOnChange = (name, value) => {
    setData(data => ({
      ...data,
      [name]: value,
    }))
  }

  const formHandleSubmit = async (e) => {
    e.preventDefault()

    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required");
    } else if (IsEmpty(data.password)) {
      ErrorToast("Password Required");
    } else {

      const option = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }

      let res = await fetch("api/user/login", option);
      let ResJson = await res.json()
      console.log(ResJson)

      if (ResJson['status'] === 'success') {
        SuccessToast("Login Success")
        router.replace("/deshboard");

      } else {

        ErrorToast("Email And Password not match")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={formHandleSubmit}>
          <label className="block mb-2">Email</label>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-4"
            type='email'
            placeholder='Enter Your Email'
            onChange={(e) => { inputOnChange("email", e.target.value) }}
          />
          <label className="block mb-2">Password</label>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-4"
            type='password'
            placeholder='Enter Your Password'
            onChange={(e) => { inputOnChange("password", e.target.value) }}
          />
          <input
            type="submit"
            value="Login"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}
