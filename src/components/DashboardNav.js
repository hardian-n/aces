import Link from 'next/link'
import { useRouter } from 'next/router'
import useUser from '../lib/useUser'
import fetchJson from '../lib/fetchJson'
import styles from '../styles/aces.module.css'

export default function DashboardNav() {
  const { user, mutateUser } = useUser({ redirectTo: '/' })
  const router = useRouter()
  return (
    <div>
      <Link href="/dashboard"><a className={styles.webmenu}>Dashboard</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/dashboard/projects"><a className={styles.webmenu}>Projects</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/dashboard/clients"><a className={styles.webmenu}>Clients</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/dashboard/contracts"><a className={styles.webmenu}>Contracts</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/account"><a className={styles.webmenu}>Settings</a></Link> &nbsp;|&nbsp;&nbsp;
      <a href="/api/logout" className={styles.webmenu}
        onClick={async (e) => {
          e.preventDefault()
          await mutateUser(fetchJson('/api/logout'))
          router.push('/')
        }}
      >Logout</a>
      <br/><br/><br/>
    </div>
  )
}