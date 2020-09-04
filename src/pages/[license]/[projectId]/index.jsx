import useUser from 'lib/useUser'
import Layout from 'components/layout/project'
import Project from "components/Project";
import { useRouter } from 'next/router';
import Unauthorized from 'components/unauthorized'

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId } = router.query

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Project user={user} id={projectId} />
    </Layout>
  )
}

export default ProjectPage
