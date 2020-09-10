import useUser from 'lib/useUser'
import Layout from 'components/layout/user'
import { useRouter } from 'next/router';
import User from "components/User";
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { id } = router.query

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user} >
      <User user={user} id={id} />
    </Layout>
  )
}

export default UserPage
