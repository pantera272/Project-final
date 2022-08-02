import React from 'react';
import { useSelector } from 'react-redux';
import { getFoilById } from '../../../redux/foilsReducer';
import { Popover } from 'react-bootstrap';

const FoilInfo = ({id}) => {
  const foil = useSelector(state => getFoilById(state, id));

  return(
    <>
      <Popover.Header as="h3">{foil.name}</Popover.Header>
      <Popover.Body>
       <img src={'/img/foil/' + foil.picture } alt={foil.picture} />
       <p>{foil.describe}</p>
    </Popover.Body>
    </>
    
  )
}
export default FoilInfo;