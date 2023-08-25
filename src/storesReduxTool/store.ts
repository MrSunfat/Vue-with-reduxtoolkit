// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

import  { todoSlice } from "./slices/todoSlice";

export const { addTask, removeTodo } = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;