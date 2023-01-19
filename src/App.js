import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [task, setTask] = useState([]);

  const addTask = () => {
    const value = value;
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter value"
        onChange={(e) => setTask(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default App;
