import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.header}>
      <h2>Header</h2>
      <button className={styles.btn}>click</button>
    </div>
  )
}

export default header
