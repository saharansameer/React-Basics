import { Outlet } from "react-router-dom";
import {Header, Footer} from "./layout";
import { BottomNavBar } from "./layout";

function App() {

  return (
    <div className="w-full m-0 bg-[#f1f1f1] dark:bg-[#1A1A1A]"> 

      <div className="w-full shadow-sm dark:shadow-sm dark:shadow-[#252525] sticky top-0 px-5 py-1 bg-white dark:bg-[#141414]">
        {<Header />}
      </div>

      <div className='w-full max-w-screen-sm mx-auto min-h-screen px-5 responsive'>
        <Outlet />
      </div>
      <div className='sm:hidden'>
        <BottomNavBar />
      </div>

      <div className="w-full py-10 bg-white dark:bg-[#141414] dark:text-white">
        {<Footer />}
      </div>
    </div>
   
  )
}

export default App
