import DashboardHeader from 'components/heading/batches'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Batches = ({ user, projectId, subtitle }) => {

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        PROJECT BATCHES
      </div>
    </div>
  )
}

export default Batches