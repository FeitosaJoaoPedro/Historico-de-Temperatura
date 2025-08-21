import axios from "axios";

export default async function getCity(country, state) {
    try {
        const response = await axios.post("/api/cities", {
            country,
            state,
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar cidades:", error);
        return [];
    }
}