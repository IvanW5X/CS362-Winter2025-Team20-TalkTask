/********************************************************************
 * File Name: taskHooks.js
 * Date: 3/6/2025
 * Description: JS file for task hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../utils/variables.js";

export const useGetTasks = (user, isAuthenticated, accessToken) => {
  return useQuery("tasks", async () => {
    if (!user || !isAuthenticated) return [];
    const res = await axios.get(
      `${VITE_BACKEND_URL}/tasks//read-task/${user.sub}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  });
};

export const useUpdateTaskStatus = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ taskID, newStatus }) => {
      if (!user || !isAuthenticated) return null;
      await axios.patch(
        `${VITE_BACKEND_URL}/tasks/update-task/${taskID}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );
};
