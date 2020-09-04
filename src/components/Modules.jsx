import Link from 'next/link'
import getProject from "../lib/getProject";
import getLicense from 'lib/getLicense'
import DashboardHeader from 'components/heading/project'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Modules = ({ user, projectId, subtitle }) => {
  const { project, mutateProject } = getProject(user, projectId)

  if (!project) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <pre className="pre">{JSON.stringify(project.modules, null, 2)}</pre>
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

export default Modules