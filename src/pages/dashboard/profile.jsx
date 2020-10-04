import Unauthorized from 'components/unauthorized'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Profile from "components/Profile";

const UserPage = () => {
  const { user, mutateUser } = useUser({ redirectTo: '/login' })
  const subtitle = "Manage your Aces Profile Info"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Profile user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
