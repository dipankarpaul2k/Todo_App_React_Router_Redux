import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatTodoTimestamp } from "../helperFns";
import { CheckCircle } from "@phosphor-icons/react";

export default function TodoItemPage() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const currentTodo = todos.find((todo) => todo.id === id);
  console.log("currentTodo: ", currentTodo);

  return (
    <>
      <div className="todo_item_page_con">
        <div className="headings">
          <h1>{currentTodo.title}</h1>
          <p>{formatTodoTimestamp(currentTodo.createdAt)}</p>
          <button className="outline secondary">
            <CheckCircle size={24} weight="fill" />
          </button>
        </div>
        <p>{currentTodo.content}</p>
      </div>
      {/* <div className="todo_item_page_footer">
        <span>Edit</span>
        <span>Completed</span>
        <span>Delete</span>
      </div> */}
    </>
  );
}
