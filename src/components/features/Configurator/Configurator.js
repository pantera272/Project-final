import React, {  useState } from 'react';
import Line from '../../common/Line/Line';
import styles from './Configurator.module.scss';
import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import FoilContainer from '../../layout/FoilContainer/FoilContainer';
import GetFoilById from '../GetFoilById/GetFoilById';
import { Alert } from 'react-bootstrap';
import { isNumber } from '../../../utils/isNumber';
import shortid from 'shortid';

const Configurator = () => {
  //order setup
  const [windowSill, setWindowSill] = useState('');
  const [thicknessSill, setThicnessSill] = useState('');
  const [shapeSill, setShapeSill] = useState('Select');
  const [img, setImg] = useState('Select');
  const [long, setLong] = useState('');
  const [width, setWidth] = useState('');
  const [foil, setFoil] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');

  const [windowSillError, setWindowSillError] = useState(false);
  const [thicknessSillError, setThicnessSillError] = useState(false);
  const [shapeSillError, setShapeSillError] = useState(false);
  const [longError, setLongError] = useState(false);
  const [widthError, setWidthError] = useState(false);
  const [foilError, setFoilError] = useState(false);
  
  //foil chosser activ (value: on/off)
  const [foilContainer, setFoilContainer] = useState('off');

  const handleWindowSill = (e, type) => {
    e.preventDefault();
    setWindowSill(type);
    setWindowSillError(false);
  }

  const handleThicknessSill = (e, type) => {
    e.preventDefault();
    setThicnessSill(type);
    setThicnessSillError(false);
  }    
  
  const handleShapeSill = (type) => {
    setShapeSill(type);
    switch (type) {
      case 'Standard':
        setImg('/img/shape/standard.jpg');
        setShapeSillError(false);
        break;
      case 'Ścięty prawy':
        setImg('/img/shape/scietyprawy.jpg');
        setShapeSillError(false);
        break;
      case 'Ścięty lewy':
        setImg('/img/shape/scietylewy.jpg');
        setShapeSillError(false);
        break;
      case 'Ścięty środkowy':
        setImg('/img/shape/scietysrodkowy.jpg');
        setShapeSillError(false);
        break;
      default:
        setShapeSill('Select');
        setLong('');
        setWidth('');
    }
  }

  const handleSizeA = (size) => {
    const number = isNumber(size);
    setLong(size);
    if (number){
      setLongError(false);
      size = size.replace(/^0+/, '');
      if (size !== ''){
        size = parseInt(size);
        setLong(size);
      }   
    } else {
      setLongError(true);
    }
  }

  const handleSizeB = (size) => {
    const number = isNumber(size);
    setWidth(size);
    if (number){
      setWidthError(false);
      size = size.replace(/^0+/, '');
      if (size !== ''){
        size = parseInt(size);
        setWidth(size);
      }   
    } else {
      setWidthError(true);
    }
  }

  const handleName = e => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    // errors = [windowSill, thicknessSill, shspeSill, long, width]
    const errors = [true, true, true, true, true, true];
    if (windowSill === ''){
      setWindowSillError(true);
      errors[0] = true;
    } else {
      setWindowSillError(false);
      errors[0] = false;
    }

    if (thicknessSill === ''){
      setThicnessSillError(true);
      errors[0] = true;
    } else {
      setThicnessSillError(false);
      errors[1] = false;
    }

    if (shapeSill === 'Select'){
      setShapeSillError(true);
      errors[2] = true;
    } else {
      setShapeSillError(false);
      errors[2] = false;
    }

    if (long === '' || typeof long !== 'number'){
      setLongError(true);
      errors[3] = true;
    } else {
      setLongError(false);
      errors[3] = false;
    }

    if (width === '' || typeof width !== 'number'){
      setWidthError(true);
      errors[4] = true;
    } else {
      setWidthError(false);
      errors[4] = false;
    }

    if (foil === ''){
      setFoilError(true);
      errors[5] = true;
    } else {
      setFoilError(false);
      errors[5] = false;
    }

    const isValid = errors.indexOf(true);
    if (isValid === -1){
      const data = {
        windowSill: windowSill,
        thicknessSill: thicknessSill,
        shapeSill: shapeSill,
        long: long,
        width: width,
        foil: foil,
        price: price,
        name: name,
        id: shortid()
      };
  
    const shoppingcard = localStorage.getItem('set');
  
      if(shoppingcard === null){
        const set = {
          data: [data]
        }
        localStorage.setItem('set', JSON.stringify(set));
      } else {
        let set = JSON.parse(localStorage.getItem('set'));
        set.data.push(data);
        localStorage.setItem('set', JSON.stringify(set));
      } 
      setWindowSill('');
      setThicnessSill('');
      setShapeSill('Select');
      setWidth('');
      setLong('');
      setFoil('')
    } else {
      console.log('nie wyslij');
    }
  }
  
  return (
    <div>
      <div className='header'>
        <h1>Konfigurator</h1>
        <p>Spersonalizuj parapet dla ciebie</p>
      </div>

      <Line title='Rodzaj parapetu' />
      <div>
        <button type='button' className={clsx(styles.button, windowSill==='Wewnętrzne' ? styles.activ :'')} onClick={e => handleWindowSill(e, 'Wewnętrzne')}>Wewnętrzne</button>
        <button type='button' className={clsx(styles.button, windowSill==='Zewnętrzne' ? styles.activ :'')} onClick={e => handleWindowSill(e, 'Zewnętrzne')}>Zewnętrzne</button>
      </div>
      <Alert className={clsx(styles.error, {[styles.displaynone]:!windowSillError})} variant='danger'>Proszę wybrać rodzaj parapetu!!!</Alert>
      
      <Line title='Grubość' />
      <div>
        <button type='button' className={clsx(styles.button, thicknessSill==='18' ? styles.activ :'')} onClick={e => handleThicknessSill(e, '18')}>18 mm</button>
        <button type='button' className={clsx(styles.button, thicknessSill==='22' ? styles.activ :'')} onClick={e => handleThicknessSill(e, '22')}>22 mm</button>
        <button type='button' className={clsx(styles.button, thicknessSill==='28' ? styles.activ :'')} onClick={e => handleThicknessSill(e, '28')}>28 mm</button>
      </div>
      <Alert className={clsx(styles.error, {[styles.displaynone]:!thicknessSillError})} variant='danger'>Proszę wybrać gruboćś parapetu!!!</Alert>

      <Line title='Kształt i rozmiar' />
      <div className={styles.twoboxcontainer}>
        <div className={styles.container}>
          <Form.Select onChange={e => handleShapeSill(e.target.value)} defaultValue='Select'>
            <option value='Select'>Select</option>
            <option value='Standard'>Standard</option>
            <option value='Ścięty lewy'>Ścięty lewy</option>
            <option value='Ścięty prawy'>Ścięty prawy</option>
            <option value='Ścięty środkowy'>Ścięty środkowy</option>
          </Form.Select>
          <Alert className={clsx(styles.error, {[styles.displaynone]:!shapeSillError})} variant='danger'>Proszę wybrać kształt parapetu!!!</Alert>
        </div>
        <div className={styles.container}>
          <img src={img} alt={shapeSill} className={clsx(shapeSill === 'Select' ? styles.displaynone : '')}/>
          <Form className={clsx(shapeSill === 'Select' ? styles.displaynone : '')}>
          <Form.Group className="mb-3">
              <Form.Label>Długość mm (A)</Form.Label>
              <Form.Control type="text" onChange={e => handleSizeA(e.target.value)} value={long}/>
            </Form.Group>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!longError})} variant='danger'>Proszę wprowadzić poprawną wartość (mm)</Alert>

            <Form.Group className="mb-3">
              <Form.Label>Szerokość mm (B)</Form.Label>
              <Form.Control type="text" onChange={e => handleSizeB(e.target.value)} value={width}/>
            </Form.Group>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!widthError})} variant='danger'>Proszę wprowadzić poprawną wartość (mm)</Alert>
          </Form>
        </div>
      </div> 

      <Line title='Wykończnie' />
      <div>
        <FoilContainer activ={foilContainer} close={setFoilContainer} action={setFoil} setprice={setPrice}/>
        {foil==='' ? '' : <GetFoilById id={foil} />}
        {foil==='' ? <button className={styles.button} onClick={() => setFoilContainer('on')}>Wybierz</button> 
        : <button className={styles.button} onClick={() => setFoilContainer('on')}>Zmień</button>}
        <Alert className={clsx(styles.error, {[styles.displaynone]:!foilError})} variant='danger'>Proszę wybrać wykończenie parapetu!!!</Alert>
      </div>
      <Line title='Nazwa' />
      <div className={styles.name}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nazwa</Form.Label>
            <Form.Control type="text" onChange={e => handleName(e)} value={name}/>
          </Form.Group>
        </Form>
      </div>
      <Line title='Dodaj do zamówienia' />     

      <div>
        <button className={styles.button} onClick={() => handleSubmit()}>Dodaj do zamówienia</button>
        <a href='/cardshopping'><button className={styles.button}>Przejdź do koszyka</button></a>
      </div>
    </div>
  )
}

export default Configurator;