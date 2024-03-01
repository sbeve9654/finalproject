import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  scene: "idle",
};
const lowerSlice = createSlice({
  name: "lower",
  initialState,
  reducers: {
    replaceLower: (state, action) => {
      state.lower = action.payload;
      console.log(state.lower);
    },
  },
});

export const { replaceLower } = lowerSlice.actions;
export default lowerSlice.reducer;
