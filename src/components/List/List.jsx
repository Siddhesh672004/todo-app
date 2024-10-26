import styles from "./List.module.css";
import { Button } from "react-bootstrap";

const List = ({ tasks, swapHandler }) => {
  const listItems = tasks.map((task, index) => (
    <li key={index}>
      {task}
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

      <Button className={styles.actionBtn} variant="success">
        DONE
      </Button>

      <Button className={styles.actionBtn} variant="danger">
        DELETE
      </Button>
    </li>
  ));

  return (
    <div className="mt-3">
      <ul style={{ display: "inline-block" }}>{listItems}</ul>
    </div>
  );
};

export default List;
