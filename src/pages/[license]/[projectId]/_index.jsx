import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import Layout from 'components/layout/project'
import Project from "components/Project";
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId } = router.query

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
      <Project user={user} id={projectId} />
    </Layout>
  )
}

export default ProjectPage
