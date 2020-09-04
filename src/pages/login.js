import { useState } from 'react'
import useUser from '../lib/useUser'
import Form from '../components/login-form'
import fetchJson from '../lib/fetchJson'
import Layout from 'components/layout/login'

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const body = {formBody:
      'username=' + e.currentTarget.username.value + '&' +
      'password=' + e.currentTarget.password.value}

    console.log(JSON.stringify(body))

    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      )
    } catch (error) {
      console.error('An unexpected error happened:', error)
      setErrorMsg(error.data.message)
    }
  }

  return (
    <Layout title="Aces Login" black="Aces" blue="Login">
      {/* <div className="___bg-purple-500"> */}
          <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      {/* </div> */}
    </Layout>
  )
}

export default Login
