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
