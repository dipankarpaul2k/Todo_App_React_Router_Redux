import { toast } from "react-toastify";

// Waait function
export const waait = (miliSec) => {
  return new Promise((res) => setTimeout(res, miliSec));
};

// Fetch data from local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Save data to local storage
export const saveData = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

// Delete item from local storage
export const deleteItem = (key) => {
  return localStorage.removeItem(key);
};

/* Epoch time is milliseconds elapsed since the epoch, 
beginning of January 1, 1970, UTC. 
*/
export const formatEpochTime = (epochTime) =>
  new Date(epochTime).toLocaleDateString();

// Get all matching items
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category);
  return data.filter((item) => item[key] === value);
};

export function formatTodoTimestamp(todoCreatedAt) {
  const todoDate = new Date(todoCreatedAt);
  const currentDate = new Date();

  const isSameDay =
    todoDate.getFullYear() === currentDate.getFullYear() &&
    todoDate.getMonth() === currentDate.getMonth() &&
    todoDate.getDate() === currentDate.getDate();

  const isYesterday =
    todoDate.getFullYear() === currentDate.getFullYear() &&
    todoDate.getMonth() === currentDate.getMonth() &&
    todoDate.getDate() === currentDate.getDate() - 1;

  if (isSameDay) {
    const hours = todoDate.getHours();
    const minutes = String(todoDate.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    return `${formattedHours}:${minutes} ${period}`;
  } else if (isYesterday) {
    return "Yesterday";
  } else {
    const year = todoDate.getFullYear();
    const month = String(todoDate.getMonth() + 1).padStart(2, "0");
    const day = String(todoDate.getDate()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  }
}

export const flashToast = (text) => {
  return toast.info(text);
};

export function formatDateTime(milliseconds) {
  const currentDate = new Date(milliseconds);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const hours = currentDate.getHours();
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  const formattedDateTime = `${day}-${month}-${year} ${formattedHours}:${minutes}:${seconds} ${period}`;
  return formattedDateTime;
}

