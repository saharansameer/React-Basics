# Theme Switcher

This project is a React web application with a theme switcher functionality, built using React and Tailwind CSS. It demonstrates the use of `createContext` and `useContext` hooks to manage a global theme state, allowing users to toggle between light and dark modes. 

## Features

- **Theme Context API**: Utilizes `createContext` and `useContext` to manage and share theme state across components.
- **Global Theme Management**: Implements a `useTheme` function to provide easy access to theme context throughout the project.
- **Light/Dark Mode Toggle**: Allows users to toggle between light and dark themes, dynamically updating component styles.

## Hooks

- **createContext**: Creates `themeMode` (to store the current theme) and `toggleThemeMode` (a function to toggle between themes).
- **useContext**: Accesses the theme context via the `useTheme` function, providing a consistent way to handle theme changes across the app.

## Components

- **ThemeButton**: A button component that uses `onChange={toggleThemeMode}` to toggle the theme mode.
- **Card**: A component that changes its theme styling (light or dark mode) based on the selected theme mode.

---

This project is designed to practice using React Context and the `useContext` hook for theme management in a simple, component-based setup.
