import { Button } from "react-bootstrap";
import Input from "../Input/Input";
import List from "../List/List";
import { useState } from "react";

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

      <List tasks={list} />
    </>
  );
};

export default Todo;
