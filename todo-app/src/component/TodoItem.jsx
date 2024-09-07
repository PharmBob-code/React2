import styles from "./modules/TodoItem.module.css";
export default function TodoItem({ item, id, todos, setTodos }) {
  function handleDelete(id) {
    setTodos(todos.filter((_, index) => index !== id));
  }

  // Extract the text content from the item

  return (
    <div className={styles.todoItem}>
      <h3>{item}</h3>
      <h3 className={styles.deleteX} onClick={() => handleDelete(id)}>
        x
      </h3>
    </div>
  );
}
