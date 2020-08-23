import Link from 'next/link'
import styles from '../styles/aces.module.css'

export default function SiteNav() {
  return (
    <div>
    <Link href="/"><a className={styles.webmenu}>Home</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/about"><a className={styles.webmenu}>About</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/haw"><a className={styles.webmenu}>How It Works</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/pricing"><a className={styles.webmenu}>Pricing</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/docs"><a className={styles.webmenu}>Docs</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/guide"><a className={styles.webmenu}>Guides</a></Link> &nbsp;|&nbsp;&nbsp;
      <Link href="/login"><a className={styles.webmenu}>Login</a></Link>
      <br/><br/><br/>
    </div>
  )
}