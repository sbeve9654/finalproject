import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import fileReducer from "./file/fileSlice";
import lowerReducer from "./lower/lowerSlice";
import upperReducer from "./upper/upperSlice";
import enemyReducer from "./enemy/enemySlice";
import playerReducer from "./player/playerSlice";
import editReducer from "./edit/editSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    file: fileReducer,
    lower: lowerReducer,
    upper: upperReducer,
    enemy: enemyReducer,
    player: playerReducer,
    edit: editReducer,
  },
});
