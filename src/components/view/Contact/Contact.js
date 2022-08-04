import React from 'react';
import Banner from '../../layout/Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <div className='header'>
        <h1>Skontaktuj się z nami.</h1>
        <p>Zrealizujemy parapety dla Ciebie.</p>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactform}>
          <ContactForm />
        </div>
        <div className={styles.contactdata}>
          <h4>Kontakt</h4>
          <p>ul. Dolna 14<br />12-345 Niewiemgdzie</p>
          <h4>NIP</h4>
          <p>1234-5678-9876-5432</p>
          <h4>Telefon</h4>
          <p>123-456-789</p>
          <h4>Email</h4>
          <p>email@parapety.pl</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;