import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "post/createpost",
  async (postdata, thunkAPI) => {
    try {
      return PostService.createPost(postdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
