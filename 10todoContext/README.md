# Todo Context

This project is a simple React web application built to practice using the Context API. It demonstrates how to use `createContext` and `useContext` hooks to manage a shared `todos` state across components, showcasing the fundamentals of context-based state management.

## Features

- **Todo Context API**: Utilizes `createContext` and `useContext` to manage a shared `todos` array across the application.
- **Add and Display Todos**: 
  - **TodoForm**: Allows users to add new todos to the context.
  - **TodoItem**: Displays the list of todos retrieved from the context.
- **Global State Management**: Simplifies the management and access of todos without prop drilling.

## Hooks

- **createContext**: Creates the `TodoContext`, which stores the `todos` array and provides a method to update it.
- **useContext**: Accesses the `TodoContext` in different components to interact with the shared `todos` state.

## Components

- **TodoForm**: 
  - A form component where users can add a new todo.
  - Updates the `todos` array in the `TodoContext` when a new todo is submitted.
- **TodoItem**: 
  - Displays the list of todos.
  - Dynamically updates when new todos are added or the state changes.

---

This project is designed to practice managing a global state using the Context API in a simple and modular React application.
