import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./AuthAction";
import { getUserfromLocalStorage } from "../../Utils/Utils";

const initialState = {
  isLoading: false,
  isError: false,
  isRegisterSuccess: false,
  message: "",
  isLoginSuccess: false,
  user: getUserfromLocalStorage,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.message = "";
      })

      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("action", action);
        state.isLoading = false;
        state.isError = false;
        state.isRegisterSuccess = true;
        state.isLoginSuccess = true;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isRegisterSuccess = false;
        state.isLoginSuccess = false;
        state.message = "";
      });
  },
});

export default authSlice.reducer;
