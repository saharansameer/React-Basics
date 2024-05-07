import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className="text-black bg-green-300 p-10 rounded-xl text-5xl font-bold">Tailwind CSS & Props</h1>
      <Card username="laishaw69" btnText="click me bruh!"/>
      <Card username="wayneson" btnText="click here"/>
    </>
  )
}

export default App
