import styles from './ExploreToolsPage.module.scss'
import horaLogo from '../../assets/Hora-logo.svg'

export function ExploreToolsPage() {
  return (
    <div className={styles.wrap}>
      <div className="dm-container">
        <div className={styles.head}>
          <h1 className={styles.title}>
            Explore other <span className="dm-grad-text">tools</span>
          </h1>
          <p className={styles.sub}>
            DevMetrics focuses on developer analytics. If you’re looking for complementary tools, here are a few we like.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.toolCard}>
            <div className={styles.toolTop}>
              <div className={styles.toolIcon} aria-hidden="true">
                <img src={horaLogo} alt="" className={styles.toolLogo} />
              </div>
              <div className={styles.toolMeta}>
                <div className={styles.toolName}>Hora</div>
                <div className={styles.toolTag}>Hora – AI-Powered Developer Workflow Platform</div>
              </div>
              <div className={styles.soon}>Featured</div>
            </div>
            <p className={styles.toolDesc}>
              Hora is an AI-driven engineering productivity platform designed to help development teams manage projects,
              track progress, and gain real-time insights into their workflows. It integrates directly with tools like
              GitHub and uses intelligent analytics to transform raw development activity into meaningful metrics and
              actionable insights.
            </p>
            <div className={styles.toolFooter}>
              <a className={styles.ghostBtn} href="https://app-hora.netlify.app/" target="_blank" rel="noreferrer">
                Open Hora
              </a>
            </div>
          </div>

          <div className={styles.toolCardDim}>
            <div className={styles.toolTop}>
              <div className={styles.toolIconDim} aria-hidden="true">
                +
              </div>
              <div className={styles.toolMeta}>
                <div className={styles.toolName}>More soon</div>
                <div className={styles.toolTag}>Curated list</div>
              </div>
              <div className={styles.soon}>Coming soon</div>
            </div>
            <p className={styles.toolDesc}>
              We’ll add more tools here over time. If you have suggestions, send them to support@devmetrics.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

