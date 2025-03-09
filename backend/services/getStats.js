// Function to get task statistics for a specific date
export const getStats = async (date) => {
    try {
      // Parse the date from the request
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
  
      // Fetch tasks created on that day
      const createdTasks = await Task.find({
        dateStart: { $gte: startOfDay, $lte: endOfDay }
      });
  
      // Fetch tasks completed on that day
      const completedTasks = await Task.find({
        dateCompleted: { $gte: startOfDay, $lte: endOfDay }
      });
  
      // Return statistics about the tasks for the specific date
      return {
        createdTasks: createdTasks.length,
        completedTasks: completedTasks.length,
      };
    } catch (error) {
      throw new Error(`Error fetching stats: ${error.message}`);
    }
  };
  
