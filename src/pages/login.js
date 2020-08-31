import { useState } from 'react'
import useUser from '../lib/useUser'
import Form from '../components/Form'
import fetchJson from '../lib/fetchJson'
import SiteLayout from '../components/SiteLayout'

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
    <SiteLayout title="Aces Login" black="Aces" blue="Login">
      <div className="login">
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </SiteLayout>
  )
}

export default Login
