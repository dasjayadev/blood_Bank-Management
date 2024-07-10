import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authAction";
let token = localStorage.getItem("blood-token");
let initialValue = {
  loading: false,
  user: null,
  token: token ? token : null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {},
  extraReducers:
    //  userLogin
    (builder) => {
      builder.addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        console.log("hello ....user", payload);
        state.loading = false;
        state.user = payload.user;
      });
      builder.addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
      });
      //userRegister
      builder.addCase(userRegister.pending, (state) => {
        state.loading = false;
        state.error = "";
      });
      builder.addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        // state.sucess = payload.sucess
      });
      builder.addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
      });
      //current-user
      builder.addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
      });
      builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.error;
      });
    },
});
export default authSlice;
