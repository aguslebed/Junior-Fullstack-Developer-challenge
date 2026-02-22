import './App.css'
import Listado from './components/Listado'
import Aviso from './components/Aviso'
import { useState } from 'react'

function App() {
  const [modalActivo, setModalActivo] = useState(false);
  const [tituloModal, setTituloModal] = useState("");
  const [detalleModal, setDetalleModal] = useState("");

  function mostrarModal(titulo, detalle) {
    setTituloModal(titulo);
    setDetalleModal(detalle);
    setModalActivo(true);
  }


  function cerrarModal() {
    setModalActivo(false);
    setTituloModal("");
    setDetalleModal("");
  }

  return (
    <>
      <div className="relative bg-[#e7e1e8] min-h-screen w-screen">
        <div className={`transition-all duration-200 ${modalActivo ? "blur-sm pointer-events-none select-none" : ""}`}>
          <div className="titulo text-[#210f38] flex text-4xl font-bold justify-center">
            <h1 className='m-4'>Challenge junior full stack developer nimble gravity</h1>
          </div>
          <div className="listado">
            <Listado mostrarModal={mostrarModal} />
          </div>
        </div>

        {modalActivo && (
          <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-10">
            <Aviso titulo={tituloModal} detalle={detalleModal} cerrarModal={cerrarModal} />
          </div>
        )}

      </div>
    </>
  )
}

export default App
