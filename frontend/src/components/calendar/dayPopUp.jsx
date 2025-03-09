import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../utils/variables.js";
import { useAuth } from "../../../contexts/authContext.jsx";

export const DayPopUp = ({ onClose, selectedDate, userID }) => {
  const { accessToken, isAuthenticated } = useAuth();
  const [taskStats, setTaskStats] = useState({ totalTasks: 0, completedTasks: 0, pendingTasks: 0 });
  const [loading, setLoading] = useState(true);

  /* The below is an api call to the getStats api, but returns a 500 internal server error. Needs debugging
  useEffect(() => {
    const fetchTaskStats = async () => {
      if (!selectedDate || isNaN(new Date(selectedDate).getTime())) {
        console.error('Invalid selectedDate:', selectedDate);
        return;
      }

      if (!accessToken) {
        console.error('No access token available');
        return;
      }

      try {
        const formattedDate = new Date(selectedDate).toISOString().split('T')[0]; // Format as YYYY-MM-DD
        console.log('userID:', userID);
        console.log('formattedDate:', formattedDate);

        // Make the Axios call to get the stats
        const response = await axios.get(
          `${VITE_BACKEND_URL}/tasks/get-stats/${formattedDate}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` }
          }
        );

        setTaskStats(response.data);
        console.log(response.data);

      } catch (err) {
        console.error('Error fetching task stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskStats();
  }, [selectedDate, userID, accessToken]); // Re-run when accessToken changes

  if (loading) {
    return <div>Loading...</div>; // You can add a spinner or other loading indicator here
  } */

  return (
    <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
      <div className="relative bg-[#CCCCCC] p-8 rounded-3xl max-w-[900px] max-h-[90vh] overflow-auto hide-scrollbar">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
          onClick={onClose}
          type="button"
        >
          <IoClose className="cursor-pointer" />
        </button>

        <div className="grid grid-cols-2 space-x-4">
          <div className="text-3xl font-bold text-black text-center mb-8 bg-[#37E03A] p-4 rounded-xl shadow-md">
            Total Tasks
          </div>

          <div className="text-3xl font-bold text-black text-center mb-8 bg-[#37E03A] p-4 rounded-xl shadow-md w-full">
            Completed Tasks
          </div>

          <div className="text-3xl text-black text-center mb-8 bg-[#F4F3F2] p-4 rounded-xl shadow-md">
            {taskStats.totalTasks}
          </div>

          <div className="text-3xl text-black text-center mb-8 bg-[#F4F3F2] p-4 rounded-xl shadow-md w-full">
            {taskStats.completedTasks}
          </div>
        </div>
      </div>
    </div>
  );
};
