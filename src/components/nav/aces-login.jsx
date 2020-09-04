import Link from 'next/link'

{/* <svg className="bg-transparent rounded fill-current w-auto block h-8" viewBox="16 17 30 30" xmlns="http://www.w3.org/2000/svg">
  <g><title>Latin Small Capital Letter A</title><path d="M20.219 41.762L28.102 41.762L28.102 38.844L25.402 38.844L26.375 36.109L33.07 36.109L34.008 38.844L31.16 38.844L31.16 41.762L41.781 41.762L41.781 38.844L39.656 38.844L33.789 23.074L28.102 23.074L22.234 38.844L20.219 38.844ZM29.648 26.711L29.793 26.711L32.133 33.48L27.273 33.48Z"></path></g>
</svg> */}

export default function SiteNav() {
  return (
    <div id="site-nav" className="__fixed w-full bg-white opacity-90 z-101">
      <div className="
      flex flex-row items-center
      text-sm text-gray-600 font-light
      max-w-5xl mx-auto px-6 my-4
      ">
        <div className="flex-1">
          <Link href="/">
            <a className="block w-8 mr-2 text-indigo-700">
              <svg className="bg-transparent rounded fill-current w-auto block h-8" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(0.692243,0,0,0.692243,-61.5179,-61.4554)">
                  <path d="M196.581,96L331.873,96C345.188,96 357.111,104.244 361.812,116.701C395.05,204.774 523,543.819 523,543.819L452,543.819L320,194.043L188,543.819L117,543.819L261.916,159.819L220.665,159.819L196.581,96Z"/>
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <div className="flex-1">

        </div>
        <div className="flex-1">
          <p className="text-right text-gray-900">
            Restricted Area
          </p>
        </div>
      </div>
    </div>
  )
}
