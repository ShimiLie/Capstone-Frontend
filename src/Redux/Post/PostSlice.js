import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./PostAction";

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  isPostSuccess: true,
  message: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        console.log("actn", action);
        state.isLoading = false;
        state.isError = false;
        state.isPostSuccess = true;
        state.posts = action.payload.result;
        state.message = action.payload.msg;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isPostSuccess = false;
        state.message = "error";
      });
  },
});

export default postSlice.reducer;
