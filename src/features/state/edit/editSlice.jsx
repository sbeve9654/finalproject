import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: 0,
};
const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    replaceItem: (state, action) => {
      state.item = action.payload;
      console.log(state.item);
    },
    reduceItem: (state) => {
      if (state.item > 0) {
        state.item = state.item - 1;
      }
      console.log(state.item);
    },
    increaseItem: (state, action) => {
      if (state.item < action.payload - 1) {
        state.item = state.item + 1;
      }
      console.log(state.item);
    },
  },
});

export const { replaceItem, reduceItem, increaseItem } = editSlice.actions;
export default editSlice.reducer;
