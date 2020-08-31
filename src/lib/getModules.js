//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getModules(user) {
  console.log("getModules(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/modules'
  const { data: modules, mutate: mutateModules } = useSWR([url, user.token], apiFetchGet)
  console.log(modules)
  return { modules, mutateModules }
}