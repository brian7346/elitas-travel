import React from 'react'
import styles from './styles.module.css'

export const ContentWrapper = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>{ children }</div>
  )
}
