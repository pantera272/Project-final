import React from 'react';
import { Card } from 'react-bootstrap'; 
import PropTypes from 'prop-types';

const FoilCard = ({img, title, describe, id, style, action, close, price, setprice}) => {
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={'/img/foil/' + img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {describe}
        </Card.Text>
        <button className={style} onClick={() => {action(id); close('off'); setprice(price)}}>Wybierz</button>
      </Card.Body>
    </Card>
  )
}

FoilCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  describe: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.string,
  action: PropTypes.func,
  setprice: PropTypes.func,
  close: PropTypes.func
}

export default FoilCard;

