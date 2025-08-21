"use client";

import Date from "@/components/date";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/title";
import Button from "@/components/button";
import LocationSelect from "@/features/locationSelect";

export default function Form() {
  const router = useRouter();

  function handleSubmit() {
    const lat = localStorage.getItem("lat");
    const lon = localStorage.getItem("lon");
    if (lat && lon) {
      router.push(`/data/lat/${lat}/lon/${lon}`);
    }
  }

  return (
    <div className={styles.mainPage}>
      <Image src="/sun.png" alt="Foto do sol" width={400} height={400} />
      <div className={styles.cardPosition}>
        <div className={styles.dataCard}>
          <Title>Por favor, insira os seguintes dados:</Title>
          <div className={styles.destinationLocation}>
            <LocationSelect
              countryLabel="Insira o país de destino"
              stateLabel="Insira o estado de destino"
              cityLabel="Insira a cidade de destino"
            />
          </div>
          <div className={styles.selectDate}>
            <Date label="Data de partida" />
            <Date label="Data de retorno" />
          </div>

          <Button onClick={handleSubmit}>Pronto</Button>
        </div>
      </div>
      <Image
        src="/snowman.png"
        alt="Foto de um boneco de neve"
        width={400}
        height={400}
      />
    </div>
  );
}
