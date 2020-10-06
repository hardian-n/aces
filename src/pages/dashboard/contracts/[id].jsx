import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import { useRouter } from 'next/router';
import Contract from "components/Contract";
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { id } = router.query

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user} >
      <Contract user={user} id={id} />
    </Layout>
  )
}

export default UserPage
