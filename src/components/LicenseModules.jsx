import DashboardHeader from 'components/heading/license'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const LicenseModules = ({ user, subtitle }) => {
  const url6 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/modules`
  const { data: modules, mutate: mutateModules } = useSWR([url6, user.token], apiFetchGet)

  if (!modules) return Loading("Loading...")

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
      {modules.map((module) => (
          <div key={module._id}>
            <h3 className="font-normal">
              <a className="abc">{module.name}</a>
            </h3>
            <pre>ID    : {module._id}</pre>
            <pre>Version  : {module.version}</pre>
          </div>
        ))}
        <br/>
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

export default LicenseModules