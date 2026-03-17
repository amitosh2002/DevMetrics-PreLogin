import { Link } from 'react-router-dom'
import { AnalyticsHeroIllustration } from '../../components/illustrations/AnalyticsHeroIllustration'
import styles from './LandingPage.module.scss'

const services = [
  {
    title: 'Repo analytics',
    desc: 'Track commit volume, PR throughput, cycle time, review load, and contributor health across your org.',
  },
  {
    title: 'Engineering insights',
    desc: 'Spot bottlenecks early with actionable trends and drilldowns by team, repo, and time range.',
  },
  {
    title: 'Automated reporting',
    desc: 'Share weekly and monthly summaries with your stakeholders (dashboards now; more channels soon).',
  },
]

const features = [
  { k: 'Read-only access', v: 'We use read permissions to analyze activity—no write actions.' },
  { k: 'GitHub first', v: 'Connect using the GitHub App name: DevMetrics-Analytics.' },
  { k: 'GitLab coming soon', v: 'We’re building parity for GitLab with the same privacy-first approach.' },
  { k: 'Teams & orgs', v: 'Designed for multi-repo, multi-team rollups and comparisons.' },
  { k: 'PR & issue insights', v: 'Understand review queues, merge cadence, and collaboration patterns.' },
  { k: 'Health signals', v: 'Visibility into bus factor, ownership drift, and contributor distribution.' },
]

export function LandingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`dm-container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className="dm-pill">
              <span className={styles.pulseDot} aria-hidden="true" />
              GitHub read-only analytics • GitLab coming soon
            </div>

            <h1 className={styles.h1}>
              Dev metrics that teams actually <span className="dm-grad-text">use</span>.
            </h1>
            <p className={styles.lede}>
              DevMetrics turns GitHub activity into clear engineering insights—so leaders can ship faster, and teams can
              stay healthy.
            </p>

            <div className={styles.heroCtas}>
              <a className={styles.primaryBtn} href="#connect">
                Connect GitHub
              </a>
              <Link className={styles.secondaryBtn} to="/explore-tools">
                Explore other tools
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>GitHub App</div>
                <div className={styles.metaValue}>DevMetrics-Analytics</div>
              </div>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>Permissions</div>
                <div className={styles.metaValue}>Read-only</div>
              </div>
              <div className={styles.metaCard}>
                <div className={styles.metaLabel}>GitLab</div>
                <div className={styles.metaValue}>Coming soon</div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <AnalyticsHeroIllustration />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="dm-container">
          <h2 className={styles.h2}>Services</h2>
          <p className={styles.sectionSub}>Everything you need to understand delivery, quality, and collaboration.</p>

          <div className={styles.grid3}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardTitle}>{s.title}</div>
                <div className={styles.cardDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="dm-container">
          <div className={styles.split}>
            <div>
              <h2 className={styles.h2}>Features</h2>
              <p className={styles.sectionSub}>
                Built for org-level visibility with privacy-first integration patterns.
              </p>
            </div>
            <div className={styles.featureList}>
              {features.map((f) => (
                <div key={f.k} className={styles.featureRow}>
                  <div className={styles.featureKey}>{f.k}</div>
                  <div className={styles.featureVal}>{f.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="connect">
        <div className="dm-container">
          <div className={styles.connectCard}>
            <div className={styles.connectLeft}>
              <h2 className={styles.h2}>Connect GitHub in minutes</h2>
              <p className={styles.sectionSub}>
                For now we integrate with GitHub via the GitHub App <span className="dm-grad-text">DevMetrics-Analytics</span>{' '}
                using read permissions only. GitLab will be added soon.
              </p>

              <div className={styles.connectBullets}>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  We read repo metadata, commits, PRs, issues, and contributors
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  We do not modify repositories or push code
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  You can disconnect at any time
                </div>
              </div>

              <div className={styles.connectCtas}>
                <Link to="/post-login" className={styles.primaryBtn}>
                  Continue (post-login)
                </Link>
                <Link to="/privacy" className={styles.secondaryBtn}>
                  Read privacy policy
                </Link>
              </div>
            </div>

            <div className={styles.connectRight}>
              <div className={styles.miniPanel}>
                <div className={styles.miniTitle}>Data sources</div>
                <div className={styles.miniRow}>
                  <span className={styles.badgeGood}>GitHub</span>
                  <span className={styles.miniText}>Enabled (read-only)</span>
                </div>
                <div className={styles.miniRow}>
                  <span className={styles.badgeSoon}>GitLab</span>
                  <span className={styles.miniText}>Coming soon</span>
                </div>
                <div className={styles.miniDivider} />
                <div className={styles.miniText}>
                  By continuing you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

