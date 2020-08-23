import Head from 'next/head'
import useUser from '../../lib/useUser'
import DashboardLayout from '../../components/DashboardLayout'
import DashboardNav from '../../components/DashboardNav'
import styles from '../../styles/aces.module.css'

const Settings = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <DashboardLayout></DashboardLayout>
  }

  return (
    <DashboardLayout title="License Setting" user={user} black="License" blue="Setting" />
  )
}

export default Settings
