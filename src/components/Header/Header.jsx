import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h3 className={styles.title}>Product Admin</h3>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn} title="Notifications">🔔</button>
        <div className={styles.profile}>
          <div className={styles.avatar}>DM</div>
          <div className={styles.name}>Devi</div>
        </div>
      </div>
    </header>
  )
}
