import { useState } from "react"
import "./App.css"

function App() {
  let [color, setColor] = useState("#E8E8E8");

  return (
    <>
    <div className="w-full h-screen duration-100" style={{backgroundColor: color}}>
      <h1 className="text-center text-6xl pt-7 font-bold">Backgorund Color Changer</h1>
      <div className="flex justify-center flex-wrap pt-28 text-em">
        <button className=" bg-red-600 m-5 hover:border-purple-200 text-white font-bold text-xl"
        onClick={() => setColor('#D10000')}>Red</button>
        <button className=" bg-green-800 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor(' #0AC112 ')}>Green</button>
        <button className=" bg-yellow-500 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor(' #EFCB18 ')}>Yellow</button>
        <button className=" bg-blue-700 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor('#3218EF')}>Blue</button>
        <button className=" bg-cyan-300 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor(' #19DFDC')}>Cyan</button>
        <button className=" bg-orange-600 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor(' #FF710F')}>Orange</button>
        <button className=" bg-lime-400 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor('#CCE305')}>Lime</button>
        <button className=" bg-emerald-300 m-5 hover:border-purple-200 text-white font-bold text-xl" 
        onClick={() => setColor('#66E7A2')}>Emerald</button>
      </div>
    </div>
    </>
  )
}

export default App
