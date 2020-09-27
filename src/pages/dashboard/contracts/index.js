import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Contracts from "components/Contracts";

const ContractsPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "List of your contracts"

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
    <Layout user={user} title="Your Projects" black="Your" blue="Projects">
      { <Contracts user={user} subtitle={subtitle} /> }
    </Layout>
  )
}

export default ContractsPage
