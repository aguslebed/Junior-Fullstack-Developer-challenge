const BASE_URL = import.meta.env.VITE_API_BASE_URL
const EMAIL = "agus.lebed@gmail.com"


export async function obtenerDatosPostulante() {
    const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${EMAIL}`);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al obtener datos del postulante");
    }

    return response.json();
}

export async function obtenerPosicionesAbiertas() {
    const response = await fetch(`${BASE_URL}/api/jobs/get-list`);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al obtener posiciones abiertas");
    }

    return response.json();
}

export async function enviarPostulacion(uuid, jobId, candidateId, repoUrl, applicationId) {
    const response = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "uuid": uuid,
            "jobId": jobId,
            "candidateId": candidateId,
            "repoUrl": repoUrl,
            "applicationId": applicationId

        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al enviar postulacion");
    }
    return response.json();
}