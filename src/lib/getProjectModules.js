//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getProjectModules(user) {
  console.log("getProjectModules(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projectModules'
  const { data: projectModules, mutate: mutateProjectModules } = useSWR([url, user.token], apiFetchGet)
  console.log(projectModules)
  return { projectModules, mutateProjectModules }
}