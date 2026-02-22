import './App.css'
import Listado from './components/Listado'

function App() {
  return (
    <>
      <div className="bg-[#e7e1e8] h-full w-screen">
        <div className="titulo text-[#210f38] flex text-4xl font-bold justify-center">
          <h1 className='m-4'>Challenge junior full stack developer nimble gravity</h1>
        </div>

        <div className="listado">
          <Listado />
        </div>
      </div>
    </>
  )
}

export default App
