import DashboardHeader from 'components/heading/license'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const License = ({ user, subtitle }) => {
  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        LICENSE SETTINGS
      </div>
    </div>
  )
}

export default License