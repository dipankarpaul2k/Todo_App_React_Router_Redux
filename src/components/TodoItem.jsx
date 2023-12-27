import { Link } from "react-router-dom";
import { formatTodoTimestamp } from "../helperFns";

export default function TodoItem({ todo, viewAllTodo }) {
  return (
    <>
      <div className="todo_item">
        <Link to={`/todos/${todo.id}`}>
          <span className="todo_item_title">{todo.title}</span>
          <span className="todo_item_DateTime">{formatTodoTimestamp(todo.createdAt)}</span>
        </Link>
      </div>
    </>
  );
}
