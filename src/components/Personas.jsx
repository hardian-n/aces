import Link from 'next/link'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/personas'
import FormEditPersona from 'components/form/formEditPersona'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Personas = ({ user, projectId, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas`
  const { data: projectPersonas, mutate: mutateProjectPersonas } = useSWR([url, user.token], apiFetchGet)

  if (!projectPersonas) return Loading()

  const submitHandler = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas`
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjectPersonas()
    trigger()
    console.log(json)
    resetForm({values:''})
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {projectPersonas.map((persona) => (
          <table key={persona.ref} className="mb-8"><tbody>
            <tr><td colSpan="2">
              <h3 className="font-normal">
                <Link href={`/[license]/[projectId]/personas/[username]`} as={`/${user.license}/${projectId}/personas/${persona.username}`}>
                  <a className="abc">{persona.fullname}</a>
                </Link>
              </h3>
            </td></tr>
            <tr><td>ID</td><td>: {persona._id}</td></tr>
            <tr><td>Username</td><td>: {persona.username}</td></tr>
            <tr><td>email</td><td>: {persona.email}</td></tr>
            <tr><td className="align-top">tests</td><td>
              {persona.tests.map((test) => (
                <div>: {test}</div>
              ))}
            </td></tr>
          </tbody></table>
        ))}
      </div>
      <FormEditPersona  command={'add'} submitHandler={submitHandler} />
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