import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({name}) => {
  return (
    <button className={styles.button}>{name}</button>
  )  
}

Button.propTypes = {
  name: PropTypes.string
}

export default Button;