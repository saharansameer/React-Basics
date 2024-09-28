import React from 'react';
import counterImage from "./assets/counter.png";
import bgchanger from "./assets/bgchanger.png";
import passgen from "./assets/passgen.png";
import currconv from "./assets/currconv.png";
import reactrouterimg from "./assets/reactrouterimg.png";


function App() {
  return (
    <>
      <div className="mx-auto my-1">
        <h1 className="text-4xl font-bold text-center lg:text-6xl text-white">
          React Beginner Projects
        </h1>

        <div className="grid grid-cols-1 gap-10 m-10 sm:grid-cols-2 xl:grid-cols-4 xl:m-20">
          <div className='flex flex-col items-center'>
            <a href="https://react-02counter.vercel.app/" target="_blank">
              <img
                className="w-52 shadow-lg shadow-white rounded-xl hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
                src={counterImage}
              />
            </a>
            <h3 className="text-2xl font-semibold text-center text-white mt-4">
              1. Counter
            </h3>
          </div>

          <div className='flex flex-col items-center'>
            <a href="https://react-04bgchanger.vercel.app/" target="_blank">
              <img
                className="w-52 shadow-lg shadow-white rounded-xl hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
                src={bgchanger}
              />
            </a>
            <h3 className="text-2xl font-semibold text-center text-white mt-4">
              2. Background Changer
            </h3>
          </div>

          <div className='flex flex-col items-center'>
            <a href="https://react-05passwordgen.vercel.app/" target="_blank">
              <img
                className="w-52 shadow-lg shadow-white rounded-xl hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
                src={passgen}
              />
            </a>
            <h3 className="text-2xl font-semibold text-center text-white mt-4">
              3. Password Generator
            </h3>
          </div>

          <div className='flex flex-col items-center'>
            <a href="https://react-06currencycov.vercel.app/" target="_blank">
              <img
                className="w-52 shadow-lg shadow-white rounded-xl hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
                src={currconv}
              />
            </a>
            <h3 className="text-2xl font-semibold text-center text-white mt-4">
              4. Currency Converter
            </h3>
          </div>

          <div className='flex flex-col items-center'>
            <a href="https://react-07reactrouter.vercel.app/" target="_blank">
              <img
                className="w-52 shadow-lg shadow-white rounded-xl hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
                src={reactrouterimg}
              />
            </a>
            <h3 className="text-2xl font-semibold text-center text-white mt-4">
              5. React Router
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
