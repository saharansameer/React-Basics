# Mini Context

This project is a simple web application built with React and Tailwind CSS, designed to demonstrate the use of React Context API. The application includes a login feature where users can enter their details, which are then displayed in a personalized welcome message on the Profile page. This project focuses on implementing the Context API to manage global state in React, making it easy to share data between components.

## Features

- **React Context API**: Utilizes `UserContext` and `UserContextProvider` to manage and share user data across components.

- **Simple Global State Management**: Demonstrates how to use Context for a straightforward global state management solution in React.
## Hooks

- **createContext**: Used to initialize `UserContext`, allowing user information to be easily accessed by any component within the provider.

## Components

- **UserContext**: A context to store and provide user information across components.
- **UserContextProvider**: Wraps the main application to make the user data available globally.
- **Login**: A form where users enter their details.
- **Profile**: Displays Login details entered by user with a Welcome message.

---

This project is designed to provide a simple example of using React Context and `createContext` for component-based state sharing.