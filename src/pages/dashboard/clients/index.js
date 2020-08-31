import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from '../../../lib/useUser'
import DashboardLayout from '../../../components/DashboardLayout'
import Clients from "../../../components/Clients";

const ClientsPage = () => {
  const { user } = useUser({ redirectTo: '/login' })

  // This includes setting the noindex header because static files
  // always return a status 200 but the rendered not found page should
  // obviously not be indexed
  if (!user || user.isLoggedIn === false) {
    return (
      <div>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </div>
    )
  }

  return (
    <DashboardLayout user={user} title="Your Clients" black="Your" blue="Clients">
      <Clients user={user} />
    </DashboardLayout>
  )
}

export default ClientsPage
