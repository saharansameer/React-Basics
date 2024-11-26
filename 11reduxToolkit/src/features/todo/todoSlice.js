import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id:1, text: "I'm text", done: false }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                done: false,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? {...todo, text: action.payload.text} : todo)
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload ? {...todo, done: !done} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo,  markAsDone} = todoSlice.actions;

export default todoSlice.reducer;