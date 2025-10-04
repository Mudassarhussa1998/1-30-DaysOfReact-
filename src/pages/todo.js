import React, { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");         // Current task input
  const [list, setList] = useState([]);         // List of all tasks

  // Function to add a task
  const addTask = () => {
    if (task.trim() === "") return;             // Prevent empty tasks
    setList((prevList) => [...prevList, task]); // Add new task to the list
    setTask("");                                // Clear input
  };

  // Function to remove a specific task
  const removeTask = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
