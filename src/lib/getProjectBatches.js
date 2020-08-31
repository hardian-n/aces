//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getProjectBatches(user) {
  console.log("getProjectBatches(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projectBatches'
  const { data: projectBatches, mutate: mutateProjectBatches } = useSWR([url, user.token], apiFetchGet)
  console.log(projectBatches)
  return { projectBatches, mutateProjectBatches }
}