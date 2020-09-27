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
  const url1 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/projects`
  const { data: projects, mutate: mutateProjects } = useSWR([url1, user.token], apiFetchGet)
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}`
  const { data: license, mutate: mutateLicense } = useSWR([url2, user.token], apiFetchGet)
  const url3 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/clients`
  const { data: clients, mutate: mutateClients } = useSWR([url3, user.token], apiFetchGet)
  const url4 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users`
  const { data: users, mutate: mutateUsers } = useSWR([url4, user.token], apiFetchGet)
  const url5 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/contracts`
  const { data: contracts, mutate: mutateContracts } = useSWR([url5, user.token], apiFetchGet)

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