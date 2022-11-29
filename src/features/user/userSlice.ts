import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserStateType = {
  userName: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  profilPic?: string;
  isLogedIn: boolean;
  email: string;
  errorMessage: string;
};

const initialState: UserStateType = {
  userName: "",
  fullName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  profilPic: "",
  isLogedIn: false,
  errorMessage: "",
};

type Targ = {
  login: string;
  password: string;
};

export const login = createAsyncThunk(
  "async/login",
  async ({ login, password }: Targ, thunkAPI) => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;

    try {
      return await fetch(
        `${baseUrl}api/auth/login?login=${login}&password=${password}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((res) => res);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return payload.email
        ? { ...payload, isLogedIn: true }
        : { ...initialState, errorMessage: payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      // console.log("action.payload", action.payload);
    });
  },
});

export default userSlice.reducer;
