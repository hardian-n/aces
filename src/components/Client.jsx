import { trigger } from 'swr'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/clients'
import FormEditClient from "components/form/formEditClient";
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const LoadingOrNotFound = (msg = "Not found") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Client = ({ user, id }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}/${id}`
  const { data: client, mutate: mutateClient } = useSWR([url, user.token], apiFetchGet)

  if (!client) return LoadingOrNotFound("Loading...")
  if (client.detail) return LoadingOrNotFound("Tidak ketemu")

  const submitHandler = async (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}/${id}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateClient()
    trigger()
    console.log(json)
  }

  return (
    <div>
      <DashboardHeader client={client} />

      <div className="container max-w-5xl mx-auto px-6 py-6">
        <table>
          <tbody>
          <tr><td colSpan="2"><h3>{client.name}</h3></td></tr>
          <tr><td>ID</td><td>{client._id}</td></tr>
          <tr><td>Address</td><td>{client.address}</td></tr>
          </tbody>
        </table>
        <br />
        <FormEditClient model={client} submitHandler={submitHandler} />
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

export default Client