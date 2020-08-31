/* apiFetchGet.js */
export default async function apiFetchGet(url, token) {
  console.log("apiFetchGet")
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    }
  })
  return response.json()
}