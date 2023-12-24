import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import userNameReducer from './features/userNameSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    userName: userNameReducer,
  },
});

export default store;
