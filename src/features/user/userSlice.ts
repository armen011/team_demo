import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
  username: string;
  fullName: string;
  password: string;
  dateOfBirth: string;
  profilPic?: string;
  isLogedIn: boolean;
  email: string;
  errorMessage: string;
  _id: string | undefined;
};

const localState:UserStateType | null = JSON.parse(localStorage.getItem('user')!);


const initialState: UserStateType = !localState ? {
  username: "",
  fullName: "",
  email: "",
  password: "",
  dateOfBirth: "",
  profilPic: "",
  isLogedIn: false,
  errorMessage: "",
  _id: undefined,
} : localState;

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
      if(payload.email){
        // localStorage.setItem("user",JSON.stringify({...payload,isLogedIn:true}));
      }
      return payload.email
        ? { ...payload, isLogedIn: true }
        : { ...initialState, errorMessage: payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.error("Something was wrong");
    });
  },
});

export default userSlice.reducer;
