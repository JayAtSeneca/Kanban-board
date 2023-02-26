import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import AddTask from "../AddTask/AddTask";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "in-progress" },
    { id: 3, title: "Task 3", status: "done" },
    { id: 4, title: "Task 4", status: "todo" },
    { id: 5, title: "Task 5", status: "in-progress" },
    { id: 6, title: "Task 6", status: "done" },
  ]);
  const [currentTask, setCurrentTask] = useState(null);

  function handleDragStart(task) {
    setCurrentTask(task);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDelete(e, taskId) {
    e.stopPropagation();
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleDrop(status) {
    const newTasks = tasks.map((task) => {
      if (task === currentTask) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function getTasksByStatus(status) {
    return tasks.filter((task) => task.status === status);
  }

  return (
    <div className="App">
      <Nav />
      <Container>
        <Row md={3}>
          <Col>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("todo")}
            >
              <Card className="text-white bg-secondary">
                <Card.Header>
                  <strong>TODO</strong>
                </Card.Header>
                {getTasksByStatus("todo").map((task, index) => (
                  <Card
                    body
                    key={task.id}
                    className="m-2 text-black"
                    draggable
                    onDragStart={() => handleDragStart(task)}
                  >
                    {task.title}
                    <Button
                      className="float-end"
                      variant="danger"
                      size="sm"
                      onClick={(e) => handleDelete(e, task.id)}
                    >
                      Delete
                    </Button>
                  </Card>
                ))}
                <div className="task dummy"> </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("in-progress")}
            >
              <Card className="text-white bg-secondary">
                <Card.Header>
                  <strong>In Progress</strong>
                </Card.Header>
                {getTasksByStatus("in-progress").map((task) => (
                  <Card
                    body
                    key={task.id}
                    className="m-2 text-black"
                    draggable
                    onDragStart={() => handleDragStart(task)}
                  >
                    {task.title}
                    <Button
                      className="float-end"
                      variant="danger"
                      size="sm"
                      onClick={(e) => handleDelete(e, task.id)}
                    >
                      Delete
                    </Button>
                  </Card>
                ))}
                <div className="task dummy"> </div>
              </Card>
            </div>
          </Col>
          <Col>
            <div
              className="column"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop("done")}
            >
              <Card className="text-white bg-secondary">
                <Card.Header>
                  <strong>Done</strong>
                  {getTasksByStatus("done").map((task) => (
                    <Card
                      body
                      key={task.id}
                      className="m-2 text-black"
                      draggable
                      onDragStart={() => handleDragStart(task)}
                    >
                      {task.title}
                      <Button
                        className="float-end"
                        variant="danger"
                        size="sm"
                        onClick={(e) => handleDelete(e, task.id)}
                      >
                        Delete
                      </Button>
                    </Card>
                  ))}
                  <div className="task dummy"> </div>
                </Card.Header>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Render the AddTask component below the columns */}
      <AddTask
        onAddTask={(title) =>
          setTasks([
            ...tasks,
            { id: tasks.length + 1, title: title, status: "todo" },
          ])
        }
      />
    </div>
  );
}

export default KanbanBoard;
