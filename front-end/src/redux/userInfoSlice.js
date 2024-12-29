import { getUserInfo } from "@/apiService.js/auth.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching user profile info
export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async (userId, { rejectWithValue }) => {
    try {
      const data = await getUserInfo(userId);
      if (data.status === "FAILD") {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    profileInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearProfileInfo: (state) => {
      state.profileInfo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profileInfo = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfileInfo } = userProfileSlice.actions;
export default userProfileSlice.reducer;
