import useSWR, { mutate } from 'swr'

export default async function apiFetcher(...args) {
  console.log('apiFetcher()')
  const response = await fetch(...args)
  return response.json()
}