import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Projects from "components/Projects";
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "Manage your Aces projects"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Projects user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
