/********************************************************************
 * File Name: formValidation.test.js
 * Date: 02/25/2025
 * Description:
 * Author(s): CS 362-Team 20
 ********************************************************************/

// Validation function
function validateTask(task) {
    if (!task || typeof task !== 'object') return { valid: false, error: 'Invalid task data' };
    if (!task.title || task.title.trim() === '') return { valid: false, error: 'Title is required' };
    if (!task.status || !['pending', 'in-progress', 'completed'].includes(task.status)) 
        return { valid: false, error: 'Invalid status' };
    if (typeof task.priority !== 'number' || task.priority < 1 || task.priority > 3) 
        return { valid: false, error: 'Priority must be between 1 and 3' };
    if (typeof task.taskID !== 'number' || task.taskID <= 0) 
        return { valid: false, error: 'Invalid taskID' };
    if (!task.userID || typeof task.userID !== 'string') 
        return { valid: false, error: 'userID is required' };
    return { valid: true };
}

describe('Frontend Task Form Validation', () => {

  // Should accept a valid task
  it('should pass validation for a valid task', () => {
    const task = { taskID: 1, title: "Test Task", status: "pending", priority: 3, userID: "507f191e810c19729de860ea" };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(true);
  });

  // Should reject an empty title
  it('should fail validation for an empty title', () => {
    const task = { taskID: 1, title: "", status: "pending", priority: 3, userID: "507f191e810c19729de860ea" };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("Title is required");
  });

  // Should reject missing status
  it('should fail validation for missing status', () => {
    const task = { taskID: 1, title: "Test Task", priority: 3, userID: "507f191e810c19729de860ea" };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("Invalid status");
  });

  // Should reject an invalid priority
  it('should fail validation for invalid priority', () => {
    const task = { taskID: 1, title: "Test Task", status: "pending", priority: 10, userID: "507f191e810c19729de860ea" };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("Priority must be between 1 and 3");
  });

  // Should reject missing taskID
  it('should fail validation for missing taskID', () => {
    const task = { title: "Test Task", status: "pending", priority: 3, userID: "507f191e810c19729de860ea" };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("Invalid taskID");
  });

  // Should reject missing userID
  it('should fail validation for missing userID', () => {
    const task = { taskID: 1, title: "Test Task", status: "pending", priority: 3 };
    const validationResult = validateTask(task);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("userID is required");
  });

  // Should reject an empty task
  it('should fail validation for an empty task object', () => {
    const validationResult = validateTask({});
    expect(validationResult.valid).toBe(false);
    expect(validationResult.error).toBe("Title is required");
  });
});
