import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ACES: Provide your clients with delihtful services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.alt_title}>
          About <span className={styles.blue}>Aces</span>
        </h1>

        <p className={styles.description}>
          How it works | Pricing | Docs | Login | Sign up
        </p>
        <p className={styles.pageinfo}>
          Provide your valuable clients with delighful assessments.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
