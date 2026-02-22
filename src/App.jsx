import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { obtenerPosicionesAbiertas } from './api'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    obtenerPosicionesAbiertas()
      .then(posiciones => {
        console.log(posiciones)
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  return (
    <>

    </>
  )
}

export default App
