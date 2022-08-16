import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/messages').then((data) => data.json());
    return response.text;
  },
);

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: '',
  },
  reducers: {},
  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => {
      const newState = { message: action.payload };
      return newState;
    },
  },
});

export default messageSlice.reducer;
