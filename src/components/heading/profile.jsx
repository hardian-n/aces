import Link from 'next/link'

const DashboardHeader = ({ subtitle }) => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6">
        <div className="py-12 border-b border-red-300">
          <h2 className="dashboard-heading">
            My Profile
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