import { Outlet } from "react-router-dom";
import {Header, Footer} from "./layout";

function App() {

  return (
    <div className="w-full m-0 bg-[#f1f1f1] dark:bg-[#232323]"> 

      <div className="w-full shadow-md sticky top-0 px-5 py-5 dark:bg-[#242424]">
        {<Header />}
      </div>

      <div className='w-full max-w-screen-sm mx-auto min-h-screen px-5 responsive'>
        <Outlet />
      </div>

      <div className="w-full py-5 bg-slate-500">
        {<Footer />}
      </div>
    </div>
   
  )
}

export default App
