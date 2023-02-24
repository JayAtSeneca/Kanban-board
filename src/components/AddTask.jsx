import React, { useState } from "react";
import './AddTask.css';

function AddTask(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim()) {
      props.onAddTask(title.trim());
      setTitle("");
    }
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
