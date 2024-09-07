import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styles from "./modules/Todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className={styles.todoContainer}>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <h3>Total Task: </h3>
    </>
  );
}
