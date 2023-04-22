import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "./PostService";

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
