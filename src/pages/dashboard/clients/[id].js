import Head from 'next/head'
import useUser from '../../../lib/useUser'
import DashboardLayout from '../../../components/DashboardLayout'
import DashboardNav from '../../../components/DashboardNav'
import styles from '../../../styles/aces.module.css'

const Client = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <DashboardLayout></DashboardLayout>
  }

  return (
    <DashboardLayout>
      <Head>
        <title>ACES: Provide your clients with delihtful services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>License: {user.license.toUpperCase()}</p>

      <h1 className={styles.title}>
        Client: <span className={styles.blue}>PT ABC</span>
      </h1>

      <DashboardNav />

      <pre className={styles.pre}>{JSON.stringify(user, null, 2)}</pre>
    </DashboardLayout>
  )
}

export default Client
