const BASE_URL = import.meta.env.VITE_API_BASE_URL

const DATOS = {
    "uuid": "45738437-bdbc-49ed-86d1-6ccbcaab3146",
    "candidateId": "74226114005",
    "applicationId": "77933831005",
    "firstName": "Agustin",
    "lastName": "Lebed",
    "email": "agus.lebed@gmail.com"
}


export async function obtenerPosicionesAbiertas() {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al obtener posiciones abiertas");
    }

    return response.json();
}