// [license]/index.js

// https://github.com/vercel/next.js/discussions/10960

import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from '../../../lib/useUser'
import DashboardLayout from '../../../components/DashboardLayout'
import Project from "../../../components/Project";
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { _project_ } = router.query

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
      <Project user={user} id={_project_} />
    </DashboardLayout>
  )
}

export default ProjectPage
