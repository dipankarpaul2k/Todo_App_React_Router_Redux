// rtk imports
import { createSlice } from "@reduxjs/toolkit";

// helper function imports
import { fetchData, saveData } from "../helperFns";

// get the stored todos as initial state if exist
const getInitialTodos = () => {
  const storedTodos = fetchData("todos");
  return storedTodos || [];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: getInitialTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        title: action.payload.title,
        content: action.payload.content,
        completed: false,
        pinned: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      saveData("todos", state);
    },
    editTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.content = action.payload.content;
        todo.updatedAt = Date.now();
        saveData("todos", state);
      }
    },
    toggleCompleted: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveData("todos", state);
      }
    },
    togglePinned: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.pinned = !todo.pinned;
        saveData("todos", state);
      }
    },
    deleteTodo: (state, action) => {
      const updatedTodos = state.filter((todo) => todo.id !== action.payload);
      saveData("todos", updatedTodos);
      return updatedTodos;
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleCompleted, togglePinned } =
  todoSlice.actions;
export default todoSlice.reducer;
