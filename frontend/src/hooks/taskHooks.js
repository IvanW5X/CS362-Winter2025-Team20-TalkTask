/********************************************************************
 * File Name: taskHooks.js
 * Date: 3/6/2025
 * Description: JS file for task hooks
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { useQuery, useMutation, useQueryClient } from "react-query";
import { apiRequest } from "../../utils/utils.js";

export const useGetTasks = (user, isAuthenticated, accessToken) => {
  return useQuery("tasks", async () => {
    try {
      const res = await apiRequest(
        "GET",
        `/tasks/read-task/${user.sub}`,
        user,
        isAuthenticated,
        accessToken
      );
      if (res === null || res === undefined)
        throw new Error("Recieved null or undefined");

      return res;
    } catch (error) {
      console.error(`Error fetching tasks: ${error}`);
      return [];
    }
  });
};

export const useUpdateTaskStatus = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();

  try {
    return useMutation(
      async ({ taskID, newStatus }) => {
        await apiRequest(
          "PATCH",
          `/tasks/update-task/${user.sub}/${taskID}`,
          user,
          isAuthenticated,
          accessToken,
          {
            status: newStatus,
          }
        );
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("tasks");
        },
      }
    );
  } catch (error) {
    console.error(`Could not fetch tasks ${error}`);
    return;
  }
};

export const useDeleteCompletedTasks = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      await apiRequest(
        "DELETE",
        `/tasks/delete/${user.sub}`,
        user,
        isAuthenticated,
        accessToken
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
      onError: (error) => {
        console.error("Failed to delete completed tasks", error);
        alert("Failed to delete completed tasks.");
      },
    }
  );
};

export const useSuggestTask = (user, isAuthenticated, accessToken) => {
  const getSuggestedTask = async () => {
    try {
      const res = await apiRequest(
        "GET",
        `/tasks/generate-task/${user.sub}`,
        user,
        isAuthenticated,
        accessToken
      );
      return res;
    } catch (error) {
      console.error("Could not generate task:", error);
      return null;
    }
  };
  const {
    data: suggestedTask,
    refetch,
    isLoading,
    error,
  } = useQuery("suggestedTask", getSuggestedTask, {
    enabled: false,
    onSuccess: (suggestedTask) => {
      console.log("Generated task: ", suggestedTask);
    },
  });

  return { suggestedTask, refetch, isLoading, error };
};

export const useSendTranscript = (user, isAuthenticated, accessToken) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ transcript, selectedCategory }) => {
      await apiRequest(
        "POST",
        `/tasks/voice-command/${user.sub}`,
        user,
        isAuthenticated,
        accessToken,
        { transcript, selectedCategory }
      );
    },
    {
      onSuccess: () => {
        console.log("Server captured transcript");
        queryClient.invalidateQueries("tasks");
      },
      onError: () => {
        console.error("Error sending transcript to server");
        alert("Failed to send transcript");
      },
    }
  );
};
