import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Card from "@/components/card/page";
import HeroImage from "@/images/game-hero.jpg"; // Adjust the path as necessary

export default function Game() {
  return (
    <>
      <Header />
      <div className={styles.heroSection}>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className={styles.heroImage}
          fill
          priority
        />
        <div className={styles.overlay}>
          <h1 className={styles.title}>GAME</h1>
        </div>
      </div>
      <div className={styles.maincontent}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}
