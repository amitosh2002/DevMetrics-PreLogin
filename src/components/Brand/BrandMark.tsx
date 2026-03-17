import logo from '../../assets/devmetrics-logo.svg'
import styles from './BrandMark.module.scss'

export function BrandMark() {
  return (
    <div className={styles.brand}>
      <img className={styles.logo} src={logo} alt="DevMetrics" />
      <div className={styles.wordmark}>
        <span className="dm-grad-text">DevMetrics</span>
      </div>
    </div>
  )
}

