import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";
import { Loading } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    Router.replace("/home");
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>ArStream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Loading />
    </div>
  );
}
