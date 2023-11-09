'use client'
import React, { useState } from 'react'
import {
    IsEmpty,
    IsEmail,
    ErrorToast,
    SuccessToast,
} from '@/utility/FromHelper'
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const router = useRouter();

    const inputOnChange = (name, value) => {
        setData(data => ({
            ...data,
            [name]: value
        }));
    }

    const formInputValid = async (e) => {
        e.preventDefault();

        if (IsEmpty(data.email) || IsEmail(data.email)) {
            ErrorToast("Valid Email & Password Address Required");
        } else {
            const options = {
                method: "POST",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }

            const Res = await fetch("api/user/registration", options);
            const resJson = await Res.json();

            if (resJson["status"] === "success") {
                SuccessToast("Sign up success");
                router.replace('/login');
            } else {
                ErrorToast("Please sign up");
            }
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
                    <Toaster position="top-center" reverseOrder={false} />
                    <form onSubmit={formInputValid}>
                        <label className="block mb-2">First Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => { inputOnChange("firstName", e.target.value) }}
                        />

                        <label className="block mb-2">Last Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) => { inputOnChange("lastName", e.target.value) }}
                        />

                        <label className="block mb-2">Email</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            type="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => { inputOnChange("email", e.target.value) }}
                        />

                        <label className="block mb-2">Password</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            type="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => { inputOnChange("password", e.target.value) }}
                        />

                        <button
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
