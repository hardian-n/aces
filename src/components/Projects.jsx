import Link from 'next/link'
import DashboardHeader from 'components/heading/projects'
import FormEditProject from "components/form/formEditProject";
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Projects = ({ user, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const { data: projects, mutate: mutateProjects } = useSWR([url, user.token], apiFetchGet)
  const url3 = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}`
  const { data: clients, mutate: mutateClients } = useSWR([url3, user.token], apiFetchGet)
  const url5 = process.env.NEXT_PUBLIC_BASE_API_URL + `/contracts/${user.license}`
  const { data: contracts, mutate: mutateContracts } = useSWR([url5, user.token], apiFetchGet)

  if (!projects) return Loading()

  const submitHandler = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects?client=${values.clients}&contract=${values.contracts}`
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjects()
    trigger()
    console.log(json)
    resetForm({values:''})
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {!clients && !contracts ?
        'loading' :
        <FormEditProject command={true} clients={clients} contracts={contracts} submitHandler={submitHandler} /> }
        {projects.map((project) => (
          <div key={project._id}>
            <h3 className="font-normal">
              <Link href={`/[license]/[projectId]`} as={`/${project.license}/${project._id}`}>
                <a className="abc">{project.title}</a>
              </Link>
            </h3>
            <pre>ID    : {project._id}</pre>
            <pre>Client: {project.client}</pre>
          </div>
        ))}
      </div>

      <style jsx>{`
        div {
          margin-bottom: 6px;
        }
        h3 {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        pre {
          margin: 0;
        }
        a, a:visited {
          color: #0070f3;
          font-size: 1.125rem;
          text-decoration: none;
        }
        a:hover {
          color: #00a0ff;
        }
      `}</style>
    </div>
  )
}

export default Projects