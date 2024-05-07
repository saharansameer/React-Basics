import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCounter] = useState(0);

  function addValue() {
    if (count < 20) {
      setCounter(count+1);
    }
  };

  function reduceValue() {
    if (count > 0) {
      setCounter(count-1);
    };
  };

  return (
    <>
    <h1 className='counter'>Counter: {count}</h1>
    <button onClick={addValue}>Add Value</button>
    <button onClick={reduceValue}>Reduce Value</button>
    <footer>Counter-A: <b>{count}</b></footer>
    <footer>Counter-B: <b>{count}</b></footer>
    <footer>Counter-C: <b>{count}</b></footer>
    </>
  )
}
export default App
