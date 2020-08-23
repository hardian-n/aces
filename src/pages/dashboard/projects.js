// [license]/index.js

// https://github.com/vercel/next.js/discussions/10960

import Head from 'next/head'
import Link from 'next/link'
import DefaultErrorPage from 'next/error'
import withSession from '../../lib/session'
import useUser from '../../lib/useUser'
import DashboardLayout from '../../components/DashboardLayout'
import DashboardNav from '../../components/DashboardNav'
import styles from '../../styles/aces.module.css'

const Projects = ({ projects }) => {
  const { user } = useUser({ redirectTo: '/login' })

  // This includes setting the noindex header because static files
  // always return a status 200 but the rendered not found page should
  // obviously not be indexed
  if (!projects || !user || user.isLoggedIn === false) {
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
      {projects.map((project) => (
        <p>
          <Link href={`/[license]/[project]`} as={`/${project.license}/${project._id}`}>
            <a href={`/${project.license}/${project._id}`} className={styles.blue}>{project._id}</a>
          </Link>
        </p>
      ))}

      <br/>

      <pre className={styles.pre}>{JSON.stringify(projects, null, 2)}</pre>

    </DashboardLayout>
  )
}


export const getServerSideProps = withSession(async function({req, res}) {
  const user = req.session.get("user")
  if (!user || user.isLoggedIn === false) {
    return {
      props: { projects: false }
    }
  }

  const url = process.env.ACES_API_BASE_URL + "/projects"
  const rsp = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })

  const projects = await rsp.json()
  return {
    props: {projects: projects}
  }
})

export default Projects
