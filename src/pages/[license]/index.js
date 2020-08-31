// [license]/index.js

// https://github.com/vercel/next.js/discussions/10960

import Head from 'next/head'
import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import useUser from '../../lib/useUser'
import DashboardLayout from '../../components/DashboardLayout'
import Projects from "../../components/Projects";
import styles from '../../styles/aces.module.css'

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
    <DashboardLayout user={user} title="Your Projects" black="Your" blue="Projects">
      <Projects user={user} />
    </DashboardLayout>
  )
}

export default ProjectsPage
