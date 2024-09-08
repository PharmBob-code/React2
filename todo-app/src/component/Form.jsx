import { useState } from "react";
import styles from "./modules/Form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    } else {
      alert("Please enter a task");
    }
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        value={todo.name}
        type="text"
        placeholder="Add a new task...."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
