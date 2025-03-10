/********************************************************************
 * File Name: catagoryHooks.js
 * Date: 3/6/2025
 * Description: JS file for category hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiRequest } from "../../utils/utils.js";

export const useCreateCategory = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ newCategory }) => {
      await apiRequest(
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
        console.log(`Successfully created new category`);
        queryClient.invalidateQueries("categories");
      },
      onError: (error) => {
        console.error("Failed to add category", error);
        alert("Failed to add category");
      },
    }
  );
};

export const useGetCategories = (user, isAuthenticated, accessToken) => {
  return useQuery("categories", async () => {
    try {
      const res = await apiRequest(
        "GET",
        `/categories/read-category/${user.sub}`,
        user,
        isAuthenticated,
        accessToken
      );
      if (res === null || res === undefined)
        throw new Error("Recieved null or undefined");

      return res;
    } catch (error) {
      console.error(`Error fetching categories: ${error}`);
      return [];
    }
  });
};

export const useDeleteCategory = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ categoryName, userID }) => {
      await apiRequest(
        "DELETE",
        `/categories/delete/${userID}/${categoryName}`,
        user,
        isAuthenticated,
        accessToken,
      );
    },
    {
      onSuccess: () => {
        console.log("Successfully deleted category and linked tasks");
        queryClient.invalidateQueries("categories");
        queryClient.invalidateQueries("tasks");
      },
      onError: () => {
        console.error("Failed to delete category");
      },
    }
  );
};
