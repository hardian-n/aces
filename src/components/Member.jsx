import Link from 'next/link'
import DashboardHeader from 'components/heading/members'
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import FormEditMember from 'components/form/formEditMember'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Members = ({ user, projectId, id, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/members/${id}`
  const { data: projectMember, mutate: mutateprojectMember } = useSWR([url, user.token], apiFetchGet)

  if (!projectMember) return Loading()

  return (
    <div>
      <DashboardHeader user={user} projectId={projectId} client={false} id={id} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
            <h3 className="font-normal">
              <a className="abc">{projectMember.name}</a>
            </h3>
            <pre>ID       : {projectMember._id}</pre>
            <pre>Name     : {projectMember.name}</pre>
            <pre>Username : {projectMember.username}</pre>
            <pre>Email    : {projectMember.email}</pre>
            <pre>Role     : {projectMember.role}</pre>
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

export default Members