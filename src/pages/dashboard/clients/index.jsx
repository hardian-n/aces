import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Clients from "components/Clients";

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "List of Clients"

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
    <Layout user={user}>
      <Clients user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
