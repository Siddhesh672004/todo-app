import Input from "../Input/Input";
import List from "../List/List";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Todo = () => {
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

  useEffect(() => {
    console.log("ComponentDIdMount");
    if (localStorage.getItem("list")) {
      setList(JSON.parse(localStorage.getItem("list")));
    }
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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

  return (
    <>
      <h2>Todo App</h2>
      <Input
        task={item}
        changeHandler={(value) => {
          setItem(value);
        }}
        enterKeyHandler={btnClickHandler}
      />

      <Button
        variant="primary"
        className="ms-2"
        onClick={btnClickHandler}
        disabled={!item.trim().length}
      >
        Add to list
      </Button>

      <Button
        variant="danger"
        className="m-2"
        onClick={deleteAllDoneHandler}
        disabled={list.every((task) => !task.isDone)} // Disable if no tasks are done
      >
        Delete all Done Items
      </Button>

      <List
        tasks={list}
        swapHandler={swapHandler}
        doneHandler={donehandler}
        deleteHandler={openDeleteModal}
      />

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
    </>
  );
};

export default Todo;
