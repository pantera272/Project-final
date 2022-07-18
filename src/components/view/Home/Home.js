import { faBezierCurve, faJetFighter, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../../layout/Banner/Banner';
import HomeCard from '../../layout/HomeCard/HomeCard';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <div class='header'>
        <h1>Parapety zewnętrzne i wewnętrzne</h1>
        <p>Doskonała jakość wykonania, szybki termin realizacji.</p>
      </div>
      <div className={styles.card}>
        <HomeCard title='Jakość' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'>
          <FontAwesomeIcon icon={faThumbsUp} />
        </HomeCard>
        <HomeCard title='Szybkość' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'>
          <FontAwesomeIcon icon={faJetFighter} />
        </HomeCard>
        <HomeCard title='Precyzja' describe='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'>
          <FontAwesomeIcon icon={faBezierCurve} />
        </HomeCard>
      </div>
      <div>
        <h2>Nasze realizacje</h2>
        <div class={styles.imgcontainer}>
          <div>
            <img src='/img/foto1.jpg' alt='Foto 1' />
            <div>
              <h3>Describe</h3>
              <p>Loreim plsum sit dolor</p>
            </div>
          </div>
          <div>
            <img src='/img/foto2.jpg' alt='Foto 2' />
            <div>
              <h3>Describe</h3>
              <p>Loreim plsum sit dolor</p>
            </div>
          </div>          <div>
            <img src='/img/foto3.jpg' alt='Foto 3' />
            <div>
              <h3>Describe</h3>
              <p>Loreim plsum sit dolor</p>
            </div>
          </div>          <div>
            <img src='/img/foto4.jpg' alt='Foto 4' />
            <div>
              <h3>Describe</h3>
              <p>Loreim plsum sit dolor</p>
            </div>
          </div>          <div>
            <img src='/img/foto5.jpg' alt='Foto 5' />
            <div>
              <h3>Describe</h3>
              <p>Loreim plsum sit dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;