import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styles from "./modules/Todo.module.css";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((status) => status.done).length;

  return (
    <>
      <div className={styles.todoContainer}>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer completedTodos={completedTodos} todos={todos} />
      </div>
    </>
  );
}
