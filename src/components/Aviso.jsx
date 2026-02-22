
export function Aviso({ titulo, detalle, cerrarModal }) {

    return (
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center px-10 py-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-[#210f38] mb-3 tracking-tight text-center">
                {titulo}
            </h2>
            <p className="text-gray-600 text-sm text-center mb-6">
                {detalle}
            </p>
            <button
                className="bg-[#210f38] hover:bg-[#3a1a5e] text-white font-semibold px-8 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                onClick={cerrarModal}
            >
                OK
            </button>
        </div>
    )
}

export default Aviso