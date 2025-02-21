/********************************************************************
 * File Name: navbar.jsx
 * Date: 1/26/2025
 * Description: JSX file for navbar component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./navbar.module.css";
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
        
        <ul className={styles.navbarList}>
          <ul className={`${styles.subMenu} ${showItems ? styles.show : ""}`}>
            <li className={styles.navbarItem}>page 1</li>
            <li className={styles.navbarItem}>page 2</li>
            <li className={styles.navbarItem}>page 3</li>
          </ul>
        </ul>
      </nav>
    </>
  );
};
