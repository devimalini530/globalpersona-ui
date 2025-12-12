import React from 'react'
import styles from './Contacts.module.css'
import Card from '../_shared/Card'
import { contacts } from '../../data/mock'

export default function Contacts() {
  return (
    <div>
      <h1 className={styles.h1}>Contacts</h1>
      <Card>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
