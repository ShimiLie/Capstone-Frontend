import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileService } from "./ProfileService";

//get profile
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (thunkAPI) => {
    try {
      return ProfileService.getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//updateUserProfile
export const updateUserProfile = createAsyncThunk(
  "profile/updateUserProfile",
  async (userData, thunkAPI) => {
    try {
      return ProfileService.updateUserProfile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
