//
import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getProjectMembers(user) {
  console.log("getProjectMembers(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projectMembers'
  const { data: projectMembers, mutate: mutateProjectMembers } = useSWR([url, user.token], apiFetchGet)
  console.log(projectMembers)
  return { projectMembers, mutateProjectMembers }
}