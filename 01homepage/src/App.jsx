import React from 'react';
import Project from './components/Project';

function App() {
  return (
    <div className="w-full max-w-screen-sm mx-auto h-screen p-5 responsive">
      <h1 className="text-4xl font-bold text-center md:text-5xl text-white py-3">
        React Beginner Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-20 py-10 ">
        <Project
          title={"Mega Blog"}
          link={"https://megablogx.vercel.app/"}
          image={"/megablogx.png"}
        />
        <Project
          title={"Currency Converter"}
          link={"https://react-06currencyconv.vercel.app/"}
          image={"/currconv.png"}
        />
        <Project
          title={"Password Generator"}
          link={"https://react-05passwordgen.vercel.app/"}
          image={"/passgen.png"}
        />
        <Project
          title={"Redux Toolkit"}
          link={"https://react-11reduxtoolkit.vercel.app/"}
          image={"/reduxtoolkit.png"}
        />
        <Project
          title={"Background Changer"}
          link={"https://react-04bgchanger.vercel.app/"}
          image={"/bgchanger.png"}
        />
        <Project
          title={"Counter"}
          link={"https://react-02counter.vercel.app/"}
          image={"/counter.png"}
        />
      </div>
    </div>
  );
}

export default App
