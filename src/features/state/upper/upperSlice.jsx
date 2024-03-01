import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  scene: "backpack",
};
const upperSlice = createSlice({
  name: "upper",
  initialState,
  reducers: {
    replaceUpper: (state, action) => {
      state.scene = action.payload;
      console.log(state.scene);
    },
  },
});

export const { replaceUpper } = upperSlice.actions;
export default upperSlice.reducer;
