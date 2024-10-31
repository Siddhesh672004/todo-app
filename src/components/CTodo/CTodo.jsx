import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Input from "../Input/Input";
import List from "../List/List";
import { useEffect, useState } from "react";
import styles from "./CTodo.module.css";

const CTodo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const btnClickHandler = () => {
    const trimmedItem = item.trim();
    if (trimmedItem.length) {
      setList([...list, { item: trimmedItem, isDone: false }]);
      setItem("");
    }
  };

  const openDeleteModal = (index) => {
    setTaskToDelete(index);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setShowModal(false);
    setTaskToDelete(null);
  };

  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const swapHandler = (initIndex, finalIndex) => {
    const tasks = [...list];
    const temp = tasks[initIndex];
    tasks[initIndex] = tasks[finalIndex];
    tasks[finalIndex] = temp;
    setList(tasks);
  };

  const donehandler = (index) => {
    const tasks = list.map((task, idx) =>
      idx === index ? { ...task, isDone: !task.isDone } : task
    );
    setList(tasks);
  };

  const deleteHandler = () => {
    const tasks = [...list];
    tasks.splice(taskToDelete, 1);
    setList(tasks);
    closeDeleteModal();
  };

  const deleteAllDoneHandler = () => {
    const updatedList = list.filter((task) => !task.isDone);
    setList(updatedList);
  };

  const clearAllHandler = () => {
    setList([]); // Clears the list
  };

  const listBtnhandler = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.todos);
        const items = data?.todos.map((todo) => ({
          item: todo.todo,
          isDone: todo.completed,
        }));
        setList(items || []);
      });
  };

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <Button
            variant="primary"
            className={styles.buttons}
            onClick={listBtnhandler}
          >
            Get the list from cloud
          </Button>
        </Col>
      </Row>

      {/* Single Row for Input and Buttons */}
      <Row className="mb-3 align-items-center">
        <Col xs={12} md={4} className="mb-2 mb-md-0">
          <Input
            task={item}
            changeHandler={(value) => setItem(value)}
            enterKeyHandler={btnClickHandler}
            className={styles.inputField}
          />
        </Col>
        <Col xs={6} md={2} className="mb-2 mb-md-0">
          <Button
            variant="primary"
            onClick={btnClickHandler}
            disabled={!item.trim().length}
            className={styles.buttons}
          >
            Add to list
          </Button>
        </Col>
        <Col xs={6} md={3} className="mb-2 mb-md-0">
          <Button
            variant="danger"
            onClick={deleteAllDoneHandler}
            disabled={list.every((task) => !task.isDone)}
            className={styles.buttons}
          >
            Delete all Done
          </Button>
        </Col>
        <Col xs={12} md={3} className="mb-2 mb-md-0">
          <Button
            variant="secondary"
            onClick={clearAllHandler}
            disabled={!list.length}
            className={styles.buttons}
          >
            Clear All
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <List
            tasks={list}
            swapHandler={swapHandler}
            doneHandler={donehandler}
            deleteHandler={openDeleteModal}
            className={styles.list}
          />
        </Col>
      </Row>

      <Modal show={showModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CTodo;
