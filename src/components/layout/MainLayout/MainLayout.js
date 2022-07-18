import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
 
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;