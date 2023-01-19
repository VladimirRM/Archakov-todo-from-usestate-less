import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([{ text: "test" }]);

  const addTask = () => {
    const text = prompt("text task");
    setTasks([...tasks, { text }]);
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleEdit = (id) => {
    const text = prompt("text task");

    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.text = text;
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      {/* <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setTasks(e.target.value)}
        value={text}
      /> */}
      <button onClick={addTask}>Add task</button>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
