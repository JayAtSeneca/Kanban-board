import React, { useState } from "react";
import AddTask from './AddTask';
import "./KanbanBoard.css";

function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
    { id: 4, title: "Task 4", status: "todo" },
    { id: 5, title: "Task 5", status: "in-progress" },
    { id: 6, title: "Task 6", status: "done" }
  ]);
  const [currentTask, setCurrentTask] = useState(null);
  

  function handleDragStart(task) {
    setCurrentTask(task);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(status) {
    const newTasks = tasks.map(task => {
      if (task === currentTask) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function getTasksByStatus(status) {
    return tasks.filter(task => task.status === status);
  }

  return (
    <div className="App">
      <div className="header">Kanban Board</div>
      <div className="container">
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop("todo")}
        >
          <div className="column-header">To Do</div>
          {getTasksByStatus("todo").map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
            >
              {task.title}
            </div>
          ))}
          {/* Add a dummy element to maintain column height */}
          <div className="task dummy" />
        </div>
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop("in-progress")}
        >
          <div className="column-header">In Progress</div>
          {getTasksByStatus("in-progress").map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
            >
              {task.title}
            </div>
          ))}
          {/* Add a dummy element to maintain column height */}
          <div className="task dummy" />
        </div>
        <div
          className="column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop("done")}
        >
          <div className="column-header">Done</div>
          {getTasksByStatus("done").map(task => (
            <div
              key={task.id}
              className="task"
              draggable
              onDragStart={() => handleDragStart(task)}
            >
              {task.title}
            </div>
          ))}
          {/* Add a dummy element to maintain column height */}
          <div className="task dummy" />
        </div>
      </div>
      {/* Render the AddTask component below the columns */}
      <AddTask onAddTask={(title) => setTasks([...tasks, { id: tasks.length + 1, title: title, status: "todo" }])} />
    </div>
  );
  
}

export default KanbanBoard;
