import styles from './LegalPage.module.scss'

export function PrivacyPolicyPage() {
  return (
    <div className={styles.wrap}>
      <div className="dm-container">
        <div className={styles.head}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.meta}>Last Updated: March 2026</div>
          <p className={styles.lead}>
            Welcome to DevMetrics. Your privacy is important to us. This Privacy Policy explains how DevMetrics collects,
            uses, and protects your information when you use our services.
          </p>
        </div>

        <div className={styles.card}>
          <h2>1. Overview</h2>
          <p>
            DevMetrics is a developer analytics platform that provides engineering insights, productivity metrics, and
            automated updates using integrations with external platforms.
          </p>
          <p>DevMetrics may integrate with services such as GitHub, GitLab, Slack, and email reporting systems.</p>
        </div>

        <div className={styles.card}>
          <h2>2. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>When you sign up for DevMetrics, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Profile avatar</li>
            <li>Authentication provider information</li>
          </ul>
          <p>Authentication may occur through OAuth providers such as Google, GitHub, or GitLab.</p>

          <h3>Integration Data</h3>
          <p>When you connect DevMetrics to platforms such as GitHub or GitLab, we may access read-only data including:</p>
          <ul>
            <li>Repository metadata</li>
            <li>Commit activity</li>
            <li>Pull request activity</li>
            <li>Contributor information</li>
            <li>Issue activity</li>
            <li>Project statistics</li>
          </ul>
          <p>DevMetrics does not modify repositories or code.</p>
        </div>

        <div className={styles.card}>
          <h2>3. GitHub &amp; GitLab Access</h2>
          <p>
            DevMetrics may use official platform integrations such as a GitHub App or GitLab App. For GitHub, the app name
            used for connecting is <strong>DevMetrics-Analytics</strong>.
          </p>
          <p>These integrations currently request read-only permissions, which means DevMetrics cannot:</p>
          <ul>
            <li>Modify repositories</li>
            <li>Push code</li>
            <li>Delete repositories</li>
            <li>Change project settings</li>
          </ul>
          <p>DevMetrics can only read data required to generate analytics and reports.</p>
        </div>

        <div className={styles.card}>
          <h2>4. How We Use Your Data</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Generate developer productivity insights</li>
            <li>Track engineering metrics</li>
            <li>Produce automated reports</li>
            <li>Provide team analytics dashboards</li>
            <li>Send update notifications</li>
          </ul>
          <p>Reports may be delivered through workspace dashboards, Slack notifications, and email reports.</p>
        </div>

        <div className={styles.card}>
          <h2>5. Data Storage</h2>
          <p>DevMetrics stores limited analytics and account information in secure databases.</p>
          <p>
            Stored data may include user account information, integration metadata, aggregated analytics data, and report
            summaries.
          </p>
          <p>DevMetrics does not store repository source code.</p>
        </div>

        <div className={styles.card}>
          <h2>6. Data Sharing</h2>
          <p>DevMetrics does not sell or rent personal data to third parties.</p>
          <p>Data may only be shared in the following cases:</p>
          <ul>
            <li>To provide integrations requested by the user</li>
            <li>To comply with legal obligations</li>
            <li>To maintain service security and integrity</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>7. Security</h2>
          <p>DevMetrics uses industry standard security practices including:</p>
          <ul>
            <li>Encrypted API communication (HTTPS)</li>
            <li>Secure authentication tokens</li>
            <li>Restricted database access</li>
            <li>OAuth authentication for integrations</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>8. Data Retention</h2>
          <p>DevMetrics retains user data only as long as necessary to provide the service.</p>
          <p>Users may request deletion of their data by contacting support.</p>
        </div>

        <div className={styles.card}>
          <h2>9. Third-Party Services</h2>
          <p>DevMetrics relies on third-party services such as GitHub, GitLab, Slack, and email providers.</p>
          <p>Each of these services has its own privacy policies and data handling practices.</p>
        </div>

        <div className={styles.card}>
          <h2>10. User Control</h2>
          <p>Users may:</p>
          <ul>
            <li>Disconnect integrations at any time</li>
            <li>Delete their DevMetrics account</li>
            <li>Request removal of stored data</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>11. Updates to This Policy</h2>
          <p>This Privacy Policy may be updated from time to time.</p>
          <p>When updates occur, the Last Updated date will be revised.</p>
        </div>

        <div className={`${styles.card} ${styles.contact}`}>
          <h2>12. Contact</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact:</p>
          <p>
            <strong>DevMetrics Support</strong>
            <br />
            Email: <a href="mailto:support@devmetrics.io">support@devmetrics.io</a>
          </p>
        </div>
      </div>
    </div>
  )
}

