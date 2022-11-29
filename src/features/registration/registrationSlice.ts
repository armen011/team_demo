import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type RegistrationStateType = {
  username: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  email: string;
  isChecked: boolean;
  errorMessage: string;
};
type Targ = {
  email: string;
  username: string;
  password: string;
  fullName: string;
};

const initialState: RegistrationStateType = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  isChecked: false,
  errorMessage: "",
};

export const getResponse = createAsyncThunk(
  "async/registration",
  async ({ email, username, password, fullName }: Targ, thunkAPI) => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;

    try {
      return await fetch(
        `${baseUrl}api/auth/check_user?email=${email}&username=${username}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "ok") {
            return {
              email,
              username,
              password,
              fullName,
              isChecked: true,
              dateOfBirth: "",
              errorMessage: "",
            };
          }
          return {
            isChecked: false,
            errorMessage: res.text,
            email,
            username,
            password,
            fullName,
            dateOfBirth: "",
          };
        });
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResponse.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(getResponse.rejected, (state, action) => {
        console.error("Something was wrong");
      });
  },
});

export default registrationSlice.reducer;
