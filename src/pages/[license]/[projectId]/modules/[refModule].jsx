import useUser from 'lib/useUser'
import Layout from 'components/layout/project'
import Module from "components/Module";
import { useRouter } from 'next/router';
import Unauthorized from 'components/unauthorized'

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId, refModule } = router.query
  const subtitle = "List of Modules"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Module user={user} projectId={projectId} refModule={refModule} subtitle={subtitle} />
    </Layout>
  )
}

export default ProjectPage
