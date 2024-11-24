import { useState } from "react"
import "./App.css"

function App() {
  let [color, setColor] = useState("#E8E8E8");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{ backgroundColor: `${color}` }}
      >
        <h1 className="text-center text-6xl pt-7 font-bold">Backgorund Color Changer</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 w-full ">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl rounded-xl px-6 py-5 bg-gray-100">
          <button
            onClick={() => setColor("#E8E8E8")}
            className="bg-[#E8E8E8] hover:bg-gray-300 px-4 py-1 rounded-3xl font-bold"
          >
            Default
          </button>
          <button
            onClick={() => setColor("#DB0606")}
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-3xl font-bold"
          >
            Red
          </button>
          <button
            onClick={() => setColor("#FFCA2D")}
            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-3xl font-bold"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#202234")}
            className="bg-slate-700 hover:bg-slate-600 px-4 py-1 rounded-3xl font-bold"
          >
            Slate
          </button>
          <button
            onClick={() => setColor("#FA7319")}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-3xl font-bold"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#36DE4C")}
            className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-3xl font-bold"
          >
            Green
          </button>
          <button
            onClick={() => setColor("#FCAFFB")}
            className="bg-pink-300 hover:bg-pink-400 px-4 py-1 rounded-3xl font-bold"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("#7BDDFD")}
            className="bg-cyan-400 hover:bg-cyan-500 px-4 py-1 rounded-3xl font-bold"
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("#8AF32F")}
            className="bg-lime-300 hover:bg-lime-400 px-4 py-1 rounded-3xl font-bold"
          >
            Lime
          </button>
          <button
            onClick={() => setColor("#7700DE")}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-3xl font-bold"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#66E7A2")}
            className="bg-emerald-300 hover:bg-emerald-300 px-4 py-1 rounded-3xl font-bold"
          >
            Emerald
          </button>
        </div>
      </div>
    </>
  );
}

export default App
