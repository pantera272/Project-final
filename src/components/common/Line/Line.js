import React from 'react';
import styles from './Line.module.scss';
import PropTypes from 'prop-types';

const Line = ({title}) => {
  return (
    <div className={styles.line}>
      <div className={styles.inner}>
        <h6>{title}</h6>
      </div>
    </div>
  )
}

Line.propTypes = {
  title: PropTypes.string
}

export default Line;