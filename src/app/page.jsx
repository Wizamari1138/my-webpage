import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Card from "@/components/card/page";
import HeroImage from "@/images/hero-image.jpg"; // Adjust the path as necessary
import IconImage from "@/images/icon.jpg"; // Adjust the path as necessary

export default function Home() {
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
          <Image
            src={IconImage}
            alt="Icon Image"
            className={styles.iconImage}
          />
          <h1 className={styles.title}>Welcome to the</h1>
          <h1 className={styles.title}>New Galaxy</h1>
        </div>
      </div>
      <div className={styles.maincontent}>
        <div className={styles.PRcontent}>
          <h2>ご挨拶</h2>
          <p>
            初めましてwizamariと申しますm(__)m<br/>
            ゲームで遊んだり、動画編集したり、あとはプログラミングしたりしてます<br/>
            マリオシリーズが大好き
          </p>
        </div>
        <div className={styles.PRcontent}>
          <h2>資格など</h2>
          <div className={styles.PRlist}>
            <ul>
              <li>基本情報技術者試験</li>
              <li>ITパスポート</li>
              <li>情報技術検定一級</li>
              <li>普通自動車第一種運転免許（AT限定）</li>
            </ul>
          </div>
        </div>
        <div className={styles.PRcontent}>
          <h2>スキル</h2>
          <p>HTML・CSS・JavaScript・Unity・C#</p>
        </div>
        <div className={styles.PRcontent}>
          <h2>ゲーム</h2>
          <div className={styles.cardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <p className={styles.gameLink}><a href="/">もっと見る</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}
