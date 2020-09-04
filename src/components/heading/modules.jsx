import Link from 'next/link'

const DashboardHeader = ({ project, subtitle }) => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="absolute pt-2 z-0">
          <Link href="/dashboard/projects">
            <a className="inline-block text-xs text-indigo-500 uppercase tracking-wide hover:text-indigo-700">
              <svg className="bg-transparent rounded fill-current w-auto inline-block float-left h-3 -ml-1 mr-2" viewBox="0 0 443.52 443.520" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                    L143.492,221.863z"/>
                </g>
              </svg>
              <span className="block float-left leading-none">Projects</span>
            </a>
          </Link>
        </div>
        <div className="py-12 border-b border-red-300">
          <h2 className="dashboard-heading">
            Project Modules
          </h2>
          <p className="text-gray-600 text-sm font-light">
            {subtitle && subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader