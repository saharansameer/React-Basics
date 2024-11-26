import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, markAsDone } from '../features/todo/todoSlice';

function TodoItem({todo}) {
    const [todoText, setTodoText] = useState(todo.text);
    const [isEditable, setEditable] = useState(false);
    const [isCompleted, setCompleted] = useState(false);

    const dispatch = useDispatch();    
    const editTodo = (id) => {
        dispatch(updateTodo({id: id, text: todoText}));
    }

    const inputRef = useRef(null);
    useEffect(() => {
        if(isEditable && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditable])

  return (

    <div className={`w-full flex flex-col p-2 rounded-lg font-semibold ${isCompleted ? 'bg-gray-600' : 'bg-yellow-200' }`}>
        <input 
        type="text"
        className={`text-xl bg-transparent outline-none p-1 ${isEditable ? 'shadow-sm shadow-gray-500 rounded-md bg-[#FFBA66]' : ''} ${isCompleted ? 'line-through' : ''}`}
        value={todoText}
        readOnly={!isEditable}
        onChange={(e) => setTodoText(e.target.value)}
        ref={inputRef}
        />
        <div className='flex justify-end gap-x-3 pt-2'>
            <button
            className={` px-2 text-lg outline-none rounded-md font-semibold ${isEditable ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-green-400 hover:bg-green-500'}`}
            onClick={() => {
                setCompleted(!isCompleted);
                dispatch(markAsDone(todo.id));
            }}
            disabled={isEditable}
            >
                {isCompleted ? 'Undo' : 'Done'}
            </button>

            <button
            className={`px-2 text-lg outline-none rounded-md  font-semibold ${isCompleted ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-orange-400 hover:bg-orange-500'}`}
            disabled={isCompleted}
            onClick={() => {             
                setEditable(false);

                if (isEditable) {
                    editTodo(todo.id);
                } else {
                    setEditable(!isEditable)
                }
                
            }}>
                {isEditable ? 'Save' : 'Edit'}
            </button>

            <button
            className='bg-red-400 px-2 text-lg outline-none rounded-md hover:bg-red-500 font-semibold'
            onClick={() => dispatch(removeTodo(todo.id))}>
                Delete
            </button>
        </div>
            
    </div>
  )
}

export default TodoItem