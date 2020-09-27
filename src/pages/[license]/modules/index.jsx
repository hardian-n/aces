import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import LicenseModules from 'components/LicenseModules'
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "Modules Owned"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <LicenseModules user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
