import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import Projects from "components/Projects";

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const subtitle = "Di mana proyek bergelimang..."

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
      <Projects user={user} subtitle={subtitle} />
    </Layout>
  )
}

export default UserPage
