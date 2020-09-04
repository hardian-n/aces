import Link from 'next/link'
import getClients from "lib/getClients";
import DashboardHeader from 'components/heading/client'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Clients = ({ user, subtitle }) => {
  const { clients } = getClients(user)

  if (!clients) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />

      <div className="container max-w-5xl mx-auto px-6 py-6">
      {clients.map((client) => (
        <div key={client._id}>
          <h3 className="font-normal">
            <Link href={`/dashboard/clients/[id]`} as={`/dashboard/clients/${client._id}`}>
              <a className="abc">{client.name}</a>
            </Link>
          </h3>
          <pre>ID    : {client._id}</pre>
          <pre>Address: {client.address}</pre>
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

export default Clients