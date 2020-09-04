import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import DashboardHeader from 'components/heading/dashboard'


const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  console.log(user)

  if (!user || user.isLoggedIn === false) {
    return <Layout></Layout>
  }

  return (
    <Layout user={user}>
      <DashboardHeader />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        LLL
      </div>
    </Layout>
  )
}

export default UserPage
