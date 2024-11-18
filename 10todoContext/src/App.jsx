import { useEffect, useState } from 'react'
import { TodoProvider} from "./context";
import {TodoForm, TodoItem} from "./components"

function App() {
  const [globalId, setGlobalId] = useState(1);
  const [todos, setTodos] = useState([]);

  // CRUD Operations
  const addTodo = (todo) => {
    setTodos((prevState) => [todo, ...prevState]);
    setGlobalId(globalId+1);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevState) => prevState.map((prevTodo) => prevTodo.id==id ? todo : prevTodo));
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevState) => 
      prevState.map((prevTodo) => prevTodo.id == id ? {prevTodo, completed: !prevTodo.completed} : prevTodo)
    )
  }

  // Local Storage Functionality
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <TodoProvider value={{globalId, todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {
                todos.map((todo) => {
                  <div key={todo.id} className='w-full' >
                    <TodoItem todo={todo} />
                  </div>    
                })
              }
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;