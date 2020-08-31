//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getClients(user) {
  console.log("getClients(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}`
  const { data: clients, mutate: mutateClients } = useSWR([url, user.token], apiFetchGet)
  console.log(clients)
  return { clients, mutateClients }
}