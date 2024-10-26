import { Button } from "react-bootstrap";
import Input from "../Input/Input";
import List from "../List/List";
import { useEffect, useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const btnClickHandler = () => {
    const trimmedItem = item.trim();
    if (trimmedItem.length) {
      setList([...list, trimmedItem]);
      setItem("");
    }
  };

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
  }

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

      <List
        tasks={list}
        swapHandler={swapHandler}
      />
    </>
  );
};

export default Todo;
