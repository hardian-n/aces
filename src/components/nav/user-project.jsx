import Link from 'next/link'

const UserNav = ({ license }) => {

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
                <svg className="bg-transparent rounded fill-current w-auto block h-8" viewBox="16 17 30 30" xmlns="http://www.w3.org/2000/svg">
                  <g><title>Latin Small Capital Letter A</title><path d="M20.219 41.762L28.102 41.762L28.102 38.844L25.402 38.844L26.375 36.109L33.07 36.109L34.008 38.844L31.16 38.844L31.16 41.762L41.781 41.762L41.781 38.844L39.656 38.844L33.789 23.074L28.102 23.074L22.234 38.844L20.219 38.844ZM29.648 26.711L29.793 26.711L32.133 33.48L27.273 33.48Z"></path></g>
                </svg>
              </a>
            </Link>
            <span className="inline-block text-red-300 mr-3">
              <svg viewBox="0 0 24 22" width="32" height="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </span>
            <div>
              <span className="font-semibold text-gray-800">PT Rajasa Jakarta</span>
            </div>
            <span className="inline-block text-red-300 mx-3">
              <svg viewBox="0 0 24 22" width="32" height="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M16.88 3.549L7.12 20.451"></path>
              </svg>
            </span>
          </div>
          <div className="flex-none">
            <div className="flex items-center justify-end">
              <a href="#" className="px-2 mr-2 hover:text-indigo-700">Contact</a>
              <a href="#" className="bg-indigo-600 border border-indigo-500 rounded py-1 px-3 text-white hover:bg-transparent hover:text-indigo-700">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNav