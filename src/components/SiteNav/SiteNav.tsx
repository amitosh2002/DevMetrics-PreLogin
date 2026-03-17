import { Link, NavLink } from 'react-router-dom'
import { BrandMark } from '../Brand/BrandMark'
import styles from './SiteNav.module.scss'

export function SiteNav() {
  return (
    <header className={styles.wrap}>
      <div className={`dm-container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="DevMetrics home">
          <BrandMark />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Overview
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Privacy
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Terms
          </NavLink>
          <NavLink to="/explore-tools" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Explore tools
          </NavLink>
        </nav>

        <div className={styles.ctaRow}>
          <Link className={styles.ghostBtn} to="/post-login">
            Post-login
          </Link>
          <a className={styles.primaryBtn} href="#connect">
            Connect GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

