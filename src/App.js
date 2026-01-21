import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Helpline from "./pages/Helpline";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const toggleStatus = (id) =>
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "Pending" ? "Completed" : "Pending" }
          : t
      )
    );
    const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const editTask = (id, newTitle) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/helpline">Helpline</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Smart Task Manager</h1>
                <TaskForm addTask={addTask} />
                <TaskList
                  tasks={tasks}
                  toggleStatus={toggleStatus}
                  removeTask={removeTask}
                  editTask={editTask}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/helpline" element={<Helpline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


