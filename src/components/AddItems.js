import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

const AddItems = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addFunc = () => {
    if (newTask.trim()) {
      dispatch({ type: "add", payload: newTask });
      handleClose();
    }
  };

  return (
    <div>
      <Button
        style={{
          marginLeft: "45%",
          backgroundColor: "#ab0ddb",
          border: "solid 2px white",
          fontWeight:"bold"
        }}
        variant="primary"
        onClick={handleShow}
        
      >
        Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="New Task"
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addFunc}>
            Add New Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddItems;
