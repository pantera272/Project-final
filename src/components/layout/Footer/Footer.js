import React from 'react';
import SocialMediaIcon from '../../common/SocialMediaIcon/SocialMediaIcon';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return(
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>Parapety sp z.o.o</div>
        <div className={styles.icon}>
          <SocialMediaIcon link='facebook.com'>
            <FontAwesomeIcon icon={faFacebookF} /> 
          </SocialMediaIcon>
          <SocialMediaIcon link='google.com'>
            <FontAwesomeIcon icon={faGooglePlusG} /> 
          </SocialMediaIcon>
          <SocialMediaIcon link='google.com'>
            <FontAwesomeIcon icon={faInstagram} /> 
          </SocialMediaIcon>
        </div>
      </div>
    </div>
  )
}

export default Footer;