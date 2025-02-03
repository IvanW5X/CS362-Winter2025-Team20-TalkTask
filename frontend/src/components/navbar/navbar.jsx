/********************************************************************
 * File Name: navbar.jsx
 * Date: 1/26/2025
 * Description: JSX file for navbar component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom"; // For navigation

export const Navbar = () => {
  const [apiLinks, setApiLinks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //change to correct api, just basic stuff rn
      .then((response) => response.json())
      .then((data) => setApiLinks(data.map((item) => ({ id: item.id, name: item.title })))) //store
      .catch((error) => console.error("Error fetching navigation links:", error)); //error handling
  }, []);

  return (
    <nav className={styles.navbar}>
      <h2>Navbar</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Navigation for API */}
        {apiLinks.map((link) => (
          <li key={link.id}>
            <Link to={`/dynamic/${link.id}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
