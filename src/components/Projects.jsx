import Link from 'next/link'
import DashboardHeader from 'components/heading/projects'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Projects = ({ user, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/projects'
  const { data: projects, mutate: mutateProjects } = useSWR([url, user.token], apiFetchGet)

  if (!projects) return Loading()

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {projects.map((project) => (
          <div key={project._id}>
            <h3 className="font-normal">
              <Link href={`/[license]/[projectId]`} as={`/${project.license}/${project._id}`}>
                <a className="abc">{project.title}</a>
              </Link>
            </h3>
            <pre>ID    : {project._id}</pre>
            <pre>Client: {project.client}</pre>
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

export default Projects