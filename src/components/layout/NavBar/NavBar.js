import React from 'react';
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src='/img/logo.jpg' alt='Logo' />
      </div>
      <div>
        <ul className={styles.menu}>
          <li><a href='/home'>Home</a></li>
          <li><a href='/contact'>Kontakt</a></li>
          <li><a href='/configurator'>Konfigurator</a></li>
          <li>
            <a href='/cardshopping'><FontAwesomeIcon icon={faBasketShopping} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;