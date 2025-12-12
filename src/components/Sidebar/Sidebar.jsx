import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>GlobalPersona</div>

      <nav className={styles.nav}>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Dashboard</NavLink>
        <NavLink to="/campaigns" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Campaigns</NavLink>
        <NavLink to="/contacts" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Contacts</NavLink>
        <NavLink to="/settings" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Settings</NavLink>
      </nav>

      
    </aside>
  )
}
