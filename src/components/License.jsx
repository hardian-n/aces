import DashboardHeader from 'components/heading/license'
import FormEditLicense from "components/form/formEditLicense";
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

const License = ({ user, subtitle }) => {
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
  const url6 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/modules`
  const { data: modules, mutate: mutateModules } = useSWR([url6, user.token], apiFetchGet)

  if (!license) return Loading("Loading...")
  if (!modules) return Loading("Loading...")

  const submitHandler = async (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateLicense()
    trigger()
    console.log(json)
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <FormEditLicense model={license} submitHandler={submitHandler} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <table>
          <tbody>
          <tr><td colSpan="2"><h3 className="font-semibold">{license.licenseName}</h3></td></tr>
          <tr><td>ID</td><td>{license._id}</td></tr>
          <tr><td>Slug</td><td>{license.slug}</td></tr>
          <tr><td>Type</td><td>{license.type}</td></tr>
          <tr><td>Contact Name</td><td>{license.contactName}</td></tr>
          <tr><td>Contact Email</td><td>{license.contactEmail}</td></tr>
          <tr><td>Published By</td><td>{license.publishedBy}</td></tr>
          <tr><td>Published Date</td><td>{license.publishDate}</td></tr>
          <tr><td>Expired Date</td><td>{license.expiryDate}</td></tr>
          <tr><td>Available Modules</td><td><table><tbody>
          {!modules ?
          'loading' :
            <>
            {modules.map((module) => (
              <tr key={module._id}><td>
                <h3 className="font-semibold">
                  <a className="abc">{module.title ? module.title : module.name}</a>
                </h3>
                <pre>ID    : {module._id}</pre>
                <pre>Version: {module.version}</pre>
              </td></tr>
            ))}
            </>
          }
          </tbody></table></td></tr>
          </tbody>
        </table>
        <br/>
      </div>

      <style jsx>{`
        table {
          border-collapse: collapse;
        }
        h3 {
          margin-bottom: .25rem;
        }
        td {
          padding: 0.25rem 0 0.35rem;
          border-bottom: 1px solid #ddd;
        }
        td:first-child {
          padding-right: 1rem;
        }
      `}</style>
    </div>
  )
}

export default License