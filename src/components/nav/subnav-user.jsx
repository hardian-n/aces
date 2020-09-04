import Link from 'next/link'
import { useRouter } from "next/router";

const links = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/projects', label: 'Projects' },
  { href: '/dashboard/clients', label: 'Clients' },
  { href: '/dashboard/users', label: 'Users' },
  { href: '/account', label: 'License' },
]

export default function Subnav() {
  const router = useRouter()
  const normalClass = "dashboard-menu hover:text-indigo-600"
  const activeClass = normalClass + " active"

  return (
    <div>
      <div id="dashboard-nav" className="w-full bg-gray-200">
        <div className="flex max-w-5xl px-6 mx-auto text-sm font-light text-gray-700 leading-4">
          <div className="">
            {/* logo */}
          </div>
          <div className="-ml-3">
          {links.map(({href, label}) => (
            <Link key={`${href}${label}`} href={href}>
            <a className={router.pathname == href ? activeClass : normalClass}>{label}</a>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}