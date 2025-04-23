import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";



const TopBar = () => {
  return (
    <div className="bg-white w-full h-16 flex justify-end items-center p-4 shadow-md">
      <IoMdNotificationsOutline className="w-5 h-5 mr-3" />
     
    <div className="flex justify-center items-center ">
       <img src="/images/logo 2.png" alt="Techrity Logo" className="w-12 h-12 mr-2" />
      <span className="flex flex-col justify-center items-start">
      <p className="text-sm font-meduim mr-10">Techrity Foun...</p>
      <p className="text-sm font-extralight ">Member</p>
      </span> 
      <img src="/images/dropdown.png" alt="dropdown"className=" w-6 h-6 mr-2"/>
    </div>
     
    </div> 
  );
};

export default TopBar;
