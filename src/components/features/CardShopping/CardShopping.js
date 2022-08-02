import React from 'react';
import Line from '../../common/Line/Line';
import { Table, Popover, OverlayTrigger } from 'react-bootstrap';
import styles from './CardShopping.module.scss';
import FoilInfo from '../../common/FoilInfo/FoilInfo';
import { calculatePrice } from '../../../utils/calculatePrice';
import { useState } from 'react';

const CardShoping = () => {
  const { data } = JSON.parse(localStorage.getItem('set'));
  const [orders, setOrders] = useState(data || []);

  let sum = 0;  
  
  const addSum = (add) => {   
    sum = sum + parseFloat(add); 
    return add;
  }

  const handleDelete = (id) => {
    const remove = orders.filter(order => order.id !== id);
    setOrders(remove);
    localStorage.removeItem('set');
    const set = {
      data: remove
    }
    localStorage.setItem('set', JSON.stringify(set));
  }

  const popover = (numer) => (
    <Popover id='popover-basic'>
      <FoilInfo id={numer} />  
    </Popover>
  )

  return(
    <div>
      <div className='header'>
        <h1>Twój koszyk</h1>
        <p>Parapety zamówione przez ciebie</p>
      </div>
      <Line title='Parapety' />
      <div className={styles.tablecontainer}>
        <Table striped>
          <thead>
            <tr>
              <th>Rodzaj</th>
              <th>Grubość</th>
              <th>Kształt</th>
              <th>Długość</th>
              <th>Szerokość</th>
              <th>Wykończenie</th>
              <th>Akcja</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => 
            <tr key={order.id}>
              <td>{order.windowSill}</td>
              <td>{order.thicknessSill} mm</td>
              <td>{order.shapeSill}</td>
              <td>{order.long} mm</td>
              <td>{order.width} mm</td>
              <td>
                <OverlayTrigger trigger={['hover', 'hover']} placement='right' overlay={popover(order.foil)}>
                  <button className={styles.button}>Show</button>
                </OverlayTrigger>
              </td>
              <td><button className={styles.button} onClick={() => handleDelete(order.id)}>Usuń</button></td>
              <td>{addSum(calculatePrice(order.price, order.long, order.width))} zł</td>
            </tr>
            )}
            <tr>
              <td colSpan={6}></td>
              <td><b>Suma</b></td>
              <td>{ sum = sum.toFixed(2) } zł</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <a href='/delivery'><button className={styles.button}>Złóż zamówienie</button></a>
        </div>
      </div>  
    </div> 
  )
}

export default CardShoping;