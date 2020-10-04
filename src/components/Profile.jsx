import { trigger } from 'swr'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/profile'
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

const Profile = ({ user, id, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users/me`
  const { data: profile, mutate: mutateProfile } = useSWR([url, user.token], apiFetchGet)
  const disableClass = "text-red-700"

  if (!profile) return LoadingOrNotFound("Loading...")

  const submitHandler = async (values, {setSubmitting}) => {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users/me`
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
      <DashboardHeader subtitle={subtitle}/>
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <table>
          <tbody>
          <tr><td colSpan="2"><h3>{profile.name}</h3></td></tr>
          <tr><td>ID</td><td>{profile._id}</td></tr>
          <tr><td>Name</td><td>{profile.name}</td></tr>
          <tr><td>Gender</td><td>{profile.gender}</td></tr>
          <tr><td>Phone</td><td>{profile.phone}</td></tr>
          <tr><td>Username</td><td>{profile.username}</td></tr>
          <tr><td>email</td><td>{profile.email}</td></tr>
          <tr><td>Roles</td><td>
            {profile.roles.map((role) => (
              <div>
                {role}
              </div>
            ))}
          </td></tr>
          </tbody>
        </table>
        <br />
        <FormEditUser command={true} model={profile} submitHandler={submitHandler} />
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

export default Profile