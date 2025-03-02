/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { TaskList } from "../../components/tasklist/task-list";
// import { TasksManagement } from "../../components/taskma/taskma";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Calendar } from "../../components/calendar/calendar";
import { TopBar } from "../../components/topbar-user-page/topbar";

export const Home = () => {
    const [menu_open, set_menu_state] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null); // Category state

    return (
        <div className="flex-col">
            <TopBar menu_open={menu_open} set_menu_state={set_menu_state} />
                <div className="flex">
                    <Sidebar 
                    menu_open={menu_open} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                    />
                <div className="flex flex-col items-center w-full bg-white h-[calc(100vh-95px)]">
                    <Calendar />
                    <div className="flex flex-row justify-start">
                        <TaskList selectedCategory={selectedCategory} />
                        <div className="mt-[40px]">akjshd</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
