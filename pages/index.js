import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../data";
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState('')

  const post = async (value) => {
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  };

  const test = () => {
    console.log("test");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <input type={'text'} placeholder='name' value={value} onChange={(e) => {setValue(e.target.value)}} />
          <p>{value}</p>
          <button
            onClick={() => {
              post(value);
            }}
          >
            Press This
          </button>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {data.map((item) => (
          <p key={Math.random()}>{item.name}</p>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
