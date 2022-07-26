import React, { useMemo, useState } from 'react';
import Line from '../../common/Line/Line';
import styles from './Configurator.module.scss';
import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import FoilContainer from '../../layout/FoilContainer/FoilContainer';
import GetFoilById from '../GetFoilById/GetFoilById';
import { Alert } from 'react-bootstrap';
import { isNumber } from '../../../utils/isNumber';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../../redux/ordersReducer';

const Configurator = () => {
  //order setup
  const [windowSill, setWindowSill] = useState('');
  const [thicknessSill, setThicnessSill] = useState('');
  const [shapeSill, setShapeSill] = useState('Select');
  const [img, setImg] = useState('Select');
  const [long, setLong] = useState('');
  const [width, setWidth] = useState('');
  const [foil, setFoil] = useState('');
  const [name, setName] = useState('');

  const [windowSillError, setWindowSillError] = useState(false);
  const [thicknessSillError, setThicnessSillError] = useState(false);
  const [shapeSillError, setShapeSillError] = useState(false);
  const [longError, setLongError] = useState(false);
  const [longMinError, setLongMinError] = useState(false);
  const [longMaxError, setLongMaxError] = useState(false);
  const [widthError, setWidthError] = useState(false);
  const [widthMinError, setWidthMinError] = useState(false);
  const [widthMaxError, setWidthMaxError] = useState(false);
  const [foilError, setFoilError] = useState(false);
  const [errorLoad, setErrorLoad] = useState(true);

  const errors = [windowSillError, thicknessSillError, shapeSillError, longError, longMinError, longMaxError, widthError, widthMinError, widthMaxError, foilError, errorLoad];
  
  const isFoilError = useMemo(() => {
    foil === '' && errorLoad === false ? setFoilError(true) : setFoilError(false);
  }, [foil]);

  const dispatch = useDispatch();

  //foil chosser activ (value: on/off)
  const [foilContainer, setFoilContainer] = useState('off');
  
  //min and max format
  const minLong = 500;
  const maxLong = 3000;

  const minWidth = 500;
  const maxWidth = 1000;

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
        setLongError(true);
        setWidthError(true);
        break;
      case 'Ścięty prawy':
        setImg('/img/shape/scietyprawy.jpg');
        setShapeSillError(false);
        setLongError(true);
        setWidthError(true);
        break;
      case 'Ścięty lewy':
        setImg('/img/shape/scietylewy.jpg');
        setShapeSillError(false);
        setLongError(true);
        setWidthError(true);
        break;
      case 'Ścięty środkowy':
        setImg('/img/shape/scietysrodkowy.jpg');
        setShapeSillError(false);
        setLongError(true);
        setWidthError(true);
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
        size < minLong ? setLongMinError(true) : setLongMinError(false);
        size > maxLong ? setLongMaxError(true) : setLongMaxError(false);
      }   
    } else {
      setLongError(true);
      setLongMinError(false);
      setLongMinError(false)
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
        size < minWidth ? setWidthMinError(true) : setWidthMinError(false);
        size > maxWidth ? setWidthMaxError(true) : setWidthMaxError(false);
      }   
    } else {
      setWidthError(true);
      setWidthMinError(false);
      setWidthMinError(false)
    }
  }

  const handleName = e => {
    setName(e.target.value);
  }

  const handleSubmit = () => {
    var isError = errors.indexOf(true);

    if (isError === 10){
      windowSill === '' ? setWindowSillError(true) : setWindowSillError(false);
      thicknessSill === '' ? setThicnessSillError(true) : setThicnessSillError(false);
      shapeSill === 'Select' ? setShapeSillError(true) : setShapeSillError(false);

      if (shapeSillError === true){
        setLongError(false);
        setLongMaxError(false);
        setLongMinError(false);
        setWidthError(false);
        setWidthMaxError(false);
        setWidthMinError(false);
      } else {
        (long === '' || long === 0) ? setLongError(true) : setLongError(false);
        (width === '' || width === 0) ? setWidthError(true) : setWidthError(false); 
      }

      foil === '' ? setFoilError(true) : setFoilError(false);
      setErrorLoad(false);
    } 
    
    console.log(isError);

    if (isError === -1){
      const data = {
        windowSill : windowSill,
        thicknessSill : thicknessSill,
        shapeSill : shapeSill,
        long : long,
        width : width,
        foil : foil,
        name : name
      };

      setWindowSill('');
      setThicnessSill('');
      setShapeSill('Select');
      setImg('Select');
      setLong('');
      setWidth('');
      setFoil('');
      setName('');

      setWindowSillError(false);
      setThicnessSillError(false);
      setShapeSillError(false);
      setLongError(false);
      setLongMinError(false);
      setLongMaxError(false);
      setWidthError(false);
      setWidthMinError(false);
      setWidthMaxError(false);
      setFoilError(false);
      setErrorLoad(true);

      dispatch(addOrder(data));
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
        <button type='button' className={clsx(styles.button, windowSill==='wewnetrzne' ? styles.activ :'')} onClick={e => handleWindowSill(e, 'wewnetrzne')}>Wewnętrzne</button>
        <button type='button' className={clsx(styles.button, windowSill==='zewnetrzne' ? styles.activ :'')} onClick={e => handleWindowSill(e, 'zewnetrzne')}>Zewnętrzne</button>
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
          <Form.Select onChange={e => handleShapeSill(e.target.value)}>
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
            <Alert className={clsx(styles.error, {[styles.displaynone]:!longMinError})} variant='danger'>Minimalna długość parapetu to {minLong} mm</Alert>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!longMaxError})} variant='danger'>Maksymalna długość parapetu to {maxLong} mm</Alert>

            <Form.Group className="mb-3">
              <Form.Label>Szerokość mm (B)</Form.Label>
              <Form.Control type="text" onChange={e => handleSizeB(e.target.value)} value={width}/>
            </Form.Group>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!widthError})} variant='danger'>Proszę wprowadzić poprawną wartość (mm)</Alert>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!widthMinError})} variant='danger'>Minimalna szerokość parapetu to {minWidth} mm</Alert>
            <Alert className={clsx(styles.error, {[styles.displaynone]:!widthMaxError})} variant='danger'>Maksymalna szerokość parapetu to {maxWidth} mm</Alert>
          </Form>
        </div>
      </div>
      <Line title='Wykończnie' />
      <div>
        <FoilContainer activ={foilContainer} close={setFoilContainer} action={setFoil}/>
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
            <Form.Control type="text" onChange={e => handleName(e)}/>
          </Form.Group>
        </Form>
      </div>
      <Line title='Dodaj do zamówienia' />
      <div>
        <button className={styles.button} onClick={() => handleSubmit()}>Dodaj do zamówienia</button>
        <button className={styles.button}>Złóż zamówienie</button>
      </div>
    </div>
  )
}

export default Configurator;