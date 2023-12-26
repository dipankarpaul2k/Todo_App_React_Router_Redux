// react import
import { useState } from "react";
// react redux import
import { useSelector, useDispatch } from "react-redux";
// todo slice import
import {
  editTodo,
  toggleCompleted,
  deleteTodo,
  togglePinned,
} from "../features/todoSlice";
// rrd import
import { useNavigate, useParams } from "react-router-dom";
// helpers function import
import { flashToast, formatTodoTimestamp } from "../helperFns";
// icons import
import {
  ArrowUUpLeft,
  CheckCircle,
  NotePencil,
  PushPin,
  Trash,
} from "@phosphor-icons/react";
import TodoForm from "../components/TodoForm";

export default function TodoItemPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const todo = todos.find((todo) => todo.id === id);

  const [editingTodo, setEditingTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteTodo() {
    dispatch(deleteTodo(todo.id));
    navigate(-1);
    return flashToast("Todo deleted.");
  }

  function toggleEditingMode() {
    setIsEditing((pre) => !pre);
    setEditingTodo(todo);
  }

  function setEditingTodoNull() {
    setEditingTodo(null);
  }

  if (isEditing) {
    return (
      <>
        <TodoForm
          editingTodo={editingTodo}
          toggleEditingMode={toggleEditingMode}
          setEditingTodoNull={setEditingTodoNull}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="todo_item_page_con">
          {/* todo title heading */}
          <div className="headings">
            <h1>{todo?.title}</h1>
            <p>
              <span>{formatTodoTimestamp(todo?.createdAt)}</span>
              <button
                className="outline secondary pinned_btn"
                onClick={() => dispatch(togglePinned(todo.id))}
              >
                {todo?.pinned ? (
                  <>
                    <span>Pinned</span>
                    <PushPin size={20} weight="fill" />
                  </>
                ) : (
                  <>
                    <span></span>
                    <PushPin size={20} />
                  </>
                )}
              </button>
            </p>
          </div>
          {/* todo content */}
          <p>{todo?.content}</p>
        </div>

        <div className="todo_item_page_footer">
          {/* edit button */}
          <button className="todo_item_page_btns" onClick={toggleEditingMode}>
            <span>Edit</span>
            <NotePencil size={24} weight="fill" />
          </button>
          {/* mark completed button */}
          <button
            className="todo_item_page_btns"
            onClick={() => dispatch(toggleCompleted(todo.id))}
          >
            {todo.completed ? (
              <>
                <span>Active</span>
                <ArrowUUpLeft size={24} weight="fill" />
              </>
            ) : (
              <>
                <span>Completed</span>
                <CheckCircle size={24} weight="fill" />
              </>
            )}
          </button>
          {/* delete button */}
          <button className="todo_item_page_btns" onClick={handleDeleteTodo}>
            <span>Delete</span>
            <Trash size={24} weight="fill" />
          </button>
        </div>
      </>
    );
  }
}
