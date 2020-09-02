// import useUser from '../../lib/useUser'
// import DashboardLayout from '../../components/DashboardLayout'
import useUser from 'lib/useUser'
import DashboardLayout from 'components/DashboardLayout'


const Dashboard = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <DashboardLayout></DashboardLayout>
  }

  return (
    <DashboardLayout user={user} title="Dashboard" blue="Dashboard">

    </DashboardLayout>
  )
}

export default Dashboard
