import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../redux/messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
