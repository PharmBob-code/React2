import TodoItem from "./TodoItem";
import styles from "./modules/TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          id={index}
          todos={todos}
          setTodos={setTodos}
        />
      ))}

      <p></p>
    </div>
  );
}
