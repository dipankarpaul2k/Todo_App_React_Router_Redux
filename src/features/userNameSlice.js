// src/features/userNameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchData, saveData } from '../helperFns';

const getInitialUserName = () => {
  const storedUserName = fetchData('userName');
  return storedUserName || null;
};

const userNameSlice = createSlice({
  name: 'userName',
  initialState: getInitialUserName(),
  reducers: {
    setUserName: (state, action) => {
      saveData('userName', action.payload);
      return action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;
export default userNameSlice.reducer;
