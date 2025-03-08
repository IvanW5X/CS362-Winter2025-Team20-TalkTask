/********************************************************************
 * File Name: taskHooks.js
 * Date: 3/6/2025
 * Description: JS file for task hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiRequest } from "../services/taskServices.js";

export const useGetTasks = (user, isAuthenticated, accessToken) => {
  return useQuery("tasks", async () => {
    const res = await apiRequest("GET", `/tasks/read-task/${user.sub}`, user, isAuthenticated, accessToken);

    if (res === null) return [];
    return res;
  });
};

export const useUpdateTaskStatus = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ taskID, newStatus }) => {
      await apiRequest("PATCH", `/tasks/update-task/${taskID}`, user, isAuthenticated, accessToken, {
        status: newStatus,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    }
  );
};

export const useDeleteCompletedTasks = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  
  return useMutation( async () => {
    await apiRequest("DELETE", `/tasks/delete`, user, isAuthenticated, accessToken);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
    onError: (error) => {
      console.error("Failed to delete completed tasks", error);
      alert("Failed to delete completed tasks.");
    }
  }
  );
}

