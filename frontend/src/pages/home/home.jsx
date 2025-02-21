/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React from "react";
import { TaskList } from "../../components/tasklist/tasklist";
import { TasksManagement } from "../../components/taskma/taskma";

import { Sidebar } from "../../components/sidebar/sidebar";
import { Calendar } from "../../components/calendar/calendar";
import { Navbar } from "../../components/navbar/navbar";
import { TopBar } from "../../components/topbar/topbar"
//import { Link } from "react-router-dom";


/* add <Sidebar /> curved squares class to see the sidebar */
/* Make sure to add in this order for proper spacing:
<Navbar />
<Sidebar />
*/
export const Home = () => {
    return (
        <div className="">
            <TopBar/>
            {/* <Navbar/>
            <Sidebar/>
            <Calendar />
            <TaskList />
            <TasksManagement/> */}
        </div>
    );
};
