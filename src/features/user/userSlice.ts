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
};

const initialState: UserStateType = {
  userName: "",
  fullName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  profilPic: "",
  isLogedIn: false,
};

type Targ = {
  login: string;
  password: string;
};

export const login = createAsyncThunk(
  "async/login",
  async (args: Targ, thunkAPI) => {
    try {
      return await fetch(
        `https://academoart.herokuapp.com/api/auth/login?login=${args.login}&password=${args.password}`,
        { method: "POST", headers: { "Content-Type": "application/json" } }
      )
        .then((res) => res.json())
        .then((res) => console.log('res', res));
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
    builder.addCase(login.fulfilled, (state, action) => {
      // console.log("action.payload", action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      // console.log("action.payload", action.payload);
    });
  },
});

export default userSlice.reducer;
