import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
