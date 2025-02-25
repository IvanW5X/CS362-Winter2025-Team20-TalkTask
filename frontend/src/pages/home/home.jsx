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

    // sidebar
    const [menu_open, set_menu_state] = useState(true); 

    return (
        <div>
            <TopBar menu_open={menu_open} set_menu_state={set_menu_state} />
            <Sidebar menu_open={menu_open}/>

            {/* redo calendar later */}
            <Calendar />

            <TaskList menu_open={menu_open}/>
            <TasksManagement  menu_open={menu_open}/>
        </div>
    );
};
