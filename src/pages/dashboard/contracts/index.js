import Head from 'next/head'
import useUser from '../../../lib/useUser'
import withSession from '../../../lib/session'
import DashboardLayout from '../../../components/DashboardLayout'
import DashboardNav from '../../../components/DashboardNav'
import styles from '../../../styles/aces.module.css'

export const getServerSideProps = withSession(async function({req, res}) {
  const user = req.session.get("user")
  if (!user || user.isLoggedIn === false) {
    return {
      props: { contracts: false }
    }
  }

  const url = 'https://aces-api-dev.herokuapp.com/v1' + `/contracts/${user.license}`
  const rsp = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })
  const contracts = await rsp.json()
  return {
    props: { contracts }
  }
})

const Contracts = ({ contracts }) => {
  const { user } = useUser({ redirectTo: '/login' })
  if (!user || user.isLoggedIn === false) {
    return <div></div>
  }


  return (
    <DashboardLayout user={user} title="Your Contracts" black="Your" blue="Contracts">

      <pre className={styles.pre}>{JSON.stringify(contracts, null, 2)}</pre>

    </DashboardLayout>
  )
}

export default Contracts
