import Link from 'next/link'
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import FormEditClient from 'components/form/FormEditClient'
import DashboardHeader from 'components/heading/clients'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Clients = ({ user, subtitle }) => {
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

  if (!clients) return Loading()
  const submitHandler = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)

    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/clients`
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateClients()
    trigger()
    console.log(json)
    resetForm({values:''})
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />

      <div className="container max-w-5xl mx-auto px-6 py-6">
        <FormEditClient command={true} submitHandler={submitHandler} />
        {clients.map((client) => (
          <div key={client._id}>
            <h3 className="font-normal">
              <Link href={`/dashboard/clients/[id]`} as={`/dashboard/clients/${client._id}`}>
                <a className="abc">{client.name}</a>
              </Link>
            </h3>
            <pre>ID    : {client._id}</pre>
            <pre>Address: {client.address}</pre>
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

export default Clients