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

const Members = ({ user, projectId, subtitle }) => {
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/members`
  const { data: projectMembers, mutate: mutateprojectMembers } = useSWR([url, user.token], apiFetchGet)

  if (!projectMembers) return Loading()

  const submitHandler = async (values, {setSubmitting}) => {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/members`
    const json = await fetchJson(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateprojectMembers()
    trigger()
  }

  return (
    <div>
      <DashboardHeader client={false} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        {projectMembers.map((member) => (
          <div key={member._id}>
            <h3 className="font-normal">
              <Link href={`/[license]/[projectId]/members/[id]`} as={`/${user.license}/${projectId}/members/${member._id}`}>
                <a className="abc">{member.name}</a>
              </Link>
            </h3>
            <pre>ID       : {member._id}</pre>
            <pre>Name     : {member.name}</pre>
            <pre>Username : {member.username}</pre>
            <pre>Email    : {member.email}</pre>
            <pre>Role     : {member.role}</pre>
          </div>
        ))}
      </div>
      <FormEditMember model={projectMembers} submitHandler={submitHandler} />
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