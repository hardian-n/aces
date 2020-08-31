import Link from 'next/link'
import getContracts from "../lib/getContracts";

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Contracts = ({ user }) => {
  const { contracts } = getContracts(user)

  if (!contracts) return Loading()

  return (
    <div>
      {contracts.map((contract) => (
        <div key={contract._id}>
          <h3 className="font-normal">
            <Link href={`/dashboard/contracts/[id]`} as={`/dashboard/contracts/${contract._id}`}>
              <a className="abc">{contract.title}</a>
            </Link>
          </h3>
          <pre>ID   : {contract._id}</pre>
          <pre>PIC  : {contract.managedBy}</pre>
        </div>
      ))}
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