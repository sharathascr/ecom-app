import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const registerUser = createAsyncThunk("users/register", async (_, thunkAPI) => {
//   const { rejectWithValue } = thunkAPI;
//   try {
//     const response = await fetch("http://localhost:7071/users");
//   } catch (err) {
//     return rejectWithValue({ message: `Network Error: ${err}` });
//   }
// });

export const fetchUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:7071/users");
      if (!response.ok) {
        return rejectWithValue({ message: "Failed to fetch users" });
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue({ message: `Error while fetching users ${err}` });
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    isLoggedIn: false,
    processing: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.processing = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.processing = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.processing = false;
        state.error =
          action.payload ??
          action.payload.message ??
          "Error while fetching users";
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice;
