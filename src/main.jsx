import React from "react";
import ReactDOM from "react-dom/client";
// App component imports
import App from "./App.jsx";
// Pico css imports
import "@picocss/pico";
// react-toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// css imports
import "./index.css";
// react-redux imports
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
