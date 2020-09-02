import Link from 'next/link'

export default function SiteNav() {
  return (
    <div id="site-nav" className="fixed w-full bg-white opacity-90 z-101">
      <div className="
      flex flex-row items-center
      text-sm text-gray-600 font-light
      max-w-5xl mx-auto px-6 my-4
      ">
        <div className="flex-1">
          <Link href="/">
            <a className="block w-8 mr-2 text-indigo-700">
              <svg className="bg-transparent rounded fill-current w-auto block h-8" viewBox="16 17 30 30" xmlns="http://www.w3.org/2000/svg">
                <g><title>Latin Small Capital Letter A</title><path d="M20.219 41.762L28.102 41.762L28.102 38.844L25.402 38.844L26.375 36.109L33.07 36.109L34.008 38.844L31.16 38.844L31.16 41.762L41.781 41.762L41.781 38.844L39.656 38.844L33.789 23.074L28.102 23.074L22.234 38.844L20.219 38.844ZM29.648 26.711L29.793 26.711L32.133 33.48L27.273 33.48Z"></path></g>
              </svg>
            </a>
          </Link>
        </div>
        <div className="flex-1">
          <ul className="site-nav-center flex justify-center mx-auto">
            <li className="flex mx-2">
              <Link href="/dashboard">
                <a className="hover:text-indigo-700">Solutions</a>
                </Link>
            </li>
            <li className="flex mx-2">
              <a href="#" className="hover:text-indigo-700">Resources</a>
            </li>
            <li className="flex mx-2">
              <a href="#" className="hover:text-indigo-700">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-end">
            <Link href="/contact">
              <a className="px-2 mr-2 hover:text-indigo-700">Contact</a>
            </Link>
            <Link href="/login">
              <a href="#" className="bg-indigo-500 border border-indigo-500 rounded py-1 px-3 text-white hover:bg-transparent hover:text-indigo-700">Login</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
