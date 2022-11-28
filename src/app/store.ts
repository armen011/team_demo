import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/user";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import registrationReducer from '../features/registration'

const store = configureStore({
  reducer: {
    user: userReducer,
    registration:registrationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;
