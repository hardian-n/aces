//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getUsers(user) {
  console.log("getUsers(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/users'
  const { data: users, mutate: mutateUsers } = useSWR([url, user.token], apiFetchGet)
  console.log(users)
  return { users, mutateUsers }
}