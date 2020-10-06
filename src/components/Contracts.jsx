import Link from 'next/link'
import DashboardHeader from 'components/heading/contracts'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import FormEditContract from 'components/form/formEditContract'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Contracts = ({ user, subtitle }) => {
  const url1 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/projects`
  const { data: projects, mutate: mutateProjects } = useSWR([url1, user.token], apiFetchGet)
  const url2 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}`
  const { data: license, mutate: mutateLicense } = useSWR([url2, user.token], apiFetchGet)
  const url3 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/clients`
  const { data: clients, mutate: mutateClients } = useSWR([url3, user.token], apiFetchGet)
  const url4 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/users`
  const { data: users, mutate: mutateUsers } = useSWR([url4, user.token], apiFetchGet)
  const url5 = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/contracts`
  const { data: contracts, mutate: mutateContracts } = useSWR([url5, user.token], apiFetchGet)

  if (!contracts) return Loading()
  if (!clients) return Loading()
  if (contracts.length === '') return 'empty data'

  const submitHandler = async (values, {setSubmitting, resetForm}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/licenses/${user.license}/contracts?client=${values.client}`
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateContracts()
    trigger()
    console.log(json)
    resetForm({values:''})
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <FormEditContract 
          command={true}
          clients={clients}
          submitHandler={submitHandler} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {contracts.map((contract) => (
          <table key={contract._id}>
            <tbody>
              <tr><td colSpan='2'>
                <h3 className="font-normal">
                <Link href={`/dashboard/contracts/[id]`} as={`/dashboard/contracts/${contract._id}`}>
                  <a className="abc">{contract.title}</a>
                </Link>
                </h3>
              </td></tr>
              <tr><td>ID</td><td>: {contract._id}</td></tr>
              <tr><td>Title</td><td>: {contract.title}</td></tr>
              <tr><td>Periode</td><td>: {contract.startDate} s/d {contract.endDate}</td></tr>
              <tr><td>Terms</td><td>: {contract.terms}</td></tr>
              <tr><td>Status</td><td>: {contract.status}</td></tr>
              <tr><td>Type</td><td>: {contract.type}</td></tr>
              <tr>
                <td className="align-top">Contact</td>
                <td>
                  {contract.contact ?
                  [contract.contact].map((kontak, index) => (
                  <table key={index}><tbody>
                    <tr><td>: Nama</td><td>: {kontak.name}</td></tr>
                    <tr><td className='pl-2'>Phone</td><td>: {kontak.phone}</td></tr>
                    <tr><td className='pl-2'>Email</td><td>: {kontak.email}</td></tr>
                    </tbody></table>
                  )) : '-'
                  }
                </td></tr>
                <tr><td>Admin</td><td>: {contract.admin}</td></tr>
                <tr>
                  <td className="align-top">Pricing</td>
                  <td>
                  {contract.pricing ?
                  contract.pricing.map((pricing, index) => (
                  <table key={index}><tbody>
                    <tr><td colSpan='2' className='font-semibold'>: {pricing.name}</td></tr>
                    <tr><td className='pl-2'>Price Level 1</td><td>: {pricing.priceLevel1}</td></tr>
                    <tr><td className='pl-2'>Price Level 2</td><td>: {pricing.priceLevel2}</td></tr>
                    <tr><td className='pl-2'>Price Level 3</td><td>: {pricing.priceLevel3}</td></tr>
                  </tbody></table>
                  )) : '-'}
                  </td>
                </tr>
            </tbody>
          </table>            
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