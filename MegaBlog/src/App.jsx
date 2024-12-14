import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-full bg-[#232323]"> 

      <div className="w-full sticky top-0 h-5 bg-slate-500">
        {/* Header */}
      </div>

      <div className='w-full max-w-screen-sm mx-auto min-h-screen px-5 responsive'>
        <Outlet />
      </div>

      <div className="w-full h-5 bg-slate-500">
        {/* Footer */}
      </div>
    </div>
   
  )
}

export default App
