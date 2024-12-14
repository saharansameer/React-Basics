import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import {Provider} from "react-redux"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      {/* <Route path='/' element={}/> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  // <Provider>
  // </Provider>
)
