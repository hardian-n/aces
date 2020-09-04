import Link from 'next/link'
import { useRouter } from 'next/router'
import fetchJson from 'lib/fetchJson'
import useUser from 'lib/useUser'
import useSWR from 'swr'
import apiFetchGet from 'lib/apiFetchGet'


const UserNav = () => {
  const router = useRouter()
  const { user, mutateUser } = useUser({ redirectTo: '/login' })
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + '/licenses'
  const { data: license } = useSWR([url, user?.token], apiFetchGet)

  return (
    <div>
      <div id="user-nav" className="w-full bg-white opacity-90">
        <div className="
        flex flex-row items-center
        text-sm text-gray-600 font-light
        max-w-5xl mx-auto px-6 my-4
        ">
          <div className="flex flex-1 items-center">
            <Link href="/dashboard">
              <a className="inline-block mr-2 text-indigo-700">
                <svg className="bg-transparent rounded fill-current w-auto block h-8" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                  <g transform="matrix(0.692243,0,0,0.692243,-61.5179,-61.4554)">
                    <path d="M196.581,96L331.873,96C345.188,96 357.111,104.244 361.812,116.701C395.05,204.774 523,543.819 523,543.819L452,543.819L320,194.043L188,543.819L117,543.819L261.916,159.819L220.665,159.819L196.581,96Z"/>
                  </g>
                </svg>
              </a>
            </Link>
            <span className="inline-block text-red-300 mr-3">
              <svg viewBox="0 0 24 22" width="32" height="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </span>
            <div>
              <span className="font-semibold text-gray-800">{license?.slug.toUpperCase()}</span>
            </div>
          </div>
          <div className="flex-none">
            <div className="flex items-center justify-end">
              <a href="#" className="px-2 mr-2 hover:text-indigo-700">Contact</a>
              <Link href="/api/logout">
                <a href="/api/logout" onClick={async (e) => {
                    e.preventDefault()
                    await mutateUser(fetchJson('/api/logout'))
                    router.push('/login')
                  }} className="bg-indigo-600 border border-indigo-500 rounded py-1 px-3 text-white hover:bg-transparent hover:text-indigo-700">Logout</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNav