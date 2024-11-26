import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className='w-full max-w-screen-sm mx-auto py-5'>
      <h1 className='text-6xl text-center font-bold pb-10 text-white'>Redux Toolkit</h1>
      <AddTodo />
      <div className='flex flex-col gap-y-5 justify-center px-16 py-10'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))
        }
      </div>    
    </div>
  )
}

export default App
