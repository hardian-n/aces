import Link from 'next/link'
import DashboardHeader from 'components/heading/modules'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Modules = ({ user, projectId, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules`
  const { data: projectModules, mutate: mutateProjectModules } = useSWR([url, user.token], apiFetchGet)

  if (!projectModules) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        
        {projectModules.map((module) => (
          <table key={module.ref} className="mb-8"><tbody>
            <tr><td colSpan="2">
              <h3 className="font-normal">
                <Link href={`/[license]/[projectId]/modules/[ref]`} as={`/${user.license}/${projectId}/modules/${module.ref}`}>
                  <a className="abc">{module.name}</a>
                </Link>
              </h3>
            </td></tr>
            <tr><td>Ref</td><td>: {module.ref}</td></tr>
            <tr><td>Slug</td><td>: {module.slug}</td></tr>
            <tr><td>Type</td><td>: {module.type}</td></tr>
            <tr><td>Version</td><td>: {module.version}</td></tr>
            <tr><td>Method</td><td>: {module.method}</td></tr>
            <tr><td>items</td><td>: {module.items}</td></tr>
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

export default Modules