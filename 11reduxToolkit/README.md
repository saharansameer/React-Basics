# Redux Toolkit

This project is a basic React web application demonstrating the use of Redux Toolkit and React-Redux. It showcases how to configure a Redux store using `configureStore` and manage state with a slice (`todoSlice`).

## Features

- **Redux Toolkit Integration**: 
  - Utilizes `@reduxjs/toolkit` to configure the store and manage slices.
  - Implements a `todoSlice` to handle todo-related state and actions.
- **React-Redux Integration**: 
  - Uses `react-redux` for seamless interaction between React components and the Redux store.

## Hooks and Tools

- **useDispatch**: Used to dispatch `addTodo`, `removeTodo`, `updateTodo` and `markAsDone` actions to the Redux store.
- **useSelector**: Retrieves the list of todos from the Redux store for display.

## Components

- **TodoForm**: 
  - A form component for users to add new todos.
  - Dispatches the `addTodo` action to update the Redux store.
- **TodoItem**:
  - A component that displays individual todos.
  - Allows users to edit, mark as done, and delete todos.
  - Dispatches `updateTodo`, `markAsDone`, and `removeTodo` actions as needed.
- **todoSlice**: 
  - Contains the initial state and reducers for managing the todo list.
  - Defines actions for adding and removing todos, which are integrated into the Redux store via `configureStore`.

---

This project provides a foundational understanding of state management in React applications using Redux Toolkit and React-Redux.
