import styles from "./List.module.css";
import { Button } from "react-bootstrap";

const List = ({ tasks, swapHandler, doneHandler, deleteHandler }) => {
  const listItems = tasks.map((task, index) => (
    <li key={index}>
      {task.item}
      <Button
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
      </Button>

      {!task.isDone && (
        <Button
          className={styles.actionBtn}
          variant="success"
          onClick={() => doneHandler(index)}
        >
          DONE
        </Button>
      )}

      {task.isDone && ( // Corrected condition to check task.isDone
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
