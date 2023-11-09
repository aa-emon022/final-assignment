import Image from 'next/image'
import Photo from '/public/about.jpg'
import React from "react";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
const AboutPage = () => {
    return (
     <>
     <Navbar/>
         <div className="flex items-center justify-center h-screen">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <Image src={Photo} width={500} height={500} alt="Album" />
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
<Footer/>

     </>
    );
  };
  
  export default AboutPage;
  
