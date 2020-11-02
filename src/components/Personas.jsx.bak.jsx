import Link from 'next/link'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import DashboardHeader from 'components/heading/personas'
import FormEditPersona from 'components/form/formEditPersona'
import { Formik, Form, Field, ErrorMessage } from 'formik'

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

  const handleToggle = async (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    alert(value)
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    alert(newChecked);
/*    if (currentIndex === -1) {
      newChecked.push(value);
      const url1 = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${value}/enable`
      const json = await fetchJson(url1, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        },
      })
      mutateProjectModules()
      trigger()
    } else {
      newChecked.splice(currentIndex, 1);
      const url1 = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${value}/disable`
      const json = await fetchJson(url1, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        },
      })
      mutateProjectModules()
      trigger()
   }
    setChecked(newChecked);
  */
  }

  if (!projectPersonas || !projectModules) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <FormEditPersona  command={'add'} submitHandler={submitHandler} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <Formik
          initialValues = {{

          }}
          enableReinitialize = {true}
        >
          <Form>
            <table><tbody>
              <tr>
                <td className="text-center align-middle">Nama</td>
                {projectModules.map((module) => (
                  module.method == "selftest" && module.enabled == true &&
                  <td key={module.ref} className="text-center px-5 bg-gray-100">{module.name}</td>
                ))}
                <td className="col-span-1"></td>
                {projectModules.map((module) => (
                  module.method == "simulation" && module.enabled == true &&
                  <td key={module.ref} className="text-center px-5 bg-blue-100">{module.name}</td>
                ))}
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
                  {projectModules.map((module) => (
                    module.method === "selftest" && module.enabled === true &&
                    <td className="text-center px-5 bg-gray-100" key={module.ref}>
                      {persona.tests.map((test) => (
                        test === module.slug &&
                        <Field 
                          key={module.slug}
                          className={checkClass}
                          component="input" 
                          type="checkbox"
                          name="opsi"
                          onClick={() => handleToggle(module.ref)}
                          checked={
                            module.enabled === true ? true : false
                          }    
                        />
                      ))}
                    </td>
                  ))}
                  <td className="col-span-1"></td>
                  {projectModules.map((module) => (
                    module.method === "simulation" && module.enabled === true &&
                    <td className="text-center px-5 bg-blue-100" key={module.ref}>
                      {persona.tests.map((test) => (
                        test === module.slug &&
                        <Field
                          key={module.slug}
                          className={checkClass}
                          component="input" 
                          type="checkbox"
                          name="opsi"
                          onClick={() => handleToggle(module.ref)}
                          checked={
                            module.enabled === true ? true : false
                          }    
                        />
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody></table>
          </Form>
        </Formik>

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