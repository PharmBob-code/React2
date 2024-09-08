import TodoItem from "./TodoItem";
import styles from "./modules/TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((item, id) => {
        return (
          <TodoItem
            item={item}
            key={id}
            id={id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}

      <p></p>
    </div>
  );
}
