import Link from 'next/link'
import DashboardHeader from 'components/heading/users'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Users = ({ user, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/users'
  const { data: users, mutate: mutateUsers } = useSWR([url, user.token], apiFetchGet)

  if (!users) return Loading()

  return (
    <div>
      <DashboardHeader users={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {users.map((userdata) => (
          <div key={userdata._id}>
            <h3 className="font-normal">
              <Link href={`/dashboard/users/[id]`} as={`/dashboard/users/${userdata._id}`}>
                <a className="abc">{userdata.name}</a>
              </Link>
            </h3>
            <pre>ID    : {userdata._id}</pre>
            <pre>Name  : {userdata.name}</pre>
          </div>
        ))}
      </div>
      <style jsx>{`
        div {
          margin-bottom: 6px;
        }
        h3 {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        pre {
          margin: 0;
        }
        a, a:visited {
          color: #0070f3;
          font-size: 1.125rem;
          text-decoration: none;
        }
        a:hover {
          color: #00a0ff;
        }
      `}</style>
    </div>
  )
}

export default Users