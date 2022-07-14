import React from 'react';
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

export default MainLayout;