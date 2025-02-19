/********************************************************************
 * File Name: navbar.jsx
 * Date: 1/26/2025
 * Description: JSX file for navbar component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom"; // For navigation

export const Navbar = () => {
  const [showItems, setShowItems] = useState(false); // state to toggle visibility of items

  const toggleItems = () => {
    setShowItems(!showItems); // Toggle visibility of items
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleItems}></div>
      
      <ul className={styles.navbarList}>
        <ul className={`${styles.subMenu} ${showItems ? styles.show : ""}`}>
          <li className={styles.navbarItem}>page 1</li>
          <li className={styles.navbarItem}>page 2</li>
          <li className={styles.navbarItem}>page 3</li>
        </ul>
      </ul>
    </nav>
  );
};
