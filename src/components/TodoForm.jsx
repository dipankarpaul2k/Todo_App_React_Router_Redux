import { useEffect, useRef, useState } from "react";
import { addTodo, editTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { flashToast } from "../helperFns";

const TodoForm = ({ editingTodo, toggleEditingMode, setEditingTodoNull }) => {
  const todoTitleRef = useRef();
  const todoFormRef = useRef();

  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) {
      setTodoTitle(editingTodo.title);
      setTodoContent(editingTodo.content);
      setEditMode(true);
    }
  }, [editingTodo]);

  useEffect(() => {
    todoTitleRef.current.focus();
  }, [editMode]);

  function handleAddTodo() {
    if (todoTitle.trim() !== "" && todoContent.trim() !== "") {
      dispatch(addTodo({ title: todoTitle, content: todoContent }));
      todoFormRef.current.reset();
    }
    return flashToast("Todo added successfully.");
  }

  function handleUpdateTodo() {
    if (todoTitle.trim() !== "" && todoContent.trim() !== "") {
      dispatch(
        editTodo({ id: editingTodo.id, title: todoTitle, content: todoContent })
      );
    }
    return flashToast("Todo updated successfully.");
  }

  function handleCancelBtn() {
    toggleEditingMode();
    setEditingTodoNull();
  }

  return (
    <form
      onSubmit={editMode ? handleUpdateTodo : handleAddTodo}
      ref={todoFormRef}
    >
      <div className="todo_form">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Add a new todo..."
          ref={todoTitleRef}
          required
        />
        <textarea
          rows="10"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          required
        ></textarea>
        <div className="todo_form_btns">
          {editMode && (
            <button type="submit" onClick={handleCancelBtn}>
              Cancel
            </button>
          )}
          <button type="submit">{editMode ? "Update" : "Add"}</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
