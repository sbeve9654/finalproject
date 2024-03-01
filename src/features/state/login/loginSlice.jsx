import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  name: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    replaceLoginGoogle: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      console.log(action.payload);
    },
    replaceLogin: (state, action) => {
      state.name = action.payload;
      console.log(state.name);
    },
  },
});

export const { replaceLoginGoogle, replaceLogin } = loginSlice.actions;
export default loginSlice.reducer;
