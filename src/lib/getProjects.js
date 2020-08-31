//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getProjects(user) {
  console.log("getProjects(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const { data: projects, mutate: mutateProjects } = useSWR([url, user.token], apiFetchGet)
  console.log(projects)
  return { projects, mutateProjects }
}