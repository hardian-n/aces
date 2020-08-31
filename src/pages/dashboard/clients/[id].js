import Head from 'next/head'
import useUser from '../../../lib/useUser'
import DashboardLayout from '../../../components/DashboardLayout'
import DefaultErrorPage from 'next/error'
import DashboardNav from '../../../components/DashboardNav'
import { useRouter } from 'next/router';
import Client from "../../../components/Client";

const ClientPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { id } = router.query

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
    <DashboardLayout user={user} title="Your Projects" black="Your" blue="Projects">
      <Client user={user} id={id} />
    </DashboardLayout>
  )
}

export default ClientPage
