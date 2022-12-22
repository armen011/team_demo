import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
  username: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  profilePicture?: string;
  isLogedIn: boolean;
  email: string;
  errorMessage: string;
  _id: string | undefined;
  followers: string[];
  followings: string[];
};

const initialState: UserStateType = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  profilePicture: "",
  isLogedIn: false,
  errorMessage: "",
  _id: undefined,
  followers: [],
  followings: [],
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
  reducers: {
    tryToLogin: (state) => {
      const json = localStorage.getItem("user");
      if (json) {
        const user = JSON.parse(json) as UserStateType;
        return {
          ...user,
          isLogedIn: true,
          profilePicture: "",
        };
      }
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload, "payload");
      if (payload.email) {
        localStorage.setItem("user", JSON.stringify(payload));
        return { ...payload, isLogedIn: true };
      }
      return { ...initialState, errorMessage: payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.error("Something was wrong");
    });
  },
});
const { tryToLogin } = userSlice.actions;

export { tryToLogin };
export default userSlice.reducer;
