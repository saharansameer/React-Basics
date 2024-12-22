import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {Home} from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
