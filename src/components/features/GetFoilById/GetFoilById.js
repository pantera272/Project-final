import React from 'react';
import { useSelector } from 'react-redux';
import { getFoilById } from '../../../redux/foilsReducer';
import PropTypes from 'prop-types';
import styles from './GetFoilById.module.scss'

const GetFoilById = ({id}) => {

  const { name, describe, picture } = useSelector(state => getFoilById(state, id))
  
  return (
    <div className={styles.container}>
      <div>
        <h5>{name}</h5>
        <p>{describe}</p>
      </div>
      <div>
        <img src={'/img/foil/' + picture} alt={name} />
      </div>
    </div>
  )
}

GetFoilById.propTypes = {
  id: PropTypes.string
}

export default GetFoilById;