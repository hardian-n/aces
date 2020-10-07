import Link from 'next/link'
import DashboardHeader from 'components/heading/modules'
import useSWR, {trigger} from 'swr'
import apiFetchGet from 'lib/apiFetchGet'
import fetchJson from 'lib/fetchJson'
import FormEditModule from 'components/form/formEditModule'

export const Loading = (msg = "Loading...") => {
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  )
}

const Modules = ({ user, projectId, refModule, subtitle }) => {
  const buttonClassE = "block shadow bg-green-800 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"
  const buttonClassD = "block shadow bg-red-800 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"

  const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${refModule}`
  const { data: projectModule, mutate: mutateProjectModule } = useSWR([url, user.token], apiFetchGet)

  if (!projectModule) return Loading()

  const ClickEnable = async () => {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${refModule}/enable`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
    })
    mutateProjectModule()
    trigger()
  }
  const ClickDisable = async () => {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${refModule}/disable`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
    })
    mutateProjectModule()
    trigger()
  }
  const submitHandler = async (values, {setSubmitting}) => {
    const url = process.env.NEXT_PUBLIC_BASE_API_URL + `/projects/${projectId}/modules/${refModule}`
    const json = await fetchJson(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + user.token,
      },
      body: JSON.stringify(values),
    })
    mutateProjectModule()
    trigger()
  }

  return (
    <div>
      <DashboardHeader module={module} user={user} projectId={projectId} subtitle={subtitle} />
      <div className="container max-w-5xl mx-auto px-6 py-6">
        <h3 className="font-normal">{projectModule.name}</h3>
        <pre>ID          : {projectModule.ref}</pre>
        <pre>slug        : {projectModule.slug}</pre>
        <pre>type        : {projectModule.type}</pre>
        <pre>version     : {projectModule.version}</pre>
        <pre>method      : {projectModule.method}</pre>
        <pre>title       : {projectModule.title}</pre>
        <pre>description : {projectModule.description}</pre>
        <pre>items       : {projectModule.items}</pre>
        <pre>url         : {projectModule.url}</pre>
        <pre>enabled     : {projectModule.enabled == true ? 'Module Enabled' : 'Module Disabled'}</pre>
        {projectModule.enabled == false ? <button className={buttonClassE} onClick={ClickEnable}>Aktifkan Module</button>
        : <button className={buttonClassD} onClick={ClickDisable}>Non Aktifkan Module</button> }
      </div>
      <FormEditModule model={projectModule} submitHandler={submitHandler} />
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