import { Link } from 'react-router-dom'
import styles from './PostLoginPage.module.scss'

export function PostLoginPage() {
  return (
    <div className={styles.wrap}>
      <div className="dm-container">
        <div className={styles.card}>
          <div className={styles.badge}>Post-login</div>
          <h1 className={styles.title}>
            You’re in. <span className="dm-grad-text">Next</span> is connecting your repos.
          </h1>
          <p className={styles.sub}>
            This is a placeholder page for after authentication. For now, DevMetrics connects to GitHub using read-only
            permissions via the GitHub App <strong>DevMetrics-Analytics</strong>. GitLab will be available soon.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#connect">
              Connect GitHub
            </a>
            <Link className={styles.secondary} to="/">
              Back to overview
            </Link>
          </div>

          <div className={styles.note} id="connect">
            <div className={styles.noteTitle}>Connect (UI stub)</div>
            <p className={styles.noteText}>
              When backend wiring is ready, this button will kick off the GitHub App install / OAuth flow. For now, this
              page documents that we only request <strong>read</strong> access.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

