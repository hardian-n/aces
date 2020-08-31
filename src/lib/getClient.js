//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getClient(user, id) {
  console.log("getClient(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/clients/${user.license}/${id}`
  const { data: client, mutate: mutateClient } = useSWR([url, user.token], apiFetchGet)
  console.log(client)
  return { client, mutateClient }
}