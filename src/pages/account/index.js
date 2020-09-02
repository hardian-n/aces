import useUser from '../../lib/useUser'
import Layout from 'components/layout/dashboard'
import DashboardHeader from 'components/heading/license'

const Settings = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <Layout></Layout>
  }

  return (
    <Layout title="License Setting" user={user} black="License" blue="Setting">
      <DashboardHeader />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        XXX
      </div>
    </Layout>
  )
}

export default Settings
