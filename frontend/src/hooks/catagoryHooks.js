/********************************************************************
 * File Name: catagoryHooks.js
 * Date: 3/6/2025
 * Description: JS file for category hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiRequest } from "../../utils/utils.js";

export const useCreateCategory = ({ user, isAuthenticated, accessToken }) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ newCategory }) => {
      await apiRequest(
        "POST",
        "/categories/create-category",
        user,
        isAuthenticated,
        accessToken,
        { newCategory }
      );
    },
    {
      onSuccess: () => {
        console.log("Created category");
        queryClient.invalidateQueries("categories");
      },
      onError: () => {
        console.error("Failed to add category");
        alert("Failed to add category");
      },
    }
  );
};

export const useGetCategories = ({ user, isAuthenticated, accessToken }) => {
  return useQuery("categories", async () => {
    try {
      const res = await apiRequest("GET");
    } catch (error) {}
  });
};
