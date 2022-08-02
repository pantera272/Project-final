import React from 'react';
import Line from '../../common/Line/Line';
import { Form, Alert } from 'react-bootstrap';
import styles from './DeliveryForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../../redux/ordersReducer';
import { useNavigate } from 'react-router-dom';

const DeliveryForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [nameError, setNameError] = useState();
  const [strretError, setStreetError] = useState();
  const [cityError, setCityError] = useState();
  const [zipCodeError, setZipCodeError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    
    // errors = [name, street, city, zipcode, email, phone] => onload all have error
    const errors = [true, true, true, true, true,true];

    const nameLenght = name.length;
    if (nameLenght > 40 || nameLenght < 2 || name === ''){
      setNameError(true);
      errors[0] = true;
    } else {
      setNameError(false);
      errors[0] = false
    }

    const streetLenght = street.length;
    if (streetLenght > 20 || streetLenght < 2 || street === ''){
      setStreetError(true);
      errors[1] = true;
    } else {
      setStreetError(false);
      errors[1] = false
    }

    const cityLenght = city.length;
    if (cityLenght > 20 || cityLenght < 2 || city === ''){
      setCityError(true);
      errors[2] = true;
    } else {
      setCityError(false);
      errors[2] = false
    }

    const patternZipCode = /^[0-9]{2}-[0-9]{3}$/;
    const isValidZipCode = !zipCode.match(patternZipCode);
    if (isValidZipCode){
      setZipCodeError(true);
      errors[3] = true;
    } else {
      setZipCodeError(false);
      errors[3] = false;
    }

    const patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const isValidEmail = !email.match(patternEmail);
    if (isValidEmail){
      setEmailError(true);
      errors[4] = true;
    } else {
      setEmailError(false);
      errors[4] = false;
    }

    const patternPhone = /^[0-9\+]{8,13}$/;
    const isValidPhone = !phone.match(patternPhone);
    if (isValidPhone){
      setPhoneError(true);
      errors[5] = true;
    } else {
      setPhoneError(false);
      errors[5] = false;
    }    

    const isError = errors.indexOf(true);
    if (isError === -1){
      const elements = JSON.parse(localStorage.getItem('set'));
      const order = {
        delivry : {
          name: name,
          street: street,
          city: city,
          zipCode: zipCode,
          emai: email,
          phone: phone
        },
        orderElements: elements.data
      }
      dispatch(addOrder(order));
      localStorage.removeItem('set'); 
      navigate('/ok');
    } else {
      console.log('nie wyslij');
    }    
  }

  return (
    <div>
      <div className='header'>
        <h1>Dane adresowe</h1>
        <p>Parapety dostarczymy pod wskazany adres</p>
      </div>
      <Line title='Prosimy wprowadzić adres' />
      <div className={styles.form}>
        <Form>
          <Form.Group className='mb-3' >
            <Form.Label>Imię, Nazwisko lub nazwa firmy</Form.Label>
            <Form.Control type='text' onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Alert className={clsx({[styles.displaynone]:!nameError})} variant='danger'>Proszę uzupełnić pole!!!</Alert>
          <div className={styles.address}>
            <div>
              <Form.Group className='mb-3' >
                <Form.Label>Ulica i nr domu</Form.Label>
                <Form.Control type='text' onChange={e => setStreet(e.target.value)} />
              </Form.Group>
              <Alert className={clsx({[styles.displaynone]:!strretError})} variant='danger'>Proszę uzupełnić ulice!!!</Alert>
            </div>
            <div>
              <Form.Group className='mb-3' >
                <Form.Label>Miasto</Form.Label>
                <Form.Control type='text' onChange={e => setCity(e.target.value)} />
              </Form.Group>
              <Alert className={clsx({[styles.displaynone]:!cityError})} variant='danger'>Proszę uzupełnić miasto!!!</Alert>
            </div>
            <div>
              <Form.Group className='mb-3' >
                <Form.Label>Kod-pocztowy</Form.Label>
                <Form.Control type='text' onChange={e => setZipCode(e.target.value)} />
              </Form.Group>
              <Alert className={clsx({[styles.displaynone]:!zipCodeError})} variant='danger'>Proszę uzupełnić kod pocztowy!!!</Alert>
            </div>
          </div>
          <div className={styles.mail}>
            <div>
              <Form.Group className='mb-3' >
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='mail' onChange={e => setEmail(e.target.value)} />
              </Form.Group>
              <Alert className={clsx({[styles.displaynone]:!emailError})} variant='danger'>Proszę uzupełnić email!!!</Alert>
            </div>
            <div>
              <Form.Group className='mb-3' >
                <Form.Label>Telefon</Form.Label>
                <Form.Control type='text' onChange={e => setPhone(e.target.value)} />
              </Form.Group>
              <Alert className={clsx({[styles.displaynone]:!phoneError})} variant='danger'>Proszę uzupełnić telefon!!!</Alert>
            </div>
          </div>
        </Form>
        <button className={styles.button} onClick={() => handleSubmit()}>Złóż zamówienie</button>
      </div>
    </div>
  )
}

export default DeliveryForm;