import React from 'react';
import styles from './SocialMediaIcon.module.scss';

const SocialMediaIcon = ({ link, children }) => {
  return (
    <a href={link}>
      <div className={styles.container}>{children}</div>
      <p className={styles.linkname}>{link}</p>
    </a>
  )
}

export default SocialMediaIcon;