# MegaBlog

MegaBlog is a dynamic blogging platform built with modern web technologies. It allows users to create, edit, read, and delete blog posts with ease. The application provides both light and dark theme modes, ensuring a customizable and user-friendly experience.

---

## Features

- **User Authentication**: Sign up, log in, and log out functionality.
- **Authenticated Content**: Posts are only visible to logged-in users.
- **Personalized Views**: Users can view the posts they have created separately.
- **CRUD Functionality**: Users can create, read, update, and delete blog posts.
- **Rich Text Editing**: TinyMCE text editor is integrated for creating rich and visually appealing blog content.
- **Global State Management**: Utilized Redux to manage the application's state, including themes, posts, and user authentication data.

- **Routing**: Navigation handled with React Router.
  - `/` - Homepage (All posts will be visible here)
  - `/login` - User login page
  - `/signup` - User signup page
  - `/posts` - View posts created by yourself only
  - `/posts/:slug` - View a single post
  - `/create` - Create a new post

---

## Technologies Used

- **Frontend**:
  - JavaScript
  - React
  - Tailwind CSS
  - Redux
  - React Router

- **Backend**:
  - <a href="https://appwrite.io">`Appwrite`</a>

- **Text Editor**:
  - <a href="https://www.tiny.cloud/">`TinyMCE`</a>
---

## Usage

- Sign up or log in to access the application.
- Create new blog posts using the Tiny MCE editor.
- View, edit, or delete your posts.
- Switch between light and dark themes using the theme toggle.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Appwrite](https://appwrite.io/)
- [Tiny MCE](https://www.tiny.cloud/)
- [Tailwind](https://tailwindcss.com/)

---

## Deployment
- <a href="https://megablogx.vercel.app/" target="_blank">`Click me to visit MegaBlog`</a>

---