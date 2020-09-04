import useSWR from 'swr'
import apiFetchGet from './apiFetchGet'

export default function getLicense(user) {
  console.log("getLicense(user)")
  if (!user || user.isLoggedIn === false) return false

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  console.log(url)

  const { data: license, mutate: mutateLicense } = useSWR([url, user.token], apiFetchGet)
  console.log(license)
  return { license, mutateLicense }
}