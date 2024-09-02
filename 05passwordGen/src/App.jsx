import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) alpha += "0123456789";
    if (charAllowed) alpha += "!@#$%^&*-_=+~`";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * alpha.length + 1);
      pass += alpha.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //useRef
  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="text-5xl text-center font-bold text-white mt-3">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto h-60 shadow-lg rounded-xl px-5 my-5 bg-slate-500">
        <div className="flex flex-col">
          <div className="flex flex-row gap-5 items-center mt-8">
            <input
              type="text"
              className="outline-none w-full py-2 px-2 rounded-xl font-bold text-orange-500 bg-zinc-100"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-600 text-white px-3 py-2 rounded-lg font-bold hover:bg-blue-700 transition-all ease-in-out"
              onClick={copyPasswordToClip}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-center items-center gap-5 my-8">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={20}
              defaultValue={8}
              onChange={(bar) => {
                setLength(bar.target.value);
              }}
            />
            <label className="font-bold text-xl" htmlFor="rangeBar">
              Length: {length}
            </label>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div>
              <input
                type="checkbox"
                id="numCheckBox"
                className="mx-1 size-4"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label
                className="text-lg mx-2 mr-5 font-bold"
                htmlFor="numCheckBox"
              >
                Numbers
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="charCheckBox"
                className="mx-1 size-4"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-lg mx-2 font-bold" htmlFor="charCheckBox">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
