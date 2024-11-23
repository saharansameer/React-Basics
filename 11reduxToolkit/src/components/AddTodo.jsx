import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {

  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  }

  return (
    <div className=''>
        <form onSubmit={addTodoHandler} className='flex justify-center gap-x-5'>
            <input 
            type="text" 
            className='w-1/2 px-2 py-1 text-lg outline-none rounded-lg focus:ring-2 focus:ring-blue-500'
            placeholder='Type here...'
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            />
            <button type='submit'
            className='bg-slate-400 px-3 py-1 outline-none rounded-sm hover:bg-slate-200 font-semibold'>
                Add
            </button>
        </form>
    </div>
  )
}

export default AddTodo