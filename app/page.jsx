import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import Text from "@/components/text";
import styles from "./page.module.css";
import MainTitle from "@/components/main-title";

export default function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <MainTitle>Help Travel</MainTitle>
      </div>
      <div className={styles.mainText}>
        <Text>
          O Help Travel te ajuda a se preparar para o clima do local que você
          vai viajar! Para começar clique em <em>iniciar</em>.
        </Text>
      </div>
      <div className={styles.imagesAndButton}>
        <Image
          src="/beach.png"
          alt="Foto de uma garota com seu cachorro na praia"
          width={400}
          height={400}
        />
        <Link href="/form">
          <Button>Iniciar</Button>
        </Link>
        <Image
          src="/winterRoad.png"
          alt="Foto de um homem andando em uma estrada no inverno"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
