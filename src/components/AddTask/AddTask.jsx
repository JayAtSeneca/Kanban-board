import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

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
    <Container className="m-auto mt-3">
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label><strong>Add Task</strong></Form.Label>
          <Form.Control type="text" placeholder="Enter task title" value={title} onChange={handleTitleChange} />
        </Form.Group>
        <Button type="submit" variant="success">Add Task</Button>
      </fieldset>
    </Form>
    </Container>
  );
}

export default AddTask;
