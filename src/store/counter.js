import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    Add: (state, action) => {
      state.counter += Number(action.payload.value);
    },
    Sub: (state, action) => {
      state.counter -= Number(action.payload.value);
    },
    Mul: (state, action) => {
      state.counter *= Number(action.payload.value);
    },
    Div: (state, action) => {
      state.counter /= Number(action.payload.value);
    },
    Increment: (state) => {
      state.counter++;
    },
    Decrement: (state) => {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
