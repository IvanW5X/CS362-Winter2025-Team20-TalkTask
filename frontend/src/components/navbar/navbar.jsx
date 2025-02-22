/********************************************************************
 * File Name: navbar.jsx
 * Date: 1/26/2025
 * Description: JSX file for navbar component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // For navigation

import { IoMdMenu } from "react-icons/io";


export const Navbar = () => {
  const [showItems, setShowItems] = useState(false); // state to toggle visibility of items

  const toggleItems = () => {
    setShowItems(!showItems); // Toggle visibility of items
  };

  return (
    <>
      <nav className="absolute flex items-center">
        <IoMdMenu className="text-white text-[50px] cursor-pointer ml-[25px]" 
                  onClick={toggleItems}/>
        
        {/* 
          implement collapse sidebar when using navbar.
          improve navbar look but function is fine for now.
        */}

        
        <ul className="relative">
          <ul className={`${showItems ? "block" : "hidden"}
              absolute w-[200px] z-[1000] mt-[13px] ml-[10px] cursor-pointer bg-[#e0e0e0]
          `}>
            <li className="p-[10px]">Profile</li>
            <li className="p-[10px]">About</li>
            <li className="p-[10px]">Settings</li>
          </ul>
        </ul>
      </nav>
    </>
  );
};
