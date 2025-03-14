/********************************************************************
 * File Name: sidebar.jsx
 * Date: 1/26/2025
 * Description: Sidebar on Main Page
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { RiCloseLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { useAuth } from "../../../contexts/authContext";
import {
  useCreateCategory,
  useGetCategories,
  useDeleteCategory,
} from "../../hooks/catagoryHooks";

export const Sidebar = ({
  menu_open,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { user, isAuthenticated, accessToken } = useAuth();
  const createCategoryMutation = useCreateCategory(
    user,
    isAuthenticated,
    accessToken
  );
  const { data: categories = [] } = useGetCategories(
    user,
    isAuthenticated,
    accessToken
  );
  const deleteCategoryMutation = useDeleteCategory(
    user,
    isAuthenticated,
    accessToken
  );
  const handleAddCategory = () => {
    const newCategoryName = prompt("Enter a new category:");
    if (!newCategoryName) return;

    const newCategory = {
      name: newCategoryName,
      userID: user.sub,
    };
    createCategoryMutation.mutate({ newCategory });
  };
  const handleDeleteCategory = async (categoryName, userID) => {
    const confirmResult = confirm(
      "Deleting category will also delete it's associated tasks.\nContinue?"
    );
    if (!confirmResult) return;

    deleteCategoryMutation.mutate({
      categoryName: categoryName,
      userID: userID,
    });
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
          onClick={() => handleAddCategory()}
        />
      </div>

      {/* Categories List */}
      <ul className="flex-1 bg-gray-200 font-semibold">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 pl-5 cursor-pointer bg-[#cdcdcd] odd:bg-[#F4F3F2] text-[16px]
              ${
                selectedCategory === category.name ? "font-bold underline" : ""
              }`}
          >
            <p
              className="text-[18px] hover:bg-black/20 transition-colors duration-200 p-[3px] rounded-[10px] max-w-[110px] break-words"
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </p>
            <RiCloseLine
              className="text-[28px] hover:bg-gray-400 hover:shadow-xl transition-colors duration-200 rounded-full"
              onClick={async () => {
                await handleDeleteCategory(category.name, user.sub);
                if (selectedCategory === category.name)
                  setSelectedCategory(null);
              }}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};
