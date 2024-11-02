import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div>
        <h1 className='text-6xl text-white text-center font-bold'>Mini Context Project</h1>
      </div>
      <div className='flex flex-col items-center w-full mt-20 gap-5'>
        <Login />
        <Profile />
      </div>
  
    </UserContextProvider>
  )
}

export default App
