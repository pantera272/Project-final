import React from 'react';
import styles from './SocialMediaIcon.module.scss';
import PropTypes from 'prop-types';

const SocialMediaIcon = ({ link, children }) => {
  return (
    <a href={link}>
      <div className={styles.container}>{children}</div>
      <p className={styles.linkname}>{link}</p>
    </a>
  )
}

SocialMediaIcon.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
}

export default SocialMediaIcon;

