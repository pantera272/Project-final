import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Parapety</h1>
        <p>Dla twojego domu</p>
      </div>
    </div>
  )
}

export default Banner;