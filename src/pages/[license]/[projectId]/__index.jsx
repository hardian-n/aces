import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import useUser from 'lib/useUser'
import getProject from 'lib/getProject'
import Layout from 'components/layout/project'
import Project from "components/Project";
import { useRouter } from 'next/router';
import apiFetchGet from 'lib/apiFetchGet'

const ProjectPage = ({ staticProject, projectId }) => {
  const { user } = useUser({ redirectTo: '/login' })
  // const router = useRouter()
  // const { data, mutate } = getProject(user, projectId)
  // const { projectId } = router.query

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
      <pre>{JSON.stringify(staticProject, null, 2)}</pre>
      <Project user={user} id={projectId} />
      <style jsx>{`
      pre {
        max-width: 40rem;
        max-height: 16rem;
        margin: 1rem auto;
        background: #f0f0f0;
        overflow: scroll;
      }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${params.license}/projects/${params.projectId}`
  const res = await fetch(url)
  const staticProject = await res.json()
  await new Promise(res => setTimeout(res, 1000))
  return { props: { staticProject, projectId: staticProject._id, license: params.license }, revalidate: 1 }
}

export async function getStaticPaths(license) {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${license}/projects`
  const res = await fetch(url)
  const projects = await res.json()
  const paths = projects.map((project) => `/projects/${project.license}/${project._id}`)
  return { paths, fallback: true }
}

export default ProjectPage
