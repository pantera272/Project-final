import React from 'react';
import styles from './HomeCard.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const HomeCard = ({ title, describe, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {children}
      </div>
      <h2>{title}</h2>
      <p>{describe}</p>
      <div className={styles.button}>
        <Button name='View more' />
      </div>
    </div>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string,
  describe: PropTypes.string,
  children: PropTypes.node
}

export default HomeCard;