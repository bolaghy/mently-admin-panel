"use client";
import React, { useState } from "react";
import TopBar from "./TopBar";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { 
  TbSmartHome, 
  TbCalendarEvent,
  TbUsers,
  TbMessage,
  TbCoin,
  TbAward,
  TbChartBar,
  TbSettings,
  TbLogout
} from "react-icons/tb";

const SideBar = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <TbSmartHome className="w-5 h-5" /> },
    { name: "Programs", icon: <TbCalendarEvent className="w-5 h-5" /> },
    { name: "Activities", icon: <TbCalendarEvent className="w-5 h-5" /> },
    { name: "Users", icon: <TbUsers className="w-5 h-5" /> },
    { name: "Forums", icon: <TbMessage className="w-5 h-5" /> },
    { name: "Finances", icon: <TbCoin className="w-5 h-5" /> },
    { name: "Rewards", icon: <TbAward className="w-5 h-5" /> },
    { name: "Analytics", icon: <TbChartBar className="w-5 h-5" /> },
    { name: "Settings", icon: <TbSettings className="w-5 h-5" /> },
    { name: "Log Out", icon: <TbLogout className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 w-full min-h-screen">
      {/* Mobile Top Bar with Toggle Button */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#340260] text-white">
        <div className="flex items-center">
          <img src="/images/logo 1.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-medium">techrity</span>
        </div>
        <button 
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <GoSidebarCollapse className="w-6 h-6" />
          ) : (
            <GoSidebarExpand className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          bg-[#340260] text-white
          ${isCollapsed ? "w-20" : "w-60"} 
          ${isMobileMenuOpen ? "block" : "hidden"} 
          md:block
          transition-all duration-300
          fixed md:static
          h-full z-10
        `}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Desktop Header with Toggle Button */}
          <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} mb-8`}>
            {!isCollapsed && (
              <div className="flex items-center">
                <img src="/images/logo 1.png" alt="Logo" className="w-8 h-8 mr-2" />
                <span className="text-xl font-medium">techrity</span>
              </div>
            )}
            <button 
              onClick={toggleSidebar}
              className="text-white hover:text-white/80 transition-colors"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <GoSidebarExpand className="w-6 h-6" />
              ) : (
                <GoSidebarCollapse className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`
                  flex items-center 
                  mb-4 rounded-lg
                  hover:border-2 hover:border-white hover:cursor-pointer
                  ${selectedItem === item.name ? "bg-white text-[#340260]" : ""}
                  ${isCollapsed ? "justify-center p-3" : "p-3 mx-2"}
                  transition-all duration-200
                `}
                onClick={() => {
                  setSelectedItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className={`${isCollapsed ? "" : "mr-3"}`}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-sm font-light truncate">{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SideBar;