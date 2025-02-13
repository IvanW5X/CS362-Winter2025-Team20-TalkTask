/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./home.module.css";
import { Tasks } from "../../components/tasks/tasks";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Calendar } from "../../components/calendar/calendar";
//import { Link } from "react-router-dom";


/* add <Sidebar /> curved squares class to see the sidebar */
/* Make sure to add in this order for proper spacing:
<Navbar />
<Sidebar />
*/
export const Home = () => {
    return (
        <div className={styles.curvedsquares}>
            <Calendar />
            <Tasks />
        </div>
    );
};
