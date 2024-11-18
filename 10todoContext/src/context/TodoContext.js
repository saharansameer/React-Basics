import {createContext, useContext} from "react"

export const TodoContext = createContext({
    globalId: 0,
    todos: [
        {
            id: 0,
            todo: "I'm todo",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext);
}