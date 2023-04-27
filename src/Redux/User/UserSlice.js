import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./UserAction";

const initialState = {
  user: [],
  isError: false,
  isLoading: false,
  isSuccess: true,
  message: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        // console.log("actn", action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = action.payload.msg;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "error";
      });
  },
});

export default userSlice.reducer;
