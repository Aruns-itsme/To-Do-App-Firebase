import { auth, addTask } from "./auth.js";

// Add Task Event Listener
document.getElementById("todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const userId = auth.currentUser.uid;

  if (userId) {
    addTask(userId, task);
    document.getElementById("task").value = ""; // Clear input field
  } else {
    console.error("User is not authenticated.");
  }
});

