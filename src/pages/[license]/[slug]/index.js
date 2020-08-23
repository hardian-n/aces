import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import withSession from '../../../lib/session'
import useUser from '../../../lib/useUser'
import DashboardLayout from '../../../components/DashboardLayout'
import styles from '../../../styles/aces.module.css'

// export const getStaticProps = withSession(async function({req, res}) {
// export const getInitialProps = withSession(async function({req, res}) {

export const getServerSideProps = withSession(async function({req, res}) {
  const user = req.session.get("user")
  if (!user || user.isLoggedIn === false) {
    return {
      props: { project: false }
    }
  }

  const path = req.url.substr(1).split("/")[1]
  const url = 'https://aces-api-dev.herokuapp.com/v1' + `/projects/${path}`
  const rsp = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + user.token,
    }
  })

  if (rsp.status != 200) return {
    props: { project: false }
  }

  const project = await rsp.json()
  return {
    props: { project }
  }
})

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     paths: []
//   }
// }

const Project = ({ project }) => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!project || !user || user.isLoggedIn === false) {
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
    <DashboardLayout title={project.title} user={user} blue={project.title}>
      <pre className={styles.pre}>{JSON.stringify(project, null, 2)}</pre>
    </DashboardLayout>
  )
}

export default Project
