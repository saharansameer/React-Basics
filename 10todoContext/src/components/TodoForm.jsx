import { useTodo } from "../context";
import { useState } from "react";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const {globalId, addTodo} = useTodo();

  const createTodo = (e) => {
    e.preventDefault();
    if (!todoTitle) return;

    addTodo({id: globalId, todo: todoTitle, completed: false});
    setTodoTitle("");
  };

  return (
    <form onSubmit={createTodo} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
