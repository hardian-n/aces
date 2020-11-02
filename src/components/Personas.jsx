import Link from 'next/link'
import useSWR, {trigger} from 'swr'
import { useState } from 'react'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/personas'
import FormEditPersona from 'components/form/formEditPersona'
import FormEditModulePersona from 'components/form/formEditModulePersona'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'

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
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules`
  const { data: projectModules, mutate: mutateProjectModules } = useSWR([url2, user.token], apiFetchGet)
  const checkClass = "text-gray-700 text-left pr-2"

  const [checked, setChecked] = React.useState([]);
  const [myChecked, setMyChecked] = useState([]);
  const [kirim, setkirim] = useState([]);
  
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

  const submitSetTest = async (values, category) => {

    if (values.modulname.includes(category))
    {
      const idx = values.modulname.indexOf(category);
      values.modulname.splice(idx, 1);
    } else {
      values.modulname.push(category);
    }
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/personas/${values.username}/set-tests`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values.modulname),
    })
    mutateProjectPersonas()
    trigger()
    console.log(json)
/*
    console.log(json)
    resetForm({values:''})
*/
  }

  if (!projectPersonas || !projectModules) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <FormEditPersona  command={'add'} submitHandler={submitHandler} />
      <div className="container max-w-5xl mx-auto px-6 py-6">

        <table><tbody>
          <tr>
            <td className="text-center align-middle">Nama</td>
            <td>
              <table><tbody>
                <tr>
                  {projectModules.map((module) => (
                    module.method == "selftest" && module.enabled == true &&
                    <td key={module.ref} className="text-center px-5 bg-gray-100 w-32">{module.name}</td>
                  ))}
                  <td className="col-span-1"></td>
                  {projectModules.map((module) => (
                    module.method == "simulation" && module.enabled == true &&
                    <td key={module.ref} className="text-center px-5 bg-blue-100 w-32">{module.name}</td>
                  ))}
                </tr>
              </tbody></table>
            </td>
          </tr>
          {projectPersonas.map((persona) => (
            <tr key={persona._id}>
              <td className="px-5">
                <h3 className="font-normal">
                  <Link href={`/[license]/[projectId]/personas/[username]`} as={`/${user.license}/${projectId}/personas/${persona.username}`}>
                    <a className="abc">{persona.fullname}</a>
                  </Link>
                </h3>
              </td>
              <td>
                <FormEditModulePersona persona={persona.tests} projectModules={projectModules} submitSetTest={submitSetTest} username={persona.username} />
              </td>
            </tr>
          ))}
        </tbody></table>
        <br /><hr /><br />

        {projectPersonas.map((persona) => (
          <table key={persona._id} className="mb-8"><tbody>
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
              {persona.tests.map((test, index) => (
                <div key={index}>: {test}</div>
              ))}
            </td></tr>
          </tbody></table>
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

export default Personas