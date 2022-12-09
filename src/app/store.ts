import {configureStore} from "@reduxjs/toolkit";
import registrationReducer from "features/registration";
import userReducer from "features/user";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import messageReducer from 'features/messages';

const store = configureStore({
    reducer: {
        user: userReducer,
        registration: registrationReducer,
        messages:messageReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;
