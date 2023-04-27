import { createSlice } from "@reduxjs/toolkit";

import { getProfile, updateUserProfile } from "./ProfileAction";

const initialState = {
  profile: [],
  isError: false,
  isLoading: false,
  isSuccess: true,
  message: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        console.log("actn", action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.profile = action.payload.posts;
        state.message = action.payload.msg;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "error";
      })
      //updateProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        console.log("actn", action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.profile = action.payload.result;
        state.message = action.payload.msg;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "error";
      });
  },
});

export default profileSlice.reducer;
