import Link from 'next/link'
import getProjects from "../lib/getProjects";

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Projects = ({ user }) => {
  const { projects } = getProjects(user)

  if (!projects) return Loading()

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h3 className="font-normal">
            <Link href={`/[license]/[_project_]`} as={`/${project.license}/${project._id}`}>
              <a className="abc">{project.title}</a>
            </Link>
          </h3>
          <pre>ID    : {project._id}</pre>
          <pre>Client: {project.client}</pre>
        </div>
      ))}
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

export default Projects