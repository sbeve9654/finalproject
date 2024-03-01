import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  enemyhp: [0, 0],
  target: 0,
  firstload: [true, true],
};
const enemySlice = createSlice({
  name: "enemy",
  initialState,
  reducers: {
    replaceEnemy: (state, action) => {
      state.id = action.payload;
      console.log(state.id);
    },
    replaceEnemyhp: (state, action) => {
      state.enemyhp[action.payload.id] = action.payload.hp;
      console.log(state.enemyhp[action.payload.id]);
      if (state.enemyhp[0] <= 0 && state.enemyhp[1] <= 0) {
        console.log("new level");
        state.id = Math.floor(Math.random() * 4);
        state.firstload = [true, true];
      }
    },
    replaceEnemytarget: (state, action) => {
      state.target = action.payload;
      console.log(state.target);
    },
    replaceFirstLoad: (state, action) => {
      state.firstload[action.payload.id] = action.payload.firstload;
      console.log(state.firstload);
    },
  },
});

export const {
  replaceEnemy,
  replaceEnemyhp,
  replaceEnemytarget,
  replaceFirstLoad,
} = enemySlice.actions;
export default enemySlice.reducer;
