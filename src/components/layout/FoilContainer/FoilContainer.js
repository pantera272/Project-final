import React from 'react';
import styles from './FoilContainer.module.scss';
import FoilCard from '../../common/FoilCard/FoilCard';
import { useSelector } from 'react-redux';
import { getAllFoils } from '../../../redux/foilsReducer';
import PropTypes from 'prop-types';

const FoilContainer = ({activ, close, action}) => {

  const foils = useSelector(getAllFoils);

  let visible = [];

  if (activ === 'off'){
    visible = [styles.off];
  } else {
    visible = [styles.on];
  }

  return (
    <div className={visible}>
      <div className={styles.header}>
        <h2>Rodzaje Folii</h2>
      </div>
      <div className={styles.foilcontainer}>
        {foils.map(
          foil => <FoilCard 
            key={foil.id}
            img={foil.picture}
            title={foil.name}
            describe={foil.describe}
            id={foil.id}
            style={styles.button}
            action={action}
            close={close}
          />
        )}
      </div>
      <div><button className={styles.button} onClick={() => close('off')}>Close</button></div>
    </div>
  )
}

FoilContainer.propTypes = {
  activ: PropTypes.string,
  close: PropTypes.func,
  action: PropTypes.func
}

export default FoilContainer;