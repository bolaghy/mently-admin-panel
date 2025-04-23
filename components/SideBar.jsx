import React from "react";
import TopBar from "./TopBar";
import { GoSidebarExpand } from "react-icons/go";
import { TbSmartHome } from "react-icons/tb";



const SideBar = ({ children }) => {
  return (
    <div className="flex justify-start items-start bg-gray-400 w-full min-h-screen ">
        <div className="flex justify-start items-start">
        <aside className="bg-[#340260] rounded-lg w-60 p-4 h-screen">
            <ul>
                <li className="flex justify-start items-center text-white mb-16">
                <img src="/images/logo 1.png" alt="Techrity Logo" className="w-8 h-8 mr-2" />
                    <p className="text-2xl font-meduim mr-12">techrity</p>
                    < GoSidebarExpand className="  w-6 h-6"/>
                </li>
                <li className="flex justify-start items-center ml-12 hover:rounded-b-lg hover:border-b-white hover:cursor-pointer  text-white mb-8">
                <TbSmartHome className="  w-5 h-5 mr-3"/>
                <p className="text-sm font-light ">Dashboard</p>
                    
                </li>
            </ul>

        </aside>  
        <div className="flex-1 justify-start items-end">
            <TopBar /> 

        <main className="">
            {children}</main>
        </div>
        </div>
        
     
    </div>
  );
};

export default SideBar;
