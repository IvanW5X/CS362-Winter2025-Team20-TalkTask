/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import React , { useState }from "react";
import { TaskList } from "../../components/tasklist/tasklist";
import { TasksManagement } from "../../components/taskma/taskma";

import { Sidebar } from "../../components/sidebar/sidebar";
import { Calendar } from "../../components/calendar/calendar";
import { TopBar } from "../../components/topbar/topbar"
//import { Link } from "react-router-dom";

export const Home = () => {

    return (
        <div>
            <TopBar />
            <Sidebar/>

            {/* redo calendar later */}
            <Calendar />

            <TaskList />
            {/* <TasksManagement/> */}
        </div>
    );
};
