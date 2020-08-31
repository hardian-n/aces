import { trigger } from 'swr'
import fetchJson from '../lib/fetchJson'
import getProject from "../lib/getProject";
import FormEditProject from "../components/FormEditProject";

export const LoadingOrNotFound = (msg = "Not found") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Project = ({ user, id }) => {
  const { project, mutateProject } = getProject(user, id)
  console.log("Init component: <Project>")

  if (!project) return LoadingOrNotFound("Loading...")
  if (project.detail) return LoadingOrNotFound("Tidak ketemu")

  const submitHandler = async (values, {setSubmitting}) => {
    console.log(JSON.stringify(values, null, 2))
    console.log(values)
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${id}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProject()
    trigger()
    console.log(json)
  }

  return (
    <div>
      {/* <pre className="pre">{JSON.stringify(project, undefined, 2)}</pre> */}
      <table>
        <tbody>
        <tr><td colSpan="2"><h3>{project.title}</h3></td></tr>
        <tr><td>ID</td><td>{project._id}</td></tr>
        <tr><td>Description</td><td>{project.description ? project.description : '-'}</td></tr>
        <tr><td>Start date</td><td>{project.startDate}</td></tr>
        <tr><td>End date</td><td>{project.endDate}</td></tr>
        <tr><td>Status</td><td>{project.status}</td></tr>
        <tr><td>Contact</td><td>{project.contact}</td></tr>
        <tr><td>Admin</td><td>{project.managedBy}</td></tr>
        </tbody>
      </table>
      <br/>
      <FormEditProject model={project} submitHandler={submitHandler} />
      <style jsx>{`
        table {
          border-collapse: collapse;
        }
        h3 {
          margin-bottom: .25rem;
        }
        td {
          padding: 0.25rem 0 0.35rem;
          border-bottom: 1px solid #ddd;
        }
        td:first-child {
          padding-right: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Project