// Import the File System module from Node.js to handle file operations
const fs = require("fs");

// Define the relative path to the JSON file that stores the task data
const filePath = "./todoJson.json";

/**
 * PHASE 1: Basic Task Management
 * - Load, Save, Add, List, and Delete tasks using a JSON file for persistence.
 */

/**
 * Loads tasks from the JSON file.
 * If the file doesn't exist or contains invalid JSON, it returns an empty array.
 * 
 * @returns {Array} - Array of tasks stored in the file.
 */
const loadTasks = () => {
  try {
    // Read the file synchronously and store its content as a Buffer object
    const dataBuffer = fs.readFileSync(filePath);

    // Convert the Buffer object to a string
    const dataJson = dataBuffer.toString();

    // Parse the JSON string into a JavaScript object (array) and return it
    return JSON.parse(dataJson);
  } catch (err) {
    // If an error occurs (e.g., file not found), return an empty array
    return [];
  }
};

/**
 * Saves the given tasks array to the JSON file.
 * Converts the array to a JSON-formatted string and writes it to the file.
 * 
 * @param {Array} tasks - Array of tasks to save.
 */
const saveTask = (tasks) => {
  // Convert the tasks array to a formatted JSON string
  const dataJson = JSON.stringify(tasks, null, 2); // Indent with 2 spaces for readability

  // Write the JSON string to the file, overwriting it if it already exists
  fs.writeFileSync(filePath, dataJson);
};

/**
 * Adds a new task to the task list.
 * Loads the existing tasks, appends the new task, and saves the updated list.
 * 
 * @param {string} task - The task description to add.
 */
const addTask = (task) => {
  // Check if the task description is provided
  if (!task) {
    console.log("Error: Task description is required.");
    return;
  }

  // Load existing tasks from the file
  const tasks = loadTasks();

  // Add the new task to the task array
  tasks.push(task);

  // Save the updated task array back to the file
  saveTask(tasks);

  // Log a success message
  console.log("Task added successfully:", task);
};

/**
 * Lists all tasks stored in the JSON file.
 * Displays each task with its corresponding index.
 */
const listTask = () => {
  // Load tasks from the file
  const tasks = loadTasks();

  // Check if there are no tasks and display a message if empty
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    // Iterate over the tasks array and display each task with its index
    tasks.forEach((task, index) => {
      console.log(`${index}: ${task}`);
    });
  }
};

/**
 * Deletes a task at the specified index.
 * Validates the index, removes the task, and saves the updated list.
 * 
 * @param {number} index - The index of the task to delete.
 */
const deleteTask = (index) => {
  // Load tasks from the file
  const tasks = loadTasks();

  // Check if the provided index is valid
  if (index >= 0 && index < tasks.length) {
    // Remove the task at the given index and store the removed task
    const removedTask = tasks.splice(index, 1);

    // Save the updated task array back to the file
    saveTask(tasks);

    // Log a success message with the removed task
    console.log("Task removed successfully:", removedTask[0]);
  } else {
    // Log an error message if the index is invalid
    console.log("Error: Invalid index provided.");
  }
};

/**
 * Displays a help menu with available commands and their usage.
 */
const showHelp = () => {
  console.log("Available commands:");
  console.log("  add <task>     - Add a new task");
  console.log("  delete <index> - Delete a task by its index");
  console.log("  list           - List all tasks");
};

/**
 * PHASE 2: Command-Line Parsing and Execution
 * - Handle commands like `add`, `delete`, and `list` from the command line.
 */

// Parse command-line arguments using `process.argv`
// `process.argv` is an array where:
// - `process.argv[0]` is the path to the Node.js executable
// - `process.argv[1]` is the path to the current script
// - `process.argv[2]` is the command (e.g., "add", "list", "delete")
// - `process.argv[3]` is the argument for the command (e.g., task description or index)
const command = process.argv[2]; // Extract the command
const argument = process.argv[3]; // Extract the argument

/**
 * Execute the appropriate function based on the command.
 * - `add`: Adds a new task.
 * - `delete`: Deletes a task at the specified index.
 * - `list`: Lists all tasks.
 * - Default: Displays the help menu for invalid commands.
 */
switch (command) {
  case "add":
    addTask(argument); // Call the `addTask` function with the task description
    break;
  case "delete":
    deleteTask(parseInt(argument, 10)); // Convert the index to an integer and call `deleteTask`
    break;
  case "list":
    listTask(); // Call the `listTask` function
    break;
  default:
    console.log("Invalid command."); // Log an error message for unknown commands
    showHelp(); // Display the help menu
}

/**
 * PHASE 3: Future Enhancements
 * 1. Add task details: Include fields like `status`, `priority`, and `deadline`.
 * 2. Support task updates: Mark tasks as completed or change their priority.
 * 3. Interactive CLI: Use a library like Inquirer.js to create an interactive menu.
 * 4. Transition to a database: Use SQLite or MongoDB for scalable data persistence.
 * 5. Web or Mobile Interface: Build a GUI or app for task management.
 */
