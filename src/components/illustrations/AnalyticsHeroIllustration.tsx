import styles from './AnalyticsHeroIllustration.module.scss'

export function AnalyticsHeroIllustration() {
  return (
    <svg className={styles.svg} viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dmLine" x1="70" y1="90" x2="570" y2="330" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e8622a" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#a78bfa" stopOpacity="0.65" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="dmCard" x1="170" y1="130" x2="540" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="rgba(255,255,255,0.92)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.72)" />
        </linearGradient>
      </defs>

      <g className={styles.float}>
        <rect x="80" y="70" width="480" height="300" rx="22" fill="url(#dmCard)" stroke="rgba(15,23,42,0.12)" />

        <path
          d="M130 290 C 185 230, 235 255, 295 210 C 345 172, 395 190, 455 145 C 505 107, 530 120, 510 165"
          stroke="url(#dmLine)"
          strokeWidth="3.5"
          strokeLinecap="round"
          className={styles.draw}
        />

        <g className={styles.bars}>
          <rect x="140" y="245" width="18" height="75" rx="6" fill="rgba(232,98,42,0.50)" />
          <rect x="170" y="220" width="18" height="100" rx="6" fill="rgba(232,98,42,0.30)" />
          <rect x="200" y="260" width="18" height="60" rx="6" fill="rgba(167,139,250,0.35)" />
          <rect x="230" y="205" width="18" height="115" rx="6" fill="rgba(124,58,237,0.30)" />
        </g>

        <g className={styles.pings}>
          <circle cx="455" cy="145" r="8" fill="rgba(15,23,42,0.92)" />
          <circle cx="455" cy="145" r="18" stroke="rgba(232,98,42,0.35)" strokeWidth="2" className={styles.ping} />
          <circle cx="295" cy="210" r="7" fill="rgba(15,23,42,0.92)" />
          <circle cx="295" cy="210" r="16" stroke="rgba(167,139,250,0.30)" strokeWidth="2" className={styles.ping2} />
        </g>

        <g className={styles.labels}>
          <rect x="120" y="110" width="150" height="44" rx="14" fill="rgba(255,255,255,0.86)" stroke="rgba(15,23,42,0.12)" />
          <text x="138" y="137" fill="rgba(15,23,42,0.82)" fontSize="12" fontFamily="ui-monospace, Menlo, Monaco, Consolas">
            cycle_time ↓
          </text>

          <rect x="360" y="300" width="170" height="44" rx="14" fill="rgba(255,255,255,0.86)" stroke="rgba(15,23,42,0.12)" />
          <text x="378" y="327" fill="rgba(15,23,42,0.82)" fontSize="12" fontFamily="ui-monospace, Menlo, Monaco, Consolas">
            review_load ↑
          </text>
        </g>
      </g>
    </svg>
  )
}

