import Link from 'next/link'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/personas'
import FormEditPersona from 'components/form/formEditPersona'
import FormEditSetTest from 'components/form/formEditSetTest'
import FormEditSetSimulations from 'components/form/formEditSetSimulations'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Personas = ({ user, projectId, username, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas/${username}`
  const { data: projectPersona, mutate: mutateProjectPersona } = useSWR([url, user.token], apiFetchGet)
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules`
  const { data: projectModules, mutate: mutateProjectModules } = useSWR([url2, user.token], apiFetchGet)

  if (!projectPersona || !projectModules) return Loading()

  const submitHandler = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas/${username}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjectPersona()
    trigger()
    console.log(json)
    resetForm({values:''})
  }
  const submitSetTest = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas/${username}/set-tests`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjectPersona()
    trigger()
    console.log(json)
    resetForm({values:''})
  }
  const submitSetSimulations = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas/${username}/set-tests`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjectPersona()
    trigger()
    console.log(json)
    resetForm({values:''})
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} user={user} projectId={projectId} username={username}/>
      <div className="container max-w-5xl mx-auto px-6 py-6">
          <table key={projectPersona.ref} className="mb-8"><tbody>
            <tr><td colSpan="2">
              <h3 className="font-normal">
                <a className="abc">{projectPersona.fullname}</a>
              </h3>
            </td></tr>
            <tr><td>ID</td><td>: {projectPersona._id}</td></tr>
            <tr><td>Username</td><td>: {projectPersona.username}</td></tr>
            <tr><td>email</td><td>: {projectPersona.email}</td></tr>
            <tr><td className="align-top">tests</td><td>
              {projectPersona.tests.map((test, index) => (
                <div key={index}>: {test}</div>
              ))}
            </td></tr>
          </tbody></table>
      </div>
      <FormEditPersona command={'edit'} model={projectPersona} submitHandler={submitHandler} />
      <FormEditSetTest command={'edit'} model={projectPersona} modules={projectModules} submitSetTest={submitSetTest} />
      <FormEditSetSimulations command={'edit'} model={projectPersona} modules={projectModules} submitSetSimulations={submitSetSimulations} />
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

export default Personas