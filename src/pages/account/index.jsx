import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import License from 'components/License'
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "Manage your Aces License"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <License user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
