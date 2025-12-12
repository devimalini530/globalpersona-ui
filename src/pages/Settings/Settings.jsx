import React from 'react'
import styles from './Settings.module.css'
import Card from '../_shared/Card'

export default function Settings() {
  return (
    <div>
      <h1 className={styles.h1}>Settings</h1>

      <Card>
        <div className={styles.row}>
          <div className={styles.label}>Account</div>
          <div>Devi Malini</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Email</div>
          <div>devi@example.com</div>
        </div>
      </Card>
    </div>
  )
}
