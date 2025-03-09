/********************************************************************
 * File Name: catagoryHooks.js
 * Date: 3/6/2025
 * Description: JS file for category hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiRequest } from "../services/taskServices";

export const useCreateCategory = ({ user, isAuthenticated, accessToken }) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newCategory) => {
      const res = await apiRequest(
        "POST",
        "/categories/create-category",
        user,
        isAuthenticated,
        accessToken,
        newCategory
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("categories");
      },
      onError: (error) => {
        console.error("Failed to add category: ", error);
        alert("Failed to add category");
      }
    }
  );
};

// export const useGetCategories = ({ user, isAuthenticated, accessToken }) => {
//     return useQuery("categories", async () => {
//         try {
//             const res = await apiRequest("GET", );
//         } catch (error) {

//         }
//     });
// };
