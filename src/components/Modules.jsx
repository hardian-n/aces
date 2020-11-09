import Link from 'next/link'
import DashboardHeader from 'components/heading/modules'
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import fetchJson from 'lib/fetchJson'
import { isDuration } from 'moment'
import FormSetModule from 'components/form/formSetModules'

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

  const submitSetTest = async (values) => {
    if(values.enabled === 'false')
    {
      const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${values.project}/modules/${values.ref}/enable`
      const json = await fetchJson(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        },
      })
    } else {
      const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${values.project}/modules/${values.ref}/disable`
      const json = await fetchJson(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + user.token,
        },
      })
    }
    mutateProjectModules()
    trigger()
  }

  if (!projectModules) return Loading()
  
  return (
    <div>
      <DashboardHeader user={user} projectId={projectId} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <table><tbody>
          <tr>
            <td className="text-center">Nama Modul</td>
            <td className="text-center px-5 w-32">Status</td>
            <td className="text-center px-5 w-32">Enabled / Disabled</td>
          </tr>
          {projectModules.map((module, index) => (
            <tr key={module.ref}>
              <td>
                <Link href={`/[license]/[projectId]/modules/[refModule]`} as={`/${user.license}/${projectId}/modules/${module.ref}`}>
                  <a className="abc">{module.name}</a>
                </Link>
              </td>
              <FormSetModule projectId={projectId} module={module} submitSetTest={submitSetTest} />
            </tr>
          ))}
        </tbody></table>
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