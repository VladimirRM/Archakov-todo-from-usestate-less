import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const value = text;
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter something..."
        onChange={(e) => setTasks(e.target.value)}
        value={tasks}
      />
      <button onClick={addTask}>Add task</button>
        {tasks.map(task,id=>(
          <ul>
            <li>{task}
      <button onClick={()=>handleDelete(id)}>Delete</button>
      <button onClick={()=>handleEdit(id)}>Edit</button>

            
            
            </li>
          </ul>
        ))}

    </div>
  );
}

export default App;
