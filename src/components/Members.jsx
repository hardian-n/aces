import DashboardHeader from 'components/heading/members'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Members = ({ user, projectId, subtitle }) => {

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        MEMBERS
      </div>
    </div>
  )
}

export default Members