import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatType} from "pages/Messages/Components/LeftSide";
import {Dispatch, SetStateAction} from "react";


type Targs = {
    userId?: string;
    chatId?: string;
    isLoading:boolean;
    setLoading:Dispatch<SetStateAction<boolean>>
}

const initialState: ChatType[] = [];


export const getChats = createAsyncThunk(
    "async/chats",
    async ({userId,isLoading,setLoading}: Targs, thunkAPI) => {
        const baseUrl = process.env.REACT_APP_PUBLIC_URL;
        try {
            if (userId) {
            }
            return await fetch(`${baseUrl}api/chat?user_id=${userId}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
                .then((res) => res.json())
                .then((res: ChatType[]) => {
                    setLoading(false);
                    return res
                })
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);


export const messageReducer = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChats.fulfilled, (state, action: PayloadAction<ChatType[]>) => {
                return action.payload;
            })
            .addCase(getChats.rejected, () => {
                console.error("Something was wrong");
            });

    },

});

export default messageReducer.reducer;