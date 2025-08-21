import axios from "axios";

export default async function getCoordinates(cityName, stateName, countryName) {
  const { data } = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${cityName},${stateName},${countryName}&format=json`
  );

  if (data.length > 0) {
    return data[0];
  }

  throw new Error(
    `Coordenadas não encontradas para o endereço: ${cityName},${stateName},${countryName}`
  );
}

/*
export default async function getCoordinates(cityName) {
    try {
        const response = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
            params: {
                name: cityName,
                count: 1,
            },
        });

        const data = response.data;

        if (data?.results?.length) {
            const { latitude, longitude } = data.results[0];
            return { latitude, longitude };
        } else {
            console.warn("Cidade não encontrada.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        return null;
    }
}
*/
