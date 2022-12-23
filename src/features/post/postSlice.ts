import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CSSProperties } from "react";

export type PostImageType = {
  file: string;
  style: CSSProperties;
};
export type PostStateType = {
  images: PostImageType[];
  content: string;
};

const initialState: PostStateType = {
  images: [],
  content: "",
};

export const createPost = createAsyncThunk(
  "async/post",
  async (data: { post: PostStateType; userId: string }, thunkAPI) => {
    const baseUrl = process.env.REACT_APP_PUBLIC_URL;

    try {
      return await fetch(`${baseUrl}api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data.post, userId: data.userId }),
      })
        .then((res) => res.json())
        .then((res) => res);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addImages: (state, action: PayloadAction<PostImageType[]>) => {
      state.images = [...action.payload];
    },
    updateStyles: (state, action: PayloadAction<CSSProperties[]>) => {
      const changedImages = state.images.map(({ file }, index) => ({
        file,
        style: action.payload[index],
      }));
      state.images = changedImages;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state) => {
      console.log("fulfiled");
    });
  },
});

const { addImages, updateStyles } = postSlice.actions;

export { addImages, updateStyles };

export default postSlice.reducer;
