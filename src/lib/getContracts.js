//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getContracts(user) {
  console.log("getContracts(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/contracts/${user.license}`
  const { data: contracts, mutate: mutateContracts } = useSWR([url, user.token], apiFetchGet)
  console.log(contracts)
  return { contracts, mutateContracts }
}