import { Link } from "react-router-dom";
import { formatTodoTimestamp } from "../helperFns";

export default function TodoItem({ todo, viewAllTodo }) {
  return (
    <>
      <div className="todo_item">
        <Link to={`/todos/${todo.id}`}>
          <span>{todo.title}</span>
          <span>{formatTodoTimestamp(todo.createdAt)}</span>
        </Link>
      </div>
    </>
  );
}
