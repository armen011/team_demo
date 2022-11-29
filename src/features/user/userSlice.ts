import { createSlice } from "@reduxjs/toolkit";
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ login: string; passowrd: string }>
    ) => {
      state = {
        userName: "armen21",
        fullName: "Armen",
        password: "asd;asdfasdfa",
        dateOfBirth: "123456",
        profilPic: undefined,
        isLogedIn: true,
        email: action.payload.login,
      };

      return state;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
