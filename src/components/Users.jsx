import DashboardHeader from 'components/heading/users'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Users = ({ user, subtitle }) => {
  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        LICENSE USERS
      </div>
    </div>
  )
}

export default Users