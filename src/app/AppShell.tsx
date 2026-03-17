import { Outlet } from 'react-router-dom'
import { SiteNav } from '../components/SiteNav/SiteNav'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'
import styles from './AppShell.module.scss'

export function AppShell() {
  return (
    <div className={styles.shell}>
      <SiteNav />
      <main className={styles.main}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

