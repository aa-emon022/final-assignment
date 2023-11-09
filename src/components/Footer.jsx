import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center ">
    <div className=" h-[3rem]">
    <p className="">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
    </div>
    </footer>
  );
};

export default Footer;