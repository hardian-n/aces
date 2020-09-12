import Link from 'next/link'
import DashboardHeader from 'components/heading/projects'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Contracts = ({ user, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/contracts/${user.license}`
  const { data: contracts, mutate: mutateContracts } = useSWR([url, user.token], apiFetchGet)

  if (!contracts) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {contracts.map((contract) => (
          <div key={contract._id}>
            <h3 className="font-normal">
              <Link href={`/[license]/[contractId]`} as={`/${contract.license}/${contract._id}`}>
                <a className="abc">{contract.title}</a>
              </Link>
            </h3>
            <pre>ID    : {project._id}</pre>
            <pre>Client: {project.client}</pre>
          </div>
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

export default Contracts