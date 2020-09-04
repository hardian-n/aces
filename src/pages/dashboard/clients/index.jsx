import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Clients from "components/Clients";
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "List of all of your Aces clients"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Clients user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
