import React from 'react';
import styles from './styles.module.css';

export const Button = ({
    containerClassName = '',
    className = '',
    onClick = () => null,
    children = '',
    isBackButton = false
}) => {
  return (
    <div className={ containerClassName }>
        <span
          className={ `${isBackButton ? styles.backButton : styles.button} ${className}` }
          onClick={ onClick }
        >
          { children }
        </span>
    </div>
  )
}
