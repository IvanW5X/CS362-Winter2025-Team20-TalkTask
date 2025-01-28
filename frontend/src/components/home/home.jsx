/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./home.module.css";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "./sidebar/sidebar";
import { Tasks } from "./tasks/tasks";

export const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <Navbar />
            <Sidebar />
            <Tasks />
        </div>
    );
};
