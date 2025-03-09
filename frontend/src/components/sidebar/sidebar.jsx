/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useAuth } from "../../../contexts/authContext";
import { useCreateCategory } from "../../hooks/catagoryHooks";

export const Sidebar = ({
  menu_open,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categories, setCategories] = useState([]);
  const { user, isAuthenticated, accessToken } = useAuth();
  const createCategoryMutation = useCreateCategory(
    user,
    isAuthenticated,
    accessToken
  );

  const addCategory = () => {
    const newCategoryName = prompt("Enter a new category:");
    if (!newCategoryName) return;

    const newCategory = {
      name: newCategoryName,
      userID: user.sub,
      tasks: [],
      count: 0,
    };
    createCategoryMutation.mutate(newCategory);
    setCategories([...categories, newCategoryName]);
    console.log("Created new category:", newCategoryName);
  };
  return (
    <aside
      className={`flex flex-col bg-[#F4F3F2] shadow-xl w-[200px] min-w-[150px]
                  mb-[0%] pb-[0%] z-[2]
                  ${menu_open ? "flex-visible" : "hidden"}`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between p-3 bg-[#cdcdcd] font-bold text-[18px]">
        Categories
        <GoPlus
          className="cursor-pointer text-[28px] stroke-[.5] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200 rounded-full"
          onClick={addCategory}
        />
      </div>

      {/* Categories List */}
      <ul className="flex-1 bg-gray-200 font-semibold">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`p-3 pl-5 cursor-pointer bg-[#cdcdcd] odd:bg-[#F4F3F2] text-[16px]
              accent-black hover:bg-black/20 transition-colors duration-200
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
