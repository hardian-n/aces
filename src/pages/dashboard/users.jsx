import Head from 'next/head'
import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import DashboardHeader from 'components/heading/users'
import Projects from "components/Projects";

const ProjectsPage = () => {
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
    <Layout user={user} title="Your Projects" black="Your" blue="Projects">
      <DashboardHeader />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <Projects user={user} />
      </div>
    </Layout>
  )
}

export default ProjectsPage
