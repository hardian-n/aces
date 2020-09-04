import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import { useRouter } from 'next/router';
import Client from "components/Client";

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { id } = router.query

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
    <Layout user={user} >
      <Client user={user} id={id} />
    </Layout>
  )
}

export default UserPage
