// import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, listHeading, isOpen = true }) {
  return (
    <>
      {/* Todo list accordion */}
      {todos && todos.length && (
        <details open={isOpen} className="todo_list_accordion">
          <summary role="button">{listHeading}</summary>
          <div className="todo_list_content">
            {todos?.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </details>
      )}
    </>
  );
}
