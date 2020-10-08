import useUser from 'lib/useUser'
import Layout from 'components/layout/project'
import Member from "components/Member";
import { useRouter } from 'next/router';
import Unauthorized from 'components/unauthorized'

const ProjectPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { projectId, id } = router.query
  const subtitle = "Member Details"

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user}>
      <Member user={user} projectId={projectId} id={id} subtitle={subtitle} />
    </Layout>
  )
}

export default ProjectPage
