import Head from 'next/head'
import React, { useEffect } from 'react'
import { Header, Sidebar } from '../components'
import styles from '../styles/Home.module.scss'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>ArStream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Sidebar />
      </main>
    </div>
  )
}
