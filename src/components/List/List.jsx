import styles from "./List.module.css";
import { Button } from "react-bootstrap";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const List = ({ tasks, swapHandler, doneHandler, deleteHandler }) => {
  const listItems = tasks.map((task, index) => (
    <li
      key={index}
      className={`${styles.item} ${task.isDone ? styles.doneItem : ""}`}
    >
      {/* Replace the DONE button with a Checkbox */}
      <input
        className={styles.check}
        type="checkbox"
        checked={task.isDone}
        onChange={() => doneHandler(index)} // Toggle done state
      />

      {task.item}
      {/* <Button
        className={styles.actionBtn}
        variant="primary"
        onClick={() => swapHandler(index, index - 1)}
        disabled={index === 0}
      >
        UP
      </Button>

      <Button
        className={styles.actionBtn}
        variant="primary"
        onClick={() => {
          swapHandler(index, index + 1);
        }}
        disabled={index === tasks.length - 1}
      >
        DOWN
      </Button> */}

      {/* {!task.isDone && (
        <Button
          className={styles.actionBtn}
          variant="success"
          onClick={() => doneHandler(index)}
        >
          DONE
        </Button>
      )} */}

      <BsArrowUp
        className={styles.actionIcon}
        onClick={() => swapHandler(index, index - 1)}
        style={{
          cursor: index === 0 ? "not-allowed" : "pointer",
          opacity: index === 0 ? 0.5 : 1,
        }}
        disabled={index === 0}
      />

      <BsArrowDown
        className={styles.actionIcon}
        onClick={() => swapHandler(index, index + 1)}
        style={{
          cursor: index === tasks.length - 1 ? "not-allowed" : "pointer",
          opacity: index === tasks.length - 1 ? 0.5 : 1,
        }}
        disabled={index === tasks.length - 1}
      />

      {/* Conditionally render DELETE button */}
      {task.isDone && (
        <Button
          className={styles.actionBtn}
          variant="danger"
          onClick={() => deleteHandler(index)}
        >
          DELETE
        </Button>
      )}
    </li>
  ));

  return (
    <div className="mt-3">
      <ul style={{ display: "inline-block" }}>{listItems}</ul>
    </div>
  );
};

export default List;
