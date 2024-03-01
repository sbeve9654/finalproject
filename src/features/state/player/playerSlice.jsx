import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hp: 1,
  energy: 3,
  shield: 0,
  damagetaken: 0,
  level: 1,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    replacePlayerhp: (state, action) => {
      state.hp = action.payload;
      console.log(state.hp);
    },
    reducePlayerhp: (state, action) => {
      if (action.payload > 0) {
        state.hp = state.hp - action.payload;
      }
      console.log(state.hp);
    },
    reducePlayerEnergy: (state, action) => {
      state.energy -= action.payload;

      console.log(state.energy);
    },
    replacePlayerEnergy: (state, action) => {
      state.energy = action.payload;
      console.log(state.energy);
    },
    increasePlayerShield: (state, action) => {
      state.shield += action.payload;
      console.log(state.shield);
    },
    replacePlayerShield: (state, action) => {
      state.shield = action.payload;
      console.log(state.shield);
    },
    replaceDamageTaken: (state) => {
      state.damagetaken = Math.floor(7 + Math.random() * 14);
      console.log(state.damagetaken);
    },
    replaceLevel: (state, action) => {
      state.level = action.payload;
      console.log(state.level);
    },
    increaseLevel: (state) => {
      state.level += 1;
      console.log(state.level);
    },
  },
});

export const {
  replacePlayerhp,
  reducePlayerhp,
  replacePlayerEnergy,
  reducePlayerEnergy,
  increasePlayerShield,
  replacePlayerShield,
  replaceDamageTaken,
  replaceLevel,
  increaseLevel,
} = playerSlice.actions;
export default playerSlice.reducer;
