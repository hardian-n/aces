import Unauthorized from 'components/unauthorized'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Users from "components/Users";

const UserPage = () => {
  const { user, mutateUser } = useUser({ redirectTo: '/login' })
  const subtitle = "Manage your Aces License users"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Users user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
