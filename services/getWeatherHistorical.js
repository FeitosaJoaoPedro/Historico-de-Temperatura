import axios from "axios";

export default async function getWeatherHistorical(
  latitude,
  longitude,
  startDate,
  endDate
) {
  const startDateFormated = new Date(
    new Date(startDate).setFullYear(new Date().getFullYear() - 1)
  );
  const endDateFormated = new Date(
    new Date(endDate).setFullYear(new Date().getFullYear() - 1)
  );

  const { data } = await axios.get(
    `https://archive-api.open-meteo.com/v1/era5?latitude=${latitude}&longitude=${longitude}&start_date=${formatDate(
      startDateFormated
    )}&end_date=${formatDate(
      endDateFormated
    )}&daily=temperature_2m_max,temperature_2m_min
`
  );
  return data;
}

function formatDate(date = new Date()) {
  return date.toISOString().split("T")[0];
}
