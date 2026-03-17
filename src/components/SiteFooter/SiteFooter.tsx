import { Link } from 'react-router-dom'
import { BrandMark } from '../Brand/BrandMark'
import styles from './SiteFooter.module.scss'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`dm-container ${styles.inner}`}>
        <div className={styles.left}>
          <BrandMark />
          <div className={styles.sub}>
            Developer analytics for teams. GitHub read-only today. GitLab coming soon.
          </div>
        </div>

        <div className={styles.links}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/explore-tools">Explore tools</Link>
          <a href="#connect">Connect</a>
        </div>

        <div className={styles.copy}>© {new Date().getFullYear()} DevMetrics</div>
      </div>
    </footer>
  )
}

