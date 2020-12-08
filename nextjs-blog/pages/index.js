import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>백팩커's 블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to&nbsp;
          <a href="https://bedevelopers.tistory.com/">백팩커's World</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Lumos Maxima</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>My Amazing Projects</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Career &rarr;</h3>
            <p>Foot Prints</p>
          </a>

          <a href="" className={styles.card}>
            <h3> Stack &rarr;</h3>
            <p>High Performence!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Powered By Flexaveler
        </a>
      </footer>
    </div>
  );
}
