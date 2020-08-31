import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import DashboardNav from '../components/DashboardNav'
import styles from '../styles/aces.module.css'

const DashboardLayout = ({ children, user, title, black, blue, ...props }) => (
  <>
    <Head>
      <title>{title} - Aces</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }

      .container {
        max-width: 40rem;
        margin: 1.5rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 2rem;
      }
    `}</style>
    {/* <Header /> */}

    <main>
      <div className="container">
        <p><strong>{user?.username}@{user?.license}</strong></p>

        <h1 className={styles.title}>
          {black} <span className={styles.blue}>{blue}</span>
        </h1>

        <DashboardNav />

        {children}

        <br/><br/><br/>
      </div>
    </main>
  </>
)

export default DashboardLayout

DashboardLayout.propTypes = {
  children: PropTypes.node,
}
