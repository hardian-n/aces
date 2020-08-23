import useUser from '../../../lib/useUser'
import withSession from '../../../lib/session'
import DashboardLayout from '../../../components/DashboardLayout'
import styles from '../../../styles/aces.module.css'

export const getServerSideProps = withSession(async function({req, res}) {
  const user = req.session.get("user")
  if (!user || user.isLoggedIn === false) {
    return {
      props: { clients: false }
    }
  }

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}`
  const rsp = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })
  const clients = await rsp.json()
  return {
    props: { clients }
  }
})

const Clients = ({ clients }) => {
  const { user } = useUser({ redirectTo: '/login' })
  if (!user || user.isLoggedIn === false) {
    return <div></div>
  }


  return (
    <DashboardLayout user={user} title="Your Clients" black="Your" blue="Clients">

      <pre className={styles.pre}>{JSON.stringify(clients, null, 2)}</pre>

    </DashboardLayout>
  )
}

export default Clients
