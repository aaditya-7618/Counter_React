import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: {
    privacy: false,
  },
  reducers: {
    toggle: (state, action) => {
      state.privacy = !state.privacy;
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
