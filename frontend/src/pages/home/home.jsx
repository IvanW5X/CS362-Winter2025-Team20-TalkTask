/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import styles from "./home.module.css";
import { Tasks } from "../../components/tasks/tasks";
import { Link } from "react-router-dom";

/*
function MyTask () {
    return (
        <div className={styles.tasksquare}>
            <div className={styles.tasklabel}>
                <h2>Tasks</h2>
            </div>
            <div className={styles.tasklist}>
                <p>
                    ataeijt
                </p>
            </div>

            <div className={styles.tasklist}>
                <p>
                    ataeijt
                </p>
            </div>

            <div className={styles.tasklist}>
                <p>
                    ataeijt
                </p>
            </div>
        </div>
    );
}
*/

export const Home = () => {
    return (
        <div className={styles.curvedsquares}>
            
            <Tasks />


        </div>
    );
};