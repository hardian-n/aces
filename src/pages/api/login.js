import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
  const { formBody } = await req.body
  const url = process.env.ACES_API_BASE_URL + '/token'
  console.log("/api/login")
  console.log(url)

  try {
    const response = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })

    console.log(JSON.stringify(response))

    const token = response.access_token
    const userData = response.user
    const user = {
      isLoggedIn: true,
      id: userData.id,
      license: userData.license,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      licenseOwner: userData.licenseOwner,
      verified: userData.verified,
      disabled: userData.disabled,
      userRoles: userData.userRoles,
      token: token,
    }
    req.session.set('user', user)
    req.session.set('token', token)
    await req.session.save()
    res.json(user)
  } catch (error) {
    const { response: fetchResponse } = error
    // res.status(fetchResponse?.status || 500).json(error.data)
    res.status(404).json({ message: "Couldn't find user" })
  }
})
