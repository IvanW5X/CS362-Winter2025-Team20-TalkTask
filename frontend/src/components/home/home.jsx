/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./home.module.css";
import { Tasks } from "./tasks/tasks";
import { Sidebar } from "./sidebar/sidebar";

export const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Sidebar />
            <Tasks />
        </div>
    );
};
