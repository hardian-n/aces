import Layout from 'components/layout/project'
import useUser from 'lib/useUser'
import Persona from "components/Persona"
import { useRouter } from 'next/router'
import Unauthorized from 'components/unauthorized'

const ProjectPersona = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId, username } = router.query
  const subtitle = "List of project personas"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Persona user={user} projectId={projectId} username={username} subtitle={subtitle} />
    </Layout>
  )
}

export default ProjectPersona
