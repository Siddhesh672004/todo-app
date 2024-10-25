import { Button } from "react-bootstrap";
import Input from "../Input/Input";
import List from "../List/List";

const Todo = () => {
  return (
    <>
        <h2>Todo App</h2>
        <Input/>
        <Button variant="primary" className="ms-2">Add to list</Button>
        <List/>
    </>
  );
};

export default Todo;