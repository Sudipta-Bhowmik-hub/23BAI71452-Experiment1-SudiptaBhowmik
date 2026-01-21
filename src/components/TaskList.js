import React, { useState } from "react";

function TaskList({ tasks, toggleStatus, removeTask, editTask }) {
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (id, title) => {
    setEditId(id);
    setNewTitle(title);
  };

  const handleSave = (id) => {
    editTask(id, newTitle);
    setEditId(null);
    setNewTitle("");
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              {task.title} - {task.status}
              <button onClick={() => toggleStatus(task.id)}>Toggle</button>
              <button onClick={() => handleEdit(task.id, task.title)}>Edit</button>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
export default TaskList;

