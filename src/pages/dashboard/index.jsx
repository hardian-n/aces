import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Dashboard from 'components/Dashboard'
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "Active since ..."

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Dashboard user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
