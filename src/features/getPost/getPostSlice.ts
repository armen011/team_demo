import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Tpost } from "pages/Main/PostComponent/PostComponent";

const initialState:Tpost = []

export const getPosts = createAsyncThunk(
    "async/getPosts",
    async (userId:string, thunkAPI) => {        
        const baseUrl = process.env.REACT_APP_PUBLIC_URL;
        try {
            return await fetch(`${baseUrl}api/posts/${userId}/timeline/all`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
            .then((res) => res.json())
               .then((res) =>{                
                return res
               })
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const getPostsReducer = createSlice({
    name:"getPosts",
    initialState , 
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getPosts.fulfilled, (state,action:PayloadAction<Tpost>) => {
                for(let i = 0;i<action.payload.length;i++){
                    state[i]={images:action.payload[i].images , _doc:action.payload[i]._doc}
                }
            })
            .addCase(getPosts.rejected, () => {
                console.error("Something was wrong");
            });
    },
})

export default getPostsReducer.reducer