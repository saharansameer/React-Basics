import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function ListTodos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-y-5 justify-center p-16'>
        {todos.map((todo) => (
            <div key={todo.id} className='w-full flex items-center justify-between p-2 rounded-lg font-semibold bg-yellow-200'>
                <p>{todo.text}</p>
                <button
                className='bg-red-400 px-2 text-lg outline-none rounded-md hover:bg-red-500 font-semibold'
                onClick={() => dispatch(removeTodo(todo.id))}>
                    X
                </button>
            </div>
        ))}
    </div>
  )
}

export default ListTodos