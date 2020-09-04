import useUser from 'lib/useUser'
import Layout from 'components/layout/dashboard'
import { useRouter } from 'next/router';
import Client from "components/Client";
import Unauthorized from 'components/unauthorized'

const UserPage = () => {
  const { user } = useUser({ redirectTo: '/login' })
  const router = useRouter()
  const { id } = router.query

  if (!user || user.isLoggedIn === false) return <Unauthorized/>

  return (
    <Layout user={user} >
      <Client user={user} id={id} />
    </Layout>
  )
}

export default UserPage
