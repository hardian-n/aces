import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getProject(user, id) {
  console.log("getProject(user, id")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
  const { data: project, mutate: mutateProject } = useSWR([url, user.token], apiFetchGet)
  console.log({project})
  return { project, mutateProject }
}