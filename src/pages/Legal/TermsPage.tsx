import styles from './LegalPage.module.scss'

export function TermsPage() {
  return (
    <div className={styles.wrap}>
      <div className="dm-container">
        <div className={styles.head}>
          <h1 className={styles.title}>Terms of Service</h1>
          <div className={styles.meta}>Last Updated: March 2026</div>
          <p className={styles.lead}>
            These Terms govern your access to and use of DevMetrics. By using DevMetrics, you agree to these Terms.
          </p>
        </div>

        <div className={styles.card}>
          <h2>1. Service</h2>
          <p>
            DevMetrics is a developer analytics platform that generates engineering insights using data from connected
            integrations such as GitHub (and GitLab coming soon).
          </p>
        </div>

        <div className={styles.card}>
          <h2>2. Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and for all activities that occur
            under your account.
          </p>
        </div>

        <div className={styles.card}>
          <h2>3. Integrations &amp; Permissions</h2>
          <p>
            When you connect DevMetrics to GitHub, we use the GitHub App <strong>DevMetrics-Analytics</strong> and request
            read permissions only.
          </p>
          <p>You remain responsible for confirming and managing any permissions granted through third-party platforms.</p>
        </div>

        <div className={styles.card}>
          <h2>4. Acceptable Use</h2>
          <ul>
            <li>Do not misuse the service or attempt to access it using a method other than the interfaces provided.</li>
            <li>Do not interfere with or disrupt the integrity or performance of the service.</li>
            <li>Do not attempt to probe, scan, or test the vulnerability of DevMetrics without authorization.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>5. Data &amp; Privacy</h2>
          <p>
            Our data practices are described in the <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>

        <div className={styles.card}>
          <h2>6. Availability</h2>
          <p>
            We may update, change, suspend, or discontinue any aspect of DevMetrics at any time. We aim to keep the
            service available but do not guarantee uninterrupted access.
          </p>
        </div>

        <div className={styles.card}>
          <h2>7. Disclaimer</h2>
          <p>
            DevMetrics is provided on an “as is” and “as available” basis. To the extent permitted by law, DevMetrics
            disclaims all warranties of any kind.
          </p>
        </div>

        <div className={styles.card}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, DevMetrics will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or revenues.
          </p>
        </div>

        <div className={`${styles.card} ${styles.contact}`}>
          <h2>9. Contact</h2>
          <p>
            Questions about these Terms? Contact <a href="mailto:support@devmetrics.io">support@devmetrics.io</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

