import { obtenerPosicionesAbiertas, obtenerDatosPostulante } from "../api"
import { useEffect, useState } from "react"

function Listado() {

    const [posiciones, setPosiciones] = useState([])
    const [postulante, setPostulante] = useState([])

    useEffect(() => {
        obtenerPostulante()
        obtenerPosiciones()
    }, []);

    async function obtenerPosiciones() {
        const response = await obtenerPosicionesAbiertas()
        setPosiciones(response)
    }

    async function obtenerPostulante() {
        const response = await obtenerDatosPostulante()
        setPostulante(response)
    }

    async function enviarPostulacion(jobId) {
        const job = posiciones.find((job) => job.id === jobId)
        console.log(job)
        //const response = await enviarPostulacion()
    }
    return (
        <div className="flex flex-col items-center px-6 py-8">
            <h2 className="text-3xl font-bold text-[#210f38] mb-6 tracking-tight">
                Posiciones Abiertas
            </h2>

            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-purple-100">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-[#210f38] text-white text-xs uppercase tracking-widest">
                            <th className="px-6 py-4">Título</th>
                            <th className="px-6 py-4">Repositorio de GitHub</th>
                            <th className="px-6 py-4 text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posiciones.map((posicion, index) => (
                            <tr
                                key={posicion.id}
                                className={`border-b border-purple-100 transition-colors duration-150 hover:bg-purple-200 ${index % 2 === 0 ? "bg-white" : "bg-[#f9f6fb]"
                                    }`}
                            >
                                <td className="px-6 py-4 text-gray-700 font-medium">
                                    {posicion.title}
                                </td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        placeholder="https://github.com/usuario/repo"
                                        className="w-full border border-purple-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#210f38] focus:border-transparent transition"
                                    />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="bg-[#210f38] hover:bg-[#3a1a5e] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"

                                        onClick={() => enviarPostulacion(posicion.id)}>
                                        Postularme
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {posiciones.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center py-12 text-gray-400 text-sm italic">
                                    Cargando posiciones...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listado