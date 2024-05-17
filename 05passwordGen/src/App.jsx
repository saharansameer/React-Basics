import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) alpha+= "0123456789";
    if (charAllowed) alpha+= "!@#$%^&*-_=+~`";

    for (let i=1; i<=length; i++) {
      let index = Math.floor(Math.random() * alpha.length + 1);
      pass += alpha.charAt(index);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  //useRef
  const passwordRef = useRef(null);
  const copyPasswordToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    window.alert("Password Copied Successfully!");
  }, [password])

  //useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <h1 className='text-5xl text-center font-bold text-white pt-10 pb-3'>Password Generator</h1>
    <div className='flex justify-center mt-5'>
      <div className='flex justify-center flex-col bg-slate-400'>
        <div className='bg-slate-400 flex justify-center mx-auto input-btn'>
          <input type="text"
          className='outline-none rounded-xl px-3 font-bold text-orange-500 bg-zinc-100 m-5'
          value={password}
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-600 text-white px-3 pb-1 h-10 rounded-xl font-bold ml-3 m-5 copy-btn'
          onClick={copyPasswordToClip}>Copy</button>
        </div>

        <div className='flex justify-center flex-col w-full text-2xl'>
          <div className='flex justify-center flex-row cursor-pointer'>
            <input type="range"
            className='rangeBar w-36 mr-5'
            min={8}
            max={20}
            defaultValue={8}
            onChange={(bar) => {setLength(bar.target.value)}}
            />
            <label className='font-bold text-lg' htmlFor="rangeBar">Length: {length}</label>
          </div>
          
          <div className='flex justify-center items-center flex-row py-4'>
            <input type="checkbox" 
            className='numCheckBox size-4'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label className='text-lg mx-2 mr-5' htmlFor="numCheckBox">Numbers</label>
            <input type="checkbox"
            className='charCheckBox size-4'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label className='text-lg mx-2' htmlFor="charCheckBox">Characters</label>
          </div>
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
