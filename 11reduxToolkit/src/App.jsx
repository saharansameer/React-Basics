import { useState } from 'react'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

function App() {

  return (
    <div className='w-full max-w-screen-sm mx-auto py-5'>
      <h1 className='text-6xl text-center font-bold pb-10 text-white'>Redux Toolkit</h1>
      <AddTodo />
      <ListTodos />     
    </div>
  )
}

export default App
