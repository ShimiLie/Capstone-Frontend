import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "./UserService";

//logout
export const logout = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    return UserService.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
