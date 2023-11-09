'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Dashboard } from '@/components/Dashboard';
import { Service } from '@/components/Service';
import { Blog } from '@/components/blog';

function Navbar() {
    const[show,setShow]=useState(false)
    const handleButton=()=>{
        setShow(!show) 
    }
  return (
    <>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full mb-4 bg-gray-800 text-sm py-4 dark:bg-white">
        <nav
          class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <Link
              class="flex-none text-xl font-semibold text-white dark:text-gray-800"
              href="/"
            >
              Home
            </Link>
            <div class="sm:hidden">
              <button
                onClick={handleButton}
                type="button"
                class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/[.25] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-dark"
                aria-controls="navbar-dark"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-dark"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              
              
            <Link
                href="/about"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                About
              </Link>
              <Link
                href="/service"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                Service
              </Link>
              <Link
                href="/blogS"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                Blog
              </Link>
              <Link
                href="/Contact"
                class="font-medium text-blue-500"
                aria-current="page"
              >
               Contact
              </Link>
              
              <Link
                href="/deshboard"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                Dashboard
              </Link>
              <Link
                href="/login"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                class="font-medium text-blue-500"
                aria-current="page"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {show && (
            <div className='flex gap-3 mt-[2rem]  flex-col  text-white text-center'>
            <Link
                href="/about"
                class="font-medium "
                aria-current="page"
              >
                About
              </Link>
              <Link
                href="/service"
                class="font-medium "
                aria-current="page"
              >
                Service
              </Link>

              <Link
                href="/blogS"
                class="font-medium "
                aria-current="page"
              >
                Blog
              </Link>

              <Link
               href="/Contact"
                class="font-medium "
                aria-current="page"
              >
                Contact 
              </Link>

              <Link
                href="/deshboard"
                class="font-medium "
                aria-current="page"
              >
                Dashboard
              </Link>
               
              <Link
                href="/login"
                class="font-medium "
                aria-current="page"
              >
                Login
              </Link>
              <Link
                href="/signUp"
                class="font-medium "
                aria-current="page"
              >
                Sign Up
              </Link>
            </div>
          )}
          
          
        </nav>
      </header>
    </>
  );
}

export default Navbar