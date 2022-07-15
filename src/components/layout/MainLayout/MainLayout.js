import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
 
  return (
    <div className={styles.container}>
      <NavBar />
      <Banner />
      <p>children</p>
      {children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;