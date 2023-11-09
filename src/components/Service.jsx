import React from 'react';
import Link from 'next/link';
import CallApi from '@/callApi/service';
import DashboardNavBar from './Dashboard_navBar';
import RemoveBtn from '@/components/removeService';
import Footer from "@/components/footer";
export default async function Dashboard() {
  const { data } = await CallApi();

  return (
    <>
      <div className="min-h-screen" >
      
        
          <DashboardNavBar />
          <div className="text-center mt-[2rem]">
                <Link  className='  md:gap-0   md:mt-2 border-2 w-48 bg-sky-300 text-black font-bold border-sky-300' href={`/deshboard/services/addService`}>Add Service</Link></div>
        <div className='md:m-[1rem]  '>
          {data.map((t, index) => (
            <div className='flex flex-col md:flex-row   md:mt-0 md:ml-4 md:mr-3 pt-[2rem] md:w-[100%] ' key={index}>
              <div className=' shadow-lg shadow-gray-700 border-2 md:w-[75%] bg-[#EEA47F] '>
                <div className='flex justify-center   font-bold text-black sm:text-[2rem] md:text-[1.40rem] lg:text-[2rem]'>{t.title}</div>
               <div className='flex justify-center'> <hr className="border-1 border-dotted h-px mb-[3rem] w-[23rem] bg-gray-200 border-1 border-black dark:bg-gray-700"></hr></div>
                <div className='text-black mx-[1rem] lg:mx-[2rem]'>{t.counts}</div>
              </div>
              <div className='w-full mt-[2rem] md:w-1/4 md:ml-4 md:mt-3 md:mb-0 flex flex-col justify-center items-center  text-blue-500'>
                <div>
                <Link  className='flex justify-center   md:gap-0 md:mt-2 border-2 w-48 bg-green-500 text-black font-bold border-green-700' href={`/deshboard/services/editService/${t.id}`}>Edit</Link></div>

               


              <div className='flex justify-center mt-4'> <RemoveBtn id={t.id} /></div>

             

              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
}
