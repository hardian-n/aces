import useUser from 'lib/useUser'
import Layout from 'components/layout/project'
import Members from "components/Members";
import { useRouter } from 'next/router';
import Unauthorized from 'components/unauthorized'

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId } = router.query
  const subtitle = "List of project members"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Members user={user} projectId={projectId} subtitle={subtitle} />
    </Layout>
  )
}

export default ProjectPage
