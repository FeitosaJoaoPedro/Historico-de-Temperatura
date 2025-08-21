"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getWeatherHistorical from "@/services/getWeatherHistorical";
import styles from "./page.module.css";
import Title from "@/components/title";
import Text from "@/components/text";

export default function Data() {
  const [weatherData, setWeatherData] = useState(null);
  const [dates, setDates] = useState({ start: null, end: null });
  const { lat, lon } = useParams();

  useEffect(() => {
    const dateStart = localStorage.getItem("Data de partida");
    const dateEnd = localStorage.getItem("Data de retorno");
    setDates({ start: dateStart, end: dateEnd });
  }, []);

  useEffect(() => {
    async function getWeather() {
      if (!dates.start || !dates.end) return;
      try {
        const weather = await getWeatherHistorical(
          lat,
          lon,
          dates.start,
          dates.end
        );
        setWeatherData(weather);
      } catch (error) {
        console.error("Erro ao buscar dados do clima:", error);
      }
    }
    getWeather();
  }, [lat, lon, dates]);

  if (!weatherData) {
    return <Text>Carregando dados do clima...</Text>;
  }

  const formattedDates = weatherData.daily.time.map((date) =>
    new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    })
  );

  return (
    <div className={styles.mainPage}>
      <div className={styles.cardPosition}>
        <div className={styles.dataCard}>
          <div className={styles.cardContent}>
            <Title className={styles.title}>Histórico de Temperatura</Title>
            <LineChart
              xAxis={[
                {
                  data: formattedDates,
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: weatherData.daily.temperature_2m_max,
                  label: "Temperatura Máxima",
                  color: "#ffc21bff",
                  area: true,
                },
                {
                  data: weatherData.daily.temperature_2m_min,
                  label: "Temperatura Mínima",
                  color: "#70d2f8ff",
                  area: true,
                },
              ]}
              height={400}
              width={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
