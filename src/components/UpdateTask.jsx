import React, { useState } from 'react';

function UpdateTask({ task, onUpdate, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdate({ ...task, title, status });
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={handleStatusChange}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <br />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}
 export default UpdateTask;