'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await fetch(`/api/services?id=${id}`, {
            method: 'DELETE',
          });
          const resJson=await res.json()
          if (resJson['status']==="success") {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            router.refresh()
          }
        } 
      });
  };

  return (
    <>
      <button
        onClick={removeTopic}
        className="border-2 w-48 bg-green-500 text-black font-bold border-green-700"
      >
        Delete
      </button>
    </>
  );
}
