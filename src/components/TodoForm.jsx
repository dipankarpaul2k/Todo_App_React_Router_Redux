import { useEffect, useRef, useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoForm = ({}) => {
  const todoTitleRef = useRef();
  const todoFormRef = useRef();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    todoTitleRef.current.focus();
  }, [editMode]);

  function handleAddTodo() {
    if (todoTitle.trim() !== "" && todoContent.trim() !== "") {
      dispatch(addTodo({ title: todoTitle, content: todoContent }));
      todoFormRef.current.reset();
    }
  }

  return (
    <form onSubmit={handleAddTodo} ref={todoFormRef}>
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
          {/* {editMode && (
              <button type="submit" onClick={toggleEditingMode}>
              Cancel
              </button>
            )} */}
          <button type="submit">{editMode ? "Update" : "Add"}</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
