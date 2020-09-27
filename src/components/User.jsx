import { trigger } from 'swr'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/users'
import FormEditUser from "components/form/formEditUser";
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const LoadingOrNotFound = (msg = "Not found") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const User = ({ user, id }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users/${id}`
  const { data: userdata, mutate: mutateUser } = useSWR([url, user.token], apiFetchGet)
  const disableClass = "text-red-700"

  if (!userdata) return LoadingOrNotFound("Loading...")
  if (userdata.detail) return LoadingOrNotFound("Tidak ketemu")

  const submitHandler = async (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users/${id}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateUser()
    trigger()
    console.log(json)
  }

  return (
    <div>
      <DashboardHeader userdata={userdata} />

      <div className="container max-w-5xl mx-auto px-6 py-6">
        <table>
          <tbody>
          <tr><td colSpan="2"><h3>{userdata.name}</h3></td></tr>
          <tr><td>ID</td><td>{userdata._id}</td></tr>
          <tr><td>Name</td><td>{userdata.name}</td></tr>
          <tr><td>Verified</td>{ userdata.verified == false ? <td>Not Verified</td> : <td>Verified</td> }</tr>
          <tr><td>Disabled</td>{ userdata.disabled == true ? <td className={disableClass}>User Disabled</td> : <td>User Enabled</td> }</tr>
          </tbody>
        </table>
        <br />
        <FormEditUser model={userdata} submitHandler={submitHandler} />
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

export default User