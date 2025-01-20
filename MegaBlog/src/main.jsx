import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import { Home, Login, Signup, AllPosts, EditPost, AddPost, ViewPost, UserAllPosts } from "./pages";
import { AuthLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login /> } />
      <Route path='/signup' element={<Signup /> } />
      <Route path='/posts' element={<UserAllPosts />} />
      <Route path='/posts/:slug' element={<ViewPost />} />
      <Route path='/edit/:slug' element={<EditPost />} />
      <Route path='/add' element={<AddPost />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
