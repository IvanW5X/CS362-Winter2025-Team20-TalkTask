/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/
import { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import axios from "axios";
import { VITE_BACKEND_URL, AUTH0_AUDIENCE } from "../../../utils/variables.js"
import { useAuth0 } from "@auth0/auth0-react";

export const Sidebar = ({ menu_open, selectedCategory, setSelectedCategory }) => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [categories, setTasks] = useState([]);

  const addCategory = () => {
    const newCategory = prompt("Enter a new category:");
    if (newCategory) setTasks([...categories, newCategory]);
  };

  return (
    <aside
      className={`flex flex-col bg-[#F4F3F2] shadow-xl w-[200px] min-w-[150px]
                  mb-[0%] pb-[0%] z-[2]
                  ${menu_open ? "flex-visible" : "flex hidden"}`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between p-3 bg-[#cdcdcd] font-bold text-[18px]">
        Tasks
        <GoPlus
          className="cursor-pointer text-[24px] stroke-[.5]"
          onClick={addCategory}
        />
      </div>

      {/* Categories List */}
      <ul className="flex-1 bg-gray-200 font-semibold">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`p-3 pl-5 cursor-pointer bg-[#cdcdcd] hover:bg-black/20 odd:bg-[#F4F3F2] text-[16px]
              accent-black
              ${selectedCategory === category ? "font-bold underline" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};
