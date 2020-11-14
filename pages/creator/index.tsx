import Head from "next/head";
import styles from "../../styles/Creator.module.scss";
import { Loading } from "../../components";
import { useEffect } from "react";
import Router from "next/router";

export default function CreatorHome() {
  useEffect(() => {
    Router.replace("/creator/dashboard");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>W3Stream Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loading />
    </div>
  );
}
