import Link from 'next/link'
import DashboardHeader from 'components/heading/modules'
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import fetchJson from 'lib/fetchJson'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Modules = ({ user, projectId, subtitle }) => {
  const checkClass = "text-gray-700 text-left pr-2"

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules`
  const { data: projectModules, mutate: mutateProjectModules } = useSWR([url, user.token], apiFetchGet)

  const [checked, setChecked] = React.useState([]);

  const handleToggle = async (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
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
   }

  if (!projectModules) return Loading()
  
  return (
    <div>
      <DashboardHeader user={user} projectId={projectId} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <Formik
          initialValues = {{
            opsi: '-1',
          }}
          enableReinitialize = {true}
        >
        <Form>
          <table><tbody>
            <tr>
              <td className="text-center">Nama Modul</td>
              <td className="text-center">Status</td>
              <td className="text-center">Enabled / Disabled</td>
            </tr>
            {projectModules.map((module, index) => (
              <tr key={module.ref}>
                <td className="px-5">
                  <Link href={`/[license]/[projectId]/modules/[refModule]`} as={`/${user.license}/${projectId}/modules/${module.ref}`}>
                    <a className="abc">{module.name}</a>
                  </Link>
                </td>
                <td className="text-center px-5">
                  {module.enabled == true ? 
                    <><label className="text-green-800 font-semibold">Module Enabled</label></> :
                    <><label className="text-red-800 font-semibold">Module Disabled</label></>
                  }</td>
                <td className="text-center px-5">
                  <Field 
                    className={checkClass}
                    component="input" 
                    type="checkbox"
                    name={module.ref}
                    tabIndex={-1}
                    onClick={() => handleToggle(module.ref)}
                    checked={
                      module.enabled == true ? true : false
                    }    
                  />
                </td>
              </tr>
            ))}
          </tbody></table>
        </Form>
        </Formik>
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

export default Modules