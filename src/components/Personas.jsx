import DashboardHeader from 'components/heading/personas'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Personas = ({ user, projectId, subtitle }) => {

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        PROJECT PERSONAS
      </div>
    </div>
  )
}

export default Personas