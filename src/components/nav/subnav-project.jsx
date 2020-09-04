import Link from 'next/link'
import { useRouter } from "next/router";

const links = [
  { href: '', label: 'Overview' },
  { href: '/modules', label: 'Modules' },
  { href: '/members', label: 'Members' },
  { href: '/personas', label: 'Personas' },
  { href: '/batches', label: 'Batches' },
  // { href: '/settings', label: 'Settings' },
]

export default function Subnav() {
  const router = useRouter()
  const { license, projectId } = router.query
  const prefix = `/${license}/${projectId}`
  const normalClass = "dashboard-menu hover:text-indigo-600"
  const activeClass = normalClass + " active"

  return (
    <div>
      <div id="dashboard-nav" className="w-full bg-gray-200 z-101">
        <div className="flex max-w-5xl px-6 mx-auto text-sm font-light text-gray-700 leading-4">
          <div className="">
            {/* logo */}
          </div>
          <div className="-ml-3">
          {links.map(({href, label}) => (
            <Link key={`${href}${label}`} href={`/[license]/[projectId]${href}`} as={`${prefix}${href}`}>
              <a className={router.asPath == prefix + href ? activeClass : normalClass}>{label}</a>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}