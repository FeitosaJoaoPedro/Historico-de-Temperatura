import axios from "axios";
import countryTranslations from "@/translation/countriesTranslation";

export default async function getCountryAndState() {
    try {
        const response = await axios.get(
            "https://countriesnow.space/api/v0.1/countries/states")
        const countriesList = response.data.data;

        const translatedCountries = countriesList.map(item => ({
            ...item,
            originalName: item.name,
            name: countryTranslations[item.name] || item.name,
        }))
        return translatedCountries;
    } catch (error) {
        console.error("Erro ao buscar países:", error);
        return []
    }
}