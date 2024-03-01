import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  file: 0,
};
const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    replaceFile: (state, action) => {
      state.file = action.payload;
      console.log(state.file);
    },
  },
});

export const { replaceFile } = fileSlice.actions;
export default fileSlice.reducer;
