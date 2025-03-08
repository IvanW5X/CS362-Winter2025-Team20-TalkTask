/********************************************************************
 * File Name: home.jsx
 * Date: 1/26/2025
 * Description: JSX file for user home component
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { TaskList } from "../../components/tasklist/task-list";
import { TasksManagement } from "../../components/task-management/task-management";
import { Sidebar } from "../../components/sidebar/sidebar";
import { CalendarBar } from "../../components/calendar/calendar";
import { TopBar } from "../../components/topbar-user-page/topbar";
import { useAuth } from "../../../contexts/authContext";

export const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const [menu_open, set_menu_state] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filters, setFilters] = useState({
    selectedPriorities: [],
    sortOrder: "lowToHigh",
  });

  if (!isAuthenticated || !user) {
    return (
      <div className="bg-white text-red-500 text-lg">
        Access denied: You are not authorized to access this page.
      </div>
    );
  }
  return (
    <div className="flex-col bg-[#dedede]">
      <TopBar menu_open={menu_open} set_menu_state={set_menu_state} />
      <div className="flex min-h-[calc(100vh-80px)]">
        <Sidebar
          menu_open={menu_open}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="flex flex-col w-full">
          <div className="self-center">
            <CalendarBar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className={`flex md:flex-row mt-[40px] ${ menu_open ? 'ml-[2%]' : 'self-center' } w-[70%]`}>
          <TaskList
              selectedCategory={selectedCategory}
              selectedPriorities={filters.selectedPriorities}
              sortOrder={filters.sortOrder}
              selectedDate={selectedDate}
            />
            <TasksManagement setFilters={setFilters} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};
