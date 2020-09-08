import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import DashboardHeader from 'components/heading/dashboard'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Dashboard = ({ user, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const { data: projects, mutate: mutateProjects } = useSWR([url, user.token], apiFetchGet)
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  const { data: license } = useSWR([url2, user?.token], apiFetchGet)
  const url3 = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}`
  const { data: clients, mutate: mutateClients } = useSWR([url3, user.token], apiFetchGet)

  console.log(license)

  if (!projects) return Loading()

  return (
    <div>
      <DashboardHeader license={license} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        PROJECTS: {projects.length}
      </div>
    </div>
  )
}

export default Dashboard