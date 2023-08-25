import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [] as string[],
    },
    reducers: {
        addTask: (state, action) => {
            state.todoList.push(action.payload);
        },
        removeTodo: (state) => {
            state.todoList.pop();
        },
    },
});