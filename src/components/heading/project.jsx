import Link from 'next/link'

const DashboardHeader = ({ project, subtitle }) => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        {project && (
          <div className="absolute pt-2 z-0">
            <Link href="/dashboard/projects">
              <a className="text-xs text-indigo-700 uppercase tracking-wide hover:text-indigo-400">&lt; Projects</a>
            </Link>
          </div>
        )}
        <div className="py-12 border-b border-red-300">

          <h2 className="dashboard-heading">
            {!project && (
              <><span>ACES</span> Projects</>
            )}
            {project && project.title}
          </h2>
          <p className="text-gray-600 text-sm font-light">
            {subtitle && subtitle}
            {project && (
              <>
                Deskripsi: {project.description}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader