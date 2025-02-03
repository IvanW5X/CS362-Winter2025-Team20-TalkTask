/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className={styles.curvedsquares}>
            <h1>Home Page</h1>
            
            <button>
                <Link to="/navbar">Go to Navbar</Link>
            </button>
            <br />

            <button>
                <Link to="/tasks">Tasks</Link>
            </button>
            <br />

            <button>
                <Link to="/about">About Page</Link>
            </button>
            <br />

        </div>
    );
};
