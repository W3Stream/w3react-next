import Head from "next/head";
import styles from "../../styles/Creator.module.scss";
import { AllVideos, Header, Sidebar } from "../../components";
import { useEffect } from "react";
import Router from "next/router";

export default function CreatorDashboard() {
  useEffect(() => {
    Router.push("/creator/dashboard");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>W3Stream Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Sidebar parent="creator" />
      </main>
    </div>
  );
}
